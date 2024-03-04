import React from 'react';
import styles from './MainScreen.module.scss';
import MainScreenHeader from '../MainScreenHeader/MainScreenHeader';
import Charts from './Charts/Charts';
import Card from '../Card/Card';
import block1 from '../../assets/img/block1.jpg';
import block2 from '../../assets/img/block2.png';
import block3 from '../../assets/img/block3.jpg';
import block4 from '../../assets/img/block4.png';

export default function MainScreen() {
  return (
    <main className={styles.main}>
      <MainScreenHeader />
      <div className={styles.blocks}>
        <img src={block1} className={styles.block}></img>
        <img src={block2} className={styles.block}></img>
        <img src={block3} className={styles.block}></img>
        <img src={block4} className={styles.block}></img>
      </div>
      <Charts />
      <h2 className={styles.title}>Новинки этой недели</h2>
      <a className={styles.all}>
        <div className={styles.text}>Смотреть все</div>
      </a>
      <div className={styles.cards}>
        <Card />
      </div>
    </main>
  );
}
