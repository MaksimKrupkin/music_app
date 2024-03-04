import React from 'react';
import styles from './HigherSidebar.module.scss';
import logo from '../../assets/img/logo.svg';

export default function HigherSidebar() {
  return (
    <aside className={styles.higherSidebar}>
      <div className={styles.logo_wrapper}>
        <img className={styles.logo} src={logo} alt="Лого" />
        <strong className={styles.logo_text}>Auditer</strong>
      </div>
    </aside>
  );
}
