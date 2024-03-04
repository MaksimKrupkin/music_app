import React from 'react';
import styles from './Cards.module.scss';
import image1 from '../../assets/img/albomImage.png';
import play from '../../assets/img/play.svg';
import { Link } from 'react-router-dom';

export default function Cards() {
  return (
    <Link to="/tracklist" className={styles.card}>
      <img className={styles.image} src={image} alt="" />
      <div className={styles.info}>
        <span className={styles.title}>{title}</span>
        <span className={styles.author}>{author}</span>
      </div>
      <div className={styles.play_wrapper}>
        <img src={play} className={styles.play} alt="" />
      </div>
    </Link>
  );
}
