import { CardTypeTest } from '@/components/simulations/new-simulation/card-type-test';

export default function NewSimulation() {
  return (
    <main className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 py-8 max-w-7xl mx-auto">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold mb-2 text-primary ">
            Gerar Novo Simulado
          </h1>
          <p className="text-muted-foreground">
            Configure seu simulado personalizado com IA
          </p>
        </div>
        <CardTypeTest />
      </div>
    </main>
  );
}
