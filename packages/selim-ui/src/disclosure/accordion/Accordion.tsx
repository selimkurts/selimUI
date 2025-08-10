"use client";
import React from 'react';
import './accordion.css';

export function Accordion({ children, className = '' }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={["su-acc", className].join(' ')}>{children}</div>;
}

export function AccordionItem({ title, children }: { title: React.ReactNode; children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const id = React.useId();
  return (
    <div className="su-acc__item">
      <button className="su-acc__trigger" aria-expanded={open} aria-controls={id} onClick={() => setOpen((v) => !v)}>
        {title}
      </button>
      {open ? (
        <div id={id} className="su-acc__content" role="region">
          {children}
        </div>
      ) : null}
    </div>
  );
}

