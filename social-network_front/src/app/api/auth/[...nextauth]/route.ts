import NextAuth from 'next-auth/next';
import { AuthOptions, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { $fetch } from '@/$api/api.fetch';
import { UserJwt } from '@/types/user';

const nextAuthOptions: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        username: { type: 'text' },
        email: { type: 'text' },
        password: { type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        if (credentials.username) {
          try {
            const data = await $fetch.post<UserJwt>(
              `/auth/local/register`,
              credentials
            );

            return {
              id: data.user.id.toString(),
              email: data.user.email,
              avatar: data.user.avatar,
              username: data.user.username,
              jwt: data.jwt,
            } as User;
          } catch (e) {
            return Promise.reject({
              message: 'Register error, not valid data!',
            });
          }
        }

        try {
          const data = await $fetch.post<UserJwt>(`/auth/local`, {
            identifier: credentials.email,
            password: credentials.password,
          });

          return {
            id: data.user.id.toString(),
            email: data.user.email,
            avatar: data.user.avatar,
            username: data.user.username,
            jwt: data.jwt,
          } as User;
        } catch (e) {
          return Promise.reject({
            message: 'Login error, not valid data!',
          });
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      return { ...token, ...user };
    },
    session({ session, token }) {
      session.user = token as User;

      return session;
    },
  },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
