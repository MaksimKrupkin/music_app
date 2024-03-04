import React from 'react';
import styles from './MainPage.module.scss';

export default function MainPage() {
  return (
    <div className={styles.wrapper}>
      <HigherSidebar />
      <LowerSidebar />
      <MainScreen />
    </div>
  );
}
