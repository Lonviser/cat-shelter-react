import { mockNews } from "../mocks/news";

export async function apiGet(endpoint: string){
    try{
        const response = await fetch(`https://your-backend.ru/api${endpoint}`);

        if(!response.ok){
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const data = await response.json;

        return data;
    }catch(error){
        console.error('Ошибка при запросе', error);
        throw error;
    }
}

export const fetchNewsFromApi = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockNews;
};