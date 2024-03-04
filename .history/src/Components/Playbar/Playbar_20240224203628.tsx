import React from 'react';
import styles from './Playbar.module.scss';
import cover from '../../assets/img/cover.png';
import like from '../../assets/img/like.png';

export default function Playbar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left_wrapper}>
        <img className={styles.image} src={cover} alt="" />
        <div className={styles.info}>
          <div className={styles.title}>Without Me</div>
          <div className={styles.author}>Eminem</div>
        </div>
        <img className={styles.like} src={like} alt="" />
      </div>
      <div className={styles.center_wrapper}></div>
      <div className={styles.right_wrapper}></div>
    </div>
  );
}
