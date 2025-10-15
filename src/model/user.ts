export interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string | null;
  credits: number;
  plansEnum: PlansEnum;
  createdAt: string;
  updatedAt: string;
}

enum PlansEnum {
  FREEMIUM = 'freemium',
  PREMIUM = 'premium',
  ULTIMATE = 'ultimate',
}
