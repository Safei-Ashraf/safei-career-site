// TODO: replace this with your production domain when the site is deployed.
export const siteUrl = "https://example.com";
export const siteName = "Safei Ashraf";
export const seoDescription =
  "Senior frontend engineer leading storefront, discovery, and customer-facing commerce experiences with measurable product impact.";
export const seoSummary =
  "Senior frontend engineer focused on storefront, discovery, platform modernization, and measurable product impact across high-traffic commerce experiences.";
export const isPlaceholderSiteUrl = /example\.com$/i.test(
  new URL(siteUrl).hostname
);
export const hasProductionSiteUrl = !isPlaceholderSiteUrl;

export const profileData = {
  person: {
    name: "Safei Ashraf",
    title: "Senior Frontend Engineer",
    meta: "Egypt · Open to relocation · Arabic, English, German"
  },
  navigation: [
    {
      id: "overview",
      label: "Overview",
      meta: "Hero and profile header"
    },
    {
      id: "resume",
      label: "Resume",
      meta: "Interactive experience view"
    },
    {
      id: "impact",
      label: "Selected Impact",
      meta: "Evidence-backed highlights and outcomes"
    }
  ],
  downloads: {
    resume: "/docs/Safei_Ashraf_Frontend_Engineer_hybrid_gdocs.docx",
    impactReference: "/docs/Safei_Ashraf_Impact_Reference.docx",
    // TODO: replace this with the published Google Docs URL of your resume.
    resumeGoogleDocs: "https://docs.google.com/document/d/YOUR_DOC_ID/edit"
  },
  contactActions: [
    {
      label: "Email",
      meta: "Open your mail app",
      // TODO: replace this with your preferred primary email.
      value: "your.email@example.com",
      // TODO: replace this with your preferred primary email.
      href: "mailto:your.email@example.com"
    },
    {
      label: "LinkedIn",
      meta: "Open your public profile",
      // TODO: replace this with your public LinkedIn URL.
      value: "linkedin.com/in/your-handle",
      // TODO: replace this with your public LinkedIn URL.
      href: "https://www.linkedin.com/in/your-handle/"
    },
    {
      label: "GitHub",
      meta: "Open your code profile",
      // TODO: replace this with your public GitHub URL.
      value: "github.com/your-handle",
      // TODO: replace this with your public GitHub URL.
      href: "https://github.com/your-handle"
    },
    {
      label: "Phone",
      meta: "Launch your dialer",
      // TODO: replace this with the phone number you want to publish.
      value: "+20 XXX XXX XXXX",
      // TODO: replace this with the phone number you want to publish.
      href: "tel:+201000000000"
    },
    {
      label: "WhatsApp",
      meta: "Open a WhatsApp chat",
      // TODO: replace this with the WhatsApp number you want to publish.
      value: "+20 XXX XXX XXXX",
      // TODO: replace this with the WhatsApp number you want to publish.
      href: "https://wa.me/201000000000"
    }
  ],
  hero: {
    eyebrow: "Profile",
    headline: "Shaping customer journeys across high-traffic commerce experiences.",
    paragraphs: [
      "I'm a product-minded senior frontend engineer, currently Frontend Engineer III at noon.com, helping lead the storefront and discovery surfaces that guide how customers discover, evaluate, and engage with products.",
      "My work spans merchandising, account experiences, and conversational shopping, with recent efforts covering engagement-driving redesigns, multi-team modernization, and frontend leadership from early MVP to production."
    ],
    metaPills: ["Based in Egypt", "Open to relocation", "Arabic · English · German"],
    proofChips: ["27%+ CTR uplift", "4-team modernization", "5+ years experience"],
    ctas: [
      {
        label: "Jump to Resume",
        href: "#resume",
        variant: "primary"
      },
      {
        label: "Jump to Selected Impact",
        href: "#impact",
        variant: "ghost"
      }
    ],
    chipCloud: [
      {
        label: "React",
        x: 12,
        y: -204,
        dx: 10,
        dy: -10,
        duration: "8.1s",
        delay: "-0.3s",
        bg: "rgba(97, 218, 251, 0.12)",
        border: "rgba(125, 211, 252, 0.32)",
        text: "#d5f4ff",
        dot: "#61dafb"
      },
      {
        label: "Next.js",
        x: 176,
        y: -172,
        dx: -12,
        dy: 10,
        duration: "8.9s",
        delay: "-1.1s",
        bg: "rgba(203, 213, 225, 0.1)",
        border: "rgba(226, 232, 240, 0.26)",
        text: "#e5e7eb",
        dot: "#cbd5e1"
      },
      {
        label: "Zustand",
        x: 120,
        y: -52,
        dx: -12,
        dy: 8,
        duration: "8.4s",
        delay: "-1.8s",
        bg: "rgba(192, 132, 252, 0.12)",
        border: "rgba(216, 180, 254, 0.3)",
        text: "#ead7ff",
        dot: "#c084fc"
      },
      {
        label: "TypeScript",
        x: 224,
        y: 18,
        dx: -10,
        dy: 12,
        duration: "8.6s",
        delay: "-2.3s",
        bg: "rgba(96, 165, 250, 0.13)",
        border: "rgba(147, 197, 253, 0.32)",
        text: "#dbeafe",
        dot: "#60a5fa"
      },
      {
        label: "AI-Assisted Dev",
        x: -30,
        y: -118,
        dx: 12,
        dy: 10,
        duration: "9.2s",
        delay: "-1.4s",
        bg: "rgba(245, 158, 11, 0.13)",
        border: "rgba(252, 211, 77, 0.28)",
        text: "#fde7a8",
        dot: "#f59e0b"
      },
      {
        label: "Accessibility",
        x: 118,
        y: 92,
        dx: -12,
        dy: -10,
        duration: "7.8s",
        delay: "-2.6s",
        bg: "rgba(74, 222, 128, 0.12)",
        border: "rgba(134, 239, 172, 0.28)",
        text: "#d9fde5",
        dot: "#4ade80"
      },
      {
        label: "Performance",
        x: 230,
        y: 154,
        dx: -10,
        dy: -12,
        duration: "8.8s",
        delay: "-0.9s",
        bg: "rgba(251, 146, 60, 0.13)",
        border: "rgba(253, 186, 116, 0.28)",
        text: "#ffe0c2",
        dot: "#fb923c"
      },
      {
        label: "Leadership",
        x: -38,
        y: 10,
        dx: 10,
        dy: -12,
        duration: "9.1s",
        delay: "-2.8s",
        bg: "rgba(244, 114, 182, 0.12)",
        border: "rgba(249, 168, 212, 0.28)",
        text: "#ffd8eb",
        dot: "#f472b6"
      },
      {
        label: "Teamwork",
        x: 58,
        y: 190,
        dx: -12,
        dy: -10,
        duration: "8.3s",
        delay: "-1.6s",
        bg: "rgba(56, 189, 248, 0.12)",
        border: "rgba(125, 211, 252, 0.28)",
        text: "#d8f5ff",
        dot: "#38bdf8"
      },
      {
        label: "Testing",
        x: 258,
        y: -46,
        dx: -10,
        dy: 10,
        duration: "7.9s",
        delay: "-0.7s",
        bg: "rgba(52, 211, 153, 0.12)",
        border: "rgba(110, 231, 183, 0.28)",
        text: "#d6fff0",
        dot: "#34d399"
      },
      {
        label: "Documentation",
        x: 166,
        y: -248,
        dx: -10,
        dy: 12,
        duration: "9.5s",
        delay: "-3.1s",
        bg: "rgba(167, 139, 250, 0.12)",
        border: "rgba(196, 181, 253, 0.28)",
        text: "#eee7ff",
        dot: "#a78bfa"
      }
    ]
  },
  resume: {
    eyebrow: "Resume",
    title: "Selected Work & Skills",
    intro:
      "A curated selection of product surfaces, public projects, and technical strengths that reflect how I build, lead, and ship frontend work.",
    metrics: [
      {
        value: "27%+",
        label:
          "Click-through uplift driven by redesigning core product discovery surfaces and merchandising hierarchy at noon.com.",
        icon: "trend",
        bg: "rgba(52, 211, 153, 0.11)",
        border: "rgba(110, 231, 183, 0.24)",
        iconBg: "rgba(52, 211, 153, 0.16)",
        iconColor: "#6ee7b7"
      },
      {
        value: "4 Teams",
        label:
          "Directed the frontend modernization of account.noon.com across four teams on Next.js 15, React 19, and scalable shared-state patterns.",
        icon: "layers",
        bg: "rgba(96, 165, 250, 0.11)",
        border: "rgba(147, 197, 253, 0.24)",
        iconBg: "rgba(96, 165, 250, 0.16)",
        iconColor: "#93c5fd"
      },
      {
        value: "0 → 1",
        label:
          "Owned the frontend of noon's shopping chatbot from early MVP into a live production-ready product.",
        icon: "message",
        bg: "rgba(167, 139, 250, 0.11)",
        border: "rgba(196, 181, 253, 0.24)",
        iconBg: "rgba(167, 139, 250, 0.16)",
        iconColor: "#c4b5fd"
      },
      {
        value: "50%+",
        label:
          "Reduced developer ramp-up time by improving onboarding documentation and supporting 20+ junior engineers and interns.",
        icon: "users",
        bg: "rgba(245, 158, 11, 0.11)",
        border: "rgba(252, 211, 77, 0.24)",
        iconBg: "rgba(245, 158, 11, 0.16)",
        iconColor: "#fcd34d"
      }
    ],
    featuredProjects: [
      {
        title: "Storefront & Discovery",
        subtitle: "noon.com · Internal product surface",
        bullets: [
          "Help lead the customer journey across discovery surfaces that shape how customers find, evaluate, and engage with products.",
          "Delivered repeated improvements across PDP, PLP, filters, sorting, category tree, product box, reviews, and merchandising flows.",
          "Worked close to conversion-facing UX where clarity, performance, and experimentation directly affect business outcomes."
        ],
        tags: ["Next.js", "React", "TypeScript", "Analytics", "Experimentation"]
      },
      {
        title: "Account.noon.com Modernization",
        subtitle: "account.noon.com · Internal platform modernization",
        bullets: [
          "Directed the frontend workstream across four teams while helping migrate the platform to Next.js 15, React 19, and TypeScript 5.6.",
          "Delivered work across profile, contact, validation, translations, navigation, and shared account flows.",
          "Balanced migration work with product correctness, rollout follow-through, and maintainability improvements."
        ],
        tags: ["Next.js 15", "React 19", "TypeScript", "Forms", "Cross-team Delivery"]
      },
      {
        title: "Shopping Chatbot",
        subtitle: "noon.com · Internal 0-to-1 product",
        bullets: [
          "Owned the frontend from MVP to production, shaping FAQ flows, validation, localization, analytics, and the customer UX.",
          "Worked in a small cross-functional team to turn an early concept into a production-ready conversational shopping experience.",
          "Handled stateful interactions and UI sequencing across fast-moving iterations."
        ],
        tags: ["Product Ownership", "Analytics", "Localization", "State Management", "UX"]
      },
      {
        title: "McMakler Real Estate Search & Map Visualisation",
        subtitle: "McMakler GmbH · Public client work",
        bullets: [
          "Engineered around 60% of the property page components using React, Next.js, GraphQL, and Mapbox GL JS.",
          "Improved map-driven search accuracy and interaction between map state and property data visualisation.",
          "Extended the internal component library with tests, refactors, and new reusable pieces."
        ],
        tags: ["React", "Next.js", "GraphQL", "Mapbox", "Emotion"],
        href: "https://www.mcmakler.de/immobilien",
        linkLabel: "View project"
      },
      {
        title: "FINVIA Wealth Management Platform",
        subtitle: "FINVIA Family Office · Public client work",
        bullets: [
          "Implemented internationalisation across the frontend and built multi-step forms with validation and strong test coverage.",
          "Established theming foundations and responsive layouts with cross-browser reliability.",
          "Helped keep quality high through unit tests, Storybook coverage, and end-to-end validation."
        ],
        tags: ["React", "TypeScript", "GraphQL", "React Hook Form", "Material UI"],
        href: "https://www.finvia.fo/",
        linkLabel: "View project"
      },
      {
        title: "Model Group Online Shop",
        subtitle: "Model Holding AG · Public client work",
        bullets: [
          "Revamped the front end of the online shop to align with Figma across the requested breakpoints.",
          "Refactored roughly 70% of the CSS structure to improve maintainability.",
          "Simplified legacy shop component structure and improved long-term implementation quality."
        ],
        tags: ["Salesforce", "LWC", "CSS", "JavaScript", "Figma"],
        href: "https://shop.modelgroup.com/s/",
        linkLabel: "View project"
      }
    ],
    additionalProjects: [
      {
        title: "Fair and Simple Recruitment Platform",
        subtitle: "Public client work",
        description:
          "Built UI, integrated Google Drive API, handled theming, and supported code review.",
        tags: ["React", "GraphQL", "Styled Components"],
        href: "https://fairandsimple.io/",
        linkLabel: "View site"
      },
      {
        title: "K.I.T. Group Event System",
        subtitle: "Public client work",
        description:
          "Built multi-step reservation flows and improved dashboard planning UX with drag-and-drop behavior.",
        tags: ["React", "GraphQL", "Multi-step Forms"],
        href: "https://www.kit-group.org/",
        linkLabel: "View site"
      },
      {
        title: "Mozilla Perfcompare",
        subtitle: "Open source contribution",
        description:
          "Improved accessibility, tests, and CI stability for Mozilla's performance comparison tool.",
        tags: ["React", "Redux", "TypeScript", "Jest"],
        href: "https://github.com/mozilla/perfcompare",
        linkLabel: "View project"
      },
      {
        title: "TypeScript Website Docs",
        subtitle: "Open source contribution",
        description:
          "Improved clarity and readability in the official docs through a contribution to the TypeScript Website.",
        tags: ["TypeScript", "Markdown", "Docs"],
        href: "https://github.com/microsoft/TypeScript-Website/pull/269",
        linkLabel: "View contribution"
      },
      {
        title: "Egghead Course Notes",
        subtitle: "Open source contribution",
        description:
          "Expanded and refined React course notes with clearer explanations of core concepts.",
        tags: ["React", "Docs", "Education"],
        href: "https://github.com/eggheadio/eggheadio-course-notes/pull/66",
        linkLabel: "View contribution"
      },
      {
        title: "Outside-In FE Development TDD",
        subtitle: "Community contribution",
        description:
          "Fixed failing Cypress builds and updated dependencies so the demo project built successfully again.",
        tags: ["Cypress", "Tooling", "Debugging"],
        href: "https://outsidein.dev",
        linkLabel: "View project"
      }
    ],
    skillGroups: [
      {
        title: "Frontend",
        items: ["React", "Next.js", "TypeScript", "JavaScript", "React Hooks", "React Router"]
      },
      {
        title: "Styling & UI",
        items: [
          "HTML5",
          "CSS",
          "Sass/SCSS",
          "CSS Modules",
          "Tailwind CSS",
          "Styled Components",
          "Emotion",
          "Material UI",
          "Accessibility",
          "Figma"
        ]
      },
      {
        title: "State, Data & Quality",
        items: [
          "Zustand",
          "Redux",
          "GraphQL",
          "Apollo Client",
          "Jest",
          "React Testing Library",
          "Cypress",
          "Storybook",
          "Chromatic"
        ]
      },
      {
        title: "Tooling & AI",
        items: [
          "Git",
          "npm",
          "Yarn",
          "Bun",
          "Turbo",
          "Webpack",
          "ESLint",
          "Codex",
          "Claude",
          "Cursor"
        ]
      }
    ],
    panels: [
      {
        title: "How I Work",
        label: "Professional focus",
        items: [
          "Product-minded frontend execution across commerce, account, and shared UI surfaces.",
          "Strong comfort switching between feature delivery and modernization/refactor work.",
          "Fluent in AI-assisted workflows for faster iteration, cleaner debugging, and better documentation."
        ]
      },
      {
        title: "Education & Learning",
        label: "Formal learning path",
        items: [
          "Meta Front-End Developer Professional Certificate | 2023",
          "React Development Cross-Skilling Nanodegree | 2022",
          "Front-End Development Nanodegree | 2021",
          "Professional Web Development Nanodegree | 2019",
          "BBA, English Section, Alexandria University | 2014"
        ]
      }
    ]
  },
  impact: {
    eyebrow: "Selected Impact",
    title: "Selected Impact",
    intro:
      "Evidence-backed highlights across product impact, platform modernization, leadership scope, and team contribution.",
    snapshot: [
      {
        value: "2,896",
        label: "Authored non-merge commits identified in the main commerce repository."
      },
      {
        value: "229",
        label: "Authored non-merge commits identified in the original rewrite repository."
      },
      {
        value: "4 teams",
        label: "Coordinated during the account.noon.com modernization effort."
      },
      {
        value: "30+",
        label: "Candidates interviewed, plus broader mentoring and onboarding support."
      }
    ],
    summary: [
      "I am a senior frontend engineer with broad ownership across customer-facing commerce surfaces at noon, including product discovery, product detail, search, filters, account, navigation, shared UI, and chatbot experiences across Egypt, UAE, and Saudi Arabia.",
      "The strongest pattern in my work is not one-off feature delivery. It is sustained ownership across the full lifecycle of frontend work: product delivery, revamps, rollout cleanup, modernization, regression fixing, shared component extraction, and long-tail quality improvements.",
      "In parallel with product work, I contributed materially to the modernization of the noon.com frontend platform and the account.noon.com stack, including work tied to the major rewrite effort and the later migration of that work into the main codebase."
    ],
    themes: [
      {
        title: "Improved High-Traffic Commerce UX",
        bullets: [
          "Redesigned the product information page and product display box, contributing to a 27%+ uplift in click-through rate.",
          "Built the Freebies feature and helped increase click-through rate from 17% to 24%.",
          "Repeatedly delivered work across product box, ratings, tags, nudges, reviews, and similar-product experiences."
        ]
      },
      {
        title: "Drove Search, Filter, Sorting, and Navigation Quality",
        bullets: [
          "Delivered repeated improvements to category tree behavior, filters, sorting menus, search-result UI, empty states, facet behavior, and filter tracking.",
          "Participated in filter revamp discussions, research, and business conversations in addition to implementation.",
          "Improved discovery quality on surfaces where user intent, visual hierarchy, and conversion are tightly connected."
        ]
      },
      {
        title: "Owned Account Modernization and Rewrite Work",
        bullets: [
          "Took major ownership in the account modernization effort for account.noon.com.",
          "Coordinated planning, progress tracking, coding, review, and communication across 4 teams.",
          "Delivered work across profile, contact forms, logged-out flows, validation, translations, delivery selector reliability, and shared account navigation."
        ]
      },
      {
        title: "Contributed Materially to Frontend Platform Modernization",
        bullets: [
          "Contributed heavily during the rewrite period that modernized the frontend stack from older Next.js, React, TypeScript, and Yarn foundations to a newer platform on Next.js 15, React 19, TypeScript 5.6, Bun, and Turbo.",
          "Verified 229 authored non-merge commits in the original rewrite repository across the core modernization window.",
          "Contributed to rewrite-era themes including reviews architecture, global page setup, BNPL banner work, PLP and filter modernization, and post-migration cleanup."
        ]
      },
      {
        title: "Owned Frontend-Heavy Chatbot and Shared UX Flows",
        bullets: [
          "Owned the frontend of the shopping chatbot from MVP through production hardening.",
          "Helped a small cross-functional team turn an early concept into a live product with richer FAQ flows, validation, localization, analytics, and polished user experience.",
          "Delivered senior-level frontend ownership spanning state, UX sequencing, content rendering, analytics, and close backend collaboration."
        ]
      },
      {
        title: "Contributed Beyond Coding",
        bullets: [
          "Built onboarding documentation that reduced onboarding time by more than 50%.",
          "Mentored over 30 interns and supported 20+ junior developers.",
          "Interviewed approximately 30 candidates and acted as senior or lead mentor in the CAKE program 5 times."
        ]
      }
    ],
    sideCards: [
      {
        title: "Core Case",
        label: "How the work reads at senior level",
        items: [
          "Owns business-critical frontend surfaces that directly affect discovery, click-through, conversion paths, and account experience quality.",
          "Operates effectively across product delivery, technical refactoring, modernization, rollout cleanup, and UX reliability.",
          "Contributes beyond ticket execution through mentorship, interviewing, onboarding, code review, and cross-team coordination.",
          "Bridges legacy and modern systems and can move between feature delivery and platform-level modernization when needed."
        ]
      },
      {
        title: "Selected Evidence",
        label: "Repo-backed and tracked proof points",
        items: [
          "2,896 authored non-merge commits identified in the main commerce repository.",
          "Approximately 85,162 lines added, 59,797 lines deleted, and 5,279 file touches in the main repository.",
          "229 authored non-merge commits identified in the original rewrite repository.",
          "Verified local PR trail includes chatbot-tracking, chatbot-reformed, chatbot-quickfix, account-header-revamp, refactor-misc, and multiple customer-facing fixes across account, cart, and navigation."
        ]
      },
      {
        title: "Resume-Safe Claims",
        label: "Portable wording for interviews and docs",
        items: [
          "Led and contributed across high-traffic commerce surfaces on noon.com and account.noon.com, including PDP, PLP, search, cart, account, header, and chatbot experiences across Egypt, UAE, and Saudi Arabia.",
          "Contributed materially to noon's major frontend modernization effort, helping move the stack from older foundations to a newer monorepo architecture on Next.js 15, React 19, TypeScript 5.6, Bun, and Turbo.",
          "Drove multiple revamps and rollout follow-through efforts across account, search, header, product box, filters, and chatbot surfaces."
        ]
      }
    ]
  }
} as const;

export const publicProfileLinks = profileData.contactActions
  .filter((item) => item.label === "LinkedIn" || item.label === "GitHub")
  .map((item) => item.href)
  .filter(
    (href) =>
      href.startsWith("http") &&
      !href.includes("your-handle") &&
      !href.includes("YOUR_DOC_ID")
  );
