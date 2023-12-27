'use client';

import { Field } from '@/components/ui/field';
import { useAuth } from '@/hooks/useAuth';
import { FC, useState } from 'react';
import { Search } from 'lucide-react';
import { useDebounce } from '@/hooks/useDebounce';
import { useQuery } from '@tanstack/react-query';
import { $fetch } from '@/$api/api.fetch';
import { IStrapiChat, IStrapiResponse } from '@/types/chat';
import { Loader } from '@/components/ui/loader';
import { ChatListItem } from './ChatListItem';

export const ChatsList: FC = () => {
  const { user, isLoggedIn } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm);

  const { data, isLoading } = useQuery({
    queryKey: ['chats'],
    queryFn: () =>
      $fetch.get<{ data: IStrapiResponse<IStrapiChat>[] }>(
        `/chats?sort=createdAt:desc&populate[messages]=*&populate[participants]=*&filters[participants][email][$eq]=${user?.email}`,
        true
      ),
    enabled: isLoggedIn,
  });

  return (
    <div>
      <div className='border-t border-b border-border p-layout'>
        <Field placeholder='Search chats' Icon={Search} />
      </div>
      <div>
        {isLoading ? (
          <div className='p-layout'>
            <Loader />
          </div>
        ) : data?.data.length ? (
          data?.data.map(({ id, attributes: chat }) => {
            return <ChatListItem key={id} data={chat} id={id} />;
          })
        ) : (
          <p className='p-layout'>Chats not found!</p>
        )}
      </div>
    </div>
  );
};
