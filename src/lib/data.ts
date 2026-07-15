// This file contains static data for the portfolio. It is purely static data with no React components
// or icon imports, allowing for optimal tree shaking and preventing transitively bloating layouts.

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Expertise", hash: "#expertise" },
  { name: "Experience", hash: "#experience" },
  { name: "Projects", hash: "#projects" },
  { name: "Achievements", hash: "#achievements" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Associate Principal Engineer",
    company: "Aptos India Pvt. Ltd.",
    location: "Bangalore, India",
    duration: "May 2023 – Present",
    icon: "cpu",

    summary:
      "Leading frontend platform architecture for enterprise retail solutions by driving micro-frontend adoption, design system standardization, performance engineering, and developer platform initiatives across multiple engineering squads.",

    scope: {
      domain: "Retail Commerce",
      ownership: [
        "Frontend Platform Architecture",
        "Micro-Frontend Platform",
        "Enterprise Design System",
        "Performance Engineering",
        "Developer Experience",
      ],
      stakeholders: "10+ Engineering Squads",
    },

    keyAchievements: [
      "Architected a federated Micro-Frontend Platform enabling 10+ autonomous squads to deploy independently while eliminating centralized release bottlenecks.",
      "Designed and scaled an enterprise Design System with 95%+ component reuse across multiple business applications.",
      "Established frontend architecture standards covering module boundaries, rendering strategies, caching, and platform governance.",
      "Improved Core Web Vitals by reducing P95 latency by 30% (2.5s → 1.7s) through rendering optimization, code splitting, and caching.",
      "Standardized CI/CD pipelines and developer tooling, reducing engineering feedback cycles by 40%.",
      "Collaborated with backend architects to redesign API contracts, reducing payload sizes by 60% and improving application responsiveness.",
    ],

    businessImpact: [
      "Enabled independent product delivery.",
      "Reduced release coordination overhead.",
      "Improved developer productivity.",
      "Established long-term frontend platform governance.",
    ],

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Module Federation",
      "Design Systems",
      "SSR",
      "Web Vitals",
      "CI/CD",
      "GitHub Actions",
    ],
  },

  {
    title: "Tech Lead",
    company: "Valuebound Consulting Services (Client: Airmeet)",
    location: "Bangalore, India",
    duration: "Jul 2021 – May 2023",
    icon: "network",

    summary:
      "Led frontend architecture for a large-scale virtual events platform, focusing on rendering performance, GraphQL architecture, caching strategies, and shared engineering standards.",

    scope: {
      domain: "Virtual Events Platform",
      ownership: [
        "Frontend Architecture",
        "GraphQL Platform",
        "Rendering Strategy",
        "Performance Engineering",
        "Design System",
      ],
      stakeholders: "Cross-functional Product Teams",
    },

    keyAchievements: [
      "Defined the frontend architecture roadmap supporting millions of users across webinar and virtual event platforms.",
      "Led migration to a schema-federated GraphQL architecture, reducing network payloads by 60%.",
      "Implemented Incremental Static Regeneration (ISR), Apollo caching, and CloudFront edge caching, reducing P95 dashboard load time by 45%.",
      "Built a shared component library that standardized UI development across multiple engineering teams.",
      "Mentored 12+ engineers on architecture, performance optimization, and scalable frontend practices.",
    ],

    businessImpact: [
      "Improved application scalability.",
      "Accelerated feature development.",
      "Improved SEO and customer experience.",
      "Established frontend engineering standards.",
    ],

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "GraphQL",
      "Apollo",
      "ISR",
      "CloudFront",
      "Design Systems",
    ],
  },

  {
    title: "Software Engineer III",
    company: "Robosoft Technologies (Client: Discovery Inc.)",
    location: "Bangalore, India",
    duration: "Mar 2021 – Jul 2021",
    icon: "server",

    summary:
      "Built high-performance OTT applications with a strong emphasis on browser performance, bundle optimization, and streaming experience.",

    scope: {
      domain: "OTT Streaming",
      ownership: [
        "Performance Engineering",
        "Frontend Architecture",
        "Rendering Optimization",
      ],
      stakeholders: "Global Media Platform",
    },

    keyAchievements: [
      "Developed high-performance OTT interfaces under strict performance budgets.",
      "Reduced JavaScript bundle size by 35% through route-based code splitting, lazy loading, and dependency optimization.",
      "Optimized Time to First Byte (TTFB) to approximately 300ms using SSR tuning and CDN edge caching.",
    ],

    businessImpact: [
      "Improved playback startup time.",
      "Enhanced user engagement.",
      "Reduced page load latency.",
    ],

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Webpack",
      "CloudFront",
      "Web Vitals",
    ],
  },

  {
    title: "Software Engineer",
    company: "Creatise",
    location: "Bangalore, India",
    duration: "Jun 2017 – Feb 2021",
    icon: "layers",

    summary:
      "Developed scalable frontend applications for e-commerce and media platforms while building strong foundations in performance optimization, reusable component architecture, and responsive UI engineering.",

    scope: {
      domain: "E-commerce & Media",
      ownership: [
        "Frontend Development",
        "Performance Optimization",
        "Reusable Components",
      ],
      stakeholders: "Multiple Client Projects",
    },

    keyAchievements: [
      "Built responsive React applications for catalog-driven e-commerce and media platforms.",
      "Improved rendering performance through server-side pre-rendering, image optimization, and browser caching.",
      "Developed reusable UI components that accelerated feature delivery by approximately 20%.",
    ],

    businessImpact: [
      "Improved page performance.",
      "Reduced duplicate development effort.",
      "Established reusable UI patterns.",
    ],

    technologies: [
      "React",
      "JavaScript",
      "SSR",
      "Caching",
      "Lazy Loading",
      "Component Architecture",
    ],
  },
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
    title: "Platform Architecture",
    icon: "network",
    description:
      "Designing scalable platform architectures that enable autonomous engineering teams through clear domain boundaries, reusable platform capabilities, and standardized engineering practices.",
    capabilities: [
      "Platform Strategy",
      "Domain-Driven Design",
      "Architecture Governance",
      "Technical Roadmaps",
      "Cross-Team Standards",
    ],
  },

  {
    title: "Distributed Systems",
    icon: "server",
    description:
      "Building resilient distributed systems using asynchronous communication, event-driven workflows, CQRS, and reliability patterns to ensure scalability and fault tolerance.",
    capabilities: [
      "Event-Driven Architecture",
      "CQRS",
      "Saga Patterns",
      "Idempotency",
      "Circuit Breakers",
      "Retries & Dead Letter Queues",
      "Eventual Consistency",
    ],
  },

  {
    title: "Frontend Platform Engineering",
    icon: "cpu",
    description:
      "Architecting enterprise frontend platforms with Micro-Frontends, shared design systems, and developer tooling that improve engineering velocity while maintaining consistency across products.",
    capabilities: [
      "Module Federation",
      "Micro-Frontends",
      "Enterprise Design Systems",
      "Developer Experience",
      "Monorepo Strategy",
      "Component Libraries",
    ],
  },

  {
    title: "Performance Engineering",
    icon: "activity",
    description:
      "Driving application performance through rendering optimization, intelligent caching, bundle optimization, and Core Web Vitals improvements across high-traffic applications.",
    capabilities: [
      "Core Web Vitals",
      "SSR / ISR",
      "Edge Rendering",
      "Bundle Optimization",
      "Code Splitting",
      "Caching Strategies",
      "CDN Optimization",
    ],
  },

  {
    title: "Cloud & Platform Infrastructure",
    icon: "aws",
    description:
      "Building cloud-native platforms on AWS with scalable infrastructure, serverless architectures, CI/CD automation, and Infrastructure as Code to improve operational efficiency and reliability.",
    capabilities: [
      "AWS",
      "Lambda",
      "API Gateway",
      "EventBridge",
      "DynamoDB",
      "CloudFront",
      "Docker",
      "CI/CD",
      "Infrastructure as Code",
    ],
  },

  {
    title: "API & Integration Architecture",
    icon: "graphql",
    description:
      "Designing high-performance APIs and integration layers using REST and GraphQL while optimizing schema design, caching, and contract-first development for scalable distributed applications.",
    capabilities: [
      "REST",
      "GraphQL Federation",
      "Schema Design",
      "API Governance",
      "Apollo",
      "Caching",
      "Contract-First APIs",
    ],
  },

  {
    title: "Technical Leadership",
    icon: "layers",
    description:
      "Leading architectural initiatives, establishing engineering standards, mentoring developers, and driving platform adoption across cross-functional engineering organizations.",
    capabilities: [
      "Architecture Reviews",
      "Engineering Standards",
      "RFC Process",
      "Mentoring",
      "Technical Strategy",
      "Cross-Team Collaboration",
      "Developer Productivity",
    ],
  },
  {
    title: "Observability & Reliability Engineering",
    icon: "shield",
    description:
      "Designing highly observable and resilient systems with end-to-end telemetry, distributed tracing, proactive monitoring, and fault-tolerant architectures that minimize operational risk and accelerate incident resolution.",
    capabilities: [
      "OpenTelemetry",
      "Distributed Tracing",
      "Structured Logging",
      "Metrics & Alerting",
      "SLO / SLA",
      "Fault Tolerance",
      "Incident Response",
      "Root Cause Analysis",
    ],
  },

  {
    title: "Developer Experience & Platform Automation",
    icon: "terminal",
    description:
      "Building internal developer platforms, engineering tooling, and automated delivery pipelines that improve developer productivity, reduce cognitive load, and enable fast, reliable software delivery at scale.",
    capabilities: [
      "CI/CD Automation",
      "Build Optimization",
      "Internal Developer Platforms",
      "Monorepo Tooling",
      "Code Quality Automation",
      "Release Engineering",
      "GitHub Actions",
      "Developer Productivity",
    ],
  },
] as const;

