import React from 'react';
import MainScreenHeader from '../MainScreenHeader/MainScreenHeader';
import styles from './ArtistProfile.module.scss';
import artist from '../../assets/img/Artist.png';
import checkmark from '../../assets/img/checkmark.png';
import logout from '../../assets/img/logout.png';
import vk from '../../assets/img/vk1.png';
import instagram from '../../assets/img/instagram`.png';
import facebook from '../../assets/img/facebook1.png';

export default function ArtistProfile() {
  return (
    <main className={styles.main}>
      <MainScreenHeader />
      <div className={styles.artist}>
        <img src={artist} className={styles.img} alt="" />
        <div className={styles.left_part}>
          <div className={styles.genre}>
            <span className={styles.text}>Хип-хоп исполнитель</span>
            <img src="" className={styles.star} alt="" />
          </div>
          <span className={styles.artist_name}>Big Baby Tape</span>
          <div className={styles.buttons}>
            <div className={styles.button1_wrapper}>
              <span className={styles.text}>Редактировать профиль</span>
            </div>
            <div className={styles.button2_wrapper}>
              <span className={styles.text}>Статистика</span>
            </div>
            <div className={styles.button3_wrapper}>
              <img src="" className={styles.img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
