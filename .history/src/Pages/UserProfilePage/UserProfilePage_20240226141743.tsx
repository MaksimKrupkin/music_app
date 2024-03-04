import React from 'react';
import styles from './UserProfilePage.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import prime from '../../assets/img/prime.png';

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
          <div className={styles.left}>
            <div className={styles.text}>
              Оформи подписку на 1 месяц бесплатно. <br /> И открой доступ к безграничным <br />{' '}
              возможностям, привелегиям <br /> и множеству новинок.
            </div>
            <div className={styles.button_wrapper}>
              <div className={styles.button}>Подробнее</div>
            </div>
          </div>
          <div className={styles.right}>
            <img className={styles.prime} src={prime} alt="" />
          </div>
        </div>
        <div className={styles.settings_wrapper}></div>
        <div className={styles.profile_wrapper}></div>
      </main>
    </div>
  );
}
