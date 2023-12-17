import {
  LucideIcon,
  MessagesSquare,
  Phone,
  Settings,
  Users2,
} from 'lucide-react';

interface IMenuItem {
  url: string;
  icon: LucideIcon;
}

export const MENU: IMenuItem[] = [
  {
    url: '/friends',
    icon: Users2,
  },
  {
    url: '/call',
    icon: Phone,
  },
  {
    url: '/',
    icon: MessagesSquare,
  },
  {
    url: '/settings',
    icon: Settings,
  },
];
