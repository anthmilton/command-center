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
  },
  {
    id: 'memory-bridge-expansion',
    name: 'Memory Bridge Books - Product Line Expansion',
    category: 'business',
    progress: 5,
    status: 'planning',
    statusLabel: 'Roadmap Complete',
    description: 'Strategic expansion beyond occupational memory care books. 4-tier roadmap: (1) Leisure/Recreation/Holiday volumes, (2) Regional/Cultural editions, (3) Format innovations (caregiver books, facility products, instructional guide), (4) Gen X future-proofing. Doubles addressable market by targeting leisure identity, not just work identity.',
    blockers: ['Finish 3 outstanding Boomer books (BW2 Needle & Thread, BW3 Garden Gate, BW5 Beauty Shop) first'],
    nextActions: [
      'Complete outstanding Boomer Working Life volumes (3 books)',
      'TIER 1: Develop Leisure volumes (Saturday Morning, Living Room, Friday Night, Church Pew)',
      'TIER 1: Develop "Holidays Remembered" (launch October for seasonal spike)',
      'TIER 1: Develop "Before We Grew Up" childhood volume (late-stage positioning)',
      'TIER 2: Test Regional editions (Coal Country, Farm Belt, etc. - strong Etsy play)',
      'TIER 3: Create instructional guide (free ebook lead magnet + paid KDP)',
      'TIER 3: Develop caregiver burnout book ("While They Color")'
    ],
    techStack: ['AI Image Studio', 'KDP', 'Etsy', 'Pinterest', 'Same production pipeline as current books'],
    lastWorked: '2026-02-12',
    file: 'memory-bridge-expansion-roadmap.md',
    expansionTiers: {
      tier1: {
        name: 'Natural Extensions',
        priority: 'Immediate',
        items: ['Leisure & Recreation (4 volumes)', 'Seasonal & Holiday volume', 'Childhood volume'],
        impact: 'Doubles addressable market - everyone had hobbies, not everyone identifies by profession'
      },
      tier2: {
        name: 'Parallel Niches',
        priority: 'High',
        items: ['Regional editions (Coal Country, Farm Belt, etc.)', 'Cultural/Ethnic editions', 'Couple\'s Book (his/hers pages)'],
        impact: 'Geographic buyer hook + underserved cultural markets (African American, Latino, Jewish editions = zero competition)'
      },
      tier3: {
        name: 'Format Innovations',
        priority: 'Medium',
        items: ['Instructional guide (free + paid)', 'Caregiver burnout book', 'Activity companion books', 'Facility tear-out pads'],
        impact: 'Brand authority + B2B facility sales + caregiver market (add-on sales)'
      },
      tier4: {
        name: 'Future-Proofing',
        priority: 'Long-term',
        items: ['Gen X line (1980s-2000s)', 'Early-onset/pediatric'],
        impact: 'First-mover advantage for next demographic wave (10-15 years out)'
      }
    },
    keyInsights: [
      'Leisure identity > occupational identity for broader market',
      'Holiday volume = seasonal spike potential (Oct-Dec + Mother\'s/Father\'s Day)',
      'Childhood volume = "late-stage" clinical differentiator',
      'Regional editions = Etsy gold (niche wins on Etsy)',
      'Cultural/ethnic = blue ocean (zero culturally-specific memory care products exist)',
      'Instructional guide = authority builder + email list lead magnet'
    ]
  },
  {
    id: 'browser-access',
    name: 'Browser Extension Access (Remote Gateway)',
    category: 'apps',
    progress: 95,
    status: 'wip',
    statusLabel: '95% - Pairing Blocker',
    description: 'Enable Skippy to see and control Anth\'s Chrome browser (especially Pinterest) via OpenClaw browser extension. Windows node host connecting to Zeabur gateway successfully, just needs pairing approval method. 3.5 hours invested - WILL complete this.',
    blockers: ['Node pairing approval workflow unclear - need OpenClaw documentation'],
    nextActions: [
      '🔴 Research OpenClaw docs: gateway node pairing for remote setups',
      'Check docs.openclaw.ai/gateway/nodes and /browser/extension',
      'Search GitHub issues for "pairing required" + "remote gateway"',
      'Ask in OpenClaw Discord: "How to approve node pairing for remote gateway setup?"',
      'Alternative: Find config syntax for gateway.nodes.pairing auto-approval',
      'Once solved: openclaw node run (Windows) → Extension ON → Pinterest access!'
    ],
    techStack: ['OpenClaw CLI', 'Chrome Extension', 'WebSocket (wss://)', 'Remote Gateway Config'],
    lastWorked: '2026-02-14',
    file: 'browser-extension-progress-log.md',
    statusDetails: {
      working: [
        'OpenClaw CLI installed on Windows (2026.2.12)',
        'Browser extension loaded in Chrome',
        'Local config pointing to wss://anthmilton.zeabur.app',
        'Gateway token retrieved (xKYCwzviSl60Uc5N2P4aj37p9Go1WZ8m)',
        'Node connecting to Zeabur successfully',
        'Authentication passing (token accepted)'
      ],
      blocker: 'Gateway rejects with "pairing required" (code 1008)',
      needsResearch: [
        'How to approve node pairing in Zeabur Control UI',
        'CLI commands for node approval',
        'Config syntax for gateway.nodes.pairing',
        'Alternative: pre-register node before connecting'
      ],
      commandThatWorks: 'openclaw node run --host anthmilton.zeabur.app --port 443 --tls (with OPENCLAW_GATEWAY_TOKEN env var)'
    }
  },
  {
    id: 'memory-bridge-branding',
    name: 'Memory Bridge Books - Brand Identity & Domain',
    category: 'business',
    progress: 50,
    status: 'wip',
    statusLabel: 'Domain Live ✓',
    description: 'Lock down "Memory Bridge Books" brand identity. Domain registration (memorybridgebooks.com available!), trademark filing (no conflicts found), DNS setup, and consistent branding across all platforms (Pinterest, Amazon, Etsy, landing pages).',
    blockers: [],
    nextActions: [
      '✅ DONE: Registered memorybridgebooks.com via GoDaddy',
      '✅ DONE: DNS configured and pointing to Vercel - site live!',
      '🔴 HIGH: File USPTO trademark within 30 days (~by March 13)',
      'Update landing pages with Memory Bridge Books branding',
      'Update Pinterest profile branding',
      'Update Amazon Author Central branding',
      'Update Etsy shop name (when launched)',
      'Design Memory Bridge Books logo',
      'Consider defensive domains (.org/.net) if brand takes off'
    ],
    techStack: ['Domain Registration', 'USPTO Trademark System', 'DNS/Vercel', 'Brand Identity'],
    lastWorked: '2026-02-12',
    file: null,
    researchFindings: {
      domainAvailable: true,
      primaryDomain: 'memorybridgebooks.com',
      trademarkConflicts: 'None found for books/printed materials',
      existingUse: 'Memory Bridge Foundation (.org) is nonprofit advocacy - different market, no product conflicts',
      riskAssessment: 'LOW - clear differentiation with "BOOKS" suffix, different goods/services category',
      recommendation: 'Proceed with confidence. Register domain immediately.'
    }
  },
  {
    id: 'memory-care-instructional-guide',
    name: 'Memory Care Instructional Guide',
    category: 'business',
    progress: 0,
    status: 'idea',
    statusLabel: 'Concept Validated',
    description: 'Instructional guide book: "How to use therapeutic coloring for Alzheimer\'s patients." Free ebook (lead magnet for email list) + paid KDP version ($9.99-12.99). Transforms coloring books from "activity supplies" to "evidence-based therapeutic system." Every chapter = 2-3 educational Pinterest pins.',
    blockers: ['Defer writing to free LLM to save API costs (strategic role only)'],
    nextActions: [
      'Outline chapter structure (9 chapters planned)',
      'Research reminiscence therapy studies for citations',
      'Draft Chapter 1 pilot for tone/style',
      'Design cover mockup (professional, warm, credible)',
      'Write full guide (15,000-20,000 words)',
      'Format for KDP print + PDF ebook',
      'Launch: Amazon KDP physical + Gumroad free + Etsy bundles',
      'Create 18-27 educational Pinterest pins (2-3 per chapter)'
    ],
    techStack: ['Writing (external LLM)', 'KDP', 'Gumroad (email capture)', 'Etsy (bundle component)'],
    lastWorked: '2026-02-12',
    file: 'memory-care-instructional-guide.md',
    multiPlatformStrategy: {
      freeEbook: 'Gumroad with email capture - builds owned audience for launches',
      paidPhysical: 'Amazon KDP $9.99-12.99 - credibility + "frequently bought together" cross-sells',
      etsyBundle: 'Caregiver Starter Kit ($24.99): 3 books + guide + conversation cards',
      pinterest: 'Each chapter generates 2-3 educational pins = 18-27 pins total'
    },
    strategicValue: [
      'Positions Margaret Whitmore as THE memory care coloring authority',
      'Lead magnet for email list (priceless for future launches)',
      'Transforms product from "coloring book" to "therapeutic system"',
      'Activity directors can justify facility purchases with guide',
      'Reduces buyer anxiety (shows HOW to use books effectively)',
      'Creates Pinterest content multiplier (9 chapters = 18-27 educational pins)'
    ]
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
