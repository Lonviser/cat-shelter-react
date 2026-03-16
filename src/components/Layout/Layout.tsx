import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from './Layout.module.scss';

export const Layout = () => {
  const location = useLocation();
  
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link to="/" className={location.pathname === '/' ? styles.active : ''}>
            Главная
          </Link>
          <Link to="/catalog" className={location.pathname === '/catalog' ? styles.active : ''}>
            Каталог
          </Link>
          <Link to="/news" className={location.pathname === '/news' ? styles.active : ''}>
            Новости
          </Link>
        </nav>
      </header>
      
      <main className={styles.main}>
        <Outlet />
      </main>
      
      <footer className={styles.footer}>
        © 2025 Кошки Вашего двора
      </footer>
    </div>
  );
};