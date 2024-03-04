import React from 'react';
import styles from './MainScreen.module.scss';
import MainScreenHeader from '../MainScreenHeader/MainScreenHeader';
import Card from '../Card/Card';

export default function MainScreenDemo() {
  return (
    <main className={styles.main}>
      <MainScreenHeader />

      <h2 className={styles.title}>Новинки этой недели</h2>
      <a className={styles.all}>
        <div className={styles.text}>Смотреть все</div>
      </a>
      <div className={styles.cards}>
        <Card />
      </div>
      <h2 className={styles.title}>Недавно прослушано</h2>
      <a className={styles.all}>
        <div className={styles.text}>Смотреть все</div>
      </a>
      <div className={styles.cards}>
        <Card />
      </div>
      <h2 className={styles.title}>Недавно прослушано</h2>
      <a className={styles.all}>
        <div className={styles.text}>Смотреть все</div>
      </a>
      <div className={styles.cards}>
        <Card />
      </div>
    </main>
  );
}
