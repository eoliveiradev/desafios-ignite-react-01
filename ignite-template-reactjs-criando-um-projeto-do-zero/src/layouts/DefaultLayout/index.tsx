import { ReactNode } from 'react';
import styles from './layout.module.scss';
import { Header } from '../../components/Header';

interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout = (props: DefaultLayoutProps): JSX.Element => {
  const { children } = props;

  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <Header />
        {children}
      </main>
    </div>
  );
};
