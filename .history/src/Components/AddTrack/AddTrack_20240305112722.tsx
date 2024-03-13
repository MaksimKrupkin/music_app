import React from 'react';
import styles from './AddTrack.module.scss';
import track from '../../assets/img/track.png';

export default function AddTrack() {
  return (
    <div className={styles.modal}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <span className={styles.text}>Загрузка трека</span>
          <img className={styles.image} src={track} alt="" />
        </div>
        <div className={styles.step_wrapper}></div>
        <div className={styles.bottom}></div>
      </div>
    </div>
  );
}
