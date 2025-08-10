"use client";
import React from 'react';
import './collapsible.css';

export interface CollapsibleProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export function Collapsible({ open, defaultOpen, onOpenChange, children }: CollapsibleProps) {
  const [state, setState] = React.useState(defaultOpen || false);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? (open as boolean) : state;
  const setOpen = (v: boolean) => {
    if (!isControlled) setState(v);
    onOpenChange?.(v);
  };
  return (
    <div className="su-col">
      <button className="su-col__trigger" aria-expanded={isOpen} onClick={() => setOpen(!isOpen)}>
        Toggle
      </button>
      {isOpen ? <div className="su-col__content">{children}</div> : null}
    </div>
  );
}

