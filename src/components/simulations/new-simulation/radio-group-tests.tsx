'use client';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { BookOpen, Brain, Target, Zap } from 'lucide-react';
import { useState } from 'react';

const examTypes = [
  {
    id: 'enem',
    name: 'ENEM',
    description: 'Exame Nacional do Ensino Médio',
    icon: BookOpen,
  },
  {
    id: 'ita',
    name: 'ITA',
    description: 'Instituto Tecnológico de Aeronáutica',
    icon: Brain,
  },
  {
    id: 'fuvest',
    name: 'Fuvest',
    description: 'Universidade de São Paulo',
    icon: Target,
  },
  {
    id: 'uece',
    name: 'UECE',
    description: 'Universidade Estadual do Ceará',
    icon: Zap,
  },
];

export function RadioGroupTests() {
  const [examType, setExamType] = useState('enem');
  return (
    <RadioGroup value={examType} onValueChange={setExamType}>
      <div className="grid md:grid-cols-2 gap-4">
        {examTypes.map((exam) => (
          <div key={exam.id}>
            <RadioGroupItem
              value={exam.id}
              id={exam.id}
              className="peer sr-only"
            />
            <Label
              htmlFor={exam.id}
              className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:bg-accent/50"
            >
              <exam.icon className="w-5 h-5" />
              <div>
                <p className="font-semibold">{exam.name}</p>
                <p className="text-xs text-muted-foreground">
                  {exam.description}
                </p>
              </div>
            </Label>
          </div>
        ))}
      </div>
    </RadioGroup>
  );
}
