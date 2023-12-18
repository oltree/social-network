import { FC, PropsWithChildren } from 'react';
import { Sidebar } from './sidebar';
import styles from './Layout.module.scss';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className={styles.layout}>
      <Sidebar />
      <section>{children}</section>
    </main>
  );
};
