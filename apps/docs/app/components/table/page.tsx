"use client";
import ComponentsLayout from '../layout';
import { Table, THead, TBody, TR, TH, TD, Pagination } from '@selim-ui/react';
import { PropsTable } from '../../../components/PropsTable';
import React from 'react';

const rows = Array.from({ length: 23 }).map((_, i) => ({ id: i + 1, name: `Item ${i + 1}` }));

export default function Page() {
  const [page, setPage] = React.useState(1);
  const perPage = 8;
  const start = (page - 1) * perPage;
  const pageRows = rows.slice(start, start + perPage);
  const pageCount = Math.ceil(rows.length / perPage);
  return (
    <ComponentsLayout>
      <h1 className="text-xl font-semibold mb-4">Table</h1>
      <div className="space-y-3">
        <Table>
          <THead>
            <TR>
              <TH>ID</TH>
              <TH>Name</TH>
            </TR>
          </THead>
          <TBody>
            {pageRows.map((r) => (
              <TR key={r.id}>
                <TD>{r.id}</TD>
                <TD>{r.name}</TD>
              </TR>
            ))}
          </TBody>
        </Table>
        <Pagination page={page} pageCount={pageCount} onPageChange={setPage} />
      </div>
      <h2 className="mt-8 mb-3 font-semibold">Props</h2>
      <PropsTable
        rows={[
          { name: 'Table', type: 'HTMLTableElement attributes' },
          { name: 'Pagination.page', type: 'number', required: true },
          { name: 'Pagination.pageCount', type: 'number', required: true },
          { name: 'Pagination.onPageChange', type: '(page: number) => void', required: true },
        ]}
      />
    </ComponentsLayout>
  );
}
