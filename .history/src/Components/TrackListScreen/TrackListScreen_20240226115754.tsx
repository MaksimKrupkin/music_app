import React from 'react';
import styles from './TrackListScreen.module.scss';
import MainScreenHeader from '../MainScreenHeader/MainScreenHeader';
import albom from '../../assets/img/albom4.jpg';
import play from '../../assets/img/play.svg';
import elseImg from '../../assets/img/else.svg';
import Track from './Track/Track';
import Cards from '../../Components/Cards/Cards';

export default function TrackListScreen() {
  return (
    <main className={styles.main}>
      <MainScreenHeader />
      <div className={styles.left_wrapper}>
        <div className={styles.top}>
          <img className={styles.cover} src={albom} alt="" />
          <span className={styles.type}>Альбом</span>
          <strong className={styles.info}>Big Babe Tape - VARSKVA</strong>
          <div className={styles.fits}>
            <span className={styles.fit_author}>#ft.MACAN</span>
            <span className={styles.fit_author}>#ft.kizaru</span>
            <span className={styles.fit_author}>#ft.Baby Melo</span>
            <span className={styles.fit_author}>#ft.Huzzy Buzzy</span>
            <span className={styles.fit_author}>#ft.ALBLACK 52</span>
          </div>
          <div className={styles.buttons}>
            <img className={styles.play_image} src={play} alt="" />
            <div className={styles.toFavorite_wrapper}>
              <div className={styles.toFavorite}>Добавить в избранное</div>
            </div>
            <img className={styles.elseImg} src={elseImg} alt="" />
          </div>
        </div>
        <div className={styles.trackList_wrapper}>
          <Track />
          <Track />
          <Track />
          <Track />
          <Track />
          <Track />
          <Track />
          <Track />
          <Track />
        </div>
      </div>

      <div className={styles.right_wrapper}>
        <h2 className={styles.title}>Другие альбомы - Big Baby Tape</h2>
        <div className={styles.cards_wrapper}>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <div className={styles.button_wrapper}>
            <div className={styles.button}>Смотреть всё</div>
          </div>
        </div>
        <h2 className={styles.title}>На фите</h2>
      </div>
      <div className={styles.cards_wrapper}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <div className={styles.button_wrapper}>
          <div className={styles.button}>Смотреть всё</div>
        </div>
      </div>
    </main>
  );
}
