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
    progress: 98,
    status: 'almost',
    statusLabel: '98% - Bugs Fixed',
    description: 'Lead capture app for the sign shop sales team. Web dashboard + mobile app. Bugs fixed, working in field with more regular use.',
    blockers: [],
    nextActions: [
      'Monitor field usage for any remaining issues',
      'Consider improvements and adjustments based on team feedback',
      'Final testing',
      'Full deployment to sales team'
    ],
    techStack: ['React Native', 'Expo', 'Firebase'],
    lastWorked: '2026-02-28',
    file: 'sales-crm.md'
  },
  {
    id: 'screen-shields',
    name: 'Screen Shields',
    category: 'fishing',
    progress: 85,
    status: 'wip',
    statusLabel: 'Nearly Ready',
    description: 'Protective screens for fishfinder graphs. Amazon launch planned. Nearly ready - few more sizes to adjust and list.',
    blockers: [],
    nextActions: [
      'Adjust and finalize remaining sizes',
      'Create Amazon listings',
      'Launch on Amazon (target: next 2 weeks)'
    ],
    techStack: [],
    lastWorked: '2026-02-28',
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
    progress: 100,
    status: 'complete',
    statusLabel: 'Production Ready ✓',
    description: 'Full AI image generation platform with multi-provider support (Gemini, OpenAI, Stability), KDP book cover system, drag-and-drop text overlay editor, and batch production studio. Fully functional - created every Memory Bridge book. Some unused features broken but core workflow works perfectly.',
    blockers: [],
    nextActions: [
      'Skippy: Review codebase and workflow to understand production capabilities',
      'Document current production workflow for reference',
      'Improvements and updates when time allows',
      'Consider cleanup of unused/broken features'
    ],
    techStack: ['Python', 'CustomTkinter', 'PIL/Pillow', 'Google Gemini API', 'OpenAI API', 'Stability AI API', 'PyInstaller'],
    lastWorked: '2026-02-28',
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
    statusLabel: '17 Books Live ✓',
    description: 'Memory care coloring books by Margaret Whitmore. ALL 17 BOOKS LIVE on Amazon + Etsy. Complete catalog: 3 classic 1950s + 9 working life (men) + 5 women\'s working life + 3 fishing. Focus: MEMORY CARE EXCLUSIVELY. Working Life Collection = competitive differentiator ("Activities for Men with Dementia").',
    blockers: [],
    nextActions: [
      'Monitor sales performance across all 17 titles',
      'Track Pinterest → Etsy → Amazon conversion funnel',
      'Consider next series expansion (see expansion roadmap)',
      'Build bundles on Etsy (Working Life, Women\'s, Complete Set)',
      'Wait for some traction before expanding further into KDP'
    ],
    techStack: ['AI Image Studio', 'KDP', 'Pinterest', 'Etsy', 'books.json'],
    lastWorked: '2026-02-28',
    file: 'kdp-books.md',
    catalog: {
      live: 17,
      pending: 0,
      total: 17,
      breakdown: {
        'Classic Memory Care (1950s)': 3,
        'Working Life - Men (Vintage 1950s)': 3,
        'Working Life - Men (Boomer 1970s-80s)': 3,
        'Working Life - Women (Boomer 1970s-80s)': 5,
        'Fishing (Bold & Easy)': 3
      },
      recentLaunch: '5 women\'s working life books launched Feb 26, 2026'
    }
  },
  {
    id: 'pinterest-automation',
    name: 'Pinterest Pin Automation',
    category: 'factory',
    progress: 80,
    status: 'wip',
    statusLabel: 'Week 2 Complete, API Video Ready',
    description: 'Pinterest Week 2 COMPLETE - all pins posted/scheduled through Sunday afternoon. Week 3 campaign planning needed. Node.js automation app BUILT and TESTED in sandbox mode. Video demo ready to record. Awaiting Standard Access approval (1-2 weeks after video submission).',
    blockers: ['Waiting for Standard Access approval - need to record and submit video demo'],
    nextActions: [
      '🎥 Record Pinterest API video demo (OAuth + pin creation)',
      '📤 Submit Standard Access application with video',
      '⏳ Wait for Pinterest approval (1-2 weeks)',
      '📋 Plan Week 3 campaign (Opus generates strategy from Week 1-2 analytics)',
      '🎨 Skippy: Automate pin image generation with Gemini Imagen API',
      '📌 Continue manual posting for Week 3 while waiting'
    ],
    techStack: ['Node.js', 'Pinterest API v5', 'OAuth 2.0 PKCE', 'Sandbox Mode', 'Manual Scheduler', 'Gemini Imagen (planned)'],
    lastWorked: '2026-02-28',
    file: 'pinterest-automation.md',
    automationStatus: {
      appBuilt: true,
      oauthWorking: true,
      pinCreationWorking: true,
      sandboxTested: true,
      videoReady: true,
      standardAccessApplied: false
    },
    completedMilestones: [
      '✅ 10 Pinterest boards created',
      '✅ Week 1 complete (40 pins)',
      '✅ Week 2 complete (all pins posted/scheduled)',
      '✅ Node.js automation app built (Claude Code)',
      '✅ OAuth flow working (sandbox)',
      '✅ Pin posting working (sandbox)',
      '✅ Queue management working',
      '✅ Video demo ready to record',
      '⏳ Standard Access application pending'
    ]
  },
  {
    id: 'etsy-shop',
    name: 'Memory Bridge Books - Etsy Shop',
    category: 'business',
    progress: 95,
    status: 'live',
    statusLabel: '17 Listings Live + Video ✓',
    description: 'Etsy shop LIVE at etsy.com/shop/MemoryBridgeBooks. All 17 Memory Bridge Books listed as digital downloads with multiple photos. Silent product video created and uploaded. API key application submitted (waiting approval). High margin digital sales (93%) + Amazon cross-promotion funnel.',
    blockers: ['Etsy API key approval pending'],
    nextActions: [
      '⏳ Wait for Etsy API key approval (1-2 days typical)',
      '🤖 Test Etsy API integration once approved',
      '📦 Create themed bundles (1950s Collection, Working Life Collections, Complete Set)',
      '📊 Monitor sales data and conversion rates',
      '📌 Track Pinterest → Etsy conversion funnel',
      '🎥 Create more silent product videos for remaining listings'
    ],
    techStack: ['Etsy Manual Listings', 'Digital PDFs', 'books.json', 'Silent Video (15sec)', 'Etsy API (pending)'],
    lastWorked: '2026-02-28',
    file: 'etsy-shop.md',
    liveListings: {
      individual: 17,
      bundles: 0,
      videosCreated: 1,
      totalRevenue: 'TBD - tracking begins',
      launched: '2026-02-17',
      expanded: '2026-02-26'
    }
  },
  {
    id: 'margaret-video-funnel',
    name: 'Margaret Whitmore Video Funnel',
    category: 'factory',
    progress: 65,
    status: 'wip',
    statusLabel: 'Videos Done, Gumroad Next',
    description: 'Multi-platform video + email funnel. Margaret Whitmore (AI avatar) explains therapeutic approach → drives to free guide download (email capture) → 14-day nurture sequence → product sales. Not selling coloring books - selling a therapeutic system. Two-channel strategy: silent Etsy product videos + Margaret talking videos for Pinterest/YouTube/Gumroad.',
    blockers: [],
    nextActions: [
      '🚀 Set up Gumroad landing page (copy ready, today)',
      '📤 Upload 3 Margaret videos to Pinterest as video pins',
      '✅ Test full funnel flow (pin → Gumroad → email)',
      '📧 Write 14-day email nurture sequence',
      '🎬 Film remaining 5 "Memory Bridge Minute" videos (future)',
      '🎥 Create more silent Etsy product videos (batch production)'
    ],
    techStack: ['HeyGen (AI avatar)', 'Gumroad (email capture)', 'Pinterest Video Pins', 'YouTube Shorts', 'CapCut', 'Email automation'],
    lastWorked: '2026-02-28',
    file: 'margaret-whitmore-video-funnel.md',
    videoAssets: {
      margaretAvatarVideos: 3,
      etsySilentVideos: 1,
      plannedAdditional: 5,
      scriptsComplete: true,
      avatarCreated: true
    },
    funnelComponents: {
      videos: 'Complete (3 Margaret + 1 Etsy)',
      gumroad: 'Copy written, setup in progress',
      freeGuide: 'PDF needs extraction (Chapters 1-3)',
      emailSequence: 'Outlined, needs writing',
      pinterestPins: 'Ready to upload',
      youtubeShorts: 'Optional expansion'
    },
    completedMilestones: [
      '✅ Margaret Whitmore avatar created (multiple outfits/settings)',
      '✅ 3 Margaret videos filmed (For Caregivers, How Therapy Works, Women\'s Collection)',
      '✅ 1 silent Etsy product video created and uploaded',
      '✅ Complete funnel strategy documented',
      '✅ Gumroad landing page copy written',
      '✅ Pinterest pin descriptions written',
      '✅ Email sequence outlined',
      '⏳ Gumroad setup in progress',
      '⏳ Free guide preview extraction needed'
    ],
    strategicValue: [
      'Email list ownership (platform independence)',
      'Brand authority (Margaret = THE voice in memory care coloring)',
      'Product positioning (therapeutic system, not coloring books)',
      'Buyer education (reduces purchase anxiety)',
      'Content multiplier (each video = multiple Pinterest pins)',
      'Launch engine (email list accelerates new releases)'
    ]
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
    progress: 80,
    status: 'wip',
    statusLabel: 'Brand Identity Complete',
    description: 'Memory Bridge Books brand identity established. Domain live, Author Central created, Margaret Whitmore bio published across platforms, landing page with About section deployed. Consistent branding on Amazon, Etsy, and memorybridgebooks.com. Only trademark filing remains.',
    blockers: [],
    nextActions: [
      '🔴 HIGH: File USPTO trademark within 30 days (~by March 13)',
      'Fix apex domain DNS (memorybridgebooks.com without www)',
      'Update Pinterest profile branding when API approved',
      'Design Memory Bridge Books logo (optional enhancement)',
      'Consider defensive domains (.org/.net) if brand takes off'
    ],
    techStack: ['Domain Registration', 'USPTO Trademark System', 'DNS/Vercel', 'Brand Identity', 'Author Central'],
    lastWorked: '2026-02-17',
    file: null,
    completedMilestones: [
      '✅ Domain registered: memorybridgebooks.com',
      '✅ DNS configured and pointing to Vercel',
      '✅ Author Central page created: amazon.com/author/memorybridgebooks',
      '✅ Margaret Whitmore bio written for all platforms',
      '✅ About Margaret section added to landing page with photo',
      '✅ Etsy shop branded as MemoryBridgeBooks',
      '✅ All 12 book pages updated with Etsy + Amazon links'
    ],
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
