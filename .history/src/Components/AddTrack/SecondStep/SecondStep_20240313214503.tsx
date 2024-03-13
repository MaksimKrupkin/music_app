import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './SecondStep.module.scss';
import counter2 from '../../../assets/img/counter2.svg';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import axios from 'axios';

const SecondStep: React.FC = () => {
  const [trackName, setTrackName] = useState<string>('');
  const [trackSelected, setTrackSelected] = useState<boolean>(false);
  const [coverSelected, setCoverSelected] = useState<boolean>(false);
  const [trackFile, setTrackFile] = useState<File | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);

  const handleTrackName = (event: ChangeEvent<HTMLInputElement>) => {
    setTrackName(event.target.value);
  };

  const handleTrackChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setTrackSelected(true);
      setTrackFile(event.target.files[0]);
    } else {
      setTrackSelected(false);
      setTrackFile(null);
    }
  };

  const handleCoverChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setCoverSelected(true);
      setCoverFile(event.target.files[0]);
    } else {
      setCoverSelected(false);
      setCoverFile(null);
    }
  };
  const isBothSelected = trackSelected && coverSelected && trackName;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('Title', trackName);
    if (trackFile) {
      formData.append('AudioFile', trackFile);
    }
    if (coverFile) {
      formData.append('CoverFile', coverFile);
    }

    const ADD_TRACK_URL = 'http://localhost:5238/tracks';
    const userString = localStorage.getItem('user');
    let token = null;

    if (userString) {
      const user = JSON.parse(userString);
      token = user.token;
    }

    try {
      const response = await axios.post(ADD_TRACK_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: token ? `Bearer ${token}` : undefined,
        },
      });
      console.log('Ответ от сервера:', response.data);
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error);
    }
  };

  return (
    <div className={styles.step_wrapper}>
      <span className={styles.title}>Заполните данные поля</span>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <div className={styles.input_wrapper1}>
            <label className={styles.label2} htmlFor="">
              Название трека*
            </label>
            <div className={styles.input1}>
              <input
                onChange={handleTrackName}
                type="text"
                name="Title"
                className={styles.text_input}
              />
            </div>
          </div>
          <div className={styles.files}>
            <div className={styles.input_wrapper}>
              <label className={styles.label1} htmlFor="">
                Трек*
              </label>
              <div className={styles.input}>
                <span>{trackFile ? trackFile.name : '.FLAC / .MP3 / .AAC'}</span>
                <input
                  onChange={handleTrackChange}
                  accept="audio/*, .mp3, .flac, .aac"
                  name="AudioFile"
                  type="file"
                  className={styles.file_input}
                />
              </div>
            </div>
            {isBothSelected && <IoIosCheckmarkCircleOutline color="white" fontSize={45} />}
            <div className={styles.input_wrapper}>
              <label className={styles.label2} htmlFor="">
                Обложка*
              </label>
              <div className={styles.input}>
                <span>{coverFile ? coverFile.name : '.PNG / .JPG / .WEBP'}</span>
                <input
                  onChange={handleCoverChange}
                  name="CoverFile"
                  type="file"
                  className={styles.file_input}
                  accept="image/*, .png, .jpg, .webp"
                />
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className={styles.button}>
          Продолжить
        </button>
      </form>
    </div>
  );
};

export default SecondStep;
