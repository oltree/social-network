import { IUser } from './user';

export interface IMessage {
  id: string;
  text: string;
  createdAt: string;
  sender: IUser;
}

export interface IChat {
  id: string;
  messages: IMessage[];
  participants: IUser[];
}
