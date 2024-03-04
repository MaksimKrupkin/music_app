import React from 'react';
import styles from './ArtistProfilePage.module.scss';
import HigherSidebar from '../../Components/HigherSidebar/HigherSidebar';
import LowerSidebar from '../../Components/LowerSidebar/LowerSidebar';
import Playbar from '../../Components/Playbar/Playbar';
import ArtistProfile from '../../Components/ArtistProfile/ArtistProfile';

export default function ArtistProfilePage() {
  return (
    <div className={styles.app_wrapper}>
      <div className={styles.wrapper}>
        <HigherSidebar />
        <LowerSidebar />
        <ArtistProfile />
        <Playbar />
      </div>
    </div>
  );
}
