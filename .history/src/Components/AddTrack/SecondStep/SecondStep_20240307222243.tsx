import React from 'react';
import styles from './SecondStep.module.scss';
import counter2 from '../../../assets/img/counter2.svg';

export default function SecondStep() {
  return (
    <div className={styles.step_wrapper}>
      <img src={counter2} className={styles.counter} alt="" />
      <span className={styles.title}>Добавьте в выделенные области трек и обложку </span>
      <form className={styles.form}>
        <div className={styles.inputs}>
          <div className={styles.input_wrapper}>
            <label className={styles.label} htmlFor="">
              Трек*
            </label>
            <input placeholder=".FLAC/ .MP3" type="file" className={styles.input} />
          </div>
          <div className={styles.input_wrapper}>
            <label className={styles.label} htmlFor="">
              Обложка*
            </label>
            <input placeholder=".PNG/ .JPG / .TIFF  " type="file" className={styles.input} />
          </div>
        </div>
        <button className={styles.button}>Продолжить</button>
      </form>
    </div>
  );
}
