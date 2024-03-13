import React from 'react';
import styles from './SecondStep.module.scss';
import counter2 from '../../../assets/img/counter2.svg';

export default function SecondStep() {
  return (
    <div className={styles.step_wrapper}>
      <img src={counter2} className={styles.counter} alt="" />
      <span>Добавьте в выделенные области трек и обложку </span>
      <form className={styles.form}>
        <input placeholder="label_name" type="text" className={styles.input} />
        <input placeholder="features_name" type="text" className={styles.input} />
        <button className={styles.button}>Продолжить</button>
      </form>
    </div>
  );
}
