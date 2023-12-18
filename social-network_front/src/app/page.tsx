import ChatsList from '@/components/screens/chats/chat-list/ChatList';
import Chat from '@/components/screens/chats/chat/Chat';
import CurrentUser from '@/components/screens/chats/current-user/CurrentUser';

export default function ChatsPage() {
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

      <div>
        <Chat />
      </div>
    </div>
  );
}
