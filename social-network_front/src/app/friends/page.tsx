import { Metadata } from 'next';
import { Friends } from './Friends'

export const metadata: Metadata = {
  title: 'Social media friends',
};

export default function FriendsPage() {
  return <Friends />
}
