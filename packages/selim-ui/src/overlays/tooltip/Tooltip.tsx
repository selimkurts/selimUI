"use client";
import React from 'react';
import './tooltip.css';

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
}

export function Tooltip({ content, children }: TooltipProps) {
  return (
    <span className="su-tooltip" aria-label={typeof content === 'string' ? content : undefined}>
      {children}
      <span className="su-tooltip__content" role="tooltip">
        {content}
      </span>
    </span>
  );
}

