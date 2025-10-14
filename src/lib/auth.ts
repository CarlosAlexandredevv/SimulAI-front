'use client';

import { createAuthClient } from 'better-auth/client';
import { env } from '@/env';

export const auth = createAuthClient({
  baseURL: env.NEXT_PUBLIC_API_URL,
});

export function signInWithGoogle() {
  auth.signIn.social({
    provider: 'google',
  });
}

export function serverSignOut() {
  auth.signOut();
}
