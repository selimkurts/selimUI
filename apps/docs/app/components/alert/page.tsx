import ComponentsLayout from '../layout';
import { Alert, Button } from '@selim-ui/react';
import { PropsTable } from '../../../components/PropsTable';

export default function Page() {
  return (
    <ComponentsLayout>
      <h1 className="text-xl font-semibold mb-4">Alert</h1>
      <div className="space-y-3 max-w-xl">
        <Alert heading="Info">This is an info alert</Alert>
        <Alert variant="success" heading="Success">Saved successfully</Alert>
        <Alert variant="warning" heading="Warning">Be careful</Alert>
        <Alert variant="danger" heading="Error">Something went wrong</Alert>
      </div>
      <h2 className="mt-8 mb-3 font-semibold">Props</h2>
      <PropsTable
        rows={[
          { name: 'variant', type: 'info | success | warning | danger', default: 'info' },
          { name: 'heading', type: 'ReactNode' },
        ]}
      />
    </ComponentsLayout>
  );
}
