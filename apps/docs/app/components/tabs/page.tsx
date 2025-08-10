import ComponentsLayout from '../layout';
import { Tabs, TabList, Tab, TabPanel } from '@selim-ui/react';

export default function Page() {
  return (
    <ComponentsLayout>
      <h1 className="text-xl font-semibold mb-4">Tabs</h1>
      <Tabs defaultValue="a">
        <TabList>
          <Tab value="a">Tab A</Tab>
          <Tab value="b">Tab B</Tab>
          <Tab value="c">Tab C</Tab>
        </TabList>
        <TabPanel value="a">Content A</TabPanel>
        <TabPanel value="b">Content B</TabPanel>
        <TabPanel value="c">Content C</TabPanel>
      </Tabs>
    </ComponentsLayout>
  );
}

