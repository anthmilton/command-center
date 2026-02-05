export const projects = [
  {
    id: 'coloring-compiler',
    name: 'Coloring Book Compiler',
    category: 'factory',
    progress: 90,
    status: 'complete',
    statusLabel: 'Done ✓',
    description: 'Turns AI-generated coloring pages into KDP-ready PDFs. Captions, page numbers, covers, multiple formats. Production tool.',
    blockers: [],
    nextActions: [
      'Consolidate versioned files',
      'Clean up repo structure'
    ],
    techStack: ['Python', 'Pillow', 'ReportLab', 'CustomTkinter'],
    lastWorked: '2025-02-01',
    file: 'coloring-book-compiler.md'
  },
  {
    id: 'illustrated-compiler',
    name: 'Illustrated Book Compiler',
    category: 'factory',
    progress: 85,
    status: 'almost',
    statusLabel: '85%',
    description: 'Compiles illustrated public domain books for KDP. Built for Carmilla, adaptable for other classics. Text triggers + image placement.',
    blockers: ['Currently hardcoded for Carmilla'],
    nextActions: [
      'Generalize for other books',
      'Clean up test files',
      'Document how to add new books'
    ],
    techStack: ['Python', 'Pillow', 'ReportLab', 'CustomTkinter'],
    lastWorked: '2025-02-01',
    file: 'illustrated-book-compiler.md'
  },
  {
    id: 'signswift',
    name: 'Sign Shop OS',
    category: 'business',
    progress: 100,
    status: 'complete',
    statusLabel: 'Pricing Tuned ✓',
    description: 'Complete sign shop management system with pricing calculator, customers, estimates, work orders, invoices, and materials management.',
    blockers: [],
    nextActions: [
      'Set up production PostgreSQL instance',
      'Deploy to hosting (Vercel? Railway? VPS?)',
      'Initial data migration from Cyrious',
      'User testing in real workflow'
    ],
    techStack: ['React', 'Express', 'PostgreSQL', 'Prisma'],
    lastWorked: '2026-02-01',
    file: 'signswift.md'
  },
  {
    id: 'sales-crm',
    name: 'CRM App',
    category: 'business',
    progress: 95,
    status: 'almost',
    statusLabel: '95%',
    description: 'Lead capture app for the sign shop sales team. Web dashboard + mobile app.',
    blockers: ['Unknown bugs need to be identified'],
    nextActions: [
      'Identify and document the specific bugs',
      'Fix bugs',
      'Final testing',
      'Deploy/distribute to sales team'
    ],
    techStack: ['React Native', 'Expo', 'Firebase'],
    lastWorked: '2025-01-31',
    file: 'sales-crm.md'
  },
  {
    id: 'screen-shields',
    name: 'Screen Shields',
    category: 'fishing',
    progress: 60,
    status: 'wip',
    statusLabel: 'Testing',
    description: 'Protective screens for fishfinder graphs. Amazon launch planned.',
    blockers: [
      'Need to finalize brand identity',
      'Packaging design',
      'Marketing strategy'
    ],
    nextActions: [
      'Decide on final brand name',
      'Design logo',
      'Create packaging mockups',
      'Write Amazon listing copy'
    ],
    techStack: [],
    lastWorked: null,
    file: 'screen-shields.md'
  },
  {
    id: 'bay-armor',
    name: 'Bay Armor',
    category: 'fishing',
    progress: 40,
    status: 'planning',
    statusLabel: 'Planning',
    description: 'Two product lines: clear protective overlays for lures + printed re-skin overlays.',
    blockers: [
      'Finalize which product line to launch first',
      'Pricing strategy',
      'Brand identity'
    ],
    nextActions: [
      'Decide: launch clear overlays first, or both?',
      'Finalize pricing',
      'Design packaging'
    ],
    techStack: [],
    lastWorked: null,
    file: 'bay-armor.md'
  },
  {
    id: 'fishing-log',
    name: 'Fishing Log App',
    category: 'fishing',
    progress: 10,
    status: 'idea',
    statusLabel: 'Concept',
    description: 'Private tournament prep tool. Track catches, develop heat maps. Data stays private.',
    blockers: ['Need detailed feature spec', 'Tech stack decision'],
    nextActions: [
      'Document detailed feature requirements',
      'Research offline-first architecture',
      'Decide: mobile-first or web+mobile?'
    ],
    techStack: ['TBD - likely React Native'],
    lastWorked: null,
    file: 'fishing-log-app.md'
  },
  {
    id: 'time-tracker',
    name: 'Time Tracking App',
    category: 'apps',
    progress: 30,
    status: 'wip',
    statusLabel: 'WIP',
    description: 'Personal productivity tracker. Mobile app to see where your time goes.',
    blockers: ['Need to audit current state'],
    nextActions: [
      'Review existing code',
      'Document what works vs broken',
      'Decide: fix or rebuild?'
    ],
    techStack: ['TBD'],
    lastWorked: null,
    file: 'time-tracking-app.md'
  },
  {
    id: 'ai-image-studio',
    name: 'AI Image Studio',
    category: 'factory',
    progress: 85,
    status: 'almost',
    statusLabel: 'Secured 🔒',
    description: 'Full AI image generation platform with multi-provider support (Gemini, OpenAI, Stability), KDP book cover system, drag-and-drop text overlay editor, and batch production studio.',
    blockers: ['Could use documentation/onboarding'],
    nextActions: [
      'Clean up versioned files (consolidate to single version)',
      'Add user documentation / tutorial',
      'Consider web version for broader access',
      'Marketing / product positioning'
    ],
    techStack: ['Python', 'CustomTkinter', 'PIL/Pillow', 'Google Gemini API', 'OpenAI API', 'Stability AI API', 'PyInstaller'],
    lastWorked: '2026-02-01',
    file: 'ai-image-studio.md'
  },
  {
    id: 'mural-expansion',
    name: 'Mural Expansion',
    category: 'business',
    progress: 15,
    status: 'planning',
    statusLabel: 'Planning',
    description: 'AI-generated custom murals on HP Latex 700. Same-day turnaround, no licensing fees. Connects AI Image Studio to print infrastructure.',
    blockers: ['Define target market', 'Pricing strategy', 'Need sample portfolio'],
    nextActions: [
      'Create mural presets in AI Image Studio',
      'Generate sample portfolio (10-20 designs)',
      'Define service tiers and pricing',
      'Marketing: website + social'
    ],
    techStack: ['AI Image Studio', 'HP Latex 700'],
    lastWorked: '2025-02-01',
    file: 'mural-expansion.md'
  },
  {
    id: 'kdp-books',
    name: 'KDP Books',
    category: 'business',
    progress: 75,
    status: 'live',
    statusLabel: 'Catalog Updated',
    description: 'AI-generated coloring books. Catalog extracted and ASINs linked. 14 books tracked.',
    blockers: [],
    nextActions: [
      'Monitor "In Review" books for approval',
      'Update links when new books go live',
      'Continue Pinterest pins'
    ],
    techStack: ['AI Image Studio', 'KDP', 'Pinterest'],
    lastWorked: '2026-02-05',
    file: 'kdp-books.md'
  },
  {
    id: 'pinterest-automation',
    name: 'Pinterest Pin Automation',
    category: 'factory',
    progress: 5,
    status: 'idea',
    statusLabel: 'Planned',
    description: 'Automate Pinterest pin creation and posting through AI Image Studio. Generate 3-5 pins per book automatically instead of manual Canva work. Templates: cover shot, interior sample, problem/solution.',
    blockers: ['Need to complete manual phase first (learn what works)', 'Template design needed'],
    nextActions: [
      'Finish manual Pinterest campaign (validate pin styles)',
      'Design pin templates for automation',
      'Build pinterest_pin_generator.py module',
      'Integrate with AI Image Studio',
      'Optional: Pinterest API for auto-posting'
    ],
    techStack: ['Python', 'Pillow', 'AI Image Studio', 'Pinterest API (optional)'],
    lastWorked: '2026-02-03',
    file: 'pinterest-automation-idea.md'
  },
  {
    id: 'api-cost-tracker',
    name: 'API Cost Tracker',
    category: 'apps',
    progress: 0,
    status: 'idea',
    statusLabel: 'Concept',
    description: 'Unified dashboard to track API usage and costs across all services (Gemini, OpenAI, Stability AI, OpenClaw, etc.). Token usage = money usage. See total monthly spend, project costs, and ROI at a glance.',
    blockers: ['Need to research existing solutions first', 'Define MVP feature set'],
    nextActions: [
      'Research existing API cost tracking tools',
      'Define MVP features (which APIs to support first)',
      'Document API integration requirements',
      'Decide: web app, mobile, or both?',
      'Security plan for handling API keys'
    ],
    techStack: ['TBD - likely web-based dashboard'],
    lastWorked: '2026-02-04',
    file: 'api-cost-tracker.md'
  },
  {
    id: 'led-rebate-program',
    name: 'LED Sign Conversion Rebate Service',
    category: 'business',
    progress: 5,
    status: 'planning',
    statusLabel: 'Planning',
    description: 'Sign shop service offering: LED conversions + rebate assistance. NB Power provides 25% back on LED sign upgrades ($250k cap), Renewable NB offers up to $100k for retrofits, plus federal stackable incentives. Handle pre-approval and paperwork for clients.',
    blockers: [],
    nextActions: [
      'Register business with NB Power Business Rebate Program',
      'Request FREE energy walk-through for shop (test process)',
      'Convert shop\'s own signs first (case study + 25% back)',
      'Document rebate process and requirements',
      'Create service package offerings and pricing',
      'Contact NB Power with sign-specific questions',
      'Build client outreach campaign (existing fluorescent signs)',
      'Design marketing materials highlighting 25% savings'
    ],
    techStack: ['NB Power Business Rebate Program', 'Renewable NB', 'NRCan Federal Incentives'],
    lastWorked: '2026-02-04',
    file: 'led-conversion-rebates-canada.md'
  },
  {
    id: 'ai-for-an-old-guy',
    name: 'AI for an Old Guy - YouTube Channel',
    category: 'business',
    progress: 0,
    status: 'idea',
    statusLabel: 'Validating',
    description: 'YouTube channel calling BS on "AI is easy" narrative. Honest content about difficulty, pitfalls, real costs, and basics nobody explains. Target: non-technical 40+ business owners learning AI. "I\'m figuring this shit out too - here\'s what I learned the hard way."',
    blockers: ['Research if someone is already doing this approach', 'Never done YouTube before', 'Uncertain if right person for this'],
    nextActions: [
      'Research YouTube for similar honest/difficult AI content',
      'Validate market gap exists',
      'If gap exists: record ONE test video (10-15 min, no polish)',
      'Show test video to 3-5 non-technical friends',
      'Decide: worth pursuing or not?',
      'If yes: pilot episode ideas and production setup'
    ],
    techStack: ['YouTube', 'Screen recording (OBS)', 'Basic editing (DaVinci Resolve)', 'Phone camera/mic'],
    lastWorked: '2026-02-04',
    file: 'ai-for-an-old-guy-youtube.md'
  },
  {
    id: 'landing-pages',
    name: 'Landing Page System',
    category: 'business',
    progress: 95,
    status: 'live',
    statusLabel: 'Live / Tweaking',
    description: 'Multi-page landing system for Blackwood Illustrated. Hub page + 4 niche-specific pages. Live on Vercel. Bass page added.',
    blockers: [],
    nextActions: [
      'Visual tweaks (images, links)',
      'Monitor traffic',
      'Link from Pinterest'
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Groundwood Paper Banner', 'Vercel'],
    lastWorked: '2026-02-05',
    file: 'landing-pages.md'
  }
]

export const categories = {
  business: { name: 'Business', emoji: '💼', color: 'emerald' },
  fishing: { name: 'Fishing', emoji: '🎣', color: 'blue' },
  factory: { name: 'Content Factory', emoji: '🏭', color: 'orange' },
  apps: { name: 'Apps', emoji: '📱', color: 'purple' }
}

export const statusColors = {
  complete: 'bg-emerald-500',
  almost: 'bg-green-500',
  wip: 'bg-yellow-500',
  planning: 'bg-blue-500',
  live: 'bg-purple-500',
  idea: 'bg-gray-500'
}
