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
    progress: 70,
    status: 'live',
    statusLabel: 'Active Launch',
    description: 'AI-generated coloring books & illustrated public domain books on Amazon KDP. 17 books total: 11 live, 6 pending approval (memory care trilogy + fishing trilogy). Pinterest account active (Blackwood Illustrated).',
    blockers: ['Need ASINs for new books to complete Pinterest linking'],
    nextActions: [
      'Wait for approval on 6 new books (memory care + fishing)',
      'Upload Pinterest pins (27 ready, 5 per day)',
      'Deploy landing pages once ready',
      'Link landing pages to Pinterest pins',
      'Monitor first week performance',
      'Set up Etsy digital downloads'
    ],
    techStack: ['AI Image Studio', 'KDP', 'Pinterest', 'Canva'],
    lastWorked: '2026-02-03',
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
    id: 'landing-pages',
    name: 'Landing Page System',
    category: 'business',
    progress: 30,
    status: 'wip',
    statusLabel: 'Building',
    description: 'Multi-page landing system for Blackwood Illustrated. Hub page + 3 niche-specific pages (Memory Care, Gothic, Kawaii) for targeted Pinterest traffic conversion. Brand identity package included.',
    blockers: [],
    nextActions: [
      'Generate brand identity (logo, colors, fonts) with Gemini',
      'Generate 4 landing pages with Gemini (hub + 3 niche)',
      'Insert brand elements into pages',
      'Add book covers and Amazon links',
      'Deploy to hosting (Vercel/Netlify)',
      'Link from Pinterest pins'
    ],
    techStack: ['HTML', 'CSS', 'Gemini AI (generation)', 'Vercel/Netlify (hosting)'],
    lastWorked: '2026-02-03',
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
