import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom'; 
import logo from '@/assets/img/logo.svg';
import vk from '@/assets/img/vk.svg';

export const Header = () => {
  return (
    <header className={styles.header}>

    <div className={styles.headerContainer}>
        <img src={logo} alt="Логотип кошки вашего двора" className={styles.logo} />
        <div className={styles.headerMain}>
            <div className={styles.header1}>
                <input placeholder="Поиск" className={styles.search} type="text" />
                <div className={styles.contacts}>
                    <a href="">+79303025121</a>
                    <a href="">+79935662070</a>
                    <img src={vk} alt="Вконтакте" className={styles.vk} />
                    <div className={styles.helpBtn}>
                        помочь
                    </div>
                </div>
            </div>
            <nav className={styles.nav}>
                <NavLink 
                    to="/about-us"  
                    className={({ isActive }) => isActive ? styles.active : ''}
                    >
                    О НАС
                </NavLink>
                <NavLink 
                    to="/help"  
                    className={({ isActive }) => isActive ? styles.active : ''}
                    >
                    ПОМОЧЬ
                </NavLink>
                <NavLink 
                    to="/get-cat"  
                    className={({ isActive }) => isActive ? styles.active : ''}
                    >
                    ВЗЯТЬ КОТИКА
                </NavLink>
                <NavLink 
                    to="/blog"  
                    className={({ isActive }) => isActive ? styles.active : ''}
                    >
                    БЛОГ
                </NavLink>
                <NavLink 
                    to="/home-hospital"  
                    className={({ isActive }) => isActive ? styles.active : ''}
                    >
                    ДОМАШНИЙ СТАЦИОНАР
                </NavLink>
                 <NavLink 
                    to="/reviews"  
                    className={({ isActive }) => isActive ? styles.active : ''}
                    >
                    ОТЗЫВЫ
                </NavLink>

            </nav>
        </div>
      </div>
    </header>
  );
};