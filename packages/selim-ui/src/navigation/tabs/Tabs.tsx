"use client";
import React from 'react';
import './tabs.css';

export interface TabsProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}

interface TabsContextValue {
  value: string;
  setValue: (v: string) => void;
}
const TabsCtx = React.createContext<TabsContextValue | null>(null);

export function Tabs({ value, defaultValue, onValueChange, children }: TabsProps) {
  const [_value, _setValue] = React.useState<string>(defaultValue || 'tab-1');
  const isControlled = value !== undefined;
  const current = isControlled ? (value as string) : _value;
  const setValue = (v: string) => {
    if (!isControlled) _setValue(v);
    onValueChange?.(v);
  };
  return <TabsCtx.Provider value={{ value: current, setValue }}>{children}</TabsCtx.Provider>;
}

export function TabList({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div role="tablist" className={["su-tabs__list", className].join(' ')} {...props} />;
}

export function Tab({ value, children, className = '', ...props }: { value: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const ctx = React.useContext(TabsCtx)!;
  const selected = ctx.value === value;
  return (
    <button
      role="tab"
      aria-selected={selected}
      className={["su-tabs__trigger", selected && 'is-active', className].filter(Boolean).join(' ')}
      onClick={() => ctx.setValue(value)}
      {...props}
    >
      {children}
    </button>
  );
}

export function TabPanel({ value, children, className = '', ...props }: { value: string } & React.HTMLAttributes<HTMLDivElement>) {
  const ctx = React.useContext(TabsCtx)!;
  if (ctx.value !== value) return null;
  return (
    <div role="tabpanel" className={["su-tabs__panel", className].join(' ')} {...props}>
      {children}
    </div>
  );
}

