import { useEffect, useState } from 'react';
import axios from 'axios';
import MainMenu from '@/src/Components/MainMenu';
import Skeleton from '@/src/Components/Skeleton';
import type { Data } from '@/src/types';

const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://test-app-tau-vert.vercel.app/api'
  : 'http://localhost:3000/api';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Data|null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${API_BASE_URL}/auth`, {
          login: 'admin',
          password: 'admin',
        });
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (loading || !data)
    return(<Skeleton />)
  return (<MainMenu data={data} />)
}
