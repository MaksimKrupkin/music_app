import React from 'react';
import styles from './Charts.module.scss';

export default function Charts() {
  return (
    <section className={styles.charts}>
      <h2 className={styles.title}>Чарт BY</h2>
      <a className={styles.link}>Смотреть все</a>
      <div className={styles.track_wrapper}></div>
      <div className={styles.track_wrapper}></div>

      <div className={styles.track_wrapper}></div>

      <div className={styles.track_wrapper}></div>

      <div className={styles.track_wrapper}></div>
    </section>
  );
}
