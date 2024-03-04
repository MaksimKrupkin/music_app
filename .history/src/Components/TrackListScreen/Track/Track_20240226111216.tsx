import React from 'react';
import styles from './Track.module.scss';
import adults from '../../../assets/img/18+.svg';
import albom from '../../../assets/img/albom4.jpg';

export default function Track() {
  return (
    <div className={styles.track_wrapper}>
      <div className={styles.number}>1</div>
      <img className={styles.cover} src={albom} alt="" />
      <div className={styles.info}>
        <span className={styles.title}>Dying 2 Live</span>
        <span className={styles.author}>Big Baby Tape</span>
      </div>
      <img className={styles.forAdults_image} src={adults} alt="" />
      <span className={styles.duration}>2:41</span>
    </div>
  );
}
