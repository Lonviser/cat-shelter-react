// src/components/Layout/Layout.tsx
import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <header style={{ padding: '20px', background: '#f0f0f0' }}>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <Link to="/">Главная</Link>
          <Link to="/catalog">Каталог</Link>
          <Link to="/news">Новости</Link>
        </nav>
      </header>
      
      <main style={{ padding: '20px' }}>
        <Outlet /> {/* Здесь будут рендериться страницы */}
      </main>
      
      <footer style={{ padding: '20px', background: '#f0f0f0', marginTop: '20px' }}>
        © 2026 Кошки Вашего двора
      </footer>
    </div>
  );
};