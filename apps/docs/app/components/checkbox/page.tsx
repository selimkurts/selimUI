import ComponentsLayout from '../layout';
import { Checkbox } from '@selim-ui/react';
import { PropsTable } from '../../../components/PropsTable';

export default function Page() {
  return (
    <ComponentsLayout>
      <h1 className="text-xl font-semibold mb-4">Checkbox</h1>
      <div className="flex gap-6 items-center mb-6">
        <Checkbox>Accept terms</Checkbox>
        <Checkbox indeterminate>Partially selected</Checkbox>
      </div>
      <h2 className="mt-4 mb-3 font-semibold">Props</h2>
      <PropsTable
        rows={[
          { name: 'indeterminate', type: 'boolean', default: 'false' },
          { name: 'children', type: 'ReactNode' },
          { name: '...input', type: 'InputHTMLAttributes<HTMLInputElement>' },
        ]}
      />
    </ComponentsLayout>
  );
}

