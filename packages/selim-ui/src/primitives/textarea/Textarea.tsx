import React from 'react';
import './textarea.css';

export type TextareaSize = 'sm' | 'md' | 'lg';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: TextareaSize;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { size = 'md', className = '', ...props },
  ref,
) {
  const classes = ['su-textarea', `su-textarea--${size}`, className].filter(Boolean).join(' ');
  return <textarea ref={ref} className={classes} {...props} />;
});

