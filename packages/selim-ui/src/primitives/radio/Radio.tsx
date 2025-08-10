import React from 'react';
import './radio.css';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'children'> {
  children?: React.ReactNode;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { className = '', children, ...props },
  ref,
) {
  return (
    <label className={["su-radio", className].filter(Boolean).join(' ')}>
      <input ref={ref} type="radio" className="su-radio__input" {...props} />
      <span aria-hidden className="su-radio__box" />
      {children ? <span className="su-radio__label">{children}</span> : null}
    </label>
  );
});

