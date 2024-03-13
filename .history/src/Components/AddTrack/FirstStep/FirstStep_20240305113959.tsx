import React from 'react';
import styles from './FirstStep.module.scss';
import counter1 from '../../../assets/img/counter1.svg';

export default function FirstStep() {
  return (
    <div className={styles.step_wrapper}>
      <img src={counter1} className={styles.counter} alt="" />
    </div>
  );
}
