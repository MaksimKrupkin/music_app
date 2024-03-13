import React from 'react';
import styles from './AddTrack.module.scss';
import track from '../../assets/img/track.png';
import FirstStep from './FirstStep/FirstStep';
import SecondStep from './SecondStep/SecondStep';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo.svg';

export default function AddTrack() {
  return (
    <div className={styles.modal}>
      <header className={styles.header}>
        <Link to={'/'} className={styles.logo}>
          <img className={styles.image} src={logo} alt="" />
          <strong className={styles.text}>Auditer</strong>
        </Link>
      </header>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <span className={styles.text}>Загрузка трека</span>
          <img className={styles.image} src={track} alt="" />
        </div>
        <FirstStep />
        {/* <SecondStep /> */}
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
