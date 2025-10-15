'use client';

import { createAuthClient } from 'better-auth/client';
import { env } from '@/env';
import { api } from './axios';
import { toast } from 'sonner';
import { translateResponse } from '@/utils/translate-response';

interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
  message?: string;
}

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
    await api.post('/auth/sign-up/email', {
      name,
      email,
      password,
    });
    toast.success('Cadastro realizado com sucesso');
  } catch (error: unknown) {
    const translatedError = translateResponse(error as ApiError);
    toast.error(translatedError || 'Erro ao cadastrar');
  }
}

export async function signInWithEmail(email: string, password: string) {
  try {
    await api.post('/auth/sign-in/email', {
      email,
      password,
    });
    toast.success('Login realizado com sucesso');
  } catch (error: unknown) {
    const translatedError = translateResponse(error as ApiError);
    toast.error(translatedError || 'Erro ao entrar');
  }
}

export function serverSignOut() {
  auth.signOut();
}
