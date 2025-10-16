'use client';
import { Logo } from '../ui/logo';
import Link from 'next/link';
import { BookOpen, LayoutDashboard, LogOut, Trophy, User } from 'lucide-react';
import { Button } from '../ui/button';
import { serverSignOut } from '@/lib/auth';
const navItems = [
  { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/simulations', icon: BookOpen, label: 'Simulados' },
  { path: '/ranking', icon: Trophy, label: 'Ranking' },
  { path: '/profile', icon: User, label: 'Perfil' },
];

const isActive = (path: string) => location.pathname === path;

export function Header() {
  return (
    <header className="w-full border-b border-border">
      <div className="flex items-center justify-around container mx-auto px-4">
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
        <div className="flex items-center gap-2">
          <Button>
            <User />
          </Button>
          <Button onClick={() => serverSignOut()}>
            <LogOut />
          </Button>
        </div>
      </div>
    </header>
  );
}
