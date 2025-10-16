'use client';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { signInWithEmail } from '@/lib/auth';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '../ui/form';
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from '../ui/input-group';
import { Mail, Lock, Eye } from 'lucide-react';
import ButtonGoogle from './button-google';
import { signInWithGoogle } from '@/lib/auth';
import { Button } from '../ui/button';

export const signInSchema = z.object({
  email: z.email('Insira um email válido'),
  password: z.string().min(1, 'Senha é obrigatória'),
});

export type SignInSchema = z.infer<typeof signInSchema>;

export function SignInTab() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: '', password: '' },
  });

  async function onSubmit(data: SignInSchema) {
    setIsSubmitting(true);
    try {
      await signInWithEmail(data.email, data.password);
    } catch {
      // O erro já é tratado na função signInWithEmail
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <InputGroup>
                  <InputGroupInput
                    placeholder="john.doe@example.com"
                    type="email"
                    {...field}
                  />
                  <InputGroupAddon>
                    <Mail />
                  </InputGroupAddon>
                </InputGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <InputGroup>
                  <InputGroupInput
                    placeholder="********"
                    type={showPassword ? 'text' : 'password'}
                    {...field}
                  />
                  <InputGroupAddon>
                    <Lock />
                  </InputGroupAddon>
                  <InputGroupAddon align="inline-end">
                    <Eye onClick={() => setShowPassword(!showPassword)} />
                  </InputGroupAddon>
                </InputGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-4 items-center">
          <Button
            disabled={isSubmitting}
            type="submit"
            className="cursor-pointer w-full py-6"
          >
            {isSubmitting ? 'Entrando...' : 'Entrar'}
          </Button>
          <span className="text-sm text-muted-foreground">ou continue com</span>
          <ButtonGoogle
            disabled={isSubmitting}
            type="button"
            onClick={() => signInWithGoogle()}
          />
        </div>
      </form>
    </Form>
  );
}
