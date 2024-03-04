import React from 'react';
import styles from './MainScreenHeader.module.scss';
import leftArrow from '../../assets/img/leftArrow.svg';
import rightArrow from '../../assets/img/rightArrow.svg';
import { Link } from 'react-router-dom';

export default function MainScreenHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.arrows}>
        <div className={styles.wrapper}>
          <img src={leftArrow} className={styles.arrow} alt="" />
        </div>
        <div className={styles.wrapper}>
          <img className={styles.arrow} src={rightArrow} alt="" />
        </div>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <a className={styles.link}>Главная</a>
          </li>
          <li>
            <a className={styles.link}>Тренды</a>
          </li>
          <li>
            <a className={styles.link}>Чарты</a>
          </li>
          <li>
            <a className={styles.link}>Жанры</a>
          </li>
        </ul>
      </nav>
      <div className={styles.buttons}>
        <Link to="/registration" className={styles.button_wrapper}>
          <span className={styles.text}>Зарегистрироваться</span>
        </Link>
        <Link to="login" className={styles.button_wrapper}>
          <span className={styles.text}>Войти</span>
        </Link>
      </div>
    </header>
  );
}
