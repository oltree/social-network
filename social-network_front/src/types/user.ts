export interface IUser {
  username: string;
  email: string;
  confirmed: boolean;
  role: string;
  avatar: string; // изменить тип согласно структуре в strapi
}

export interface UserJwt {
  user: IUser;
  jwt: string;
}
