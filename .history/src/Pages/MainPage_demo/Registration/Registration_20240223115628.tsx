import React from 'react';
import styles from './Registration.module.scss';
import logo from '../../../assets/img/logo.svg';

export default function Registration() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <a className={styles.logo}>
          <img className={styles.image} src={logo} alt="" />
          <strong>Auditer</strong>
        </a>
      </header>
      <main className={styles.window_wrapper}>
        <div className={styles.title_wrapper}>
          <h2>Добро пожаловать в Auditer!</h2>
          <h2>Пройди регистрацию в пару кликов и будь в тренде</h2>
        </div>
      </main>
    </div>
  );
}
