import { z } from 'zod';

export const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().default('http://localhost:3001'),
  NEXT_PUBLIC_DASHBOARD_URL: z.string().default('http://localhost:3000'),
});

export const parsedEnv = {
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_DASHBOARD_URL: process.env.NEXT_PUBLIC_DASHBOARD_URL,
  BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
};

export const env = envSchema.parse(parsedEnv);
