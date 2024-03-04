import React from 'react';
import styles from './Card.module.scss';
import image1 from '../../assets/img/albomImage.png';
import play from '../../assets/img/play.svg';
import albom2 from '../../assets/img/albom2.jpg';
import albom3 from '../../assets/img/albom3.jpg';
import albom4 from '../../assets/img/albom4.jpg';
import albom5 from '../../assets/img/albom5.jpg';
import albom6 from '../../assets/img/albom6.jpg';
import { Link } from 'react-router-dom';

export default function Card() {
  return (
    <>
      <Link className={styles.card}>
        <img className={styles.image} src={image1} alt="" />
        <div className={styles.info}>
          <span className={styles.title}>Dying 2 Live</span>
          <span className={styles.author}>Big Baby Tape</span>
        </div>
        <div className={styles.play_wrapper}>
          <img src={play} className={styles.play} alt="" />
        </div>
      </Link>
      <div className={styles.card}>
        <img className={styles.image} src={albom2} alt="" />
        <div className={styles.info}>
          <span className={styles.title}>BOLSHOI BRAT</span>
          <span className={styles.author}>OBLADAET</span>
        </div>
        <div className={styles.play_wrapper}>
          <img src={play} className={styles.play} alt="" />
        </div>
      </div>
      <div className={styles.card}>
        <img className={styles.image} src={albom3} alt="" />
        <div className={styles.info}>
          <span className={styles.title}>Эти огни</span>
          <span className={styles.author}>Mnogosnaal</span>
        </div>
        <div className={styles.play_wrapper}>
          <img src={play} className={styles.play} alt="" />
        </div>
      </div>
      <div className={styles.card}>
        <img className={styles.image} src={albom4} alt="" />
        <div className={styles.info}>
          <span className={styles.title}>Рифмономикон</span>
          <span className={styles.author}>Horus</span>
        </div>
        <div className={styles.play_wrapper}>
          <img src={play} className={styles.play} alt="" />
        </div>
      </div>
      <div className={styles.card}>
        <img className={styles.image} src={albom5} alt="" />
        <div className={styles.info}>
          <span className={styles.title}>Праздник на улице 36</span>
          <span className={styles.author}>Скриптонит</span>
        </div>
        <div className={styles.play_wrapper}>
          <img src={play} className={styles.play} alt="" />
        </div>
      </div>
      <div className={styles.card}>
        <img className={styles.image} src={albom6} alt="" />
        <div className={styles.info}>
          <span className={styles.title}>Малый повзрос...</span>
          <span className={styles.author}>Макс Корж</span>
        </div>
        <div className={styles.play_wrapper}>
          <img src={play} className={styles.play} alt="" />
        </div>
      </div>
    </>
  );
}
