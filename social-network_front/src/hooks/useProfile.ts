import { useQuery } from '@tanstack/react-query';

import { $fetch } from '@/$api/api.fetch';
import { IUser } from '@/types/user';

export function useProfile() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => $fetch.get<IUser>('/users/me?populate=deep', true),
  });
}
