import ComponentsLayout from '../layout';
import { Collapsible } from '@selim-ui/react';

export default function Page() {
  return (
    <ComponentsLayout>
      <h1 className="text-xl font-semibold mb-4">Collapsible</h1>
      <Collapsible defaultOpen>
        <p>Collapsible content</p>
      </Collapsible>
    </ComponentsLayout>
  );
}

