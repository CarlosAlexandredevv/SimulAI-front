import { CardTypeTest } from '@/components/simulations/new-simulation/card-type-test';

export default function NewSimulation() {
  return (
    <main className="w-full min-h-screen flex  flex-col gap-4 px-4 py-8 max-w-7xl mx-auto">
      <div>
        <h1 className="text-4xl font-semibold mb-2 text-primary ">
          Gerar Novo Simulado
        </h1>
        <p className="text-muted-foreground">
          Configure seu simulado personalizado com IA
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between mt-4  w-full gap-4">
        <div>
          <CardTypeTest />
        </div>
        <div>
          <CardTypeTest />
        </div>
      </div>
    </main>
  );
}
