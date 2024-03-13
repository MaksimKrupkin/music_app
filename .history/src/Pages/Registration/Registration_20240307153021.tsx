import React, { useState } from 'react';
import styles from './Registration.module.scss';
import { Link } from 'react-router-dom';
import radioOn from '../../assets/img/radioOn.svg';
import radioOff from '../../assets/img/radioOff.svg';
import axios from 'axios';

import logo from '../../assets/img/logo.svg';
const [user, setUser] = useState({
  email: 'a',
  username: 'c',
  password: 'v',
  role: 'Listener',
});
// const [email, setEmail] = useState('');
// const [username, setUsername] = useState('');
// const [password, setPassword] = useState('');
// const [role, setRole] = useState('Listener');

type User = {
  password: string;
  email: string;
  username: string;
  role: string;
};
type GetUsersResponse = {
  username: string;
  email: string;
  token: string;
};

async function sendUserData(user: User) {
  try {
    const data = await axios.post<GetUsersResponse>(
      'http://localhost:5238/auth/register',
      {
        user,
      },
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

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
            <input
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className={styles.input}
              type="email"
              placeholder="example123@gmail.com"
            />
            <input
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className={styles.input}
              type="text"
              placeholder="Kevin Doe"
            />
            <input
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className={styles.input}
              type="password"
              placeholder="Your password"
            />
            <div className={styles.radio_wrapper}>
              <div className={styles.form_radio}>
                <input
                  onChange={(e) => setUser({ ...user, role: e.target.value })}
                  id="radio-1"
                  type="radio"
                  name="role"
                  value="Listener"
                  checked
                />
                <label htmlFor="radio-1">Слушатель</label>
              </div>
              <div className={styles.form_radio}>
                <input
                  onChange={(e) => setUser({ ...user, role: e.target.value })}
                  id="radio-2"
                  type="radio"
                  name="role"
                  value="Artist"
                />
                <label htmlFor="radio-2">Исполнитель</label>
              </div>
            </div>
            <button onClick={() => sendUserData(user)} className={styles.button}>
              Зарегистрироваться
            </button>
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
