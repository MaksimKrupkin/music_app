import React from 'react';
import styles from './MainPage_demo.module.scss';
import HigherSidebar from '../../Components/HigherSidebar/HigherSidebar';
import MainScreenDemo from '../../Components/MainScreenDemo/MainScreenDemo';
import LowerSidebar from '../../Components/LowerSidebar/LowerSidebar';

export default function MainPage_demo() {
  return (
    <div className={styles.wrapper}>
      <HigherSidebar />
      <LowerSidebar />
      <MainScreenDemo />
    </div>
  );
}
