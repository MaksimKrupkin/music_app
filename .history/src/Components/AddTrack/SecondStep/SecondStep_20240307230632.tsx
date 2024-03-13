import React, { useState, ChangeEvent } from 'react';
import styles from './SecondStep.module.scss';
import counter2 from '../../../assets/img/counter2.svg';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

const SecondStep: React.FC = () => {
  const [trackSelected, setTrackSelected] = useState<boolean>(false);
  const [coverSelected, setCoverSelected] = useState<boolean>(false);
  const [trackFileName, setTrackFileName] = useState<string>('');
  const [coverFileName, setCoverFileName] = useState<string>('');

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

  return (
    <div className={styles.step_wrapper}>
      <img src={counter2} className={styles.counter} alt="" />
      <span className={styles.title}>Добавьте в выделенные области трек и обложку </span>
      <form className={styles.form}>
        <div className={styles.inputs}>
          <div className={styles.input_wrapper}>
            <label className={styles.label1} htmlFor="trackInput">
              Трек*
            </label>
            <input
              id="trackInput"
              type="file"
              onChange={handleTrackChange}
              className={styles.input}
            />
            <label htmlFor="trackInput" className={styles.custom_file_label}>
              <span>{trackFileName || '.FLAC / .MP3 / .AAC'}</span>
              {trackSelected && <IoIosCheckmarkCircleOutline color="white" fontSize={20} />}
            </label>
          </div>
          <div className={styles.input_wrapper}>
            <label className={styles.label2} htmlFor="coverInput">
              Обложка*
            </label>
            <input
              id="coverInput"
              type="file"
              onChange={handleCoverChange}
              className={styles.input}
            />
            <label htmlFor="coverInput" className={styles.custom_file_label}>
              <span>{coverFileName || '.PNG / .JPG / .WEBP'}</span>
              {coverSelected && <IoIosCheckmarkCircleOutline color="white" fontSize={20} />}
            </label>
          </div>
        </div>
        <button className={styles.button}>Продолжить</button>
      </form>
    </div>
  );
};

export default SecondStep;
