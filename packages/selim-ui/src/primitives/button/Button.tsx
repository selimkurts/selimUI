import React from 'react';
import './button.css';

export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'solid',
  size = 'md',
  className = '',
  leftIcon,
  rightIcon,
  children,
  ...props
}) => {
  const classes = ['su-btn', `su-btn--${variant}`, `su-btn--${size}`, className].filter(Boolean).join(' ');
  return (
    <button className={classes} {...props}>
      {leftIcon ? <span className="su-btn__icon su-btn__icon--left" aria-hidden>{leftIcon}</span> : null}
      {children}
      {rightIcon ? <span className="su-btn__icon su-btn__icon--right" aria-hidden>{rightIcon}</span> : null}
    </button>
  );
};