export const engineeringPrinciples = [
  {
    title: "Architect for Organizational Scale",
    description:
      "The greatest scalability challenge is often organizational rather than technical. I design systems with clear ownership boundaries, autonomous services, and well-defined contracts that enable teams to deliver independently while minimizing coordination overhead.",
    icon: "compass",
  },

  {
    title: "Contracts Before Code",
    description:
      "Well-defined APIs and schemas are the foundation of reliable systems. I advocate contract-first development using OpenAPI, GraphQL, and TypeScript to enable parallel development, reduce integration risks, and evolve systems safely.",
    icon: "terminal",
  },

  {
    title: "Performance by Design",
    description:
      "Performance is an architectural concern, not a post-release optimization. Every decision—from rendering strategies and caching to data fetching and bundle composition—is measured against user experience, scalability, and business outcomes.",
    icon: "flame",
  },

  {
    title: "Build for Resilience",
    description:
      "Failures are inevitable in distributed systems. I design architectures that degrade gracefully through retries, circuit breakers, idempotency, observability, and fault isolation to maintain reliability under production workloads.",
    icon: "shield",
  },

  {
    title: "Developer Experience is a Force Multiplier",
    description:
      "Great engineering organizations are built on exceptional developer experience. Investing in reusable platforms, automation, tooling, and fast feedback loops improves software quality, accelerates delivery, and scales engineering productivity.",
    icon: "sparkles",
  },

  {
    title: "Measure, Then Optimize",
    description:
      "Every architectural decision should be validated with data. I rely on telemetry, profiling, distributed tracing, and production metrics to identify bottlenecks, quantify impact, and guide continuous optimization.",
    icon: "activity",
  },
] as const;

