'use client';

import { Field } from '@/components/ui/field';
import { useAuth } from '@/hooks/useAuth';
import { FC, useState } from 'react';
import { Search } from 'lucide-react';
import { useDebounce } from '@/hooks/useDebounce';
import { useQuery } from '@tanstack/react-query';
import { $fetch } from '@/$api/api.fetch';
import { IChat } from '@/types/chat';
import { Loader } from '@/components/ui/loader';
import { ChatListItem } from './ChatListItem';

export const ChatsList: FC = () => {
  const { user, isLoggedIn } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['chats', debouncedSearchTerm],
    queryFn: () =>
      $fetch.get<{ data: IChat[] }>(
        `/chats?sort=createdAt:desc
				&populate[messages]=*
				&populate[participants][populate][avatar]=*
				&filters[participants][email][$eq]=${user?.email}
				&filters[$or][0][participants][username][$contains]=${debouncedSearchTerm}
				&filters[$or][1][messages][text][$contains]=${debouncedSearchTerm}
				`,
        true
      ),
    enabled: isLoggedIn,
  });

  return (
    <div>
      <div className='border-t border-b border-border p-layout'>
        <Field
          placeholder='Search chats'
          Icon={Search}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        {isLoading || isFetching ? (
          <div className='p-layout'>
            <Loader />
          </div>
        ) : (
          data?.data.map((chat) => {
            return <ChatListItem key={chat.id} chat={chat} />;
          })
        )}
      </div>
    </div>
  );
};
