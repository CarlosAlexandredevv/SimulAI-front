import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';
import { RadioGroupTests } from './radio-group-tests';
import { ScrollArea } from '@/components/ui/scroll-area';

export function CardTypeTest() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <FileText className="w-5 h-5" />
          Tipo de Prova
        </CardTitle>
      </CardHeader>
      <ScrollArea className="max-h-[400px]">
        <CardContent>
          <RadioGroupTests />
        </CardContent>
      </ScrollArea>
    </Card>
  );
}
