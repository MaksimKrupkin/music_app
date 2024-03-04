import React from 'react';
import styles from './Cards.module.scss';
import image1 from '../../assets/img/albomImage.png';
import play from '../../assets/img/play.svg';
import albom2 from '../../assets/img/albom2.jpg';
import albom3 from '../../assets/img/albom3.jpg';
import albom4 from '../../assets/img/albom4.jpg';
import albom5 from '../../assets/img/albom5.jpg';
import albom6 from '../../assets/img/albom6.jpg';
import { Link } from 'react-router-dom';

export default function Cards() {
  return (
    <>
      <Link to="/tracklist" className={styles.card}>
        <img className={styles.image} src={image1} alt="" />
        <div className={styles.info}>
          <span className={styles.title}>Dying 2 Live</span>
          <span className={styles.author}>Big Baby Tape</span>
        </div>
        <div className={styles.play_wrapper}>
          <img src={play} className={styles.play} alt="" />
        </div>
      </Link>
    </>
  );
}
