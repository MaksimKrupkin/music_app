import React from 'react';
import styles from './HigherSidebar.module.scss';
import logo from '../../assets/img/logo.svg';
import home from '../../assets/img/home.svg';
import search from '../../assets/img/Search.svg';
import { Link } from 'react-router-dom';

export default function HigherSidebar() {
  return (
    <aside className={styles.higherSidebar}>
      <div className={styles.logo_wrapper}>
        <img className={styles.logo} src={logo} alt="Лого" />
        <strong className={styles.logo_text}>Auditer</strong>
      </div>
      <Link to="/" className={styles.link_wrapper}>
        <img className={styles.img} src={home} alt="" />
        <span className={styles.text}>Главная</span>
      </Link>
      <a className={styles.link_wrapper}>
        <img className={styles.img} src={search} alt="" />
        <span className={styles.text}>Поиск</span>
      </a>
    </aside>
  );
}
