import ComponentsLayout from '../layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from '@selim-ui/react';
import { PropsTable } from '../../../components/PropsTable';

export default function Page() {
  return (
    <ComponentsLayout>
      <h1 className="text-xl font-semibold mb-4">Card</h1>
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card content goes here.</p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
          <Button variant="outline">Cancel</Button>
        </CardFooter>
      </Card>
      <h2 className="mt-8 mb-3 font-semibold">Props</h2>
      <PropsTable rows={[{ name: 'children', type: 'ReactNode' }]} />
    </ComponentsLayout>
  );
}
