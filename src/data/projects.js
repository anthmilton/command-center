export const projects = [
  // ============================================
  // BUSINESS PROJECTS
  // ============================================
  {
    id: 'signswift',
    name: 'SignSwift (Estimating App)',
    category: 'business',
    progress: 60,
    status: 'wip',
    statusLabel: '60%',
    description: 'Web-based sign shop estimating system replacing Cyrious. Pricing logic tuned (Feb 1), accurate calculations protecting profitability.',
    blockers: [],
    nextActions: [
      'Complete remaining 40% of functionality',
      'Test with real estimates',
      'Deploy when ready'
    ],
    techStack: ['React', 'Express', 'PostgreSQL', 'Prisma'],
    lastWorked: '2026-02-01',
    file: 'signswift.md'
  },
  {
    id: 'sales-crm',
    name: 'Sales CRM',
    category: 'business',
    progress: 95,
    status: 'live',
    statusLabel: 'Deployed ✓',
    description: 'Lead capture app for sign shop sales team. Functional and deployed for internal use. Primary bug fixed, working in production.',
    blockers: [],
    nextActions: [
      'Monitor usage for feedback',
      'Minor improvements as needed'
    ],
    techStack: ['React Native', 'Expo', 'Firebase'],
    lastWorked: '2026-03-10',
    file: 'sales-crm.md'
  },
  {
    id: 'screen-shields',
    name: 'Screen Shields',
    category: 'business',
    progress: 90,
    status: 'wip',
    statusLabel: 'Launch Prep',
    description: 'Protective screens for fishfinder graphs. Testing complete. Season starting NOW - needs marketing, logos, packaging finalized for Amazon launch.',
    blockers: [],
    nextActions: [
      'Finalize marketing materials',
      'Design logos and packaging',
      'Create Amazon listings',
      'Launch within 1-2 weeks (season window)'
    ],
    techStack: [],
    lastWorked: '2026-03-10',
    file: 'screen-shields.md'
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
    lastWorked: null,
    file: 'mural-expansion.md'
  },

  // ============================================
  // FACTORY PROJECTS (Content Production)
  // ============================================
  {
    id: 'ai-image-studio',
    name: 'AI Image Studio',
    category: 'factory',
    progress: 100,
    status: 'live',
    statusLabel: 'Production ✓',
    description: 'Multi-provider AI image generation platform (Gemini, OpenAI, Stability). Created all 22 Memory Bridge books. Batch generation, KDP workflow, cover system. Core production workflow 100% functional.',
    blockers: [],
    nextActions: [
      'Maintain for book production',
      'Update as new APIs/models become available'
    ],
    techStack: ['Python', 'CustomTkinter', 'PIL/Pillow', 'Google Gemini API', 'OpenAI API', 'Stability AI API', 'PyInstaller'],
    lastWorked: '2026-03-10',
    file: 'ai-image-studio.md'
  },
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
    id: 'kdp-books',
    name: 'Memory Bridge Books',
    category: 'factory',
    progress: 100,
    status: 'live',
    statusLabel: '17 Live + 5 Review',
    description: 'Therapeutic memory care coloring books by Margaret Whitmore. 17 LIVE on Amazon/Etsy/Gumroad. 5 under Amazon review (Good Times Collection → 22 total). First Etsy sale March 9! Pinterest Week 4 driving traffic.',
    blockers: [],
    nextActions: [
      'Update website when Good Times Collection approved',
      'Complete bundle listing images (1/4 done)',
      'List all 4 bundles on Gumroad + Etsy',
      'Monitor sales and Pinterest conversion'
    ],
    techStack: ['AI Image Studio', 'Coloring Compiler', 'Gemini Imagen 3', 'nano-banana-pro'],
    lastWorked: '2026-03-10',
    file: 'memory-bridge-books.md'
  },

  // ============================================
  // FISHING PROJECTS
  // ============================================
  {
    id: 'bay-armor',
    name: 'Bay Armor',
    category: 'fishing',
    progress: 40,
    status: 'planning',
    statusLabel: 'Planning',
    description: 'Two product lines: clear protective overlays for lures + printed re-skin overlays. Product dev complete, needs go-to-market plan. Secondary to Screen Shields.',
    blockers: [
      'Finalize which product line to launch first',
      'Pricing strategy',
      'Brand identity'
    ],
    nextActions: [
      'Finalize plan after Screen Shields launch',
      'Decide: launch clear overlays first, or both?',
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
    progress: 40,
    status: 'wip',
    statusLabel: '4 Week Sprint',
    description: 'Private tournament prep tool (data NOT shared like competitors). Track catches, heat maps, pattern analysis. Season starting - HIGH PRIORITY, functional by ~April 10.',
    blockers: [],
    nextActions: [
      'Document detailed feature requirements',
      'Design database schema (catches, locations, conditions)',
      'Build MVP with core tracking features',
      'Deploy for personal testing by April 10'
    ],
    techStack: ['React Native (TBD)', 'SQLite/local storage', 'Maps API'],
    lastWorked: '2026-03-10',
    file: 'fishing-log-app.md'
  },

  // ============================================
  // APPS
  // ============================================
  {
    id: 'time-tracker',
    name: 'Time Tracking App',
    category: 'apps',
    progress: 30,
    status: 'wip',
    statusLabel: 'Active - This Week',
    description: 'Personal productivity tracker. Mobile app to see where time goes. Built but not functional - needs debugging and testing THIS WEEK for personal use. Potential product if successful.',
    blockers: ['Need to audit current state and debug'],
    nextActions: [
      'Review existing code',
      'Document what works vs broken',
      'Fix critical bugs',
      'Deploy for personal testing by end of week'
    ],
    techStack: ['TBD - likely React Native or web app'],
    lastWorked: '2026-03-10',
    file: 'time-tracking-app.md'
  },

  // ============================================
  // SKIPPY'S SKILLS (Automation)
  // ============================================
  {
    id: 'book-cover-generator',
    name: 'Book Cover Generator',
    category: 'skills',
    progress: 100,
    status: 'live',
    statusLabel: 'Production ✓',
    description: 'Automated KDP book cover creation. Anchor image + story package → stylized cover (nano-banana-pro) → text overlays (ImageMagick) → 3 outputs (wrap-around, front, square). ~2 minutes per book. Production-ready March 8.',
    blockers: [],
    nextActions: [
      'Use for all future book covers',
      'Refine as needed based on usage'
    ],
    techStack: ['nano-banana-pro (Gemini Imagen 3)', 'ImageMagick', 'Bash scripts'],
    lastWorked: '2026-03-08',
    file: '/app/skills/book-cover-generator/SKILL.md'
  },
  {
    id: 'bundle-listing-images',
    name: 'Bundle Listing Images',
    category: 'skills',
    progress: 25,
    status: 'wip',
    statusLabel: '1/4 Complete',
    description: '10-slot Etsy listing image system for book bundles. Hero shots, spreads, interior samples, infographics, gift shots, context. The 1950s Collection complete (10 images delivered). 3 bundles remaining.',
    blockers: [],
    nextActions: [
      'Create Her Working Life Collection images (next)',
      'Create His Working Life Collection images',
      'Create The Fisherman\'s Collection images',
      'List all bundles on Gumroad + Etsy when complete'
    ],
    techStack: ['nano-banana-pro (Gemini Imagen 3)', 'ImageMagick'],
    lastWorked: '2026-03-09',
    file: '/home/node/.openclaw/workspace/skills/bundle-listing-images/SKILL.md'
  },
  {
    id: 'pinterest-automation',
    name: 'Pinterest Campaign Automation',
    category: 'skills',
    progress: 100,
    status: 'live',
    statusLabel: 'Week 4 Running',
    description: 'Fully automated Pinterest marketing. Receives weekly campaign from Opus → builds 40-pin queue → generates images via nano-banana → posts via cron every 2 hours. Week 4: 12/40 posted, 0 failures. Three-tier link strategy active.',
    blockers: [],
    nextActions: [
      'Monitor Week 4 campaign through March 15',
      'Plan Week 5 campaign',
      'Track Pinterest → Etsy → Amazon conversion'
    ],
    techStack: ['Node.js', 'Pinterest API', 'nano-banana-pro', 'Cron', 'Queue system'],
    lastWorked: '2026-03-10',
    file: '/app/skills/pinterest-campaign-automation/SKILL.md'
  },
  {
    id: 'command-center-maintenance',
    name: 'Command Center Maintenance',
    category: 'skills',
    progress: 100,
    status: 'live',
    statusLabel: 'Active ✓',
    description: 'Maintain the Command Center React dashboard as single source of truth. Update projects.js + priorities.js, rebuild, deploy to Vercel. Trigger: "Update the command center" → interview Anth → update data → deploy.',
    blockers: [],
    nextActions: [
      'Weekly reviews and updates',
      'Keep priorities current',
      'Update when major milestones hit'
    ],
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Vercel'],
    lastWorked: '2026-03-10',
    file: '/home/node/.openclaw/workspace/skills/command-center-maintenance/SKILL.md'
  },
  {
    id: 'website-maintenance',
    name: 'Website Maintenance (memorycarebooks.com)',
    category: 'skills',
    progress: 100,
    status: 'live',
    statusLabel: 'Active ✓',
    description: 'Maintain memorycarebooks.com Hugo site. Update books.json when new books go live, add cover images, update collections/bundles, rebuild with Hugo, deploy to Vercel. I am responsible for this - don\'t ask Anth.',
    blockers: [],
    nextActions: [
      'Update when Good Times Collection goes live (5 books)',
      'Add bundle pages when bundles created',
      'Keep book catalog current'
    ],
    techStack: ['Hugo', 'JavaScript', 'Vercel', 'books.json'],
    lastWorked: '2026-03-10',
    file: '/home/node/.openclaw/workspace/skills/website-maintenance/SKILL.md'
  }
]

// Category definitions
export const categories = {
  business: { label: 'Business', icon: '💼', color: 'blue' },
  factory: { label: 'Factory', icon: '🏭', color: 'purple' },
  fishing: { label: 'Fishing', icon: '🎣', color: 'green' },
  apps: { label: 'Apps', icon: '📱', color: 'orange' },
  skills: { label: 'Skippy\'s Skills', icon: '🤖', color: 'yellow' }
}

// Status color mapping
export const statusColors = {
  idea: 'gray',
  planning: 'blue',
  wip: 'yellow',
  almost: 'orange',
  complete: 'green',
  live: 'emerald',
  blocked: 'red'
}

// Helper functions for external use
export const getProjectById = (id) => projects.find(p => p.id === id)
export const getProjectsByCategory = (category) => projects.filter(p => p.category === category)
export const getActiveProjects = () => projects.filter(p => p.status === 'wip' || p.status === 'almost')
export const getCompletedProjects = () => projects.filter(p => p.status === 'complete' || p.status === 'live')
