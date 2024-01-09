'use client';

import { ArrowRightToLine, Send } from 'lucide-react';
import { useParams } from 'next/navigation';
import { FC, useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import { $fetch } from '@/$api/api.fetch';
import { Field } from '@/components/ui/field';
import { useAuth } from '@/hooks/useAuth';
import { useReactQuerySubscription } from '@/hooks/useReactQuerySubscription';

export const MessageField: FC = () => {
  const [message, setMessage] = useState('');
  const { id } = useParams();
  const { user } = useAuth();
  const send = useReactQuerySubscription();

  const { mutate } = useMutation({
    mutationKey: ['update chat', id],
    mutationFn: () =>
      $fetch.post(
        '/messages',
        {
          data: {
            text: message,
            sender: Number(user?.id),
            chat: id,
          },
        },
        true
      ),
    onSuccess() {
      setMessage('');
      send({
        operation: 'update',
        entity: 'chat',
        id: id.toString(),
      });
    },
  });

  const onSubmit = () => {
    if (!message) {
      return;
    }

    mutate();
  };

  return (
    <div className='border-t border-border p-layout flex items-center justify-between'>
      <Field
        placeholder='Write a message...'
        Icon={ArrowRightToLine}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSubmit();
          }
        }}
        className='w-4/5'
      />
      <button
        onClick={onSubmit}
        disabled={!message}
        className='hover:text-primary transition-colors'
      >
        <Send />
      </button>
    </div>
  );
};
