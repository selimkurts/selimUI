import React from 'react';
import './avatar.css';

export type AvatarSize = 'sm' | 'md' | 'lg';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  name?: string;
  size?: AvatarSize;
}

export function Avatar({ src, name, size = 'md', className = '', ...props }: AvatarProps) {
  const [errored, setErrored] = React.useState(false);
  const initials = React.useMemo(() => {
    if (!name) return '';
    const parts = name.trim().split(/\s+/);
    return parts.slice(0, 2).map(p => p[0]?.toUpperCase()).join('');
  }, [name]);
  return (
    <div className={["su-avatar", `su-avatar--${size}`, className].join(' ')} {...props}>
      {src && !errored ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img alt={name || 'avatar'} src={src} onError={() => setErrored(true)} />
      ) : (
        <span aria-hidden>{initials || '•'}</span>
      )}
    </div>
  );
}

