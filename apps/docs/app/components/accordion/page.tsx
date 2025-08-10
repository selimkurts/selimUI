import ComponentsLayout from '../layout';
import { Accordion, AccordionItem } from '@selim-ui/react';

export default function Page() {
  return (
    <ComponentsLayout>
      <h1 className="text-xl font-semibold mb-4">Accordion</h1>
      <Accordion>
        <AccordionItem title="Section 1">Content of section 1</AccordionItem>
        <AccordionItem title="Section 2">Content of section 2</AccordionItem>
      </Accordion>
    </ComponentsLayout>
  );
}

