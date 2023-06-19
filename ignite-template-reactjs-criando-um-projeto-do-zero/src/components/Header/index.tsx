import Link from 'next/dist/client/link';
import styles from './header.module.scss';

export const Header = (): JSX.Element => (
  <header className={styles.container}>
    <Link href="/">
      <a>
        <img src="/Logo.svg" alt="" />
      </a>
    </Link>
  </header>
);
