// Today's Priorities - Updated by Skippy
// This file is dynamically managed by the Command Center

export const priorities = {
  date: "2026-02-09",
  briefDelivered: false,
  tasks: [
    {
      id: "verify-deepseek",
      text: "Verify DeepSeek model connection and spawn sub-agent for book generation",
      owner: "Skippy",
      priority: "high",
      completed: false,
      project: "kdp-books"
    },
    {
      id: "generate-tradesman-series",
      text: "Generate concepts/prompts for 'Built With Hands' series (Carpenter, Mechanic)",
      owner: "Skippy (DeepSeek)",
      priority: "high",
      completed: false,
      project: "kdp-books"
    }
  ],
  weather: {
    location: "St. John, NB",
    summary: "Pending brief"
  },
  reminders: [
    "DeepSeek V3 (Chat) confirmed as correct model ID",
    "Ready to generate 'Built With Hands' series"
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
