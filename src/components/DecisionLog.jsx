import { useState } from 'react'

export default function DecisionLog() {
  const [decisions, setDecisions] = useState([
    {
      id: 1,
      date: '2025-02-01',
      title: 'Use PostgreSQL for Sign Shop OS',
      project: 'Sign Shop OS',
      status: 'decided',
      context: 'Needed a relational database for complex pricing calculations and relationships between customers, estimates, and work orders.',
      options: [
        { name: 'PostgreSQL', pros: 'Robust, great for complex queries, Prisma support', cons: 'Requires hosting setup' },
        { name: 'SQLite', pros: 'Simple, no server needed', cons: 'Limited for production scale' },
        { name: 'MongoDB', pros: 'Flexible schema', cons: 'Not ideal for relational data' },
      ],
      decision: 'PostgreSQL with Prisma ORM. The relational model fits the data perfectly, and Prisma makes it easy to work with.',
      consequences: 'Need to set up a hosted PostgreSQL instance for production. Using Prisma migrations for schema changes.'
    }
  ])

  const [showForm, setShowForm] = useState(false)

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">📋 Decision Log</h1>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm text-white transition-colors"
        >
          + New Decision
        </button>
      </div>

      <p className="text-gray-400">
        Track major decisions with context and reasoning. Never wonder "why did we do that?" again.
      </p>

      {/* Decision Cards */}
      <div className="space-y-4">
        {decisions.map(decision => (
          <DecisionCard key={decision.id} decision={decision} />
        ))}
      </div>

      {decisions.length === 0 && (
        <div className="bg-white/5 rounded-xl border border-white/10 p-8 text-center">
          <p className="text-gray-400">No decisions logged yet.</p>
          <p className="text-gray-500 text-sm mt-2">When we make important choices, they'll be recorded here.</p>
        </div>
      )}
    </div>
  )
}

function DecisionCard({ decision }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
      {/* Header - Always Visible */}
      <button 
        onClick={() => setExpanded(!expanded)}
        className="w-full px-5 py-4 flex items-start justify-between text-left hover:bg-white/5 transition-colors"
      >
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-sm text-gray-500">{decision.date}</span>
            <StatusBadge status={decision.status} />
          </div>
          <h3 className="font-semibold text-white">{decision.title}</h3>
          {decision.project && (
            <span className="text-sm text-gray-400">Project: {decision.project}</span>
          )}
        </div>
        <span className="text-gray-400 mt-1">{expanded ? '▼' : '▶'}</span>
      </button>

      {/* Expanded Content */}
      {expanded && (
        <div className="px-5 pb-5 space-y-4 border-t border-white/10 pt-4">
          {/* Context */}
          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-1">Context</h4>
            <p className="text-gray-300">{decision.context}</p>
          </div>

          {/* Options Considered */}
          {decision.options && decision.options.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-2">Options Considered</h4>
              <div className="space-y-2">
                {decision.options.map((opt, i) => (
                  <div key={i} className="bg-white/5 rounded-lg p-3">
                    <div className="font-medium text-white mb-1">{opt.name}</div>
                    <div className="text-sm">
                      <span className="text-green-400">+ {opt.pros}</span>
                      <span className="text-gray-500 mx-2">|</span>
                      <span className="text-red-400">- {opt.cons}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Decision */}
          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-1">Decision</h4>
            <p className="text-emerald-400">{decision.decision}</p>
          </div>

          {/* Consequences */}
          {decision.consequences && (
            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-1">Consequences</h4>
              <p className="text-gray-300">{decision.consequences}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function StatusBadge({ status }) {
  const colors = {
    decided: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    revisiting: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    reversed: 'bg-red-500/20 text-red-400 border-red-500/30'
  }

  const labels = {
    decided: 'Decided',
    revisiting: 'Revisiting',
    reversed: 'Reversed'
  }

  return (
    <span className={`${colors[status]} text-xs px-2 py-0.5 rounded-full border font-medium`}>
      {labels[status]}
    </span>
  )
}
