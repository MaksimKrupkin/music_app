import React from 'react';
import styles from './LowerSidebar.module.scss';
import subscribe from '../../assets/img/subscribe.svg';
import plus from '../../assets/img/add.svg';
import genres from '../../assets/img/genres.svg';

export default function LowerSidebar() {
  return (
    <aside className={styles.lowerSidebar}>
      <div className={styles.link_wrapper}>
        <img className={styles.img} src={subscribe} alt="" />
        <span className={styles.text}>Подписка</span>
        <div className={styles.plus_wrapper}>
          <img className={styles.plus} src={plus} alt="" />
        </div>
      </div>
      <div className={styles.link_wrapper}>
        <img className={styles.img} src={genres} alt="" />
        <span className={styles.text}>Жанры</span>
        <div className={styles.plus_wrapper}>
          <img className={styles.plus} src={plus} alt="" />
        </div>
      </div>
      <div className={styles.bottom_elements}>
        <div className={styles.cookies_wrapper}>
          <img className={styles.cookies_img} src="" alt="" />
          <span>Файлы cookie</span>
        </div>
        <div className={styles.cookies_wrapper}>
          <img src={styles.language_img} alt="" />
          <span>Русский</span>
        </div>
      </div>
    </aside>
  );
}
