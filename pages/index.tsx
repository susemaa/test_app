import { useEffect, useState } from 'react';
import axios from 'axios';
import MainMenu from '@/src/Components/MainMenu';
import Skeleton from '@/src/Components/Skeleton';
import type { Data } from '../src/types';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Data|null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:3000/api/auth', {
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
