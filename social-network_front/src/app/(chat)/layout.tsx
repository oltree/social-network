import { ChatsList } from '@/components/screens/chats/chat-list';
import { CurrentUser } from '@/components/screens/chats/current-user';
import { PropsWithChildren } from 'react';

export default function ChatLayout({ children }: PropsWithChildren) {
  return (
    <div
      className='grid h-full'
      style={{
        gridTemplateColumns: '.7fr 3fr',
      }}
    >
      <div className='border-r border-border'>
        <CurrentUser />
        <ChatsList />
      </div>
      <div>{children}</div>
    </div>
  );
}
