// Today's Priorities - Updated by Skippy
// This file is dynamically managed by the Command Center

export const priorities = {
  date: "2026-02-05",
  briefDelivered: true,
  tasks: [
    {
      id: "book-catalog",
      text: "Compile KDP book catalog (Title, ASIN, Format, Genre)",
      owner: "Anth",
      priority: "high",
      completed: true,
      completedAt: "2026-02-05T03:30:00Z",
      project: "kdp-books"
    },
    {
      id: "command-center-priorities",
      text: "Add Today's Priorities card to Command Center Dashboard",
      owner: "Skippy",
      priority: "high",
      completed: true,
      completedAt: "2026-02-04T14:30:00Z",
      project: "command-center"
    },
    {
      id: "landing-pages-deploy",
      text: "Populate books.json and deploy landing pages",
      owner: "Together",
      priority: "medium",
      completed: true,
      completedAt: "2026-02-05T03:15:00Z",
      project: "landing-pages",
      blockedBy: null
    }
  ],
  weather: {
    location: "St. John, NB",
    summary: "Winter indoor project mode ❄️"
  },
  reminders: [
    "Landing pages are LIVE at landing-pages-eight-sable.vercel.app",
    "Review visual tweaks needed for landing pages",
    "Morning brief set for 8:00 AM AST"
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
