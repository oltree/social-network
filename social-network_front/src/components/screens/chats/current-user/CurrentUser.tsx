'use client';

import { FC } from 'react';
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';

import { useAuth } from '@/hooks/useAuth';

import { useRouter } from 'next/navigation';

export const CurrentUser: FC = () => {
  const { user } = useAuth();
  const { push } = useRouter();

  const handleLogOut = () =>
    signOut({
      redirect: false,
    }).then(() => {
      window.localStorage.removeItem('token');
      push('/login');
    });

  return (
    <div className='p-layout flex items-center justify-between'>
      <div className='flex items-center'>
        <Image
          priority
          src={'/assets/images/no-avatar.png'}
          alt={user?.email || ''}
          width={50}
          height={50}
          className='mr-4'
        />

        <div className='text-sm'>
          <p>{user?.username}</p>
          <p className='opacity-30'>UI/UX Designer</p>
        </div>
      </div>

      <button
        onClick={handleLogOut}
        className='text-[#7C7275] hover:text-white transition-colors ease-linear'
      >
        <LogOut />
      </button>
    </div>
  );
};
