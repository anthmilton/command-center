// Today's Priorities - Updated by Skippy
// This file is dynamically managed by the Command Center

export const priorities = {
  date: "2026-02-17",
  briefDelivered: false,
  tasks: [
    {
      id: "pinterest-api-approval",
      text: "⏳ Wait for Pinterest API approval (submitted, in review)",
      owner: "Pinterest Team",
      priority: "high",
      completed: false,
      project: "pinterest-automation",
      notes: "Application submitted. Boards created (10 total). Pin templates ready. Just waiting for approval to start automation."
    },
    {
      id: "trademark-filing",
      text: "🔴 File USPTO trademark for 'Memory Bridge Books' (Class 016: Printed materials)",
      owner: "Anth",
      priority: "high",
      completed: false,
      project: "memory-bridge-branding",
      notes: "File within 30 days of domain registration (by ~March 13). DIY ~$250-350 or attorney-assisted ~$750-1250. No conflicts found."
    },
    {
      id: "apex-domain-fix",
      text: "Fix memorybridgebooks.com DNS (apex domain not resolving without www)",
      owner: "Skippy",
      priority: "medium",
      completed: false,
      project: "memory-bridge-branding",
      notes: "www.memorybridgebooks.com works, but memorybridgebooks.com doesn't. Need to add A record or CNAME for apex domain in DNS."
    },
    {
      id: "etsy-complete",
      text: "✅ All 12 Memory Bridge Books live on Etsy with full product listings",
      owner: "Anth + Skippy",
      priority: "high",
      completed: true,
      completedAt: "2026-02-17T01:00:00Z",
      project: "etsy-shop",
      notes: "Shop live at etsy.com/shop/MemoryBridgeBooks. All 12 books listed with What's Inside graphics, descriptions, links added to memorybridgebooks.com"
    },
    {
      id: "about-margaret-section",
      text: "✅ Added About Margaret section to memorybridgebooks.com",
      owner: "Skippy",
      priority: "high",
      completed: true,
      completedAt: "2026-02-17T00:20:00Z",
      project: "memory-bridge-branding",
      notes: "Photo + full bio added to landing page. Responsive layout. Deployed via Vercel."
    },
    {
      id: "author-central",
      text: "✅ Margaret Whitmore Author Central page created on Amazon",
      owner: "Skippy",
      priority: "high",
      completed: true,
      completedAt: "2026-02-15T21:00:00Z",
      project: "memory-bridge-branding",
      notes: "https://www.amazon.com/author/memorybridgebooks - All books consolidated, bio written, consistent branding across platforms"
    },
    {
      id: "whats-inside-bullets",
      text: "✅ Created What's Inside bullet points for all 12 books (Etsy graphics)",
      owner: "Skippy",
      priority: "medium",
      completed: true,
      completedAt: "2026-02-16T23:50:00Z",
      project: "etsy-shop",
      notes: "Comma-separated format for Anth's production software. All 12 books documented."
    },
    {
      id: "image-scripts",
      text: "✅ Built crop-to-square.bat image processing script",
      owner: "Skippy",
      priority: "medium",
      completed: true,
      completedAt: "2026-02-16T23:54:00Z",
      project: "pinterest-automation",
      notes: "Joins crop-covers.bat and resize-for-pins.bat. Double-click batch script for Windows image processing."
    }
  ],
  weather: {
    location: "St. John, NB",
    summary: "Check tomorrow's weather"
  },
  reminders: [
    "✅ memorybridgebooks.com LIVE with About Margaret section",
    "✅ All 12 books live on Etsy + Amazon",
    "✅ Author Central page complete",
    "⏳ Pinterest API approval pending (boards ready, automation built)",
    "🔴 Trademark filing due by ~March 13 (30 days from domain registration)",
    "Fix apex domain DNS (memorybridgebooks.com without www)"
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
