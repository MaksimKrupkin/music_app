import React from 'react';
import styles from './HigherSidebar.module.scss';
import logo from '../../assets/img/logo.svg';
import home from '../../assets/img/home.svg';
import search from '../../assets/img/Search.svg';

export default function HigherSidebar() {
  return (
    <aside className={styles.higherSidebar}>
      <div className={styles.logo_wrapper}>
        <img className={styles.logo} src={logo} alt="Лого" />
        <strong className={styles.logo_text}>Auditer</strong>
      </div>
      <a className={styles.link_wrapper}>
        <img className={styles.img} src={home} alt="" />
        <span className={styles.text}>Главная</span>
      </a>
      <a className={styles.link_wrapper}>
        <img className={styles.img} src={search} alt="" />
        <span className={styles.text}>Поиск</span>
      </a>
    </aside>
  );
}
