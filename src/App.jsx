import { useState } from 'react'
import Dashboard from './components/Dashboard'
import ProjectDetail from './components/ProjectDetail'
import IdeaInbox from './components/IdeaInbox'
import DecisionLog from './components/DecisionLog'
import KDPFactory from './components/KDPFactory'
import SystemMonitor from './components/SystemMonitor'

function App() {
  const [view, setView] = useState('dashboard')
  const [selectedProject, setSelectedProject] = useState(null)

  const navigate = (newView, project = null) => {
    setView(newView)
    setSelectedProject(project)
  }

  return (
    <div className="min-h-screen text-gray-100">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 
            className="text-xl font-bold text-yellow-400 cursor-pointer flex items-center gap-2"
            onClick={() => navigate('dashboard')}
          >
            🍺 Skippy's Command Center
          </h1>
          <nav className="flex gap-1">
            <NavButton active={view === 'dashboard'} onClick={() => navigate('dashboard')}>
              📊 Dashboard
            </NavButton>
            <NavButton active={view === 'factory'} onClick={() => navigate('factory')}>
              🏭 Factory
            </NavButton>
            <NavButton active={view === 'ideas'} onClick={() => navigate('ideas')}>
              💡 Ideas
            </NavButton>
            <NavButton active={view === 'decisions'} onClick={() => navigate('decisions')}>
              📋 Decisions
            </NavButton>
            <NavButton active={view === 'system'} onClick={() => navigate('system')}>
              ⚙️ System
            </NavButton>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {view === 'dashboard' && <Dashboard onSelectProject={(p) => navigate('project', p)} />}
        {view === 'project' && selectedProject && <ProjectDetail project={selectedProject} onBack={() => navigate('dashboard')} />}
        {view === 'ideas' && <IdeaInbox />}
        {view === 'decisions' && <DecisionLog />}
        {view === 'factory' && <KDPFactory />}
        {view === 'system' && <SystemMonitor />}
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-gray-600 text-sm">
        Built by Skippy 🍺 | Powered by OpenClaw
      </footer>
    </div>
  )
}

function NavButton({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
        active 
          ? 'bg-white/10 text-white' 
          : 'text-gray-400 hover:text-white hover:bg-white/5'
      }`}
    >
      {children}
    </button>
  )
}

export default App
