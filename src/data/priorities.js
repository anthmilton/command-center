// Today's Priorities - Updated by Skippy
// This file is dynamically managed by the Command Center

export const priorities = {
  date: "2026-02-09",
  briefDelivered: true,
  tasks: [
    {
      id: "verify-deepseek",
      text: "Verify DeepSeek model connection and spawn sub-agent",
      owner: "Skippy",
      priority: "high",
      completed: true,
      completedAt: "2026-02-09T00:30:00Z",
      project: "kdp-books"
    },
    {
      id: "generate-trilogy",
      text: "Generate 'Life's Work' trilogy concepts (Trades, Road, Service)",
      owner: "Skippy",
      priority: "high",
      completed: true,
      completedAt: "2026-02-09T01:00:00Z",
      project: "kdp-books"
    },
    {
      id: "tablecloth-prototype",
      text: "Print first 'Coloring Tablecloth' test strip on HP Latex",
      owner: "Anth",
      priority: "medium",
      completed: false,
      project: "business"
    },
    {
      id: "landing-page-check",
      text: "Verify Memory Care landing page layout is finally fixed",
      owner: "Together",
      priority: "high",
      completed: false,
      project: "landing-pages"
    }
  ],
  weather: {
    location: "St. John, NB",
    summary: "Mix of sun & cloud, -5°C (Chilly!) ☀️"
  },
  reminders: [
    "Trilogy PDFs sent: Built With Hands, Open Road, Service & Uniform.",
    "Tablecloth production plan PDF sent.",
    "Sticking with Gemini 3 Flash for speed/stability."
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
