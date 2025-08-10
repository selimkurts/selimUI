import React from 'react';
import './card.css';

export function Card({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={["su-card", className].filter(Boolean).join(' ')} {...props} />;
}
export function CardHeader({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={["su-card__header", className].join(' ')} {...props} />;
}
export function CardTitle({ className = '', ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={["su-card__title", className].join(' ')} {...props} />;
}
export function CardDescription({ className = '', ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={["su-card__desc", className].join(' ')} {...props} />;
}
export function CardContent({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={["su-card__content", className].join(' ')} {...props} />;
}
export function CardFooter({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={["su-card__footer", className].join(' ')} {...props} />;
}

