'use client';

import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';

import { $fetch } from '@/$api/api.fetch';
import { Loader } from '@/components/ui/loader';
import { useAuth } from '@/hooks/useAuth';
import { IChat } from '@/types/chat';

import { MessageField } from './MessageField';
import { ChatHeader } from './ChatHeader';
import { Message } from './Message';

interface ChatProps {
  id?: string;
}

export const Chat: FC<ChatProps> = ({ id }) => {
  const { user } = useAuth();

  const { data, isLoading } = useQuery({
    queryKey: ['chat', id],
    queryFn: () =>
      $fetch.get<{ data: IChat }>(
        `/chats/${id}
				?populate[messages][populate][sender][populate][avatar]=*
				&populate[participants][populate][avatar]=*`,
        true
      ),
    select: (data) => data.data,
    enabled: !!id,
  });

  const correspondent = data?.participants.find(
    (participant) => participant.email !== user?.email
  );

  return (
    <div
      className='w-8/12 border-r border-border grid h-screen'
      style={{
        gridTemplateRows: isLoading ? '1fr .089fr' : '.6fr 6fr .6fr',
      }}
    >
      {isLoading ? (
        <div className='flex items-center justify-center'>
          <Loader />
        </div>
      ) : (
        <>
          <ChatHeader correspondent={correspondent} />

          <div className='p-layout border-t border-border max-h-full overflow-auto'>
            {data?.messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}
          </div>
        </>
      )}
      <MessageField />
    </div>
  );
};
