import { useState } from 'react'

export default function IdeaInbox() {
  const [ideas, setIdeas] = useState([
    { id: 1, text: 'Integrate dashboard with GitHub API for live file updates', status: 'new' },
    { id: 2, text: 'Add voice notes capture for quick idea logging', status: 'new' },
  ])
  const [newIdea, setNewIdea] = useState('')
  const [maybeSomeday, setMaybeSomeday] = useState([
    { id: 101, text: 'AI-powered project prioritization suggestions' },
  ])
  const [trashed, setTrashed] = useState([])

  const addIdea = (e) => {
    e.preventDefault()
    if (!newIdea.trim()) return
    setIdeas([...ideas, { id: Date.now(), text: newIdea, status: 'new' }])
    setNewIdea('')
  }

  const moveToMaybe = (idea) => {
    setIdeas(ideas.filter(i => i.id !== idea.id))
    setMaybeSomeday([...maybeSomeday, idea])
  }

  const moveToTrash = (idea) => {
    setIdeas(ideas.filter(i => i.id !== idea.id))
    setMaybeSomeday(maybeSomeday.filter(i => i.id !== idea.id))
    setTrashed([...trashed, { ...idea, reason: 'Manually dismissed' }])
  }

  const promoteToProject = (idea) => {
    alert(`Promote "${idea.text}" to a project - coming soon!`)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">💡 Idea Inbox</h1>
        <p className="text-gray-400 text-sm">Quick capture → Weekly triage</p>
      </div>

      {/* Add New Idea */}
      <form onSubmit={addIdea} className="flex gap-3">
        <input
          type="text"
          value={newIdea}
          onChange={(e) => setNewIdea(e.target.value)}
          placeholder="Got an idea? Toss it here..."
          className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50"
        />
        <button 
          type="submit"
          className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-medium rounded-xl transition-colors"
        >
          Add
        </button>
      </form>

      {/* New Ideas */}
      <Section title={`📥 New Ideas (${ideas.length})`}>
        {ideas.length === 0 ? (
          <p className="text-gray-500 italic text-center py-4">Inbox zero! Nice.</p>
        ) : (
          <div className="space-y-2">
            {ideas.map(idea => (
              <IdeaRow 
                key={idea.id} 
                idea={idea}
                actions={[
                  { label: '🚀 Project', onClick: () => promoteToProject(idea) },
                  { label: '📅 Later', onClick: () => moveToMaybe(idea) },
                  { label: '🗑️', onClick: () => moveToTrash(idea) },
                ]}
              />
            ))}
          </div>
        )}
      </Section>

      {/* Maybe Someday */}
      <Section title={`📅 Maybe Someday (${maybeSomeday.length})`} collapsed>
        {maybeSomeday.length === 0 ? (
          <p className="text-gray-500 italic text-center py-4">Nothing here yet.</p>
        ) : (
          <div className="space-y-2">
            {maybeSomeday.map(idea => (
              <IdeaRow 
                key={idea.id} 
                idea={idea}
                muted
                actions={[
                  { label: '🚀', onClick: () => promoteToProject(idea) },
                  { label: '🗑️', onClick: () => moveToTrash(idea) },
                ]}
              />
            ))}
          </div>
        )}
      </Section>

      {/* Recently Trashed */}
      {trashed.length > 0 && (
        <Section title={`🗑️ Trashed (${trashed.length})`} collapsed>
          <div className="space-y-2">
            {trashed.map(idea => (
              <div key={idea.id} className="p-3 bg-white/5 rounded-lg text-gray-500 line-through">
                {idea.text}
              </div>
            ))}
          </div>
        </Section>
      )}
    </div>
  )
}

function Section({ title, children, collapsed }) {
  const [isOpen, setIsOpen] = useState(!collapsed)

  return (
    <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <h2 className="font-semibold text-white">{title}</h2>
        <span className="text-gray-400">{isOpen ? '▼' : '▶'}</span>
      </button>
      {isOpen && <div className="px-5 pb-5">{children}</div>}
    </div>
  )
}

function IdeaRow({ idea, actions, muted }) {
  return (
    <div className={`flex items-center justify-between p-3 rounded-lg ${muted ? 'bg-white/5' : 'bg-white/10'}`}>
      <span className={muted ? 'text-gray-400' : 'text-white'}>{idea.text}</span>
      <div className="flex gap-1">
        {actions.map((action, i) => (
          <button 
            key={i}
            onClick={action.onClick}
            className="px-2 py-1 text-sm hover:bg-white/10 rounded transition-colors"
            title={action.label}
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  )
}
