import React from 'react';
import styles from './Registration.module.scss';
import logo from '../../../assets/img/logo.svg';
import toggleOn from '../../../assets/img/toggleOn.svg';

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
          <form action="" className={styles.form}>
            <input className={styles.input} type="email" placeholder="example123@gmail.com" />
            <input className={styles.input} type="password" placeholder="Your password" />
            <div className={styles.toggle_wrapper}>
              <img className={styles.img} src={toggleOn} alt="" />
              <span className={styles.text}>Запомнить меня</span>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
