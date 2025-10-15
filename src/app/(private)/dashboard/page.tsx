'use client';
import { useUser } from '@/hooks/use-user';
import Image from 'next/image';
import { Button } from '@/app/components/ui/button';
import { serverSignOut } from '@/lib/auth';

export default function Dashboard() {
  const { user } = useUser();
  return (
    <div>
      <h1>Seja bem vindo, {user?.name}</h1>
      <p>Você possui {user?.credits} créditos</p>
      <p>Seu plano é {user?.plansEnum}</p>
      <p>Você foi criado em {user?.createdAt}</p>
      <p>Você foi atualizado em {user?.updatedAt}</p>
      <p>
        Você possui{' '}
        {user?.emailVerified ? 'email verificado' : 'email não verificado'}
      </p>

      {user?.image && (
        <Image
          src={user?.image}
          alt={user?.name || ''}
          width={100}
          height={100}
        />
      )}
      <p>
        Você possui {user?.id ? 'id' : 'id não possui'} {user?.id}
      </p>
      <p>
        Você possui {user?.name ? 'name' : 'name não possui'} {user?.name}
      </p>
      <Button className="text-red-500" onClick={() => serverSignOut()}>
        Sair
      </Button>
    </div>
  );
}
