import ComponentsLayout from '../layout';
import { Radio } from '@selim-ui/react';
import { PropsTable } from '../../../components/PropsTable';

export default function Page() {
  return (
    <ComponentsLayout>
      <h1 className="text-xl font-semibold mb-4">Radio</h1>
      <div className="flex gap-6 items-center mb-6">
        <Radio name="demo" defaultChecked>One</Radio>
        <Radio name="demo">Two</Radio>
      </div>
      <h2 className="mt-4 mb-3 font-semibold">Props</h2>
      <PropsTable
        rows={[
          { name: 'name', type: 'string', required: true },
          { name: 'children', type: 'ReactNode' },
          { name: '...input', type: 'InputHTMLAttributes<HTMLInputElement>' },
        ]}
      />
    </ComponentsLayout>
  );
}

