
export interface NewsItem {
  id: number;
  title: string;
  date: string;
  content: string;
  excerpt?: string;
  image?: string;
}

export interface NewsState {
  items: NewsItem[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}