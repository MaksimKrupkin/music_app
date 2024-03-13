import React from 'react';
import styles from './AddTrack.module.scss';
import track from '../../assets/img/track.png';

export default function AddTrack() {
  return (
    <div className={styles.modal}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <span>Загрузка трека</span>
          <img src={track} alt="" />
        </div>
        <div className={styles.first_step_wrapper}></div>
      </div>
    </div>
  );
}
