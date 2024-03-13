import React from 'react';
import styles from './ThirdStep.module.scss';
import counter3 from '../../../assets/img/counter3.svg';

export default function ThirdStep() {
  return (
    <div className={styles.step_wrapper}>
      <img src={counter3} className={styles.counter} alt="" />
      <form className={styles.form}>
        <label className={styles.label} htmlFor="">
          Укажите дату выпуска*
        </label>
        <input placeholder="track_name" type="text" className={styles.input} />
        <label className={styles.label} htmlFor="">
          Укажите ссылку на клип к треку*
        </label>
        <input placeholder="label_name" type="text" className={styles.input} />

        <button className={styles.button}>Продолжить</button>
      </form>
    </div>
  );
}
