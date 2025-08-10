import React from 'react';
import './switch.css';

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'children'> {
  children?: React.ReactNode;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { className = '', children, ...props },
  ref,
) {
  return (
    <label className={["su-switch", className].filter(Boolean).join(' ')}>
      <input ref={ref} type="checkbox" className="su-switch__input" {...props} />
      <span aria-hidden className="su-switch__track">
        <span className="su-switch__thumb" />
      </span>
      {children ? <span className="su-switch__label">{children}</span> : null}
    </label>
  );
});

