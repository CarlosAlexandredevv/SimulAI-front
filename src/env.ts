import { z } from 'zod';

export const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().default('http://localhost:3001'),
  NEXT_PUBLIC_DASHBOARD_URL: z.string().default('http://localhost:3000'),
});

export const env = envSchema.parse(process.env);
