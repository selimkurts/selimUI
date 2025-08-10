import React from 'react';
import './badge.css';

export type BadgeVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'danger';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
}

export function Badge({ variant = 'neutral', size = 'md', className = '', ...props }: BadgeProps) {
  const classes = ['su-badge', `su-badge--${variant}`, `su-badge--${size}`, className]
    .filter(Boolean)
    .join(' ');
  return <span className={classes} {...props} />;
}

