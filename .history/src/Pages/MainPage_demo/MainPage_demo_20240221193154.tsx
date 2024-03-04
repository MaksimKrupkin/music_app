import React from 'react';
import styles from './MainPage_demo.module.scss';

export default function MainPage_demo() {
  return (
    <div className={styles.wrapper}>
      <aside className={styles.higherSidebar}></aside>
      <aside className={styles.lowerSidebar}></aside>
      <main>
        <header></header>
      </main>
    </div>
  );
}
