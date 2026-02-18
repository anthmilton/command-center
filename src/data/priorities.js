// Today's Priorities - Updated by Skippy
// This file is dynamically managed by the Command Center

export const priorities = {
  date: "2026-02-17",
  briefDelivered: true,
  tasks: [
    {
      id: "pinterest-reapply",
      text: "🔴 URGENT: Reapply for Pinterest API with updated privacy policy",
      owner: "Anth",
      priority: "urgent",
      completed: false,
      project: "pinterest-automation",
      notes: "Privacy policy updated at memorybridgebooks.com/privacy.html. First application denied due to bogus privacy link. Reapply with proper URL.",
      nextActions: [
        "Go to Pinterest Developer Portal",
        "Reapply for API access",
        "Use privacy policy URL: https://memorybridgebooks.com/privacy.html",
        "Wait for approval (typically 1-2 weeks)"
      ]
    },
    {
      id: "dns-apex-fix",
      text: "Fix GoDaddy DNS settings (apex domain without www)",
      owner: "Anth",
      priority: "high",
      completed: false,
      project: "memory-bridge-branding",
      notes: "www.memorybridgebooks.com works, but memorybridgebooks.com doesn't. Need to add A records: 76.76.21.21 and 76.76.21.98"
    },
    {
      id: "amazon-5-new-books",
      text: "🔴 Finish posting 5 remaining books to Amazon KDP",
      owner: "Anth",
      priority: "urgent",
      completed: false,
      project: "kdp-books",
      notes: "5 new books compiled with covers, ready to upload. Books currently at 12 live, will be 17 after this."
    },
    {
      id: "etsy-5-new-books",
      text: "Post 5 new books to Etsy after Amazon approval",
      owner: "Anth",
      priority: "high",
      completed: false,
      blockedBy: "amazon-5-new-books",
      project: "etsy-shop",
      notes: "Wait for Amazon approval, then create Etsy listings for same 5 books"
    },
    {
      id: "etsy-content-5-books",
      text: "Create Etsy listing content for 5 new books",
      owner: "Skippy",
      priority: "high",
      completed: false,
      project: "etsy-shop",
      notes: "Need What's Inside bullet points (comma-separated format) for the 5 new books. Same format as whats-inside-bullets.md"
    },
    {
      id: "pinterest-posting-progress",
      text: "📌 Pinterest posting in progress (3 posted, 15 scheduled through Thu 8pm)",
      owner: "Anth",
      priority: "high",
      completed: false,
      project: "pinterest-automation",
      notes: "Week 1 schedule: 40 pins total. Currently: 3 posted, 15 more scheduled (through Feb 20 8pm). Need to create images for remaining 22 pins (Fri-Sun). Schedule saved: pinterest-week1-schedule.md",
      nextActions: [
        "Create pin images for Friday-Sunday (pins 25-40)",
        "Schedule remaining 22 pins before Thursday 8pm",
        "Review results Friday to plan Week 2 strategy"
      ]
    },
    {
      id: "pinterest-create-more-images",
      text: "🎨 Create more Pinterest pin images (22 remaining for Week 1)",
      owner: "Anth",
      priority: "high",
      completed: false,
      project: "pinterest-automation",
      notes: "Last scheduled pin posts Thursday Feb 20 8pm. Need images ready for Friday-Sunday posting (22 more pins). Reminder set for Wednesday evening."
    },
    {
      id: "reddit-first-post",
      text: "Deploy first Reddit post (5 posts ready)",
      owner: "Anth",
      priority: "medium",
      completed: false,
      project: "marketing",
      notes: "reddit-posts.md has 5 complete posts. Start with r/dementia emotional story. Best times: 8-10 AM ET or 6-8 PM ET."
    },
    {
      id: "privacy-policy-updated",
      text: "✅ Updated privacy policy for Pinterest API compliance",
      owner: "Skippy",
      priority: "urgent",
      completed: true,
      completedAt: "2026-02-17T13:25:00Z",
      project: "pinterest-automation",
      notes: "Comprehensive policy covering GDPR, CCPA, Pinterest developer guidelines. Live at memorybridgebooks.com/privacy.html"
    }
  ],
  weather: {
    location: "St. John, NB",
    summary: "Clear this morning, snow starting tonight (2cm expected)"
  },
  reminders: [
    "🔴 Pinterest API reapplication - use new privacy policy URL",
    "📌 Manual pin posting starts TODAY (5-7/day)",
    "📚 5 new books ready for Amazon → Etsy pipeline",
    "🌐 Fix DNS apex domain issue in GoDaddy",
    "📝 Reddit posts written and ready to deploy"
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
