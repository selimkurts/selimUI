"use client";
import React from 'react';
import { Table, THead, TBody, TR, TH, TD, Pagination } from '@selim-ui/react';

const rows = Array.from({ length: 42 }).map((_, i) => ({ id: i + 1, name: `Item ${i + 1}`, price: (Math.random() * 100).toFixed(2) }));

export function TableDemo() {
  const [page, setPage] = React.useState(1);
  const perPage = 10;
  const start = (page - 1) * perPage;
  const pageRows = rows.slice(start, start + perPage);
  const pageCount = Math.ceil(rows.length / perPage);
  return (
    <div className="space-y-3">
      <Table>
        <THead>
          <TR>
            <TH>ID</TH>
            <TH>Name</TH>
            <TH>Price</TH>
          </TR>
        </THead>
        <TBody>
          {pageRows.map((r) => (
            <TR key={r.id}>
              <TD>{r.id}</TD>
              <TD>{r.name}</TD>
              <TD>${r.price}</TD>
            </TR>
          ))}
        </TBody>
      </Table>
      <Pagination page={page} pageCount={pageCount} onPageChange={setPage} />
    </div>
  );
}

