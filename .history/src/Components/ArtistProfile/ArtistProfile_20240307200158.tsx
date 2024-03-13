import React, { useState } from 'react';
import MainScreenHeader from '../MainScreenHeader/MainScreenHeader';
import styles from './ArtistProfile.module.scss';
import artist from '../../assets/img/Artist.png';
import checkmark from '../../assets/img/checkmark.png';
import logout from '../../assets/img/logout.png';
import vk from '../../assets/img/vk1.png';
import instagram from '../../assets/img/instagram`.png';
import facebook from '../../assets/img/facebook1.png';
import track from '../../assets/img/track.png';
import album from '../../assets/img/album.png';
import company from '../../assets/img/company.png';
import Cards from '../Cards/Cards';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { User } from '../../Models/user';
import { RootState } from '../../redux/types';
import AddTrack from '../AddTrack/AddTrack';

export default function ArtistProfile() {
  const username = useSelector((state: RootState) => state.user.user?.username);
  const [modalActive, setModalActive] = useState(false);
  return (
    <main className={styles.main}>
      <MainScreenHeader />
      <div className={styles.artist}>
        <img src={artist} className={styles.img} alt="" />
        <div className={styles.left_part}>
          <div className={styles.genre}>
            <span className={styles.text}>Хип-хоп исполнитель</span>
            <img src={checkmark} className={styles.star} alt="" />
          </div>
          <span className={styles.artist_name}>{username}</span>
          <div className={styles.buttons}>
            <div className={styles.button1_wrapper}>
              <span className={styles.text}>Редактировать профиль</span>
            </div>
            <div className={styles.button2_wrapper}>
              <span className={styles.text}>Статистика</span>
            </div>
            <div className={styles.button3_wrapper}>
              <img src={logout} className={styles.logout_img} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.network_wrapper}>
            <img src={vk} className={styles.network_img} alt="" />
          </div>
          <div className={styles.network_wrapper}>
            <img src={facebook} className={styles.network_img} alt="" />
          </div>
          <div className={styles.network_wrapper}>
            <img src={instagram} className={styles.network_img} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <div to="/addTrack" className={styles.button_wrapper}>
          <span className={styles.text}>Загрузить трек</span>
          <img className={styles.img} src={track} alt="" />
        </div>
        <div className={styles.button_wrapper}>
          <span className={styles.text}>Выпустить альбом</span>
          <img className={styles.img} src={album} alt="" />
        </div>
        <div className={styles.button_wrapper}>
          <span className={styles.text}>Запустить компанию</span>
          <img className={styles.img} src={company} alt="" />
        </div>
      </div>
      <div className={styles.albums}>
        <h2 className={styles.title}>Альбомы</h2>
        <div className={styles.cards_wrapper}>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
      <div className={styles.albums}>
        <h2 className={styles.title}>Синглы и EP</h2>
        <div className={styles.cards_wrapper}>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
      <AddTrack />
    </main>
  );
}
