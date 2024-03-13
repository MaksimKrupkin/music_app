import React from 'react';
import styles from './MainScreenHeader.module.scss';
import leftArrow from '../../assets/img/leftArrow.svg';
import rightArrow from '../../assets/img/rightArrow.svg';
import { Link } from 'react-router-dom';
import user from '../../assets/img/user.png';
import setting from '../../assets/img/setting.png';
import notification from '../../assets/img/notification.png';
import eye from '../../assets/img/eye.png';
import { useSelector } from 'react-redux';
import { User } from '../../Models/user';

export default function MainScreenHeader() {
  const role = useSelector((state: User) => state.role);
  console.log(role);
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
        <Link to="/artistprofile" className={styles.link_wrapper}>
          <img className={styles.image} src={user} alt="" />
        </Link>
        <Link to="" className={styles.link_wrapper}>
          <img className={styles.image} src={setting} alt="" />
        </Link>
        <Link to="" className={styles.link_wrapper}>
          <img className={styles.image} src={notification} alt="" />
        </Link>
        <Link to="" className={styles.link_wrapper}>
          <img className={styles.image} src={eye} alt="" />
        </Link>
      </div>
    </header>
  );
}
