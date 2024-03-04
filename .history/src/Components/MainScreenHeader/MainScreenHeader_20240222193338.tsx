import React from 'react';
import styles from './MainScreenHeader.module.scss';
import leftArrow from '../../assets/img/leftArrow.svg';
import rightArrow from '../../assets/img/rightArrow.svg';

export default function MainScreenHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.arrows}>
        <div className={styles.wrapper}>
          <img src={leftArrow} className={styles.arrow} alt="" />
        </div>
        <div className={styles.wrapper}>
          <img src={rightArrow} alt="" />
        </div>
      </div>
    </header>
  );
}
