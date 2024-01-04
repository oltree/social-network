import { IUser } from '@/types/user';
import { Search } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';

interface ChatHeaderProps {
  correspondent?: IUser;
}

export const ChatHeader: FC<ChatHeaderProps> = ({ correspondent }) => (
  <div className='p-layout flex items-center justify-between py-[1.56rem]'>
    <div className='flex items-center'>
      <Image
        priority
        src={'/assets/images/no-avatar.png'}
        alt='correspondent'
        width={40}
        height={40}
        className='mr-4'
      />

      <div className='text-sm'>
        <div>{correspondent?.username}</div>
        <div className='opacity-30'>2 members</div>
      </div>
    </div>

    <button className='text-[#7C7275] hover:text-white transition-colors ease-linear'>
      <Search />
    </button>
  </div>
);
