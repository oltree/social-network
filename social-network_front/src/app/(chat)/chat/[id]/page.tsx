import type { Metadata } from 'next';

import { Chat } from '@/components/screens/chats/chat';
import { NO_INDEX_PAGE } from '@/constants/seo';

export const metadata: Metadata = {
  ...NO_INDEX_PAGE,
};

interface ChapPageProps {
  params: {
    id: string;
  };
}

export default function ChatPage({ params }: ChapPageProps) {
  return <Chat id={params.id} />;
}
