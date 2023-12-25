import { IUser } from './user';

export interface IMessage {
  id: number;
  text: string;
  createdAt: Date;
  sender: IUser;
}

export interface IChat {
  id: number;
  messages: IMessage[];
  participants: IUser[];
}
