// Today's Priorities - Updated by Skippy
// This file is dynamically managed by the Command Center

export const priorities = {
  date: "2026-02-08",
  briefDelivered: true,
  tasks: [
    {
      id: "life-work-concept",
      text: "Brainstorm 'Life's Work' coloring book series (Trades/Professions)",
      owner: "Anth",
      priority: "high",
      completed: false,
      project: "kdp-books"
    },
    {
      id: "monitor-sales",
      text: "Monitor initial sales for newly live books (18 total)",
      owner: "Anth",
      priority: "medium",
      completed: false,
      project: "kdp-books"
    },
    {
      id: "landing-page-tweaks",
      text: "Check live landing pages for any visual glitches",
      owner: "Skippy",
      priority: "medium",
      completed: false,
      project: "landing-pages"
    }
  ],
  weather: {
    location: "St. John, NB",
    summary: "Mostly Sunny, -5°C (Windy) ☀️"
  },
  reminders: [
    "Sensory Boards idea is shelved (in Idea Inbox)",
    "All 18 KDP books are LIVE and linked",
    "Command Center updated"
  ]
}

export const completePriority = (taskId) => {
  const task = priorities.tasks.find(t => t.id === taskId)
  if (task) {
    task.completed = true
    task.completedAt = new Date().toISOString()
  }
}

export const addPriority = (task) => {
  priorities.tasks.push({
    id: `task-${Date.now()}`,
    text: task.text,
    owner: task.owner || "Anth",
    priority: task.priority || "medium",
    completed: false,
    project: task.project
  })
}
