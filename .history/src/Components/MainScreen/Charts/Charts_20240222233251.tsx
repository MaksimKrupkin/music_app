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
        <span className={styles.position}>2</span>
        <img
          className={styles.image}
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fthe-flow.ru%2Freleases%2Fbig-baby-tape-varskva&psig=AOvVaw3Adma_JILrc6AKkhYp13Mh&ust=1708720329896000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOjK-LPlv4QDFQAAAAAdAAAAABAP"
          alt=""
        />
        <div className={styles.info}>
          <span className={styles.title}>Dayang</span>
          <span className={styles.author}>Big Baby Tape</span>
        </div>
        <span className={styles.duration}>2:47</span>
      </div>
      <div className={styles.track_wrapper}>
        <span className={styles.position}>3</span>
        <img className={styles.image} src={image1} alt="" />
        <div className={styles.info}>
          <span className={styles.title}>Дымок</span>
          <span className={styles.author}>Ицык Цыпер ft. Игорь Цыба</span>
        </div>
        <span className={styles.duration}>2:19</span>
      </div>
      <div className={styles.track_wrapper}>
        <span className={styles.position}>4</span>
        <img className={styles.image} src={image1} alt="" />
        <div className={styles.info}>
          <span className={styles.title}>Пыяла</span>
          <span className={styles.author}>АИГЕЛ</span>
        </div>
        <span className={styles.duration}>3:30</span>
      </div>
      <div className={styles.track_wrapper}>
        <span className={styles.position}>5</span>
        <img className={styles.image} src={image1} alt="" />
        <div className={styles.info}>
          <span className={styles.title}>Lost Angeles</span>
          <span className={styles.author}>FRIENDLY THUG 52 NGG</span>
        </div>
        <span className={styles.duration}>1:54</span>
      </div>
      <div className={styles.track_wrapper}>
        <span className={styles.position}>6</span>
        <img className={styles.image} src={image1} alt="" />
        <div className={styles.info}>
          <span className={styles.title}>Царица</span>
          <span className={styles.author}>=ANNA ASTI</span>
        </div>
        <span className={styles.duration}>3:35</span>
      </div>
    </section>
  );
}
