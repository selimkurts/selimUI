import ComponentsLayout from '../layout';
import { Button } from '@selim-ui/react';
import { IconChevronDown, IconCheck } from '@selim-ui/icons';
import { PropsTable } from '../../../components/PropsTable';

export default function Page() {
  return (
    <ComponentsLayout>
      <h1 className="text-xl font-semibold mb-4">Button</h1>
      <div className="flex gap-3 flex-wrap mb-6">
        <Button leftIcon={<IconCheck size={16} />}>Solid</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost" rightIcon={<IconChevronDown size={16} />}>Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      <h2 className="mt-4 mb-3 font-semibold">Props</h2>
      <PropsTable
        rows={[
          { name: 'variant', type: '"solid" | "outline" | "ghost" | "link"', default: 'solid' },
          { name: 'size', type: '"sm" | "md" | "lg"', default: 'md' },
          { name: '...button', type: 'ButtonHTMLAttributes<HTMLButtonElement>' },
        ]}
      />
    </ComponentsLayout>
  );
}

