import React from 'react';

interface NewsCardProps {
  title: string;
  date: string;
  content: string;
  excerpt?: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({ title, date, content, excerpt }) => {
  const formattedDate = new Date(date).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      marginBottom: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ marginTop: 0, color: '#333' }}>{title}</h3>
      <time style={{ color: '#666', fontSize: '0.9em' }}>{formattedDate}</time>
      <p style={{ marginTop: '10px', lineHeight: '1.6' }}>{excerpt || content}</p>
      {excerpt && (
        <button style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '10px'
        }}>
          Читать далее
        </button>
      )}
    </article>
  );
};