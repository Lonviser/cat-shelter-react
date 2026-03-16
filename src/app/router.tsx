// src/app/router.tsx
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { NewsPage } from '../pages/NewsPage'; 

// Заглушки для других страниц
const HomePage = () => <div>Главная страница</div>;
const CatalogPage = () => <div>Каталог котиков</div>;
const NotFoundPage = () => <div>404 - Страница не найдена</div>;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'catalog',
        element: <CatalogPage />,
      },
      {
        path: 'news',
        element: <NewsPage />, 
      },
    ],
  },
]);