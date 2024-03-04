import React from 'react';
import styles from './UserProfilePage.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
export default function UserProfilePage() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link to={'/'} className={styles.logo}>
          <img className={styles.image} src={logo} alt="" />
          <strong className={styles.text}>Auditer</strong>
        </Link>
      </header>
      <main className={styles.window_wrapper}>
        <div className={styles.subscribe_wrapper}>
          <div className={styles.text}>
            Оформи подписку на 1 месяц бесплатно. <br /> И открой доступ к безграничным <br />{' '}
            возможностям, привелегиям <br /> и множеству новинок.
          </div>
        </div>
      </main>
    </div>
  );
}
