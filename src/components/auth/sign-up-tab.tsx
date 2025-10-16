'use client';

import { z } from 'zod';
import { Form, FormField, FormItem } from '../ui/form';
import { useForm } from 'react-hook-form';
import { FormLabel, FormControl, FormMessage } from '../ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from '../ui/input-group';
import { Mail, User, Lock, Eye } from 'lucide-react';
import ButtonGoogle from './button-google';
import { signInWithGoogle, signUp } from '@/lib/auth';
import { useState } from 'react';
import { Button } from '../ui/button';
export const signUpSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.email('Insira um email válido').min(1, 'Email é obrigatório'),
  password: z
    .string()
    .min(8, 'Senha é obrigatória e deve ter pelo menos 8 caracteres'),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;

export function SignUpTab() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: SignUpSchema) {
    setIsSubmitting(true);
    try {
      await signUp(data.email, data.name, data.password);
    } catch {
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <InputGroup>
                  <InputGroupInput
                    placeholder="John Doe"
                    {...field}
                    type="text"
                  />
                  <InputGroupAddon>
                    <User />
                  </InputGroupAddon>
                </InputGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
            {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
          </Button>
          <span className="text-sm text-muted-foreground">ou continue com</span>
          <ButtonGoogle
            disabled={isSubmitting}
            type="button"
            className="cursor-pointer"
            onClick={() => signInWithGoogle()}
          />
        </div>
      </form>
    </Form>
  );
}
