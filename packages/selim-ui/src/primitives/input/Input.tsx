import React from 'react';
import './input.css';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: InputSize;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { size = 'md', className = '', ...props },
  ref,
) {
  const classes = ['su-input', `su-input--${size}`, className].filter(Boolean).join(' ');
  return <input ref={ref} className={classes} {...props} />;
});

