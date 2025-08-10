"use client";
import React from 'react';
import './dialog.css';

export interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
}

export function Dialog({ open, onOpenChange, title, description, children }: DialogProps) {
  const panelRef = React.useRef<HTMLDivElement | null>(null);
  const titleId = React.useId();
  const descId = React.useId();

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onOpenChange(false);
    }
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onOpenChange]);

  React.useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    if (!panel) return;
    const focusable = panel.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const previous = document.activeElement as HTMLElement | null;
    if (first) first.focus(); else panel.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || focusable.length === 0) return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          (last || panel).focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          (first || panel).focus();
        }
      }
    };
    panel.addEventListener('keydown', handleKeyDown);
    return () => {
      panel.removeEventListener('keydown', handleKeyDown);
      previous?.focus?.();
    };
  }, [open]);

  if (!open) return null;
  return (
    <div className="su-dialog" role="dialog" aria-modal="true" aria-labelledby={title ? titleId : undefined} aria-describedby={description ? descId : undefined}>
      <div className="su-dialog__backdrop" onClick={() => onOpenChange(false)} />
      <div ref={panelRef} className="su-dialog__panel" role="document" tabIndex={-1}>
        {title ? <h2 id={titleId} className="su-dialog__title">{title}</h2> : null}
        {description ? <p id={descId} className="su-dialog__desc">{description}</p> : null}
        <div className="su-dialog__body">{children}</div>
        <div className="su-dialog__footer">
          <button className="su-btn su-btn--outline su-btn--sm" onClick={() => onOpenChange(false)}>Close</button>
        </div>
      </div>
    </div>
  );
}

