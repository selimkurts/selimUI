import React from 'react';

export type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

const Base = ({ size = 20, children, ...props }: IconProps & { children: React.ReactNode }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    {children}
  </svg>
);

export const IconCheck = (props: IconProps) => (
  <Base {...props}>
    <polyline points="20 6 9 17 4 12" />
  </Base>
);

export const IconX = (props: IconProps) => (
  <Base {...props}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Base>
);

export const IconChevronDown = (props: IconProps) => (
  <Base {...props}>
    <polyline points="6 9 12 15 18 9" />
  </Base>
);