export const achievementsData = [
  {
    value: "10+",
    label: "Engineering Squads",
    description:
      "Enabled autonomous deployments across 10+ engineering squads by architecting a federated Micro-Frontend platform.",
  },
  {
    value: "95%+",
    label: "Component Reuse",
    description:
      "Built an enterprise design system adopted across multiple products, significantly reducing duplicated UI development.",
  },
  {
    value: "30%",
    label: "P95 Latency Reduction",
    description:
      "Reduced critical user journey latency from 2.5s to 1.7s through rendering optimization, caching, and bundle improvements.",
  },
  {
    value: "60%",
    label: "Payload Reduction",
    description:
      "Optimized GraphQL schemas and API contracts, reducing redundant network payloads and improving application responsiveness.",
  },
  {
    value: "45%",
    label: "Dashboard Performance",
    description:
      "Improved P95 dashboard load times using ISR, Apollo caching, and CloudFront edge delivery.",
  },
  {
    value: "40%",
    label: "Developer Productivity",
    description:
      "Standardized build pipelines and CI/CD workflows, reducing engineering feedback cycles and accelerating feature delivery.",
  },
] as const;
export const awardsData = [
  {
    title: "Living Our Commitment – Excellence",
    issuer: "Aptos Retail",
    date: "Mar 2026",
    description:
      "Recognized for outstanding engineering leadership, platform architecture contributions, and delivering high-impact strategic initiatives.",
  },
  {
    title: "Spot Award",
    issuer: "Valuebound Consulting Services",
    date: "Mar 2023",
    description:
      "Awarded for exceptional ownership, technical execution, and delivering customer-critical solutions.",
  },
  {
    title: "Star of the Quarter",
    issuer: "Valuebound Consulting Services",
    date: "Sep 2022",
    description:
      "Recognized for consistently delivering high-quality solutions and technical leadership across engineering initiatives.",
  },
  {
    title: "Innovation Award",
    issuer: "Valuebound Consulting Services",
    date: "Jul 2022",
    description:
      "Awarded for introducing innovative engineering solutions that improved platform scalability and developer productivity.",
  },
  {
    title: "Best Talent of the Year",
    issuer: "Valuebound Consulting Services",
    date: "Jan 2022",
    description:
      "Recognized as one of the organization's top engineering performers for technical excellence, ownership, and customer impact.",
  },
  {
    title: "Spot Award",
    issuer: "Valuebound Consulting Services",
    date: "Oct 2021",
    description:
      "Recognized for exceptional delivery, customer focus, and rapid execution on strategic engineering initiatives.",
  },
] as const;

