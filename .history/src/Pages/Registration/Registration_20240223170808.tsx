import React from 'react';
import styles from './Registration.module.scss';
import { Link } from 'react-router-dom';

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
          <h2 className={styles.text}>С возвращением! Войти в Auditer</h2>
        </div>
        <div className={styles.form_wrapper}>
          <h3 className={styles.title}>Авторизируйся с помощью никнейма или электронной почты</h3>
          <form action="" className={styles.form}>
            <input className={styles.input} type="email" placeholder="example123@gmail.com" />
            <input className={styles.input} type="password" placeholder="Your password" />

            <button className={styles.button}>Войти</button>
          </form>
          <span className={styles.text}>
            Нет аккаунта? <span className={styles.underlined}>Регистрация</span>
          </span>
          <span className={styles.text}>Забыли пароль?</span>
        </div>
        <div className={styles.networks_wrapper}>
          <h3 className={styles.title}>Или с помощью социальных сетей</h3>
          <div className={styles.links_wrapper}>
            <div className={styles.link}>
              <img className={styles.image} src={VK} alt="" />
            </div>
            <div className={styles.link}>
              <img className={styles.image_withot_back} src={google} alt="" />
            </div>
            <div className={styles.link}>
              <img className={styles.image_withot_back} src={facebook} alt="" />
            </div>
            <div className={styles.link}>
              <img className={styles.image} src={twitter} alt="" />
            </div>
            <div className={styles.link}>
              <img className={styles.image} src={instagram} alt="" />
            </div>
          </div>
          <span className={styles.text}>
            Применяется <span className={styles.underlined}>Политика конфиденциальности</span> и{' '}
            <span className={styles.underlined}>Условия обслуживания</span>
          </span>
        </div>
      </main>
    </div>
  );
}