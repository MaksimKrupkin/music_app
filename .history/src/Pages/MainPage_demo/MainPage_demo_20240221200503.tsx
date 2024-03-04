import React from 'react';
import styles from './MainPage_demo.module.scss';
import HigherSidebar from '../../Components/HigherSidebar/HigherSidebar';

export default function MainPage_demo() {
  return (
    <div className={styles.wrapper}>
      <HigherSidebar />
      <aside className={styles.lowerSidebar}></aside>
      <main className={styles.main}>
        <header className={styles.header}></header>
      </main>
    </div>
  );
}
