import React from 'react';
import './table.css';

export function Table({ className = '', ...props }: React.HTMLAttributes<HTMLTableElement>) {
  return <table className={["su-table", className].filter(Boolean).join(' ')} {...props} />;
}
export function THead({ className = '', ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className={["su-thead", className].join(' ')} {...props} />;
}
export function TBody({ className = '', ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={["su-tbody", className].join(' ')} {...props} />;
}
export function TR({ className = '', ...props }: React.HTMLAttributes<HTMLTableRowElement>) {
  return <tr className={["su-tr", className].join(' ')} {...props} />;
}
export function TH({ className = '', ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return <th className={["su-th", className].join(' ')} {...props} />;
}
export function TD({ className = '', ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return <td className={["su-td", className].join(' ')} {...props} />;
}

