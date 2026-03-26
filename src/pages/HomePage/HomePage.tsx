// src/pages/HomePage.tsx
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux';
import { fetchNews } from '../../features/news/slices/newsSlice';
import { NewsCard } from '../../components/NewsCard/NewsCard';
import { PetCard } from '../../components/PetCard/PetCard';
import { Loader } from '../../components/Loader/Loader';
import styles from './HomePage.module.scss';
import catAbout from '../../assets/img/catAbout.png';
import { Link } from 'react-router-dom';

export const HomePage= () => {
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
    <section className={styles.sectionMain}>
        <h1 className={styles.title}>Проект "Кошки Вашего двора"</h1>
        <p className={styles.description}>
            "Кошки Вашего двора" - это проект нескольких волонтеров, которые помогают животным в нужное время.
        </p>
        <div className={styles.btnMain}>
            Найти друга
        </div>
    </section>

    {/* О проекте */}
    <section className={styles.about}>
        <div className={styles.aboutContent}>
            <div className={styles.aboutInfo}>
                <div className={styles.aboutInfoText}>
                  <h2 className={styles.aboutTitle}>Проект "Кошки Вашего двора"</h2>
                  <p className={styles.aboutDescription}>"Кошки Вашего двора» - это проект нескольких волонтеров,
                      посвятивших свою жизнь спасению животных, и представляет собой сообщество, организовавшее частный
                      "приют-передержку", в котором содержатся кошки, попавшие в беду или пострадавшие на улицах города,
                      принятые нами на лечение и выхаживание, с последующим пристройством в добрые руки (по возможности).
                      Местонахождение – с. Печерск Смоленской области.В своей работе мы стараемся сочетать клинический
                      профессиональный подход к лечению животных с волонтерской эмпатией спасателей: если после спасения
                      даже у тяжелого животного есть шанс, то мы вместе с врачами сражаемся за его жизнь до последнего.
                  </p>
                </div>
                <div className={styles.aboutInfoLink}>
                  <Link to="/about-us" className={styles.link}>Подробнее о нас</Link>
                </div>
            </div>
            <div className={styles.aboutImg}>
                <img src={catAbout} alt="Кот" className={styles.aboutImg} />
            </div>
        </div>
    </section>

    <div className={styles.container}>
        {/* Новости */}
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Наши новости</h2>
            {status === 'loading' ? (
            <Loader />
            ) : (
            <div className={styles.newsGrid}>
                {news.slice(0, 3).map((item) => (
                <NewsCard key={item.id} title={item.title} date={item.date} excerpt={item.excerpt ||
                    item.content.substring(0, 100) + '...' } />
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
                <PetCard key={pet.id} name={pet.name} age={0} />
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
</div>
);
};