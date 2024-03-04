import React from 'react';
import styles from './Card.module.scss';
import image1 from '../../assets/img/albomImage.png';

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <img className={styles.image} src={image1} alt="" />
        <span className={styles.title}>Dying 2 Live</span>
      </div>
      <div className={styles.play_wrapper}>
        <img src={play} className={styles.play} alt="" />
      </div>
    </div>
  );
}
