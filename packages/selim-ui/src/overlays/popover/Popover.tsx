"use client";
import React from 'react';
import './popover.css';

export interface PopoverProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

export function Popover({ trigger, children }: PopoverProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="su-popover">
      <button type="button" className="su-popover__trigger" onClick={() => setOpen((v) => !v)}>
        {trigger}
      </button>
      {open ? (
        <div className="su-popover__content" role="dialog">
          {children}
        </div>
      ) : null}
    </div>
  );
}

