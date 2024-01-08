'use client';

import { $fetch } from '@/$api/api.fetch';
import { Loader } from '@/components/ui/loader/Loader';
import { useProfile } from '@/hooks/useProfile';
import { IUser } from '@/types/user';
import { useMutation, useQuery } from '@tanstack/react-query';
import cn from 'clsx';
import Image from 'next/image';
import toast from 'react-hot-toast';

export const Friends = () => {
  const { data: authUser, refetch: refetchProfile } = useProfile();

  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: () => $fetch.get<IUser[]>('/users', true),
  });

  const { mutate: addFriend } = useMutation({
    mutationKey: ['add friend'],
    mutationFn: async (friend: IUser) => {
      return $fetch
        .put(
          `/users/${authUser?.id}`,
          {
            data: {
              friends: [
                ...(authUser?.friends.map(({ id }) => id) || []),
                friend.id,
              ],
            },
          },
          true
        )
        .then(() => {
          $fetch.put(
            `/users/${friend?.id}`,
            {
              data: {
                friends: [
                  ...(friend?.friends.map(({ id }) => id) || []),
                  authUser?.id,
                ],
              },
            },
            true
          );
        });
    },
    onSuccess: () => {
      refetchProfile();
      refetch();
      toast.success('Friend add!');
    },
  });

  return (
    <div className='w-7/12'>
      <h1 className='p-layout border-r border-b border-border'>People</h1>
      {isLoading || isFetching ? (
        <div className='p-layout'>
          <Loader />
        </div>
      ) : (
        <div className='grid grid-cols-3'>
          {data?.map((user) => {
            const isFriend = authUser?.friends?.some(
              (friend) => friend.id === user.id
            );

            return (
              <div
                key={user.id}
                className={cn(
                  'text-center border border-l-0 border-t-0 border-border p-layout'
                )}
              >
                <Image
                  priority
                  width={100}
                  height={100}
                  alt={user.username}
                  src={'/assets/images/no-avatar.png'}
                  className='mx-auto'
                />
                <div className='mt-3 text-xl font-medium'>{user.username}</div>

                <button
                  className='border-b border-white transition-colors hover:border-primary hover:text-primary cursor-pointer mt-2'
                  onClick={() => addFriend(user)}
                >
                  {isFriend ? 'Remove from friends' : 'Add to friends'}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
