// Today's Priorities - Updated by Skippy
// This file is dynamically managed by the Command Center

export const priorities = {
  date: "2026-03-10",
  briefDelivered: true,
  tasks: [
    {
      id: "bundle-images-her-working-life",
      text: "🎨 Create Her Working Life Collection bundle images",
      owner: "Skippy",
      priority: "urgent",
      completed: false,
      project: "bundle-listing-images",
      notes: "1/4 bundles complete (The 1950s Collection done). Her Working Life Collection is NEXT - validated by Beth's $29.97 Etsy order (all 3 books from this collection). 10 images needed: hero shot, spread, 3x interior samples, infographic, colored sample, size reference, gift shot, collection context.",
      nextActions: [
        "Use same 10-slot workflow as 1950s Collection",
        "Books: Beauty Shop, Sewing/Quilting, Home Cook, plus 3 more from women's working life",
        "Generate via nano-banana-pro skill",
        "Deliver to Anth when complete"
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
      id: "fishing-log-4week-sprint",
      text: "🎣 Fishing Log App - Start 4-week sprint",
      owner: "Together",
      priority: "high",
      completed: false,
      project: "fishing-log",
      notes: "Season starting NOW. Private tournament prep tool (heat maps, catch tracking, pattern analysis). Functional MVP by ~April 10.",
      nextActions: [
        "Document detailed feature requirements",
        "Design database schema (catches, locations, conditions, weather)",
        "Build core tracking MVP",
        "Deploy for personal tournament testing"
      ]
    },
    {
      id: "screen-shields-launch-prep",
      text: "🛡️ Screen Shields - Finalize for Amazon launch",
      owner: "Anth",
      priority: "high",
      completed: false,
      project: "screen-shields",
      notes: "Testing complete. Fishing/boating season starting - 1-2 week launch window. Needs: marketing materials, logos, packaging.",
      nextActions: [
        "Design logos and branding",
        "Finalize packaging design",
        "Create Amazon product listings",
        "Launch on Amazon"
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
      id: "etsy-api-follow-up",
      text: "📧 Follow up with Etsy on API approval",
      owner: "Anth",
      priority: "medium",
      completed: false,
      project: "etsy-shop",
      notes: "API app pending approval 3+ weeks. Tested API key - returned 'not active' error. Need to contact Etsy support or consider reapplying.",
      nextActions: [
        "Contact Etsy support for status update",
        "If rejected, reapply with new app submission",
        "Manual Etsy management working fine in meantime"
      ]
    },
    {
      id: "bundle-listing-complete",
      text: "📦 Complete all 4 bundle image sets",
      owner: "Skippy",
      priority: "medium",
      completed: false,
      project: "bundle-listing-images",
      notes: "After Her Working Life Collection, complete His Working Life and Fisherman's Collection. Then list ALL bundles on Gumroad + Etsy.",
      nextActions: [
        "Complete Her Working Life (next)",
        "Complete His Working Life",
        "Complete The Fisherman's Collection",
        "Anth lists all 4 bundles on Gumroad",
        "Anth lists all 4 bundles on Etsy"
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
      id: "pinterest-week4-monitor",
      text: "📌 Monitor Pinterest Week 4 campaign",
      owner: "Skippy",
      priority: "low",
      completed: false,
      project: "pinterest-automation",
      notes: "Week 4 running perfectly (12/40 posted, 0 failures). Auto-pilot through March 15. Just monitor for errors.",
      nextActions: [
        "Let automation run",
        "Check for any posting failures (none so far)",
        "Prepare Week 5 campaign planning"
      ]
    }
  ],
  weather: {
    location: "St. John, NB",
    summary: "Early spring - fishing season starting"
  },
  reminders: [
    "🎉 FIRST ETSY SALE! March 9 - $29.97 (validates Her Working Life bundle)",
    "📊 Sales momentum: 5 books sold this week (2 Amazon + 3 Etsy)",
    "🎣 Fishing season starting - Screen Shields + Fishing Log both urgent",
    "📚 Good Times Collection (5 books) under Amazon review - update site when live",
    "🛍️ Bundles validated - Her Working Life Collection is priority #1",
    "💌 Email automation blocked until $100 Gumroad sales (bundles will help)",
    "🍺 Command Center + Website Maintenance now documented as skills"
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
