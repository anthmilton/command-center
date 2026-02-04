// Today's Priorities - Updated by Skippy
// This file is dynamically managed by the Command Center

export const priorities = {
  date: "2026-02-04",
  briefDelivered: false,
  tasks: [
    {
      id: "book-catalog",
      text: "Compile KDP book catalog (Title, ASIN, Format, Genre)",
      owner: "Anth",
      priority: "high",
      completed: false,
      project: "kdp-books"
    },
    {
      id: "command-center-priorities",
      text: "Add Today's Priorities card to Command Center Dashboard",
      owner: "Skippy",
      priority: "high",
      completed: false,
      project: "command-center"
    },
    {
      id: "landing-pages-deploy",
      text: "Populate books.json and deploy landing pages",
      owner: "Together",
      priority: "medium",
      completed: false,
      project: "landing-pages",
      blockedBy: "book-catalog"
    }
  ],
  weather: {
    location: "St. John, NB",
    summary: "Pending daily brief"
  },
  reminders: [
    "Daily brief now arrives at 8:00 AM AST (moved from 10:30 AM)",
    "Landing pages complete - just need book data",
    "Pinterest pins uploading 5/day automatically"
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
