// Today's Priorities - Updated by Skippy
// This file is dynamically managed by the Command Center

export const priorities = {
  date: "2026-04-20",
  briefDelivered: true,
  tasks: [
    {
      id: "fishermans-collection-images",
      text: "🎨 Complete Fisherman's Collection bundle images",
      owner: "Skippy",
      priority: "high",
      completed: false,
      project: "bundle-listing-images",
      notes: "3/4 bundles complete (1950s ✅, Her Working Life ✅, His Working Life ✅). Only Fisherman's Collection remaining (3 books - fastest one). Then list ALL 4 bundles on Gumroad + Etsy.",
      nextActions: [
        "Generate 10 images for Fisherman's Collection",
        "Use same 10-slot workflow as other bundles",
        "Deliver to Anth",
        "Anth lists all 4 bundles on Gumroad + Etsy"
      ]
    },
    {
      id: "time-tracking-functional",
      text: "⏱️ Get Time Tracking App functional",
      owner: "Together",
      priority: "urgent",
      completed: false,
      project: "time-tracker",
      notes: "Built but not functional. Target: working by END OF THIS WEEK for personal testing. Potential product if successful.",
      nextActions: [
        "Review existing code and audit state",
        "Document what works vs broken",
        "Fix critical bugs",
        "Deploy for personal testing"
      ]
    },
    {
      id: "fishing-log-sprint",
      text: "🎣 Fishing Log App - Decision needed",
      owner: "Anth",
      priority: "high",
      completed: false,
      project: "fishing-log",
      notes: "Season is ACTIVE. Private tournament prep tool (heat maps, catch tracking). Sprint this now or delay? Prime season timing - decision needed.",
      nextActions: [
        "Decide: Sprint now or wait?",
        "If now: Document requirements",
        "Design database schema",
        "Build core MVP for tournament use"
      ]
    },
    {
      id: "screen-shields-launch",
      text: "🛡️ Screen Shields - LAUNCH NOW (Season Active)",
      owner: "Anth",
      priority: "urgent",
      completed: false,
      project: "screen-shields",
      notes: "90% ready. Season is ACTIVE NOW. Needs final push: marketing, logos, packaging, Amazon listings. This is prime launch window.",
      nextActions: [
        "Pick next action: Brand name? Logo? Amazon strategy?",
        "Finalize packaging design",
        "Create Amazon listings",
        "LAUNCH - don't miss season window"
      ]
    },
    {
      id: "good-times-collection-site-update",
      text: "📚 Update website when Good Times Collection goes live",
      owner: "Skippy",
      priority: "high",
      completed: false,
      blockedBy: "Amazon approval pending",
      project: "website-maintenance",
      notes: "5 books under Amazon review (Boomer leisure activities). When approved, IMMEDIATELY update memorycarebooks.com: add 5 books to books.json, upload covers, rebuild Hugo, deploy to Vercel.",
      nextActions: [
        "Wait for Anth's notification that books are live",
        "Get ASIN links + cover images",
        "Update books.json with all 5 books",
        "Add covers to /static/images/covers/",
        "Rebuild: hugo",
        "Deploy: vercel --prod",
        "Confirm with Anth"
      ]
    },
    {
      id: "bundle-pdfs-assembly",
      text: "📦 Assemble Bundle PDFs",
      owner: "Anth",
      priority: "high",
      completed: false,
      project: "bundle-listing-images",
      notes: "Listing images done for 3/4 bundles. Anth compiling PDF files (32 books total for all bundles). Once complete, upload to Gumroad and list on Etsy.",
      nextActions: [
        "Anth finishes assembling bundle PDFs",
        "Upload PDFs to Gumroad",
        "List all 4 bundles on Gumroad + Etsy",
        "Drive sales toward $100 threshold"
      ]
    },
    {
      id: "hit-100-sales-threshold",
      text: "💰 Hit $100 Gumroad sales threshold",
      owner: "Together",
      priority: "medium",
      completed: false,
      project: "margaret-video-funnel",
      notes: "Need $100 in sales to unlock Gumroad email automation (14-day sequence ready to deploy). Currently: 17 individual books + free guide live, bundles pending.",
      nextActions: [
        "List all 4 bundles (drives bundle sales)",
        "Pinterest campaign drives traffic to Gumroad",
        "Monitor sales progress toward $100"
      ]
    },
    {
      id: "pinterest-week8-planning",
      text: "📌 Pinterest Week 8 Campaign Planning",
      owner: "Together",
      priority: "low",
      completed: false,
      project: "pinterest-automation",
      notes: "Week 7 complete (March 30 - April 5). Automation running perfectly. Need Week 8+ campaigns from Opus to continue momentum.",
      nextActions: [
        "Request Week 8 campaign from Opus",
        "Review Week 7 performance (if analytics available)",
        "Continue automated posting schedule"
      ]
    }
  ],
  weather: {
    location: "St. John, NB",
    summary: "Early spring - fishing season starting"
  },
  reminders: [
    "🎣 FISHING SEASON ACTIVE - Screen Shields + Fishing Log timing is NOW",
    "📦 Bundle Images: 3/4 Complete - Only Fisherman's Collection remains",
    "💰 Etsy Sales: $56+ total, 6 orders (First sale March 9 validates model)",
    "📊 GA4 + UTM Tracking: Fully connected across Etsy/Amazon/Gumroad",
    "📌 Pinterest Week 7: Complete (40/40 posted, 0 failures)",
    "📚 Good Times Collection: Still under Amazon review (5 books pending)",
    "💌 Email automation: Needs $100 Gumroad sales (bundles will push this over)",
    "⏱️ Time Tracker: Needs debugging THIS WEEK for personal testing"
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
    project: task.project,
    notes: task.notes || ""
  })
}
