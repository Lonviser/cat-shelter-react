import styles from './NewsCard.module.scss';

export interface NewsCardProps {
  title: string;
  date: string; 
  excerpt: string;
  className?: string; 
}

export const NewsCard = ({ title, date, excerpt, className = '' }: NewsCardProps) => {
  
  const formattedDate = new Date(date).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className={`${styles.card} ${className}`}>
      <h3 className={styles.title}>{title}</h3>
      
      <time className={styles.date} dateTime={date}>
        {formattedDate}
      </time>
      
      <p className={styles.excerpt}>{excerpt}</p>
      
      <button 
        className={styles.button}
        type="button" // ← Важно для доступности: предотвращает сабмит формы
        aria-label={`Читать новость: ${title}`} // ← Accessibility
      >
        Читать далее →
      </button>
    </article>
  );
};