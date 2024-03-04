import React from 'react';
import styles from './UserProfilePage.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import prime from '../../assets/img/prime.png';
import button1 from '../../assets/img/button1.svg';
import button2 from '../../assets/img/button2.svg';
import button3 from '../../assets/img/button3.svg';
import button4 from '../../assets/img/button4.svg';
import rightArrow from '../../assets/img/rightArrow2.svg';
import profilePic from '../../assets/img/profilePic.png';
import add from '../../assets/img/add.svg';
import exit from '../../assets/img/exit.svg';

export default function UserProfilePage() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link to={'/'} className={styles.logo}>
          <img className={styles.image} src={logo} alt="" />
          <strong className={styles.text}>Auditer</strong>
        </Link>
      </header>
      <main className={styles.window_wrapper}>
        <div className={styles.subscribe_wrapper}>
          <div className={styles.left}>
            <div className={styles.text}>
              Оформи подписку на 1 месяц бесплатно. <br /> И открой доступ к безграничным <br />{' '}
              возможностям, привелегиям <br /> и множеству новинок.
            </div>
            <div className={styles.button_wrapper}>
              <div className={styles.button}>Подробнее</div>
            </div>
          </div>
          <div className={styles.right}>
            <img className={styles.prime} src={prime} alt="" />
          </div>
        </div>
        <section className={styles.second_level}>
          <div className={styles.settings_wrapper}>
            <h2 className={styles.title}>Общие настройки</h2>
            <div className={styles.list_wrapper}>
              <div className={styles.item}>
                <img className={styles.image} src={button1} alt="" />
                <span className={styles.text}>Изменить способы входа</span>
                <img src={rightArrow} className={styles.image2} alt="" />
              </div>
              <div className={styles.item}>
                <img className={styles.image} src={button2} alt="" />
                <span className={styles.text}>Безопасность и конфиденциальность</span>
                <img src={rightArrow} className={styles.image2} alt="" />
              </div>
              <div className={styles.item}>
                <img className={styles.image} src={button3} alt="" />
                <span className={styles.text}>Настройка платежей</span>
                <img src={rightArrow} className={styles.image2} alt="" />
              </div>
              <div className={styles.item}>
                <img className={styles.image} src={button4} alt="" />
                <span className={styles.text}>Установить код-пароль</span>
                <img src={rightArrow} className={styles.image2} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.profile_wrapper}>
            <div className={styles.top}>
              <img className={styles.profilePic} src={profilePic} alt="" />
              <div className={styles.info}>
                <div className={styles.name}>
                  Kevin <br /> Doe
                </div>
                <div className={styles.email}>@kevin.doe33</div>
              </div>
              <img className={styles.exit} src={exit} alt="" />
            </div>
            <div className={styles.bottom}>
              <div className={styles.button_wrapper}>
                <div className={styles.button}>Моя подписка</div>
              </div>
              <div className={styles.button_wrapper}>
                <div className={styles.button}>Изменить профиль</div>
              </div>{' '}
              <div className={styles.button_wrapper}>
                <div className={styles.button}>Сменить профиль</div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.questions_wrapper}>
          <h2>Часто задаваемые вопросы</h2>
          <div className={styles.questions}>
            <div className={styles.item}>
              <span className={styles.text}>Как работает пробная подписка на Auditer Prime?</span>
              <img src={add} className={styles.add} alt="" />
            </div>{' '}
            <div className={styles.item}>
              <span className={styles.text}>
                Как использовать один аккаунт на разных устройствах?
              </span>
              <img src={add} className={styles.add} alt="" />
            </div>{' '}
            <div className={styles.item}>
              <span className={styles.text}>Как ?отменить Prime подписку?</span>
              <img src={add} className={styles.add} alt="" />
            </div>{' '}
            <div className={styles.item}>
              <span className={styles.text}>Можно ли слушать треки в режиме оффлайн?</span>
              <img src={add} className={styles.add} alt="" />
            </div>{' '}
            <div className={styles.item}>
              <span className={styles.text}>Как начать карьеру исполнителя вместе с Aiditer?</span>
              <img src={add} className={styles.add} alt="" />
            </div>{' '}
            <div className={styles.item}>
              <span className={styles.text}>Какие преимущества есть у бесплатной подписки?</span>
              <img src={add} className={styles.add} alt="" />
            </div>
            <div className={styles.item}>
              <span className={styles.text}>Как работает система подборка музыки?</span>
              <img src={add} className={styles.add} alt="" />
            </div>{' '}
          </div>
        </section>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
