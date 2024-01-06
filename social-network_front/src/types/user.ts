export interface IUser {
  id: string;
  username: string;
  email: string;
  confirmed: boolean;
  role: string;
  avatar: string;
}

export interface UserJwt {
  user: IUser;
  jwt: string;
}
