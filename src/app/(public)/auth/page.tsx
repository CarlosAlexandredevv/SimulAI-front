import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/app/components/ui/tabs';
import { Card, CardContent } from '@/app/components/ui/card';
import { Logo } from '@/app/components/ui/logo';
import { SignUpTab } from '@/app/components/auth/sign-up-tab';
import { ToogleTheme } from '@/app/components/ui/toogle-theme';
import { SignInTab } from '@/app/components/auth/sign-in-tab';

export default function Auth() {
  return (
    <main className="bg-background flex flex-col h-screen w-screen items-center justify-center gap-4 relative px-4">
      <div className="absolute top-4 right-4">
        <ToogleTheme />
      </div>

      <div className="w-full max-w-md space-y-4 animate-fade-in">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="p-3 bg-gradient-primary rounded-xl">
              <Logo size={56} />
            </div>
          </div>

          <h1 className="text-3xl font-bold">Bem-vindo ao SimulAI</h1>
          <p className="text-muted-foreground">
            Entre ou crie sua conta para começar
          </p>
        </div>
      </div>
      <Card className="max-w-[500px] w-full">
        <CardContent className="flex justify-center items-center">
          <Tabs defaultValue="sign-in" className="w-[400px]">
            <TabsList className="flex justify-center items-center w-full mb-4">
              <TabsTrigger value="sign-in" className="cursor-pointer">
                Entrar
              </TabsTrigger>
              <TabsTrigger value="sign-up" className="cursor-pointer">
                Cadastrar
              </TabsTrigger>
            </TabsList>
            <TabsContent value="sign-in">
              <SignInTab />
            </TabsContent>
            <TabsContent value="sign-up">
              <SignUpTab />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </main>
  );
}
