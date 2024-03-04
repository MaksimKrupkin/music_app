import React from 'react';
import styles from './MainScreen.module.scss';
import MainScreenHeader from '../MainScreenHeader/MainScreenHeader';

export default function MainScreen() {
  return (
    <main className={styles.main}>
      <MainScreenHeader />
      <div className={styles.blocks}>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
      </div>
    </main>
  );
}
