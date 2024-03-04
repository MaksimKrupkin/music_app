import React from 'react';
import styles from './TrackListScreen.module.scss';
import MainScreenHeader from '../MainScreenHeader/MainScreenHeader';
import albom from '../../assets/img/albom4.jpg';

export default function TrackListScreen() {
  return (
    <main className={styles.main}>
      <MainScreenHeader />
      <div className={styles.left_wrapper}>
        <div className={styles.top}>
          <img className={styles.cover} src={albom} alt="" />
          <span className={styles.type}>Альбом</span>
          <strong>Big Babe Tape - VARSKA</strong>
        </div>
      </div>
      <div className={styles.right_wrapper}></div>
    </main>
  );
}
