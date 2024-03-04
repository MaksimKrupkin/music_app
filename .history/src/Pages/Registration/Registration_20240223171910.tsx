import React from 'react';
import styles from './Registration.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';

export default function Registration() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link to={'/'} className={styles.logo}>
          <img className={styles.image} src={logo} alt="" />
          <strong className={styles.text}>Auditer</strong>
        </Link>
      </header>
      <main className={styles.window_wrapper}>
        <div className={styles.title_wrapper}>
          <h2 className={styles.text}>Добро пожаловать в Auditer</h2>
          <h2 className={styles.text}>Пройди регистрацию в пару кликов и будь в тренде.</h2>
        </div>
        <div className={styles.form_wrapper}>
          <h3 className={styles.title}>
            Введи адрес почты, придумай никнейм и пароль для аккаунта
          </h3>

          <form action="" className={styles.form}>
            <input className={styles.input} type="email" placeholder="example123@gmail.com" />
            <input className={styles.input} type="text" placeholder="Kevin Doe" />
            <input className={styles.input} type="password" placeholder="Your password" />
            <div></div>
            <button className={styles.button}>Войти</button>
          </form>
          <span className={styles.text}>
            Нет аккаунта? <span className={styles.underlined}>Регистрация</span>
          </span>
          <span className={styles.text}>Забыли пароль?</span>
        </div>
      </main>
    </div>
  );
}
