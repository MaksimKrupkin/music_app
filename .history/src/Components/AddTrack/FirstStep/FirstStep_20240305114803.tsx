import React from 'react';
import styles from './FirstStep.module.scss';
import counter1 from '../../../assets/img/counter1.svg';

export default function FirstStep() {
  return (
    <div className={styles.step_wrapper}>
      <img src={counter1} className={styles.counter} alt="" />
      <form>
        <label htmlFor="">Введите название*</label>
        <input type="text" className={styles.input} />
        <label htmlFor="">Введите музыкальный лейбл*</label>
        <input type="text" className={styles.input} />
        <label htmlFor="">Введите кто на фите*</label>
        <input type="text" className={styles.input} />
      </form>
    </div>
  );
}
