import React from 'react';
import styles from './HigherSidebar.module.scss';

export default function HigherSidebar() {
  return (
    <aside className={styles.higherSidebar}>
      <div className={styles.logo_wrapper}>
        <img
          className={styles.logo}
          src="https://www.figma.com/file/DkAMZV1yjS6hQwHmAZE5z6/%5BAuditer%5D?type=design&node-id=46-29&mode=dev"
          alt="Лого"
        />
        <strong className={styles.logo_text}>Auditer</strong>
      </div>
    </aside>
  );
}
