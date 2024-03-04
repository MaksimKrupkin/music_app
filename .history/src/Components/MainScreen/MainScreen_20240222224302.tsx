import React from 'react';
import styles from './MainScreen.module.scss';
import MainScreenHeader from '../MainScreenHeader/MainScreenHeader';
import Charts from './Charts/Charts';
import Card from '../Card/Card';

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
      <Charts />
      <h2 className={styles.title}>Новинки этой недели</h2>
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}
