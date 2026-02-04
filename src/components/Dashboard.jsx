import { useState } from 'react'
import { projects, categories, statusColors } from '../data/projects'
import { priorities, completePriority } from '../data/priorities'

export default function Dashboard({ onSelectProject }) {
  const [todaysTasks, setTodaysTasks] = useState(priorities.tasks)
  
  const priorityProjects = projects.filter(p => p.progress >= 90 || p.status === 'complete')
  const businessProjects = projects.filter(p => p.category === 'business')
  const fishingProjects = projects.filter(p => p.category === 'fishing')
  const factoryProjects = projects.filter(p => p.category === 'factory')
  const appProjects = projects.filter(p => p.category === 'apps')

  const toggleTask = (taskId) => {
    setTodaysTasks(tasks => 
      tasks.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    )
  }

  return (
    <div className="space-y-6">
      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Total Projects" value={projects.length} icon="📁" />
        <StatCard label="In Progress" value={projects.filter(p => p.status === 'wip').length} icon="🔄" />
        <StatCard label="Complete" value={projects.filter(p => p.status === 'complete').length} icon="✅" />
        <StatCard label="Ideas" value={projects.filter(p => p.status === 'idea').length} icon="💡" />
      </div>

      {/* Today's Priorities */}
      <TodaysPriorities 
        date={priorities.date}
        tasks={todaysTasks}
        weather={priorities.weather}
        reminders={priorities.reminders}
        onToggleTask={toggleTask}
      />

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

      {/* Content Factory - Full Width */}
      <CategorySection 
        title="🏭 Content Factory" 
        projects={factoryProjects}
        onSelectProject={onSelectProject}
        wide
      />

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

function CategorySection({ title, projects, onSelectProject, wide }) {
  if (wide) {
    return (
      <section className="bg-white/5 rounded-xl p-4 border border-orange-500/30">
        <h3 className="font-semibold mb-3 text-white">{title}</h3>
        <div className="grid md:grid-cols-3 gap-3">
          {projects.map(project => (
            <div 
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-colors"
            >
              <div>
                <span className="text-sm text-gray-200">{project.name}</span>
                <p className="text-xs text-gray-500 mt-1 line-clamp-1">{project.description}</p>
              </div>
              <StatusBadge status={project.status} label={project.statusLabel} small />
            </div>
          ))}
        </div>
      </section>
    )
  }
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

function TodaysPriorities({ date, tasks, weather, reminders, onToggleTask }) {
  const highPriority = tasks.filter(t => t.priority === 'high')
  const mediumPriority = tasks.filter(t => t.priority === 'medium')
  const completed = tasks.filter(t => t.completed).length
  const total = tasks.length

  return (
    <section className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl p-5 border border-yellow-500/30">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold flex items-center gap-2 text-white">
          <span>☀️</span> Today's Priorities
          <span className="text-sm text-gray-400 font-normal ml-2">
            {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </span>
        </h2>
        <div className="text-sm text-gray-400">
          {completed}/{total} completed
        </div>
      </div>

      {/* Weather & Brief Status */}
      <div className="grid md:grid-cols-2 gap-3 mb-4">
        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
          <p className="text-xs text-gray-400 mb-1">Weather</p>
          <p className="text-sm text-white">{weather.location}: {weather.summary}</p>
        </div>
        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
          <p className="text-xs text-gray-400 mb-1">Morning Brief</p>
          <p className="text-sm text-emerald-400">8:00 AM AST ✓</p>
        </div>
      </div>

      {/* Tasks */}
      <div className="space-y-3">
        {highPriority.length > 0 && (
          <TaskGroup 
            title="High Priority" 
            tasks={highPriority}
            color="red"
            onToggle={onToggleTask}
          />
        )}
        {mediumPriority.length > 0 && (
          <TaskGroup 
            title="Medium Priority" 
            tasks={mediumPriority}
            color="yellow"
            onToggle={onToggleTask}
          />
        )}
      </div>

      {/* Reminders */}
      {reminders.length > 0 && (
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-xs text-gray-400 mb-2">📌 Reminders</p>
          <ul className="space-y-1">
            {reminders.map((reminder, idx) => (
              <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                <span className="text-gray-500">•</span>
                <span>{reminder}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

function TaskGroup({ title, tasks, color, onToggle }) {
  const colors = {
    red: 'border-red-500/30 bg-red-500/5',
    yellow: 'border-yellow-500/30 bg-yellow-500/5',
    blue: 'border-blue-500/30 bg-blue-500/5'
  }

  return (
    <div className={`rounded-lg border p-3 ${colors[color]}`}>
      <p className="text-xs font-semibold text-gray-400 mb-2">{title}</p>
      <div className="space-y-2">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onToggle={onToggle} />
        ))}
      </div>
    </div>
  )
}

function TaskItem({ task, onToggle }) {
  return (
    <div 
      className="flex items-start gap-3 p-2 rounded hover:bg-white/5 cursor-pointer transition-colors"
      onClick={() => onToggle(task.id)}
    >
      <input 
        type="checkbox" 
        checked={task.completed}
        onChange={() => {}}
        className="mt-0.5 w-4 h-4 rounded border-gray-600 bg-white/10 checked:bg-emerald-500 cursor-pointer"
      />
      <div className="flex-1">
        <p className={`text-sm ${task.completed ? 'line-through text-gray-500' : 'text-gray-200'}`}>
          {task.text}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs text-gray-500">{task.owner}</span>
          {task.project && (
            <span className="text-xs text-gray-600">• {task.project}</span>
          )}
          {task.blockedBy && (
            <span className="text-xs text-orange-500">⚠️ blocked</span>
          )}
        </div>
      </div>
    </div>
  )
}
