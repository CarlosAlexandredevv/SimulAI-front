'use client';
import { api } from '@/lib/axios';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    async function getSession() {
      const response = await api.get('users/me');
      console.log(response.data);
    }
    getSession();
  }, []);

  return <div></div>;
}
