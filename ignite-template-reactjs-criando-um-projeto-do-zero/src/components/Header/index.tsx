import styles from './header.module.scss';

export const Header = (): JSX.Element => (
  <header className={styles.container}>
    <img src="/Logo.svg" alt="" />
  </header>
);
