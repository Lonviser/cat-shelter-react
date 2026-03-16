import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchNewsFromApi } from '../api/newsApi';
// Импортируем ТОЛЬКО тип (добавляем type)
import type { NewsItem } from '../../../shared/types/news';

// Определяем интерфейс состояния прямо здесь
interface NewsState {
  items: NewsItem[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Начальное состояние
const initialState: NewsState = {
  items: [],
  status: 'idle',
  error: null,
};

// Асинхронный экшен
export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async () => {
    const news = await fetchNewsFromApi();
    return news;
  }
);

// Создаем slice
const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    clearNews: (state) => {
      state.items = [];
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Что-то пошло не так';
      });
  },
});

export const { clearNews } = newsSlice.actions;
export default newsSlice.reducer;