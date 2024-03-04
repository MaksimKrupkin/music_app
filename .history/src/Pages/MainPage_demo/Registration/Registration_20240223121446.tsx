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
          <h2 className={styles.text}>Добро пожаловать в Auditer!</h2>
          <h2 className={styles.text}>Пройди регистрацию в пару кликов и будь в тренде.</h2>
        </div>
        <div className={styles.form_wrapper}>
          <h3 className={styles.title}>Авторизируйся с помощью никнейма или электронной почты</h3>
        </div>
      </main>
    </div>
  );
}
