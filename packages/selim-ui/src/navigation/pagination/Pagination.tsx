import React from 'react';
import './pagination.css';

export interface PaginationProps {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ page, pageCount, onPageChange }: PaginationProps) {
  const prev = () => onPageChange(Math.max(1, page - 1));
  const next = () => onPageChange(Math.min(pageCount, page + 1));
  return (
    <div className="su-pagination">
      <button className="su-btn su-btn--outline su-btn--sm" onClick={prev} disabled={page <= 1}>
        Prev
      </button>
      <span className="su-pagination__status">
        {page} / {pageCount}
      </span>
      <button className="su-btn su-btn--outline su-btn--sm" onClick={next} disabled={page >= pageCount}>
        Next
      </button>
    </div>
  );
}

