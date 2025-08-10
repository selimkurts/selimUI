import React from 'react';
import './skeleton.css';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className = '', ...props }: SkeletonProps) {
  const classes = ['su-skeleton', className].filter(Boolean).join(' ');
  return <div aria-hidden className={classes} {...props} />;
}

