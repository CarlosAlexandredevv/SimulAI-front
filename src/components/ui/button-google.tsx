'use client';
import { signInWithGoogle } from '@/lib/auth';
import { Button } from './button';

export function ButtonGoogle() {
  return <Button onClick={signInWithGoogle}>Sign In</Button>;
}
