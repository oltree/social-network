'use client';

import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { useAuth } from '@/hooks/useAuth';
import { IChat } from '@/types/chat';

interface ChatListItemProps {
  chat: IChat;
}

export const ChatListItem: FC<ChatListItemProps> = ({ chat }) => {
  const { user } = useAuth();

  const correspondent = chat.participants.find(
    (participant) => participant.email !== user?.email
  );
  const lastMessage = chat.messages.at(-1);
  const date = dayjs(lastMessage?.createdAt).format('HH:mm');

  return (
    <Link
      href={`/chat/${chat.id}`}
      className='p-layout flex items-center border-b border-border duration-300 ease-linear transition-colors hover:bg-border animation-slide-fade'
    >
      <Image
        src={'/assets/images/no-avatar.png'}
        alt={correspondent?.email || ''}
        width={45}
        height={45}
        className='mr-4'
      />
      <div className='text-sm w-full'>
        <div className='flex items-center justify-between'>
          <span>{correspondent?.username}</span>
          <span className='text-xs opacity-30'>{date}</span>
        </div>
        <div className='opacity-30 mt-0.5'>{lastMessage?.text}</div>
      </div>
    </Link>
  );
};
