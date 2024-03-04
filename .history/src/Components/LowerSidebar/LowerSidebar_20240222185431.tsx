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
        <img className={styles.plus} src={plus} alt="" />
      </div>
      <div className={styles.link_wrapper}>
        <img className={styles.img} src={genres} alt="" />
        <span className={styles.text}>Жанры</span>
        <div className={styles.plus_wrapper}>
          <img className={styles.plus} src={plus} alt="" />
        </div>
      </div>
    </aside>
  );
}
