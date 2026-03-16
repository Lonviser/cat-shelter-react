// src/features/news/api/newsApi.ts
import type { NewsItem } from '../../../shared/types/news'; // import type!
import { mockNews } from '../../../shared/mocks/news';

export const fetchNewsFromApi = async (): Promise<NewsItem[]> => {
  // Имитируем задержку сети
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Просто возвращаем моковые данные
  return mockNews;
};