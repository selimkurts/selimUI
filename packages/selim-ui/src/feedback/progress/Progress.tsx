import React from 'react';
import './progress.css';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // 0-100
}

export function Progress({ value, className = '', ...props }: ProgressProps) {
  const clamped = Math.max(0, Math.min(100, value));
  const classes = ['su-progress', className].filter(Boolean).join(' ');
  return (
    <div role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={clamped} className={classes} {...props}>
      <div className="su-progress__bar" style={{ width: `${clamped}%` }} />
    </div>
  );
}

