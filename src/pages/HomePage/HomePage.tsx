// src/pages/HomePage.tsx
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux';
import { fetchNews } from '../../features/news/slices/newsSlice';
import { NewsCard } from '../../components/NewsCard/NewsCard';
import { PetCard } from '../../components/PetCard/PetCard';
import { Loader } from '../../components/Loader/Loader';
import styles from './HomePage.module.scss';

export const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items: news, status } = useAppSelector((state) => state.news);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchNews());
    }
  }, [status, dispatch]);

  const pets = [
    { id: 1, name: 'Аид', breed: 'черный ягур' },
    { id: 2, name: 'Аид', breed: 'черный ягур' },
  ];

  const successStories = [
    { id: 1, name: 'Грегори' },
    { id: 2, name: 'Пяточка' },
    { id: 3, name: 'Каркаде' },
  ];

  return (
    <div>
      {/* О проекте */}
      <section className={styles.section}>
        <h1 className={styles.title}>Проект "Кошки Вашего двора"</h1>
        <p className={styles.description}>
          "Кошки Вашего двора" - это проект нескольких волонтеров, посвящённый 
          воспитанию новых животных и их сохранению. Этот проект был создан в 2020 году.
        </p>
      </section>

      {/* Новости */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Наши новости</h2>
        
        {status === 'loading' ? (
          <Loader />
        ) : (
          <div className={styles.newsGrid}>
            {news.slice(0, 3).map((item) => (
              <NewsCard
                key={item.id}
                title={item.title}
                date={item.date}
                excerpt={item.excerpt || item.content.substring(0, 100) + '...'}
              />
            ))}
          </div>
        )}
      </section>

      {/* Пожертвования */}
      <section className={styles.section}>
        <div className={styles.donationBlock}>
          <h2>Поддержите нас, чтобы мы смогли спасти больше жизней</h2>
          <button>Сделать пожертвование</button>
        </div>
      </section>

      {/* Подопечные */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Наши подопечные</h2>
        <div className={styles.petsGrid}>
          {pets.map((pet) => (
            <PetCard key={pet.id} name={pet.name} breed={pet.breed} />
          ))}
        </div>
      </section>

      {/* Истории успеха */}
      <section className={styles.section}>
        <h2 className={`${styles.sectionTitle} ${styles.centered}`}>
          Радуемся за наших котиков
        </h2>
        <p className={styles.description}>
          А здесь вы можете увидеть главный результат нашей совместной помощи котикам.
          Эти фото доказывают: шанс на счастье есть у каждого хвостика!
        </p>
        <div className={styles.successGrid}>
          {successStories.map((pet) => (
            <div key={pet.id} className={styles.successCard}>
              <div className={styles.imagePlaceholder}>
                Фото
              </div>
              <h3>{pet.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};