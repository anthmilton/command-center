import { projects, categories, statusColors } from '../data/projects'

export default function Dashboard({ onSelectProject }) {
  const priorityProjects = projects.filter(p => p.progress >= 90 || p.status === 'complete')
  const businessProjects = projects.filter(p => p.category === 'business')
  const fishingProjects = projects.filter(p => p.category === 'fishing')
  const appProjects = projects.filter(p => p.category === 'apps')

  return (
    <div className="space-y-6">
      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Total Projects" value={projects.length} icon="📁" />
        <StatCard label="In Progress" value={projects.filter(p => p.status === 'wip').length} icon="🔄" />
        <StatCard label="Complete" value={projects.filter(p => p.status === 'complete').length} icon="✅" />
        <StatCard label="Ideas" value={projects.filter(p => p.status === 'idea').length} icon="💡" />
      </div>

      {/* Priority Section */}
      {priorityProjects.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <span>🎯</span> Priority
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {priorityProjects.map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => onSelectProject(project)}
                highlight
              />
            ))}
          </div>
        </section>
      )}

      {/* Projects by Category */}
      <div className="grid md:grid-cols-3 gap-6">
        <CategorySection 
          title="💼 Business" 
          projects={businessProjects}
          onSelectProject={onSelectProject}
        />
        <CategorySection 
          title="🎣 Fishing" 
          projects={fishingProjects}
          onSelectProject={onSelectProject}
        />
        <CategorySection 
          title="📱 Apps" 
          projects={appProjects}
          onSelectProject={onSelectProject}
        />
      </div>
    </div>
  )
}

function StatCard({ label, value, icon }) {
  return (
    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold text-white">{value}</p>
          <p className="text-sm text-gray-400">{label}</p>
        </div>
        <span className="text-2xl">{icon}</span>
      </div>
    </div>
  )
}

function CategorySection({ title, projects, onSelectProject }) {
  return (
    <section className="bg-white/5 rounded-xl p-4 border border-white/10">
      <h3 className="font-semibold mb-3 text-white">{title}</h3>
      <div className="space-y-2">
        {projects.map(project => (
          <ProjectRow 
            key={project.id} 
            project={project}
            onClick={() => onSelectProject(project)}
          />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, onClick, highlight }) {
  return (
    <div 
      onClick={onClick}
      className={`bg-white/5 rounded-xl p-4 border cursor-pointer transition-all hover:bg-white/10 hover:scale-[1.02] ${
        highlight ? 'border-yellow-500/50' : 'border-white/10'
      }`}
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-white">{project.name}</h3>
        <StatusBadge status={project.status} label={project.statusLabel} />
      </div>
      <p className="text-sm text-gray-400 mb-3 line-clamp-2">{project.description}</p>
      <ProgressBar progress={project.progress} />
      {project.blockers.length > 0 && (
        <p className="text-xs text-red-400 mt-2">
          ⚠️ {project.blockers.length} blocker{project.blockers.length > 1 ? 's' : ''}
        </p>
      )}
    </div>
  )
}

function ProjectRow({ project, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors"
    >
      <span className="text-sm text-gray-300">{project.name}</span>
      <StatusBadge status={project.status} label={project.statusLabel} small />
    </div>
  )
}

function StatusBadge({ status, label, small }) {
  const colors = {
    complete: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    almost: 'bg-green-500/20 text-green-400 border-green-500/30',
    wip: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    planning: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    live: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    idea: 'bg-gray-500/20 text-gray-400 border-gray-500/30'
  }

  return (
    <span className={`${colors[status]} ${small ? 'text-xs px-2 py-0.5' : 'text-xs px-2 py-1'} rounded-full border font-medium`}>
      {label}
    </span>
  )
}

function ProgressBar({ progress }) {
  return (
    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transition-all"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
