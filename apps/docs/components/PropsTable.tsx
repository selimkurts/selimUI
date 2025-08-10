export type PropRow = { name: string; type: string; default?: string; required?: boolean; description?: string };

export function PropsTable({ rows }: { rows: PropRow[] }) {
  return (
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="border-b border-white/10">
          <th className="text-left py-2 pr-4">Prop</th>
          <th className="text-left py-2 pr-4">Type</th>
          <th className="text-left py-2 pr-4">Default</th>
          <th className="text-left py-2 pr-4">Required</th>
          <th className="text-left py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.name} className="border-b border-white/5">
            <td className="py-2 pr-4 font-mono">{r.name}</td>
            <td className="py-2 pr-4 font-mono opacity-80">{r.type}</td>
            <td className="py-2 pr-4 font-mono opacity-80">{r.default ?? '-'}</td>
            <td className="py-2 pr-4">{r.required ? 'Yes' : 'No'}</td>
            <td className="py-2 opacity-80">{r.description ?? '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

