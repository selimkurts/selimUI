import React from 'react';
import './alert.css';

export type AlertVariant = 'info' | 'success' | 'warning' | 'danger';

export interface AlertProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  variant?: AlertVariant;
  heading?: React.ReactNode;
}

export function Alert({ variant = 'info', heading, className = '', children, ...props }: AlertProps) {
  const classes = ['su-alert', `su-alert--${variant}`, className].filter(Boolean).join(' ');
  return (
    <div role="status" className={classes} {...props}>
      {heading ? <div className="su-alert__title">{heading}</div> : null}
      {children ? <div className="su-alert__content">{children}</div> : null}
    </div>
  );
}

