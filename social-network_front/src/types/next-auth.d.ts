import 'next-auth';

declare module 'next-auth' {
  interface User {
    email?: string;
    username?: string;
    avatar?: string;
    id?: number;
    jwt?: string;
    friends?: User[];
  }

  interface Session {
    user?: User;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    token: string;
  }
}
