import React from 'react';
import styles from './Charts.module.scss';
import image1 from '../../../assets/img/image.png';

export default function Charts() {
  return (
    <section className={styles.charts}>
      <h2 className={styles.title}>Чарт BY</h2>
      <a className={styles.link}>Смотреть все</a>
      <div className={styles.track_wrapper}>
        <span className={styles.position}>1</span>
        <img className={styles.image} src={image1} alt="" />
        <div className={styles.info}>
          <span className={styles.title}>Прощание</span>
          <span className={styles.author}>Три дня дождя ft. MONA</span>
        </div>
        <span className={styles.duration}>3:56</span>
      </div>
      <div className={styles.track_wrapper}>
        <span className={styles.position}>1</span>
        <img className={styles.image} src={image1} alt="" />
        <div className={styles.info}>
          <span className={styles.title}>Прощание</span>
          <span className={styles.author}>Три дня дождя ft. MONA</span>
        </div>
        <span className={styles.duration}>3:56</span>
      </div>
      <div className={styles.track_wrapper}>
        <span className={styles.position}>1</span>
        <img className={styles.image} src={image1} alt="" />
        <div className={styles.info}>
          <span className={styles.title}>Dayang</span>
          <span className={styles.author}>Big Baby Tape</span>
        </div>
        <span className={styles.duration}>2:47</span>
      </div>
      <div className={styles.track_wrapper}>
        <span className={styles.position}>1</span>
        <img className={styles.image} src={image1} alt="" />
        <div className={styles.info}>
          <span className={styles.title}>Дымок</span>
          <span className={styles.author}>Ицык Цыпер ft....</span>
        </div>
        <span className={styles.duration}>2:19</span>
      </div>
      <div className={styles.track_wrapper}>
        <span className={styles.position}>1</span>
        <img className={styles.image} src={image1} alt="" />
        <div className={styles.info}>
          <span className={styles.title}>Пыяла</span>
          <span className={styles.author}>АИГЕЛ</span>
        </div>
        <span className={styles.duration}>3:30</span>
      </div>
      <div className={styles.track_wrapper}>
        <span className={styles.position}>1</span>
        <img className={styles.image} src={image1} alt="" />
        <div className={styles.info}>
          <span className={styles.title}>Lost Angeles</span>
          <span className={styles.author}>FRIENDLY THUG 52 NGG</span>
        </div>
        <span className={styles.duration}>1:54</span>
      </div>
    </section>
  );
}
