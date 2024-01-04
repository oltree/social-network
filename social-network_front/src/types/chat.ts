import { IUser } from './user';

export interface IMessage {
  id: number;
  text: string;
  createdAt: string;
  sender: IUser;
}

export interface IChat {
  id: number;
  messages: IMessage[];
  participants: IUser[];
}
