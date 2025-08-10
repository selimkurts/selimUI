import ComponentsLayout from '../layout';
import { Input, Field, Textarea } from '@selim-ui/react';
import { PropsTable } from '../../../components/PropsTable';

export default function Page() {
  return (
    <ComponentsLayout>
      <h1 className="text-xl font-semibold mb-4">Input</h1>
      <div className="space-y-5 mb-6 max-w-sm">
        <Field label="Email" description="We never share your email.">
          <Input placeholder="you@example.com" />
        </Field>
        <Field label="About" description="A few words about yourself">
          <Textarea placeholder="Write here..." />
        </Field>
        <div className="space-y-3">
          <Input size="sm" placeholder="Small" />
          <Input placeholder="Default" />
          <Input size="lg" placeholder="Large" />
        </div>
      </div>
      <h2 className="mt-4 mb-3 font-semibold">Props</h2>
      <PropsTable
        rows={[
          { name: 'size', type: '"sm" | "md" | "lg"', default: 'md' },
          { name: '...input', type: 'InputHTMLAttributes<HTMLInputElement>' },
        ]}
      />
    </ComponentsLayout>
  );
}

