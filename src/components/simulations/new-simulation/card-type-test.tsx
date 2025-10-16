import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';
import { RadioGroupTests } from './radio-group-tests';

export function CardTypeTest() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <FileText className="w-5 h-5" />
          Tipo de Prova
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroupTests />
      </CardContent>
    </Card>
  );
}
