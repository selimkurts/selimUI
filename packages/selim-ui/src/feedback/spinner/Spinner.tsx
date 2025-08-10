import React from 'react';
import './spinner.css';

export type SpinnerSize = 'sm' | 'md' | 'lg';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize;
}

export function Spinner({ size = 'md', className = '', ...props }: SpinnerProps) {
  const classes = ['su-spinner', `su-spinner--${size}`, className].filter(Boolean).join(' ');
  return <div role="status" aria-live="polite" className={classes} {...props} />;
}

