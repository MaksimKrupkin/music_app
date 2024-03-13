import React, { useState, ChangeEvent } from 'react';
import styles from './SecondStep.module.scss';
import counter2 from '../../../assets/img/counter2.svg';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

const SecondStep: React.FC = () => {
  const [trackSelected, setTrackSelected] = useState<boolean>(false);
  const [coverSelected, setCoverSelected] = useState<boolean>(false);

  // Функции обработки изменения файла в инпуте
  const handleTrackChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setTrackSelected(true);
      console.log('treckSelected');
    } else {
      setTrackSelected(false);
    }
  };

  const handleCoverChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setCoverSelected(true);
      console.log('treckSelected');
    } else {
      setCoverSelected(false);
    }
  };

  return (
    <div className={styles.step_wrapper}>
      <img src={counter2} className={styles.counter} alt="" />
      <span className={styles.title}>Добавьте в выделенные области трек и обложку </span>
      <form className={styles.form}>
        <div className={styles.inputs}>
          <div className={styles.input_wrapper}>
            <label className={styles.label1} htmlFor="">
              Трек*
            </label>
            {
              <input
                onChange={handleTrackChange}
                placeholder=".FLAC / .MP3 / .AAC"
                type="file"
                className={styles.input}
              />
            }
            {trackSelected && <IoIosCheckmarkCircleOutline color="white" fontSize={20} />}
          </div>
          <div className={styles.input_wrapper}>
            <label className={styles.label2} htmlFor="">
              Обложка*
            </label>
            <input
              onChange={handleCoverChange}
              placeholder=".PNG / .JPG / .WEBP  "
              type="file"
              className={styles.input}
            />
          </div>
        </div>
        <button className={styles.button}>Продолжить</button>
      </form>
    </div>
  );
};

export default SecondStep;
