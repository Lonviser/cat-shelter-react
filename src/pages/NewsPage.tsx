// src/pages/NewsPage.tsx
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../shared/hooks/redux';
import { fetchNews } from '../features/news/slices/newsSlice';
import { NewsCard } from '../features/news/ui/NewsCard';
import { Loader } from '../components/Loader/Loader';

export const NewsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items: news, status, error } = useAppSelector((state) => state.news);

  // Загружаем новости при монтировании компонента
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchNews());
    }
  }, [status, dispatch]);

  // Отображаем загрузку
  if (status === 'loading') {
    return <Loader />;
  }

  // Отображаем ошибку
  if (status === 'failed') {
    return (
      <div style={{
        padding: '20px',
        backgroundColor: '#ffebee',
        color: '#c62828',
        borderRadius: '4px',
        textAlign: 'center'
      }}>
        <h3>Ошибка загрузки новостей</h3>
        <p>{error}</p>
        <button 
          onClick={() => dispatch(fetchNews())}
          style={{
            backgroundColor: '#c62828',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Попробовать снова
        </button>
      </div>
    );
  }

  // Отображаем новости
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2em', color: '#333', marginBottom: '30px' }}>
        Новости приюта
      </h1>
      
      {news.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666' }}>
          Новостей пока нет
        </p>
      ) : (
        news.map((item) => (
          <NewsCard
            key={item.id}
            title={item.title}
            date={item.date}
            content={item.content}
            excerpt={item.excerpt}
          />
        ))
      )}
    </div>
  );
};