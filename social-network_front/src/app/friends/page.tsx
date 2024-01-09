import { Metadata } from 'next';

import { Friends } from '@/components/screens/friends';

export const metadata: Metadata = {
  title: 'Social media friends',
};

export default function FriendsPage() {
  return <Friends />;
}
