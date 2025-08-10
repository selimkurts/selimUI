import ComponentsLayout from '../layout';
import { Select } from '@selim-ui/react';
import { PropsTable } from '../../../components/PropsTable';

export default function Page() {
  return (
    <ComponentsLayout>
      <h1 className="text-xl font-semibold mb-4">Select</h1>
      <div className="flex gap-4 items-end mb-6">
        <div>
          <label className="block mb-2">Default</label>
          <Select defaultValue="opt1">
            <option value="opt1">Option 1</option>
            <option value="opt2">Option 2</option>
          </Select>
        </div>
        <div>
          <label className="block mb-2">Small</label>
          <Select size="sm" defaultValue="opt1">
            <option value="opt1">Option 1</option>
            <option value="opt2">Option 2</option>
          </Select>
        </div>
        <div>
          <label className="block mb-2">Large</label>
          <Select size="lg" defaultValue="opt1">
            <option value="opt1">Option 1</option>
            <option value="opt2">Option 2</option>
          </Select>
        </div>
      </div>
      <h2 className="mt-4 mb-3 font-semibold">Props</h2>
      <PropsTable
        rows={[
          { name: 'size', type: '"sm" | "md" | "lg"', default: 'md' },
          { name: 'children', type: 'ReactNode' },
          { name: '...select', type: 'SelectHTMLAttributes<HTMLSelectElement>' },
        ]}
      />
    </ComponentsLayout>
  );
}

