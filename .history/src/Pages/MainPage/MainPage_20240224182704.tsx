import React from 'react';
import styles from './MainPage.module.scss';
import HigherSidebar from '../../Components/HigherSidebar/HigherSidebar';
import LowerSidebar from '../../Components/LowerSidebar/LowerSidebar';
import MainScreen from '../../Components/MainScreen/MainScreen';

export default function MainPage() {
  return (
    <div className={styles.app_wrapper}>
      <div className={styles.wrapper}>
        <HigherSidebar />
        <LowerSidebar />
        <MainScreen />
      </div>
    </div>
  );
}
