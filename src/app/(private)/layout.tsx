import { Header } from '@/components/shared/header';

interface PrivateLayoutProps {
  children: React.ReactNode;
}
export default function PrivateLayout({ children }: PrivateLayoutProps) {
  return (
    <div className="bg-background">
      <Header />
      {children}
    </div>
  );
}
