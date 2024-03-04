import React from 'react';
import styles from './Card.module.scss';
import image1 from '../../assets/img/albomImage.png';
import play from '../../assets/img/play.svg';

export default function Card() {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image1} alt="" />
      <div className={styles.info}>
        <span className={styles.title}>Dying 2 Live</span>
        <span className={styles.author}>Dying 2 Live</span>
      </div>
      <div className={styles.play_wrapper}>
        <img src={play} className={styles.play} alt="" />
      </div>
    </div>
  );
}
