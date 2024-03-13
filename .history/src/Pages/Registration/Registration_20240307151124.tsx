import React from 'react';
import styles from './Registration.module.scss';
import { Link } from 'react-router-dom';
import radioOn from '../../assets/img/radioOn.svg';
import radioOff from '../../assets/img/radioOff.svg';
import axios from 'axios';

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
            <div className={styles.radio_wrapper}>
              <div className={styles.form_radio}>
                <input id="radio-1" type="radio" name="radio" value="1" checked />
                <label htmlFor="radio-1">Слушатель</label>
              </div>
              <div className={styles.form_radio}>
                <input id="radio-2" type="radio" name="radio" value="2" />
                <label htmlFor="radio-2">Исполнитель</label>
              </div>
            </div>
            <button className={styles.button}>Зарегистрироваться</button>
          </form>
          <span className={styles.text}>
            Уже есть аккаунт <span className={styles.underlined}>Так войдите в него</span>
          </span>
          <span className={styles.text}>
            Применяется <span className={styles.underlined}>Политика конфиденциальности</span> и{' '}
            <span className={styles.underlined}>Условия обслуживания</span>
          </span>
        </div>
      </main>
    </div>
  );
}