export const skillsData = [
  // Architecture
  { name: "System Design", category: "Architecture" },
  { name: "Distributed Systems", category: "Architecture" },
  { name: "Domain-Driven Design", category: "Architecture" },
  { name: "Event-Driven Architecture", category: "Architecture" },
  { name: "Microservices", category: "Architecture" },
  { name: "API Design", category: "Architecture" },
  { name: "Performance Engineering", category: "Architecture" },
  { name: "Scalability & Reliability", category: "Architecture" },

  // Frontend Platform
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Micro-Frontends", category: "Frontend" },
  { name: "Module Federation", category: "Frontend" },
  { name: "Enterprise Design Systems", category: "Frontend" },
  { name: "SSR / ISR", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Storybook", category: "Frontend" },

  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "NestJS", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "GraphQL", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "Apollo Federation", category: "Backend" },

  // Cloud & Infrastructure
  { name: "AWS", category: "Cloud" },
  { name: "Lambda", category: "Cloud" },
  { name: "API Gateway", category: "Cloud" },
  { name: "EventBridge", category: "Cloud" },
  { name: "DynamoDB", category: "Cloud" },
  { name: "CloudFront", category: "Cloud" },
  { name: "Docker", category: "Cloud" },
  { name: "Infrastructure as Code", category: "Cloud" },

  // Data & Messaging
  { name: "PostgreSQL", category: "Data" },
  { name: "MongoDB", category: "Data" },
  { name: "DynamoDB", category: "Data" },
  { name: "Redis", category: "Data" },
  { name: "Caching Strategies", category: "Data" },
  { name: "EventBridge", category: "Messaging" },
  { name: "SNS / SQS", category: "Messaging" },
  { name: "Event-Driven Workflows", category: "Messaging" },

  // DevOps & Observability
  { name: "CI/CD", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
  { name: "Performance Profiling", category: "DevOps" },
  { name: "OpenTelemetry", category: "DevOps" },
  { name: "CloudWatch", category: "DevOps" },
  { name: "Observability", category: "DevOps" },

  // Engineering Leadership
  { name: "Platform Architecture", category: "Leadership" },
  { name: "Technical Strategy", category: "Leadership" },
  { name: "Architecture Reviews", category: "Leadership" },
  { name: "Technical Mentoring", category: "Leadership" },
  { name: "Engineering Standards", category: "Leadership" },
  { name: "Developer Experience", category: "Leadership" },
];