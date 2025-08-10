import { Button, Input, Checkbox, Switch, Select, Radio, Tooltip, Popover } from '@selim-ui/react';
import React from 'react';
import { ThemeToggle } from '../components/ThemeToggle';
import { ThemeProviderDemo } from '../components/ThemeProviderDemo';
import { DialogDemo } from '../components/DialogDemo';
import { FeedbackDemo } from '../components/FeedbackDemo';
import { TableDemo } from '../components/TableDemo';

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">SELIM UI</h1>
        <ThemeToggle />
      </div>
      <div className="flex gap-4 items-center flex-wrap">
        <Button>Solid</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="max-w-sm">
        <label className="block mb-2">Input</label>
        <Input placeholder="Type here" />
      </div>
      <div className="flex items-center gap-8">
        <Checkbox>Accept terms</Checkbox>
        <Switch>Enable feature</Switch>
      </div>
      <div className="flex items-center gap-8">
        <div>
          <label className="block mb-2">Select</label>
          <Select defaultValue="opt1">
            <option value="opt1">Option 1</option>
            <option value="opt2">Option 2</option>
          </Select>
        </div>
        <div className="flex items-center gap-4">
          <Radio name="group" defaultChecked>
            One
          </Radio>
          <Radio name="group">Two</Radio>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <Tooltip content="Hello tooltip">
          <Button variant="outline">Hover me</Button>
        </Tooltip>
        <Popover trigger={<Button variant="outline">Open Popover</Button>}>
          <div className="space-y-2">
            <div className="font-medium">Popover title</div>
            <p className="opacity-80">Some popover content…</p>
          </div>
        </Popover>
      </div>
      <DialogDemo />
      <ThemeProviderDemo />
      <FeedbackDemo />
      <TableDemo />
    </main>
  );
}
