import { createBrowserRouter } from "react-router-dom";

const HomePage = () => <div>Главная страница</div>;
const CatalogPage = () => <div>Каталог котиков</div>;
const NewsPage = () => <div>Новости</div>;
const NotFoundPage = () => <div>404 - Страница не найдена</div>;


export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: '/catalog',
        element: <CatalogPage />
    },
    {
        path: '/news',
        element: <NewsPage />
    }
])