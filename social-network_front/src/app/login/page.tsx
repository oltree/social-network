import Auth from '@/components/screens/auth/Auth';
import { NO_INDEX_PAGE } from '@/constants/seo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social media login',
  ...NO_INDEX_PAGE,
};

export default function LoginPage() {
  return <Auth type='login' />;
}
