import React from 'react';
import styles from './Charts.module.scss';
import image1 from '../../../assets/img/image.png';
import charts1 from '../../../assets/img/charts2.jpg';
import charts2 from '../../../assets/img/charts3.jpg';
import charts3 from '../../../assets/img/charts3.png';
import charts4 from '../../../assets/img/charts4.jpg';
import charts5 from '../../../assets/img/charts5.jpg';
import albom2 from '../../../assets/img/albom2.jpg';
import albom3 from '../../../assets/img/albom3.jpg';
import albom4 from '../../../assets/img/albom4.jpg';
import albom5 from '../../../assets/img/albom5.jpg';

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
        <span className={styles.position}>2</span>
        <img className={styles.image} src={charts1} alt="" />
        <div className={styles.info}>
          <span className={styles.title}>Dayang</span>
          <span className={styles.author}>Big Baby Tape</span>
        </div>
        <span className={styles.duration}>2:47</span>
      </div>
      <div className={styles.track_wrapper}>
        <span className={styles.position}>3</span>
        <img className={styles.image} src={charts2} alt="" />
        <div className={styles.info}>
          <span className={styles.title}>Дымок</span>
          <span className={styles.author}>Ицык Цыпер ft. Игорь Цыба</span>
        </div>
        <span className={styles.duration}>2:19</span>
      </div>
      <div className={styles.track_wrapper}>
        <span className={styles.position}>4</span>
        <img className={styles.image} src={charts3} alt="" />
        <div className={styles.info}>
          <span className={styles.title}>Пыяла</span>
          <span className={styles.author}>АИГЕЛ</span>
        </div>
        <span className={styles.duration}>3:30</span>
      </div>
      <div className={styles.track_wrapper}>
        <span className={styles.position}>5</span>
        <img className={styles.image} src={charts4} alt="" />
        <div className={styles.info}>
          <span className={styles.title}>Lost Angeles</span>
          <span className={styles.author}>FRIENDLY THUG 52 NGG</span>
        </div>
        <span className={styles.duration}>1:54</span>
      </div>
      <div className={styles.track_wrapper}>
        <span className={styles.position}>6</span>
        <img className={styles.image} src={charts5} alt="" />
        <div className={styles.info}>
          <span className={styles.title}>Царица</span>
          <span className={styles.author}>=ANNA ASTI</span>
        </div>
        <span className={styles.duration}>3:35</span>
      </div>
    </section>
  );
}
