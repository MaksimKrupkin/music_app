import React from 'react';
import styles from './ThirdStep.module.scss';
import counter1 from '../../../assets/img/counter1.svg';

export default function ThirdStep() {
  return (
    <div className={styles.step_wrapper}>
      <img src={counter1} className={styles.counter} alt="" />
      <form className={styles.form}>
        <label className={styles.label} htmlFor="">
          Введите название*
        </label>
        <input placeholder="track_name" type="text" className={styles.input} />
        <label className={styles.label} htmlFor="">
          Введите музыкальный лейбл*
        </label>
        <input placeholder="label_name" type="text" className={styles.input} />
        <label className={styles.label} htmlFor="">
          Введите кто на фите*
        </label>
        <input placeholder="features_name" type="text" className={styles.input} />
        <button className={styles.button}>Продолжить</button>
      </form>
    </div>
  );
}
