import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.scss';
import logo from '../../assets/img/logo.svg';
import toggleOn from '../../assets/img/toggleOn.svg';
import toggleOff from '../../assets/img/toggleOff.svg';
import VK from '../../assets/img/VK.svg';
import google from '../../assets/img/Google.svg';
import facebook from '../../assets/img/facebook.svg';
import twitter from '../../assets/img/Twitter.svg';
import instagram from '../../assets/img/Instagram.svg';
import axios from 'axios';

export default function Login() {
  const [toggle, setToggle] = useState(true);
    const [user, setUser] = useState({
    email: 'a',

    password: 'v',

  });
  const handleToggle = () => {
    setToggle(!toggle);
  };


  type UserRequest = {
    password: string;
    email: string;
  };

  async function sendUserData(user: UserRequest) {
    console.log(user);
    try {
      const data = await axios.post<User>('http://localhost:5238/auth/login', user, {
        headers: {
          Accept: 'application/json',
        },
      });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }
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
            <input onChange={(e) => { ...user, email: e.target.value }} className={styles.input} type="email" placeholder="example123@gmail.com" />
            <input className={styles.input} type="password" placeholder="Your password" />
            <div className={styles.toggle_wrapper} onClick={handleToggle}>
              {toggle ? (
                <img className={styles.img} src={toggleOn} alt="" />
              ) : (
                <img className={styles.img} src={toggleOff} alt="" />
              )}
              <span className={styles.text}>Запомнить меня</span>
            </div>
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
