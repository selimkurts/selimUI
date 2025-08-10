"use client";
import React from 'react';
import './drawer.css';

export interface DrawerProps {
  open: boolean;
  side?: 'left' | 'right' | 'top' | 'bottom';
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export function Drawer({ open, side = 'right', onOpenChange, children }: DrawerProps) {
  const panelRef = React.useRef<HTMLDivElement | null>(null);
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
    <div className="su-drawer" role="dialog" aria-modal="true">
      <div className="su-drawer__backdrop" onClick={() => onOpenChange(false)} />
      <div ref={panelRef} className={["su-drawer__panel", `su-drawer__panel--${side}`].join(' ')} role="document" tabIndex={-1}>
        {children}
      </div>
    </div>
  );
}

