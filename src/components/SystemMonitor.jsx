import { factoryData } from '../data/factoryData';

export default function SystemMonitor() {
  const { cron } = factoryData;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-purple-400">⚙️ System Monitor</h2>
        <p className="text-gray-400 text-sm mt-1">
          Active automated tasks and listeners
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cron Jobs */}
        <div className="bg-gray-900/50 rounded-xl border border-white/10 p-6">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            ⏰ Scheduled Tasks
          </h3>
          <div className="space-y-3">
            {cron.map(job => (
              <div key={job.id} className="bg-black/20 p-4 rounded-lg border border-white/5 flex justify-between items-center">
                <div>
                  <div className="font-medium text-white">{job.name}</div>
                  <div className="text-sm text-gray-500 font-mono mt-1">{job.schedule}</div>
                </div>
                <div className="text-right">
                  <div className={`text-xs px-2 py-1 rounded ${job.enabled ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                    {job.enabled ? 'ACTIVE' : 'PAUSED'}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Next: {job.nextRun}</div>
                </div>
              </div>
            ))}
            {cron.length === 0 && (
              <div className="text-gray-500 italic">No active schedules</div>
            )}
          </div>
        </div>

        {/* System Health (Placeholder for now) */}
        <div className="bg-gray-900/50 rounded-xl border border-white/10 p-6">
          <h3 className="text-lg font-bold text-white mb-4">🖥️ Runtime Status</h3>
          <div className="space-y-4">
            <StatusRow label="Gateway" value="Online" color="text-green-400" />
            <StatusRow label="Environment" value="Production (Zeabur)" color="text-blue-400" />
            <StatusRow label="Security" value="Lockdown Mode 🔒" color="text-emerald-400" />
            <StatusRow label="Pricing Engine" value="Tuned (85% Eff)" color="text-orange-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusRow({ label, value, color }) {
  return (
    <div className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0">
      <span className="text-gray-400">{label}</span>
      <span className={`font-mono font-bold ${color}`}>{value}</span>
    </div>
  );
}
