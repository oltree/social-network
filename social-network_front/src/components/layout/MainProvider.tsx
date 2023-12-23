'use client';

import { AuthProvider } from '@/providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { FC, PropsWithChildren } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export const MainProvider: FC<PropsWithChildren> = ({ children }) => (
  <SessionProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  </SessionProvider>
);
