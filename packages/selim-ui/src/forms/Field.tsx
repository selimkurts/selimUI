import React from 'react';

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  error?: React.ReactNode;
  id?: string;
}

export function Field({ label, description, error, id, className = '', children, ...props }: FieldProps) {
  const fieldId = id || React.useId();
  const descId = description ? `${fieldId}-desc` : undefined;
  const errId = error ? `${fieldId}-err` : undefined;
  const describedBy = [descId, errId].filter(Boolean).join(' ') || undefined;

  return (
    <div className={["su-field", className].join(' ')} {...props}>
      {label ? <label htmlFor={fieldId} className="su-field__label">{label}</label> : null}
      {/* consumers should pass input with id={fieldId} and aria-describedby */}
      {React.isValidElement(children)
        ? React.cloneElement(children as any, { id: fieldId, 'aria-describedby': describedBy })
        : children}
      {description ? <div id={descId} className="su-field__desc">{description}</div> : null}
      {error ? <div id={errId} role="alert" className="su-field__error">{error}</div> : null}
    </div>
  );
}

