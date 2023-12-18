'use client';

import Image from 'next/image';
import React, { FC } from 'react';
import { Sun } from 'lucide-react';
import styles from './Sidebar.module.scss';
import Link from 'next/link';
import cn from 'clsx';
import { MENU } from './sidebar.config';
import { usePathname } from 'next/navigation';

export const Sidebar: FC = () => {
  const currentPathName = usePathname();

  return (
    <aside className={styles.sidebar}>
      <Image
        priority
        src='/assets/icons/logo.svg'
        alt='logo'
        width={45}
        height={45}
      />

      <div>
        {MENU.map((item) => (
          <Link
            key={item.url}
            href={item.url}
            className={cn({
              [styles.active]: currentPathName === item.url,
            })}
          >
            <item.icon size={27} />
          </Link>
        ))}
      </div>

      <Sun size={27} />
    </aside>
  );
};
