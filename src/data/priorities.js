// Today's Priorities - Updated by Skippy
// This file is dynamically managed by the Command Center

export const priorities = {
  date: "2026-02-05",
  briefDelivered: true,
  tasks: [
    {
      id: "get-new-asins",
      text: "Provide ASINs for newly approved books (Saltwater, Sunday Drive, etc.)",
      owner: "Anth",
      priority: "high",
      completed: false,
      project: "kdp-books"
    },
    {
      id: "update-landing-links",
      text: "Update landing pages with new live Amazon links",
      owner: "Skippy",
      priority: "high",
      completed: false,
      project: "landing-pages",
      blockedBy: "get-new-asins"
    },
    {
      id: "led-rebate-reg",
      text: "Register for NB Power Business Rebate Program",
      owner: "Anth",
      priority: "medium",
      completed: false,
      project: "led-rebate-program"
    }
  ],
  weather: {
    location: "St. John, NB",
    summary: "Cloudy, -2°C (Feels like -8°C) ❄️"
  },
  reminders: [
    "ALL KDP books are now approved! 🚀",
    "Landing pages ready for final link update",
    "Pinterest automation research confirmed (OAuth flow)"
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
