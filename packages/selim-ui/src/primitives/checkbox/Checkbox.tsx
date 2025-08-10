import React from 'react';
import './checkbox.css';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'children'> {
  indeterminate?: boolean;
  children?: React.ReactNode;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { className = '', indeterminate = false, children, ...props },
  ref,
) {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <label className={["su-checkbox", className].filter(Boolean).join(' ')}>
      <input
        ref={(node) => {
          inputRef.current = node;
          if (typeof ref === 'function') ref(node!);
          else if (ref) (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
        }}
        type="checkbox"
        className="su-checkbox__input"
        {...props}
      />
      <span aria-hidden className="su-checkbox__box" />
      {children ? <span className="su-checkbox__label">{children}</span> : null}
    </label>
  );
});

