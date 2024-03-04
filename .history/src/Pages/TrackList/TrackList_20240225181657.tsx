import React from 'react';
import styles from './TrackList.module.scss';
import HigherSidebar from '../../Components/HigherSidebar/HigherSidebar';
import LowerSidebar from '../../Components/LowerSidebar/LowerSidebar';
import MainScreen from '../../Components/MainScreen/MainScreen';
import Playbar from '../../Components/Playbar/Playbar';

export default function TrackList() {
  return (
    <div className={styles.app_wrapper}>
      <div className={styles.wrapper}>
        <HigherSidebar />
        <LowerSidebar />
        <MainScreen />
        <Playbar />
      </div>
    </div>
  );
}
