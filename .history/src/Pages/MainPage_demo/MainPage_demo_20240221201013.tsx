import React from 'react';
import styles from './MainPage_demo.module.scss';
import HigherSidebar from '../../Components/HigherSidebar/HigherSidebar';
import MainScreen from '../../Components/MainScreen/MainScreen';

export default function MainPage_demo() {
  return (
    <div className={styles.wrapper}>
      <HigherSidebar />
      <aside className={styles.lowerSidebar}></aside>
      <MainScreen />
    </div>
  );
}
