import React from 'react';
import styles from './Registration.module.scss';
import logo from '../../../assets/img/logo.svg';

export default function Registration() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <a className={styles.logo}>
          <img className={styles.image} src={logo} alt="" />
          <strong>Auditer</strong>
        </a>
      </header>
    </div>
  );
}
