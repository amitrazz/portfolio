// This file contains static data for the portfolio. It is purely static data with no React components
// or icon imports, allowing for optimal tree shaking and preventing transitively bloating layouts.

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Architecture", hash: "#architecture" },
  { name: "Experience", hash: "#experience" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Achievements", hash: "#achievements" },
  { name: "Principles", hash: "#principles" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Associate Principal Engineer",
    company: "Aptos India Pvt. Ltd.",
    location: "Bangalore, India",
    date: "May 2023 – Present",
    icon: "cpu",
    responsibilities: [
      "Architected a Federated Micro-Frontend Platform, enabling 10+ autonomous squads to deploy independently and eliminating weekly release bottlenecks.",
      "Engineered a multi-theme, WCAG AA-compliant Enterprise Design System, achieving a 95%+ component reuse rate across 5 core portals and heavily reducing UI code duplication.",
      "Spearheaded runtime performance auditing across critical user journeys, slashing P95 latency by 30% (from 2.5s to 1.7s).",
      "Defined organizational frontend architecture standards, establishing module boundaries, rendering strategies (SSR/CSR), and cache-aside data guidelines.",
      "Standardized build pipelines, developer tooling, and automated CI/CD workflows, reducing developer cycle times by 40%.",
      "Collaborated with backend teams to optimize API schema designs, decreasing redundant network payload weights by 60%."
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Micro-frontends", "Design Systems", "Web Vitals", "SSR", "CSR", "NPM Registry", "CI/CD"]
  },
  {
    title: "Tech Lead",
    company: "Valuebound Consulting Services (Client: Airmeet Inc.)",
    location: "Bangalore, India",
    date: "Jul 2021 – May 2023",
    icon: "network",
    responsibilities: [
      "Directed frontend architecture and technical roadmap execution for enterprise webinar portals supporting millions of active users.",
      "Championed the adoption of a schema-federated GraphQL topology, reducing network payload sizes and data transfer weights by 60%.",
      "Implemented Incremental Static Regeneration (ISR), Apollo Client caching, and localized CloudFront CDN edge routing, improving P95 dashboard load times by 45%.",
      "Built and maintained a unified UI design library to standardize code boundaries across multiple organizational segments.",
      "Mentored 12+ developers on performance engineering, API integration guidelines, and scalable state management patterns."
    ],
    tech: ["React.js", "Next.js", "TypeScript", "GraphQL", "SSR", "Caching", "Design Systems", "State Management", "Apollo Client"]
  },
  {
    title: "Software Engineer III",
    company: "Robosoft Technologies (Client: Discovery, Inc.)",
    location: "Bangalore, India",
    date: "Mar 2021 – Jul 2021",
    icon: "server",
    responsibilities: [
      "Developed high-throughput OTT streaming dashboard interfaces under strict performance budgets using React, Next.js, and TypeScript.",
      "Reduced bundle weights by 35% through route-based code splitting, dynamic lazy loading, and dependency tree-shaking.",
      "Optimized Time to First Byte (TTFB) to ~300ms by fine-tuning server-side rendering parameters and configuring edge caching."
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Code Splitting", "Bundle Optimization", "TTFB", "CDN", "Edge Optimization", "OTT"]
  },
  {
    title: "Software Engineer",
    company: "Creatise",
    location: "Bangalore, India",
    date: "Jun 2017 – Feb 2021",
    icon: "layers",
    responsibilities: [
      "Built responsive, multi-page frontend platforms for catalog e-commerce and media clients using React.",
      "Accelerated catalog page rendering speeds using static server pre-rendering, browser image resizing, and localized cache policies.",
      "Delivered reusable UI primitives, accelerating frontend feature execution timelines by 20% for the engineering team."
    ],
    tech: ["React.js", "JavaScript", "SSR", "Caching", "Lazy Loading", "Component Architecture", "E-commerce"]
  }
] as const;

export const projectsData = [
  {
    id: "federated-microfrontend-platform",
    featured: true,
    title: "Federated Micro-Frontend Platform",
    subtitle: "Aptos India Pvt. Ltd.",
    category: "Platform Engineering",
    role: "Associate Principal Engineer",
    duration: "May 2023 – Present",

    executiveSummary:
      "Architected a federated micro-frontend platform that transformed a tightly coupled retail application into independently deployable domain applications, enabling autonomous engineering teams while significantly improving developer productivity and release velocity.",

    businessContext: {
      domain: "Retail Commerce Platform",
      stakeholders: "10+ Engineering Squads",
      scale: "Enterprise Platform",
      challenge:
        "Weekly releases required synchronized deployments across all teams, making every release high risk and slowing product delivery.",
    },

    problemStatement:
      "The frontend monolith created deployment bottlenecks, fragile builds, long feedback cycles, and tight coupling between business domains.",

    objectives: [
      "Enable independent deployments",
      "Reduce release coordination",
      "Improve developer experience",
      "Increase engineering velocity",
      "Standardize platform architecture",
    ],

    architecture: {
      overview:
        "Built a runtime-composed micro-frontend platform using Webpack Module Federation with a lightweight shell responsible for routing, authentication, layout composition, shared dependencies, and platform services.",
      diagram: "",
      keyComponents: [
        "Host Shell",
        "Remote Applications",
        "Module Federation",
        "Shared Design System",
        "Runtime Module Loader",
      ],
      dataFlow: [
        "User → Shell",
        "Shell → Module Loader",
        "Module Loader → Remote Apps",
        "Remote Apps → Shared Platform Services",
      ],
      designPatterns: [
        "Module Federation",
        "Micro-Frontend",
        "Platform Architecture",
        "Shared Kernel",
      ],
    },

    engineeringHighlights: [
      "Designed runtime module loading",
      "Defined shared dependency governance",
      "Implemented platform-wide error boundaries",
      "Created deployment contracts",
      "Established frontend architecture standards",
    ],

    architectureDecisions: [
      {
        decision: "Use Module Federation",
        rationale: "Enable independent deployments.",
        tradeoffs: ["Runtime complexity", "Version management"],
        alternatives: ["Monolith", "Nx Monorepo", "Single SPA"],
      },
    ],

    technicalChallenges: [
      {
        challenge: "Shared dependency version conflicts",
        solution: "Singleton dependency strategy and semantic version governance.",
        outcome: "Reduced runtime incompatibilities.",
      },
      {
        challenge: "Cross-MFE communication",
        solution: "Shared platform APIs and event-based communication.",
        outcome: "Loosely coupled business domains.",
      },
    ],

    scale: {
      teams: "10+",
      repositories: "15+",
      users: "Enterprise",
    },

    reliability: {
      resiliency: [
        "Error Boundaries",
        "Remote Fallbacks",
        "Graceful Degradation",
      ],
      observability: [
        "Runtime Error Tracking",
        "Performance Monitoring",
        "Deployment Metrics",
      ],
      deployment: [
        "Independent CI/CD",
        "Zero-Downtime Releases",
      ],
    },

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Webpack Module Federation",
      "Tailwind CSS",
      "GitHub Actions",
      "Docker",
    ],

    businessImpact: [
      "Enabled autonomous engineering teams",
      "Reduced deployment risk",
      "Improved release velocity",
      "Standardized frontend architecture",
    ],

    measurableResults: [
      {
        metric: "Build Time",
        before: "45 Minutes",
        after: "<5 Minutes",
      },
      {
        metric: "Deployment Model",
        before: "Centralized",
        after: "Independent",
      },
    ],

    lessonsLearned: [
      "Organizational boundaries should drive architectural boundaries.",
      "Platform governance is essential for long-term scalability.",
    ],
  },

  {
    id: "enterprise-design-system",
    featured: true,
    title: "Enterprise Core Design System",
    subtitle: "Aptos & Airmeet",
    category: "Developer Platform",
    role: "Tech Lead / Associate Principal Engineer",
    duration: "2021 – Present",

    executiveSummary:
      "Architected an enterprise design system that unified UI development across multiple products, improving accessibility, consistency, and developer productivity.",

    businessContext: {
      domain: "Enterprise SaaS",
      stakeholders: "Multiple Product Teams",
      scale: "Multi-product Platform",
      challenge:
        "Independent teams built duplicate UI components, resulting in inconsistent experiences and high maintenance costs.",
    },

    problemStatement:
      "Lack of shared UI standards created duplicated effort, accessibility issues, and inconsistent branding across applications.",

    objectives: [
      "Standardize UI development",
      "Improve accessibility",
      "Increase component reuse",
      "Reduce maintenance cost",
    ],

    architecture: {
      overview:
        "Built a token-driven design system using Style Dictionary, Radix UI, Storybook, and semantic versioning.",
      diagram: "",
      keyComponents: [
        "Design Tokens",
        "Storybook",
        "Component Library",
        "Theme Engine",
      ],
      dataFlow: [
        "Figma → Tokens",
        "Tokens → Components",
        "Components → Applications",
      ],
      designPatterns: [
        "Atomic Design",
        "Headless Components",
        "Design Tokens",
      ],
    },

    engineeringHighlights: [
      "Implemented WCAG AA accessibility",
      "Built multi-theme architecture",
      "Automated semantic releases",
      "Created reusable component APIs",
    ],

    architectureDecisions: [
      {
        decision: "Token-first architecture",
        rationale: "Single source of truth across products.",
        tradeoffs: ["Initial complexity"],
        alternatives: ["CSS variables only", "Traditional CSS"],
      },
    ],

    technicalChallenges: [
      {
        challenge: "Organization-wide adoption",
        solution: "Migration strategy with versioned releases.",
        outcome: "95%+ component reuse.",
      },
    ],

    scale: {
      teams: "5+",
      repositories: "Multiple",
      users: "Enterprise",
    },

    reliability: {
      resiliency: ["Semantic Versioning"],
      observability: ["Storybook Visual Testing"],
      deployment: ["Automated NPM Releases"],
    },

    technologies: [
      "React",
      "TypeScript",
      "Tailwind",
      "Radix UI",
      "Storybook",
      "Style Dictionary",
    ],

    businessImpact: [
      "Single source of truth",
      "Faster feature delivery",
      "Consistent user experience",
    ],

    measurableResults: [
      {
        metric: "Component Reuse",
        before: "Low",
        after: "95%+",
      },
      {
        metric: "Development Speed",
        before: "Baseline",
        after: "+30%",
      },
    ],

    lessonsLearned: [
      "Adoption strategy is as important as technical implementation.",
    ],
  },

  {
    id: "graphql-rendering-platform",
    featured: true,
    title: "GraphQL Caching & Rendering Engine",
    subtitle: "Airmeet",
    category: "Distributed Systems",
    role: "Tech Lead",
    duration: "2021 –2023",

    executiveSummary:
      "Led frontend performance architecture by combining GraphQL Federation, ISR, CDN caching, and intelligent client-side caching to improve scalability and user experience.",

    businessContext: {
      domain: "Virtual Events Platform",
      stakeholders: "Millions of Users",
      scale: "High Traffic",
      challenge:
        "Large GraphQL payloads and poor caching caused slow dashboards and poor SEO.",
    },

    problemStatement:
      "Heavy GraphQL queries increased latency, bandwidth consumption, and rendering time.",

    objectives: [
      "Reduce API payload",
      "Improve SEO",
      "Optimize caching",
      "Increase rendering speed",
    ],

    architecture: {
      overview:
        "Implemented GraphQL Federation with Apollo, Next.js ISR, CloudFront edge caching, and optimized client-side cache strategies.",
      diagram: "",
      keyComponents: [
        "Apollo",
        "ISR",
        "CloudFront",
        "GraphQL Gateway",
      ],
      dataFlow: [
        "Client → CDN",
        "CDN → Next.js",
        "Next.js → GraphQL",
      ],
      designPatterns: [
        "Cache Aside",
        "ISR",
        "Edge Caching",
      ],
    },

    engineeringHighlights: [
      "Optimized GraphQL queries",
      "Implemented ISR",
      "Reduced payload size",
      "Improved Core Web Vitals",
    ],

    architectureDecisions: [
      {
        decision: "ISR over SSR",
        rationale: "Better scalability and SEO.",
        tradeoffs: ["Cache invalidation"],
        alternatives: ["SSR", "CSR"],
      },
    ],

    technicalChallenges: [
      {
        challenge: "Apollo cache invalidation",
        solution: "Granular cache policies.",
        outcome: "Reduced stale data.",
      },
    ],

    scale: {
      users: "Millions",
    },

    reliability: {
      resiliency: ["CDN Failover"],
      observability: ["Web Vitals", "GraphQL Metrics"],
      deployment: ["Zero Downtime"],
    },

    technologies: [
      "Next.js",
      "GraphQL",
      "Apollo",
      "CloudFront",
    ],

    businessImpact: [
      "Improved SEO",
      "Reduced bandwidth",
      "Improved customer experience",
    ],

    measurableResults: [
      {
        metric: "P95 Latency",
        before: "Baseline",
        after: "-45%",
      },
      {
        metric: "Payload Size",
        before: "Baseline",
        after: "-60%",
      },
    ],

    lessonsLearned: [
      "Caching strategy matters more than rendering strategy.",
    ],
  },

  {
    id: "ott-performance-platform",
    featured: true,
    title: "High-Performance OTT Video Engine",
    subtitle: "Discovery Inc.",
    category: "Performance Engineering",
    role: "Software Engineer III",
    duration: "2021",

    executiveSummary:
      "Optimized a high-traffic OTT platform through advanced bundle optimization, lazy loading, streaming optimization, and browser performance engineering.",

    businessContext: {
      domain: "Media Streaming",
      stakeholders: "Millions of Viewers",
      scale: "Global OTT Platform",
      challenge:
        "Large bundles and inefficient loading negatively impacted video playback and engagement.",
    },

    problemStatement:
      "Heavy JavaScript bundles delayed player initialization and increased user abandonment.",

    objectives: [
      "Reduce bundle size",
      "Improve startup performance",
      "Optimize playback",
      "Improve Lighthouse scores",
    ],

    architecture: {
      overview:
        "Implemented route-based code splitting, lazy loading, optimized prefetching, and CDN delivery for media assets.",
      diagram: "",
      keyComponents: [
        "Webpack",
        "CloudFront",
        "Video Player",
        "Lazy Loading",
      ],
      dataFlow: [
        "Browser → CDN",
        "CDN → Player",
      ],
      designPatterns: [
        "Code Splitting",
        "Lazy Loading",
        "Streaming",
      ],
    },

    engineeringHighlights: [
      "Reduced bundle size",
      "Improved TTFB",
      "Optimized playback",
      "Improved Lighthouse score",
    ],

    architectureDecisions: [
      {
        decision: "Aggressive code splitting",
        rationale: "Reduce initial load time.",
        tradeoffs: ["More network requests"],
        alternatives: ["Single bundle"],
      },
    ],

    technicalChallenges: [
      {
        challenge: "Large media dependencies",
        solution: "Dynamic imports.",
        outcome: "35% bundle reduction.",
      },
    ],

    scale: {
      users: "Millions",
    },

    reliability: {
      resiliency: ["CDN Caching"],
      observability: ["Lighthouse", "Web Vitals"],
      deployment: ["CI/CD"],
    },

    technologies: [
      "React",
      "Next.js",
      "Webpack",
      "CloudFront",
    ],

    businessImpact: [
      "Improved engagement",
      "Reduced buffering",
      "Better user retention",
    ],

    measurableResults: [
      {
        metric: "Bundle Size",
        before: "Baseline",
        after: "-35%",
      },
      {
        metric: "TTFB",
        before: "600ms+",
        after: "~300ms",
      },
    ],

    lessonsLearned: [
      "Performance engineering requires continuous measurement and optimization.",
    ],
  },
] as const;

export const architectureExpertise = [
  {
    title: "Distributed Systems & Scalability",
    description: "Designing decoupled asynchronous workflows and event-driven architectures. Implementing reliability patterns like circuit breakers, retries, idempotency, and eventual consistency.",
    icon: "network",
  },
  {
    title: "Micro-Frontend (MFE) Platforms",
    description: "Orchestrating micro-frontends using Module Federation. Defining strict domain boundaries, runtime state synchronization, independent CI/CD pipelines, and shared registries.",
    icon: "cpu",
  },
  {
    title: "Performance Engineering",
    description: "Maximizing Core Web Vitals (LCP, INP, CLS, TTFB). Implementing route-based code-splitting, tree-shaking, smart prefetching, CDN edge caching, and aggressive bundle optimization.",
    icon: "activity",
  },
  {
    title: "Cloud Infrastructure & Serverless",
    description: "Building resilient production systems on AWS utilizing Lambda, API Gateway, DynamoDB, ECS, CloudFront, and Docker. Defining Infrastructure as Code (IaC) via CloudFormation.",
    icon: "aws",
  },
  {
    title: "API Design & Schema Federation",
    description: "Structuring high-throughput APIs using GraphQL (Apollo/Federation) and REST. Preventing data over-fetching, ensuring strict schema safety, and managing robust client-side caching.",
    icon: "graphql",
  },
  {
    title: "Enterprise Component Architecture",
    description: "Engineering headless, accessible, and multi-themed design systems. Enforcing strict design tokens, modular UI libraries, and high-velocity developer workflows.",
    icon: "layers",
  }
] as const;

export const engineeringPrinciples = [
  {
    title: "Design for Scale",
    description: "Every module, pipeline, or API is architected under the assumption that load, team size, and codebase complexity will double. Scale must be built in, not bolted on.",
    icon: "compass"
  },
  {
    title: "Contract-First Execution",
    description: "Defining strict schemas (GraphQL, TypeScript, OpenAPI) before writing logic. This enables parallel frontend/backend development and guarantees system safety.",
    icon: "terminal"
  },
  {
    title: "Performance is a Feature",
    description: "Latency directly correlates to user retention and business conversion. Every millisecond counts—from the initial edge server response to the final browser paint.",
    icon: "flame"
  },
  {
    title: "Exceptional Developer Experience",
    description: "Tooling, build times, and pipelines are the primary leverage of engineering organizations. Fast feedback loops directly translate to high product quality and rapid velocity.",
    icon: "sparkles"
  },
  {
    title: "Observability & Fault Tolerance",
    description: "Systems must fail gracefully. Designing with comprehensive telemetry, active monitoring, retries, and intelligent fallback states to ensure 99.99% availability.",
    icon: "shield"
  },
  {
    title: "Automate Everything",
    description: "Environments, testing, styling enforcement, and deployments should be strictly automated. If an operation requires manual execution twice, it deserves a pipeline.",
    icon: "activity"
  }
] as const;

export const achievementsData = [
  {
    value: "30%",
    label: "Latency Reduction",
    description: "Slashed frontend latency across critical user journeys from 2.5s to 1.7s."
  },
  {
    value: "60%",
    label: "Payload Optimization",
    description: "Championed GraphQL migration and schema tuning, drastically reducing redundant network data transfers."
  },
  {
    value: "45%",
    label: "P95 Speedup",
    description: "Implemented ISR, caching, and edge routing to drop P95 latency thresholds on enterprise dashboards."
  },
  {
    value: "35%",
    label: "Bundle Shrinkage",
    description: "Streamlined code-splitting, tree-shaking, and external dependencies to maximize Core Web Vitals."
  },
  {
    value: "Award",
    label: "Living Our Commitment - Excellence",
    description: "Received top engineering and execution honors at Aptos in March 2026."
  },
  {
    value: "Award",
    label: "Star of the Quarter & Best Talent",
    description: "Awarded consecutively at Valuebound for technical leadership in frontend architecture."
  }
] as const;

export const skillsData = [
  // Frontend
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Micro-frontends", category: "Frontend" },
  { name: "Design Systems", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "SSR & ISR", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },

  // Architecture & Leadership
  { name: "Distributed Systems", category: "Architecture" },
  { name: "System Design", category: "Architecture" },
  { name: "API Design (REST, GraphQL)", category: "Architecture" },
  { name: "Performance Engineering", category: "Architecture" },
  { name: "Reliability Patterns", category: "Architecture" },
  { name: "Caching Strategies", category: "Architecture" },
  { name: "Technical Leadership", category: "Leadership" },
  { name: "Developer Experience (DX)", category: "Leadership" },

  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "NestJS", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "GraphQL", category: "Backend" },
  { name: "REST APIs", category: "Backend" },

  // Cloud & Infra
  { name: "AWS (Lambda, API Gateway)", category: "Cloud" },
  { name: "Docker", category: "Cloud" },
  { name: "CI/CD (GitHub Actions)", category: "DevOps" },
  { name: "Infrastructure as Code", category: "DevOps" },
  { name: "Observability & Telemetry", category: "DevOps" },

  // Databases & Messaging
  { name: "PostgreSQL", category: "Databases" },
  { name: "MongoDB", category: "Databases" },
  { name: "DynamoDB", category: "Databases" },
  { name: "Event-driven Workflows", category: "Messaging" },
  { name: "Message Queues", category: "Messaging" }
] as const;