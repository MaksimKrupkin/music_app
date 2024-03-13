import React from 'react';
import styles from './AddTrack.module.scss';
import track from '../../assets/img/track.png';
import FirstStep from './FirstStep/FirstStep';

export default function AddTrack() {
  return (
    <div className={styles.modal}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <span className={styles.text}>Загрузка трека</span>
          <img className={styles.image} src={track} alt="" />
        </div>
        <FirstStep />
        <div className={styles.bottom}>
          <span>* Необходимо обязательно заполнить данные поля </span>
        </div>
      </div>
    </div>
  );
}
