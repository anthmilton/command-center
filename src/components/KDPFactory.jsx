import { factoryData } from '../data/factoryData';

export default function KDPFactory() {
  const { projects, lastUpdated } = factoryData;

  // Stats
  const total = projects.length;
  const readyForProd = projects.filter(p => p.hasPrompts && p.hasSystem).length;
  const inProgress = projects.filter(p => p.charCount > 0 || p.pageCount > 0).length;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-orange-400">🏭 KDP Content Factory</h2>
          <p className="text-gray-400 text-sm mt-1">
            Production Pipeline Status • Last sync: {new Date(lastUpdated).toLocaleString()}
          </p>
        </div>
        <div className="flex gap-4">
          <StatCard label="Projects" value={total} color="bg-gray-800" />
          <StatCard label="Ready to Gen" value={readyForProd} color="bg-blue-900/50" />
          <StatCard label="In Production" value={inProgress} color="bg-green-900/50" />
        </div>
      </div>

      <div className="bg-gray-900/50 rounded-xl border border-white/10 overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-black/40 text-gray-400 uppercase font-medium">
            <tr>
              <th className="px-4 py-3">Project Name</th>
              <th className="px-4 py-3 text-center">Prompts</th>
              <th className="px-4 py-3 text-center">System</th>
              <th className="px-4 py-3 text-center">Anchors</th>
              <th className="px-4 py-3 text-center">Pages</th>
              <th className="px-4 py-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {projects.map((p) => (
              <tr key={p.id} className="hover:bg-white/5 transition-colors">
                <td className="px-4 py-3 font-medium text-gray-200">{p.name}</td>
                <td className="px-4 py-3 text-center">
                  <StatusIcon check={p.hasPrompts} />
                </td>
                <td className="px-4 py-3 text-center">
                  <StatusIcon check={p.hasSystem} />
                </td>
                <td className="px-4 py-3 text-center text-gray-400">
                  {p.charCount > 0 ? <span className="text-green-400 font-bold">{p.charCount}</span> : '-'}
                </td>
                <td className="px-4 py-3 text-center text-gray-400">
                  {p.pageCount > 0 ? <span className="text-green-400 font-bold">{p.pageCount}</span> : '-'}
                </td>
                <td className="px-4 py-3 text-center">
                  {p.pageCount > 10 ? (
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Ready to Compile</span>
                  ) : p.hasPrompts ? (
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">Queued</span>
                  ) : (
                    <span className="px-2 py-1 bg-gray-700/50 text-gray-500 rounded text-xs">Draft</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatCard({ label, value, color }) {
  return (
    <div className={`px-4 py-2 rounded-lg border border-white/5 ${color}`}>
      <div className="text-xl font-bold text-white">{value}</div>
      <div className="text-xs text-gray-400 uppercase tracking-wider">{label}</div>
    </div>
  );
}

function StatusIcon({ check }) {
  return check ? (
    <span className="text-emerald-500">✓</span>
  ) : (
    <span className="text-gray-700">·</span>
  );
}
