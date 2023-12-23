import { Auth } from '@/components/screens/auth/Auth';
import { NO_INDEX_PAGE } from '@/constants/seo';
import { AuthEnum } from '@/types/auth';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social media register',
  ...NO_INDEX_PAGE,
};

export default function RegisterPage() {
  return <Auth type={AuthEnum.REGISTER} />;
}
