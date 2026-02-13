// Today's Priorities - Updated by Skippy
// This file is dynamically managed by the Command Center

export const priorities = {
  date: "2026-02-12",
  briefDelivered: true,
  tasks: [
    {
      id: "domain-registration",
      text: "Register memorybridgebooks.com domain (+ .org/.net for protection)",
      owner: "Anth",
      priority: "urgent",
      completed: true,
      completedAt: "2026-02-13T01:30:00Z",
      project: "memory-bridge-branding",
      notes: "Registered .com via GoDaddy. Defensive domains (.org/.net) deferred for now."
    },
    {
      id: "dns-setup",
      text: "Point memorybridgebooks.com DNS to Vercel (landing pages)",
      owner: "Skippy",
      priority: "high",
      completed: true,
      completedAt: "2026-02-13T01:55:00Z",
      project: "memory-bridge-branding",
      notes: "DNS configured with Vercel's updated records. No warnings. Site live!"
    },
    {
      id: "trademark-filing",
      text: "File USPTO trademark for 'Memory Bridge Books' (Class 016: Printed materials)",
      owner: "Anth",
      priority: "high",
      completed: false,
      project: "memory-bridge-branding",
      notes: "File within 30 days of domain registration (by ~March 13). DIY ~$250-350 or attorney-assisted ~$750-1250. No conflicts found."
    },
    {
      id: "pinterest-cleanup",
      text: "Clean up Pinterest profile - archive non-memory-care boards, rebrand as 'Memory Bridge Books'",
      owner: "Anth",
      priority: "high",
      completed: false,
      project: "pinterest-automation"
    },
    {
      id: "pinterest-dev-setup",
      text: "Set up Pinterest Developer App (get App ID & Secret)",
      owner: "Anth",
      priority: "high",
      completed: false,
      blockedBy: "pinterest-cleanup",
      project: "pinterest-automation"
    },
    {
      id: "update-command-center",
      text: "Deep review & update of Command Center - make it the single source of truth",
      owner: "Skippy",
      priority: "high",
      completed: true,
      completedAt: "2026-02-12T02:15:00Z",
      project: "command-center"
    },
    {
      id: "books-json-update",
      text: "Updated books.json with 8 live + 4 pending occupational memory care books",
      owner: "Skippy",
      priority: "high",
      completed: true,
      completedAt: "2026-02-12T01:40:00Z",
      project: "landing-pages"
    },
    {
      id: "telegram-reconnect",
      text: "Reconnected Telegram after config reset",
      owner: "Skippy",
      priority: "high",
      completed: true,
      completedAt: "2026-02-12T01:10:00Z",
      project: "infrastructure"
    }
  ],
  weather: {
    location: "St. John, NB",
    summary: "Snowfall warning - 15-20 cm expected through Thursday morning ❄️"
  },
  reminders: [
    "Telegram is back online and working!",
    "Strategy pivot: Memory care ONLY for Pinterest/Etsy marketing",
    "Occupational series = differentiator ('Activities for Men with Dementia')",
    "2-phase automation: Pinterest first, then Etsy",
    "books.json updated and pushed to GitHub/Vercel"
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
