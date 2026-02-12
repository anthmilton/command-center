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
    name: 'Memory Bridge Books (KDP)',
    category: 'business',
    progress: 100,
    status: 'live',
    statusLabel: 'Live + Growing',
    description: 'Memory care coloring books by Margaret Whitmore. 8 LIVE (3 classic nostalgic + 2 occupational + 3 fishing), 4 PENDING approval (occupational series). Focus shifted to MEMORY CARE EXCLUSIVELY for Pinterest/Etsy. Gothic/Kawaii remain live but not actively promoted.',
    blockers: [],
    nextActions: [
      'Monitor 4 pending occupational book approvals',
      'Pinterest: Rebrand profile as "Memory Bridge Books" (memory care only)',
      'Position occupational series as differentiator ("Activities for Men with Dementia")',
      'Create "Working Life Collection" bundle on Etsy',
      'Track which books convert best via Pinterest → Etsy → Amazon funnel'
    ],
    techStack: ['AI Image Studio', 'KDP', 'Pinterest', 'Etsy', 'books.json'],
    lastWorked: '2026-02-12',
    file: 'kdp-books.md',
    catalog: {
      live: 8,
      pending: 4,
      total: 12,
      breakdown: {
        'Classic Memory Care': 3,
        'Occupational (Live)': 2,
        'Fishing (Memory Care angle)': 3,
        'Occupational (Pending)': 4
      }
    }
  },
  {
    id: 'pinterest-automation',
    name: 'Pinterest Pin Automation',
    category: 'factory',
    progress: 30,
    status: 'wip',
    statusLabel: 'In Progress',
    description: 'Full Pinterest automation via official API. Skippy auto-posts pins from queue folder with SEO-optimized descriptions. OAuth 2.0 refresh token flow for persistent access. Anth creates pin images, Skippy handles everything else.',
    blockers: ['Need Pinterest Developer App setup (5 mins)', 'OAuth tokens from Anth'],
    nextActions: [
      'Anth: Set up Pinterest Developer App (get App ID/Secret)',
      'Anth: Complete OAuth flow (one-time browser auth)',
      'Skippy: Build pin posting script with refresh token logic',
      'Skippy: Create /pinterest-queue/ folder structure',
      'Test with 5-10 pins manually before full automation',
      'Deploy automated posting (5-7 pins/day)'
    ],
    techStack: ['Python', 'Pinterest API v5', 'OAuth 2.0', 'Queue folder system'],
    lastWorked: '2026-02-12',
    file: 'pinterest-automation.md'
  },
  {
    id: 'etsy-shop',
    name: 'Memory Bridge Books - Etsy Shop',
    category: 'business',
    progress: 15,
    status: 'wip',
    statusLabel: 'Planning',
    description: 'Etsy shop for Memory Bridge Books digital downloads. Individual PDFs ($8.99), themed bundles ($24.99), complete collection ($49.99). High margin digital sales + Amazon physical book funnel. Skippy will automate listing creation/management.',
    blockers: ['Need Etsy Developer Account setup', 'Define product templates'],
    nextActions: [
      'Anth: Clean up Pinterest profile (archive non-memory-care boards)',
      'Anth: Set up Etsy Developer Account (after Pinterest automation running)',
      'Define product bundle structure (1950s Collection, Working Life Collection, etc.)',
      'Skippy: Build Etsy listing automation script',
      'Launch with 8 live books as individual listings',
      'Create 2-3 themed bundles'
    ],
    techStack: ['Etsy API', 'Digital PDFs', 'books.json integration'],
    lastWorked: '2026-02-12',
    file: 'etsy-shop.md'
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
    id: 'memory-sensory-boards',
    name: 'Memory Bridge Sensory Boards',
    category: 'business',
    progress: 0,
    status: 'idea',
    statusLabel: 'Shelved',
    description: 'Therapeutic "Busy Boards" for dementia/autism. Validated market with high margins ($50-150). Fits Memory Care brand perfectly. Shelved until books gain traction.',
    blockers: ['Shelved pending book traction', 'Manufacturing logistics'],
    nextActions: [
      'Wait for Memory Care book sales data',
      'Research manufacturing (CNC/3D Print)',
      'Design prototype "Memory Bridge" board'
    ],
    techStack: ['Woodworking', 'Hardware', 'Etsy'],
    lastWorked: '2026-02-07',
    file: null
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
    progress: 100,
    status: 'live',
    statusLabel: 'Live + Updated',
    description: 'Multi-page landing system for Blackwood Illustrated. Hub page shows all genres (SEO benefit), but MEMORY CARE is the hero section. Pinterest traffic will funnel exclusively to memory care page. Updated books.json with 8 live + 4 pending occupational books.',
    blockers: [],
    nextActions: [
      'Update memorycare.html to feature occupational series prominently',
      'Add cover images for 2 live occupational books (when available)',
      'Monitor Pinterest → Landing Page → Amazon/Etsy conversion funnel',
      'Consider "Coming Soon" badges for 4 pending books'
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'books.json', 'GitHub', 'Vercel'],
    lastWorked: '2026-02-12',
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
