import React from 'react';
import './select.css';

export type SelectSize = 'sm' | 'md' | 'lg';

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'children'> {
  size?: SelectSize;
  children?: React.ReactNode;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { size = 'md', className = '', children, ...props },
  ref,
) {
  const classes = ['su-select', `su-select--${size}`, className].filter(Boolean).join(' ');
  return (
    <div className="su-select__root">
      <select ref={ref} className={classes} {...props}>
        {children}
      </select>
      <span className="su-select__icon" aria-hidden>▾</span>
    </div>
  );
});

