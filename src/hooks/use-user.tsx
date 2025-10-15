'use client';
import { getSession } from '@/lib/auth';
import { useQuery } from '@tanstack/react-query';
import { User } from '@/model/user';

export function useUser() {
  const { data: user } = useQuery<User | null>({
    queryKey: ['user'],
    queryFn: getSession,
  });

  return { user };
}
