import React from 'react';
import styles from './Playbar.module.scss';
import cover from '../../assets/img/cover.png';
import like from '../../assets/img/like.png';
import mix from '../../assets/img/mix.png';
import prev from '../../assets/img/prev.png';
import pause from '../../assets/img/pause.png';
import next from '../../assets/img/next.png';
import repeat from '../../assets/img/repeat.png';
import trackLine from '../../assets/img/trackLine.svg';
import add from '../../assets/img/add.svg';
import text from '../../assets/img/text.svg';
import volume from '../../assets/img/volume.svg';
import volumeBar from '../../assets/img/volumeBar.svg';
import send from '../../assets/img/send.svg';

export default function Playbar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left_wrapper}>
        <img className={styles.image} src={cover} alt="" />
        <div className={styles.info}>
          <div className={styles.title}>Without Me</div>
          <div className={styles.author}>Eminem</div>
        </div>
        <img className={styles.like} src={like} alt="" />
      </div>
      <div className={styles.center_wrapper}>
        <div className={styles.top}>
          <img className={styles.image} src={mix} alt="" />
          <img className={styles.image} src={prev} alt="" />
          <img className={styles.image} src={pause} alt="" />
          <img className={styles.image} src={next} alt="" />
          <img className={styles.image} src={repeat} alt="" />
        </div>
        <div className={styles.bottom}>
          <span className={styles.time}>2:58</span>
          <img className={styles.trackLine} src={trackLine} alt="" />
          <span className={styles.time}>4:50</span>
        </div>
      </div>
      <div className={styles.right_wrapper}>
        <img className={styles.image} src={add} alt="" />
        <img className={styles.image} src={text} alt="" />
        <img className={styles.image} src={volume} alt="" />
        <img className={styles.image} src={volumeBar} alt="" />
        <img className={styles.image} src={send} alt="" />
      </div>
    </div>
  );
}
