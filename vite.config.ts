import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // ← 1. Импортируем модуль path

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // ← 2. Добавляем алиас: @ = папка src
      '@': path.resolve(__dirname, './src'),
    },
  },
});