import React from 'react';
import styles from './Playbar.module.scss';

export default function Playbar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left_wrapper}></div>
      <div className={styles.center_wrapper}></div>
      <div className={styles.right_wrapper}></div>
    </div>
  );
}
