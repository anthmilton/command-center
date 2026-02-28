// Today's Priorities - Updated by Skippy
// This file is dynamically managed by the Command Center

export const priorities = {
  date: "2026-02-28",
  briefDelivered: true,
  tasks: [
    {
      id: "gumroad-setup",
      text: "🚀 Set up Gumroad landing page for free guide",
      owner: "Anth",
      priority: "urgent",
      completed: false,
      project: "margaret-video-funnel",
      notes: "All copy written and ready to paste. Create product, upload free preview PDF (Chapters 1-3), configure email capture, test funnel. Target: launch today.",
      nextActions: [
        "Go to gumroad.com, create account",
        "Create new product: 'Memory Bridge Guide - Free Preview'",
        "Set price $0 (email required)",
        "Upload free preview PDF",
        "Paste landing page copy (provided by Skippy)",
        "Test download flow",
        "Get Gumroad link for Pinterest pins"
      ]
    },
    {
      id: "pinterest-video-demo",
      text: "🎥 Record Pinterest API video demo",
      owner: "Anth",
      priority: "high",
      completed: false,
      project: "pinterest-automation",
      notes: "Automation app is working in sandbox. Need to record video showing OAuth flow + pin creation for Standard Access application. 2-3 minutes total.",
      nextActions: [
        "Run: npm run setup (show OAuth flow)",
        "Run: npm run post-pin (show pin creation)",
        "Check Pinterest for posted pin",
        "Record all 3 steps with screen capture",
        "Upload video to Pinterest application"
      ]
    },
    {
      id: "pinterest-standard-access",
      text: "📤 Submit Pinterest Standard Access application",
      owner: "Anth",
      priority: "high",
      completed: false,
      blockedBy: "pinterest-video-demo",
      project: "pinterest-automation",
      notes: "Once video is recorded, submit application. Typical approval: 1-2 weeks. Full API automation resumes once approved."
    },
    {
      id: "week3-campaign-planning",
      text: "📋 Plan Pinterest Week 3 campaign",
      owner: "Anth",
      priority: "high",
      completed: false,
      project: "pinterest-automation",
      notes: "Week 2 pins run out Sunday afternoon. Need Week 3 ready. Use Opus (Claude monthly) to analyze Week 1-2 analytics and generate Week 3 strategy.",
      nextActions: [
        "Pull Week 1-2 Pinterest analytics",
        "Feed to Claude Monthly (Opus + extended thinking)",
        "Get comprehensive Week 3 campaign plan",
        "Review with Skippy, refine",
        "Skippy: Test pin image generation with Gemini Imagen API (5-6 test batch)",
        "If quality good, batch-generate Week 3 pins"
      ]
    },
    {
      id: "free-guide-extraction",
      text: "Extract free preview PDF (Chapters 1-3 + samples)",
      owner: "Together",
      priority: "high",
      completed: false,
      project: "margaret-video-funnel",
      notes: "Need to extract first 3 chapters from full guide PDF, add 3 sample coloring pages, create cover page. This is what goes on Gumroad for email capture."
    },
    {
      id: "pinterest-video-upload",
      text: "📌 Upload 3 Margaret videos to Pinterest",
      owner: "Anth",
      priority: "medium",
      completed: false,
      blockedBy: "gumroad-setup",
      project: "margaret-video-funnel",
      notes: "Once Gumroad is live and you have the link, upload Margaret videos as Pinterest video pins. Use pin descriptions provided by Skippy.",
      nextActions: [
        "Upload Video 1 (For Caregivers) to Memory Care Activities board",
        "Upload Video 2 (How Therapy Works) to Caregiver Resources board",
        "Upload Video 3 (Women's Collection) to Memory Care for Women board",
        "All pin descriptions include Gumroad link"
      ]
    },
    {
      id: "etsy-api-approval-check",
      text: "⏳ Check Etsy API key approval status",
      owner: "Anth",
      priority: "medium",
      completed: false,
      project: "etsy-shop",
      notes: "Applied for Etsy API key. Typical approval: hours to 1-2 days. Check email for approval notification."
    },
    {
      id: "command-center-update",
      text: "✅ Update Command Center with Feb 28 status",
      owner: "Skippy",
      priority: "urgent",
      completed: true,
      completedAt: "2026-02-28T19:30:00Z",
      project: "command-center",
      notes: "Updated all project statuses, added Margaret Whitmore Video Funnel project, created memory documentation, updated MEMORY.md"
    }
  ],
  weather: {
    location: "St. John, NB",
    summary: "High +5°C today, snow 2-4cm starting tonight"
  },
  reminders: [
    "🚀 Gumroad launch priority - all copy ready",
    "🎥 Pinterest video demo ready to record",
    "📋 Week 3 campaign planning needed (Week 2 ends Sunday)",
    "⏳ Etsy API key approval pending",
    "📊 17 books live on Amazon + Etsy",
    "🍺 Margaret videos ready, funnel strategy complete"
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
