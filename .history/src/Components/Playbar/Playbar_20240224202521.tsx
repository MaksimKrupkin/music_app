import React from 'react';
import styles from './Playbar.module.scss';
import cover from '../../assets/img/albom3.jpg';

export default function Playbar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left_wrapper}>
        <img src="" alt="" />
      </div>
      <div className={styles.center_wrapper}></div>
      <div className={styles.right_wrapper}></div>
    </div>
  );
}
