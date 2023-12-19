import { FC, PropsWithChildren } from 'react';
import { Sidebar } from './sidebar';
import styles from './Layout.module.scss';
import { Toaster } from 'react-hot-toast';
import { MainProvider } from './MainProvider';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MainProvider>
      <main className={styles.layout}>
        <Sidebar />
        <section>{children}</section>
        <Toaster position='top-right' />
      </main>
    </MainProvider>
  );
};
