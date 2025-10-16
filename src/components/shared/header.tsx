'use client';
import { Logo } from '../ui/logo';
import Link from 'next/link';
import {
  BookOpen,
  LayoutDashboard,
  LogOut,
  Trophy,
  User,
  Coins,
  Zap,
} from 'lucide-react';
import { Button } from '../ui/button';
import { serverSignOut } from '@/lib/auth';
import { useUser } from '@/hooks/use-user';
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '../ui/tooltip';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { ToogleTheme } from '../ui/toogle-theme';
const navItems = [
  { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/simulations', icon: BookOpen, label: 'Simulados' },
  { path: '/ranking', icon: Trophy, label: 'Ranking' },
  { path: '/profile', icon: User, label: 'Perfil' },
];

const isActive = (path: string) => location.pathname === path;

export function Header() {
  const { user } = useUser();
  const firstName = user?.name?.trim()?.split(' ')?.[0] || 'Usuário';

  const firstNameInitial = firstName.charAt(0)?.toUpperCase();

  return (
    <header className="w-full border-b border-border">
      <div className="flex items-center sm:justify-around justify-between container mx-auto pr-4">
        <Logo />
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <Button
                variant={isActive(item.path) ? 'default' : 'ghost'}
                className="gap-2"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/50 border border-border">
                  <Coins className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-sm">
                    {user?.credits ?? 0}
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Créditos disponíveis para IA</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Link
            href="/profile"
            className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent/50 transition-colors"
          >
            <Avatar className="w-8 h-8">
              <AvatarImage
                src={user?.image || undefined}
                alt={user?.name || 'Avatar do usuário'}
                referrerPolicy="no-referrer"
                className="object-cover"
              />
              <AvatarFallback className="bg-primary text-primary-foreground">
                {firstNameInitial}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium hidden lg:inline">
              {firstName}
            </span>
          </Link>

          <Link href="simulations/new-simulation">
            <Button className="gap-2">
              <Zap className="w-4 h-4" />
              <span className="hidden sm:inline">Novo Simulado</span>
            </Button>
          </Link>
          <ToogleTheme />
          <Button
            className="cursor-pointer hover:bg-transparent hover:text-destructive"
            variant="outline"
            size="icon"
            onClick={() => serverSignOut()}
          >
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <nav className="md:hidden border-y border-border bg-card/50 backdrop-blur sticky top-[73px] z-40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-around">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  className="flex flex-col gap-1 h-auto py-2 px-3 text-xs"
                  variant={isActive(item.path) ? 'default' : 'ghost'}
                  size="sm"
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
