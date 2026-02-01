import { statusColors } from '../data/projects'

export default function ProjectDetail({ project, onBack }) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
      >
        <span>←</span> Back to Dashboard
      </button>

      {/* Header */}
      <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">{project.name}</h1>
            <p className="text-gray-400">{project.description}</p>
          </div>
          <StatusBadge status={project.status} label={project.statusLabel} />
        </div>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-400">Progress</span>
            <span className="text-white font-medium">{project.progress}%</span>
          </div>
          <div className="h-3 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transition-all"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 text-sm">
          {project.lastWorked && (
            <div className="text-gray-400">
              <span className="text-gray-500">Last worked:</span> {project.lastWorked}
            </div>
          )}
          <div className="text-gray-400">
            <span className="text-gray-500">File:</span> <code className="text-emerald-400">{project.file}</code>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Blockers */}
        <Section title="🚧 Blockers" empty={project.blockers.length === 0}>
          {project.blockers.length > 0 ? (
            <ul className="space-y-2">
              {project.blockers.map((blocker, i) => (
                <li key={i} className="flex items-start gap-2 text-red-300">
                  <span className="text-red-500 mt-0.5">•</span>
                  {blocker}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 italic">No blockers! 🎉</p>
          )}
        </Section>

        {/* Next Actions */}
        <Section title="⚡ Next Actions">
          <ul className="space-y-2">
            {project.nextActions.map((action, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-300">
                <input type="checkbox" className="mt-1 rounded bg-white/10 border-white/20" />
                {action}
              </li>
            ))}
          </ul>
        </Section>

        {/* Tech Stack */}
        {project.techStack.length > 0 && (
          <Section title="🛠️ Tech Stack">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </Section>
        )}

        {/* Quick Actions */}
        <Section title="🎬 Quick Actions">
          <div className="flex flex-wrap gap-2">
            <ActionButton onClick={() => alert('Edit coming soon!')}>
              ✏️ Edit Project
            </ActionButton>
            <ActionButton onClick={() => alert('Log coming soon!')}>
              📝 Add Session Log
            </ActionButton>
            <ActionButton onClick={() => alert('Status coming soon!')}>
              🔄 Update Status
            </ActionButton>
          </div>
        </Section>
      </div>
    </div>
  )
}

function Section({ title, children, empty }) {
  return (
    <div className="bg-white/5 rounded-xl p-5 border border-white/10">
      <h2 className="font-semibold text-white mb-3">{title}</h2>
      {children}
    </div>
  )
}

function StatusBadge({ status, label }) {
  const colors = {
    complete: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    almost: 'bg-green-500/20 text-green-400 border-green-500/30',
    wip: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    planning: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    live: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    idea: 'bg-gray-500/20 text-gray-400 border-gray-500/30'
  }

  return (
    <span className={`${colors[status]} text-sm px-3 py-1 rounded-full border font-medium`}>
      {label}
    </span>
  )
}

function ActionButton({ children, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm text-white transition-colors"
    >
      {children}
    </button>
  )
}
