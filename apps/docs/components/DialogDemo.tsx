"use client";
import React from 'react';
import { Button, Dialog, Drawer } from '@selim-ui/react';

export function DialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [drawer, setDrawer] = React.useState(false);
  return (
    <div className="flex items-center gap-4">
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Button variant="outline" onClick={() => setDrawer(true)}>Open Drawer</Button>
      <Dialog open={open} onOpenChange={setOpen} title="Dialog title" description="Short description">
        <p>Dialog body content…</p>
      </Dialog>
      <Drawer open={drawer} onOpenChange={setDrawer}>
        <div className="space-y-3">
          <div className="text-lg font-medium">Drawer</div>
          <p className="opacity-80">Drawer content…</p>
          <Button onClick={() => setDrawer(false)}>Close</Button>
        </div>
      </Drawer>
    </div>
  );
}

