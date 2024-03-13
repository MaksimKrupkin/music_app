import React, { useState, ChangeEvent } from 'react';
import styles from './SecondStep.module.scss';
import counter2 from '../../../assets/img/counter2.svg';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import axios from 'axios';
import { addTrack } from '../../../api/requests';

const SecondStep: React.FC = () => {
  const [trackName, setTrackName] = useState<string>('');
  const [trackSelected, setTrackSelected] = useState<boolean>(false);
  const [coverSelected, setCoverSelected] = useState<boolean>(false);
  const [trackFileName, setTrackFileName] = useState<string>('');
  const [coverFileName, setCoverFileName] = useState<string>('');

  const handleTrackName = (event: ChangeEvent<HTMLInputElement>) => {
    setTrackName(event.target.value);
  };

  const handleTrackChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setTrackSelected(true);
      setTrackFileName(event.target.files[0].name);
    } else {
      setTrackSelected(false);
      setTrackFileName('');
    }
  };

  const handleCoverChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setCoverSelected(true);
      setCoverFileName(event.target.files[0].name);
    } else {
      setCoverSelected(false);
      setCoverFileName('');
    }
  };
  const isBothSelected = trackSelected && coverSelected;

  return (
    <div className={styles.step_wrapper}>
      <span className={styles.title}>Заполните данные поля</span>
      <form className={styles.form}>
        <div className={styles.inputs}>
          <div className={styles.input_wrapper1}>
            <label className={styles.label2} htmlFor="">
              Название трека*
            </label>
            <div className={styles.input1}>
              <input onChange={handleTrackName} type="text" className={styles.text_input} />
            </div>
          </div>
          <div className={styles.files}>
            <div className={styles.input_wrapper}>
              <label className={styles.label1} htmlFor="">
                Трек*
              </label>
              <div className={styles.input}>
                <span>{trackFileName || '.FLAC / .MP3 / .AAC'}</span>
                <input onChange={handleTrackChange} type="file" className={styles.file_input} />
              </div>
            </div>
            {isBothSelected && <IoIosCheckmarkCircleOutline color="white" fontSize={45} />}
            <div className={styles.input_wrapper}>
              <label className={styles.label2} htmlFor="">
                Обложка*
              </label>
              <div className={styles.input}>
                <span>{coverFileName || '.PNG / .JPG / .WEBP'}</span>
                <input onChange={handleCoverChange} type="file" className={styles.file_input} />
              </div>
            </div>
          </div>
        </div>
        <button className={styles.button}>Продолжить</button>
      </form>
    </div>
  );
};

export default SecondStep;
