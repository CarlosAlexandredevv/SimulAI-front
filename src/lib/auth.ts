'use client';

import { createAuthClient } from 'better-auth/client';
import { env } from '@/env';
import { api } from './axios';
import { toast } from 'sonner';

export const auth = createAuthClient({
  baseURL: env.NEXT_PUBLIC_API_URL,
});

export function signInWithGoogle() {
  auth.signIn.social({
    provider: 'google',
  });
}

export async function signUp(email: string, name: string, password: string) {
  try {
    api.post('/auth/sign-up/email', {
      name,
      email,
      password,
    });
    toast.success('Cadastro realizado com sucesso');
  } catch (error) {
    toast.error((error as string) || 'Erro ao cadastrar');
  }
}

export function serverSignOut() {
  auth.signOut();
}
