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
                <input type="text" />
                <div>
                    <a href="">+79303025121</a>
                    <a href="">+79935662070</a>
                    <img src={vk} alt="Вконтакте" className={styles.vk} />
                    <div>
                        помочь
                    </div>
                </div>
            </div>
            <nav className={styles.nav}>
                <NavLink 
                to="/"  
                className={({ isActive }) => isActive ? styles.active : ''}
                >
                Главная
                </NavLink>
                
                <NavLink 
                to="/catalog" 
                className={({ isActive }) => isActive ? styles.active : ''}
                >
                Каталог
                </NavLink>
                
                <NavLink 
                to="/news" 
                className={({ isActive }) => isActive ? styles.active : ''}
                >
                Новости
                </NavLink>
            </nav>
        </div>
      </div>
    </header>
  );
};