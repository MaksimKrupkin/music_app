import React from 'react';
import styles from './AddTrack.module.scss';
import track from '../../assets/img/track.png';
import FirstStep from './FirstStep/FirstStep';
import SecondStep from './SecondStep/SecondStep';

export default function AddTrack() {
  return (
    <div className={styles.modal}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <span className={styles.text}>Загрузка трека</span>
          <img className={styles.image} src={track} alt="" />
        </div>
        <FirstStep />
        <SecondStep />
        <div className={styles.bottom}>
          <span className={styles.bottom_text}>* Необходимо обязательно заполнить данные поля</span>
          <span className={styles.bottom_text}>
            Применяются <span className={styles.underlined}>Политика конфиденциальности</span> и{' '}
            <span className={styles.underlined}>Условия обслуживания</span>
          </span>
        </div>
      </div>
    </div>
  );
}
