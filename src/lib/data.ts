// This file contains static data for the portfolio. It is purely static data with no React components
// or icon imports, allowing for optimal tree shaking and preventing transitively bloating layouts.

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Architecture",
    hash: "#architecture",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Achievements",
    hash: "#achievements",
  },
  {
    name: "Principles",
    hash: "#principles",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Associate Principal Engineer",
    company: "Aptos India Pvt. Ltd.",
    location: "Bangalore, India",
    date: "May 2023 – Present",
    icon: "cpu",
    responsibilities: [
      "Led development of a scalable micro-frontend platform, enabling independent deployments across teams and reducing cross-team coupling.",
      "Designed and evolved a shared component system and design system, improving UI consistency and development velocity.",
      "Optimized frontend performance across critical user journeys, reducing latency by 30% (2.5s → 1.7s).",
      "Defined frontend architecture patterns including module boundaries, rendering strategies (SSR/CSR), and data-fetching optimization.",
      "Improved developer experience through standardized build pipelines, tooling, and deployment workflows.",
      "Collaborated with backend teams to optimize APIs and reduce over-fetching, improving frontend responsiveness."
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
      "Led frontend architecture for enterprise applications using React, Next.js, and TypeScript.",
      "Drove adoption of GraphQL, reducing redundant data transfer by 60%.",
      "Implemented advanced SSR, caching, and rendering strategies, improving P95 latency by 45%.",
      "Built and maintained a shared design system used across multiple applications.",
      "Standardized frontend patterns for data fetching, state management, and component architecture."
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
      "Developed performance-sensitive features for OTT platforms using React, Next.js, and TypeScript.",
      "Reduced bundle size by 35% through code-splitting and dependency optimization.",
      "Improved TTFB (~300ms) via SSR tuning and CDN optimization."
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
      "Built scalable frontend applications for OTT and e-commerce platforms using React.",
      "Improved performance via SSR, caching, and lazy loading strategies.",
      "Delivered reusable UI components and contributed to frontend architecture decisions."
    ],
    tech: ["React.js", "JavaScript", "SSR", "Caching", "Lazy Loading", "Component Architecture", "E-commerce"]
  }
] as const;

export const projectsData = [
  {
    title: "Federated Micro-Frontend Platform",
    subtitle: "Aptos India Pvt. Ltd.",
    problem: "A large-scale monolithic application created high coupling between 10+ feature teams, resulting in deployment bottlenecks, slow release cycles, and fragile integration tests.",
    solution: "Designed and engineered a decentralized Micro-Frontend (MFE) orchestration platform. Implemented runtime integration using module federation with clear-cut domain boundaries, enabling autonomous builds and zero-downtime micro-deployments.",
    architecture: "Webpack Module Federation + Custom Remote Loader + Shared State Sync Engine + Isolated Github Actions Workflows",
    technologies: ["React.js", "Next.js", "TypeScript", "Module Federation", "Tailwind CSS", "GitHub Actions", "Docker"],
    businessImpact: "Reduced cross-team release coupling from bi-weekly synchronization to instant, autonomous deployments. Improved development velocity by 40% and simplified integration test suites.",
    challenges: "Handling version mismatch of shared dependencies (like React) without inflating runtime bundle sizes, and establishing robust isolation for CSS and global events.",
    results: "100% decoupled deployments across 10 independent teams, zero shared-dependency clashes, and reduced average deployment time from 45 minutes to under 5 minutes.",
  },
  {
    title: "Enterprise Core Design System",
    subtitle: "Aptos & Airmeet Systems",
    problem: "Visual inconsistencies across different product portals and duplicated UI efforts across engineering teams, leading to brand decay and high UI refactoring overhead.",
    solution: "Architected a multi-theme, accessible-first (WCAG AA Compliant) enterprise design system and component library from scratch. Leveraged headless UI primitives to allow flexibility while strictly enforcing tokenized typography, spacing, and brand colors.",
    architecture: "Design Token Compiler + Headless Radix Primitives + Tailwind Styles + Automated Semantic Versioning and Storybook Documentation",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Radix UI", "Storybook", "Lerna / Turborepo", "Semantic Release"],
    businessImpact: "Created a single source of truth for design, accelerating time-to-market for new feature development by 30% and eliminating duplicate code across 5 enterprise applications.",
    challenges: "Getting organization-wide adoption and managing backward-compatible breaking changes across downstream teams.",
    results: "Achieved 95%+ component reuse rate across core portals, with standard accessibility audits passing out-of-the-box for all product pages.",
  },
  {
    title: "GraphQL API Caching & Rendering Optimization",
    subtitle: "Airmeet Platform",
    problem: "Heavy redundant REST API payloads, over-fetching on real-time dashboards, and sub-optimal search engine indexing for high-traffic webinar registrations.",
    solution: "Led the architectural migration to a unified GraphQL schema, combined with hybrid rendering strategies (Next.js Incremental Static Regeneration + Server-Side Rendering) and localized client-side caching.",
    architecture: "GraphQL Federated Schema + Next.js SSR/ISR + Apollo Client Caching + Edge CDN Route Matching",
    technologies: ["Next.js", "TypeScript", "GraphQL", "Apollo Client", "GraphQL Codegen", "CloudFront CDN"],
    businessImpact: "Reduced network overhead and API data payload sizes by 60%. Greatly boosted core web vitals and overall search indexing, driving higher registration conversions.",
    challenges: "Designing normalized Apollo Cache policies for highly dynamic event schedules and handling edge CDN stale-while-revalidate invalidations.",
    results: "Improved P95 latency by 45%, cut API request payload weight by 60%, and realized Near-Instant page transitions.",
  },
  {
    title: "High-Performance OTT Video Streaming Engine",
    subtitle: "Discovery, Inc. Client Project",
    problem: "Buffering issues, high latency, and low Core Web Vital scores (poor LCP and TTFB) affecting viewer retention on dynamic media layouts.",
    solution: "Refactored the application's bundle structure via aggressive route-based code splitting, dynamic dependency lazy loading, and fine-tuned edge caching.",
    architecture: "CDN Edge Tuning + Progressive Resource Loading + Code Splitting Optimizer + Lazy Player Dynamic Embedding",
    technologies: ["React.js", "Next.js", "TypeScript", "Webpack", "CloudFront", "Lighthouse", "Web Vitals Optimization"],
    businessImpact: "Substantially decreased user buffering rates and initial loading times on mobile devices, leading to measurable increases in video watch time.",
    challenges: "Reducing JS bundles containing heavy third-party media players without compromising playback start latency.",
    results: "Reduced overall bundle size by 35%, optimized Time to First Byte (TTFB) to ~300ms, and raised Google Lighthouse Performance index above 95.",
  }
] as const;

export const architectureExpertise = [
  {
    title: "Distributed Systems & Scalability",
    description: "Designing decoupled asynchronous workflows, event-driven architectures, and implementing reliability patterns like circuit breakers, retries, idempotency, and eventual consistency.",
    icon: "network",
  },
  {
    title: "Micro-Frontend (MFE) Platforms",
    description: "Orchestrating micro-frontends using Module Federation. Defining strict boundaries, runtime state sync, independent CI/CD pipelines, and shared system registries.",
    icon: "cpu",
  },
  {
    title: "Performance Engineering",
    description: "Maximizing Core Web Vitals (LCP, INP, CLS, TTFB). Implementing route-based code-splitting, tree-shaking, smart prefetching, CDN edge caching, and bundle optimization.",
    icon: "activity",
  },
  {
    title: "Cloud Infrastructure & Serverless",
    description: "Building production systems on AWS using Lambda, API Gateway, DynamoDB, ECS, CloudFront, Docker, and defining Infrastructure as Code (IaC) via CloudFormation.",
    icon: "aws",
  },
  {
    title: "API Design & Schema Federation",
    description: "Structuring high-throughput APIs using GraphQL (Apollo/Federation) and REST. Preventing over-fetching, ensuring schema safety, and managing client-side caching.",
    icon: "graphql",
  },
  {
    title: "Enterprise Component Architecture",
    description: "Engineering headless, accessible, and multi-themed design systems. Enforcing design tokens, modular UI libraries, and high developer velocity workflows.",
    icon: "layers",
  }
] as const;

export const engineeringPrinciples = [
  {
    title: "Design for Scale",
    description: "Every module, pipeline, or API is architected under the assumption that load, team size, and codebase complexity will double. Scale is built in, not bolted on.",
    icon: "compass"
  },
  {
    title: "API & Contract First",
    description: "Defining strict schemas (GraphQL, TypeScript, OpenAPI) before writing any logic. Enables parallel frontend/backend development and ensures system safety.",
    icon: "terminal"
  },
  {
    title: "Performance is a Feature",
    description: "Latency directly correlates to user retention and business conversion. Every millisecond counts, from edge server response to final browser render.",
    icon: "flame"
  },
  {
    title: "Exceptional Developer Experience",
    description: "Tooling, build times, and pipelines are the leverage of engineering organizations. Fast feedback loops directly translate to high product quality and velocity.",
    icon: "sparkles"
  },
  {
    title: "Observability & Fault Tolerance",
    description: "Systems must fail gracefully. Designing with proper telemetry, active monitoring, retries, and fallback states to deliver robust 99.99% availability.",
    icon: "shield"
  },
  {
    title: "Automation Over Manual Operations",
    description: "All environments, testing, styling enforcement, and deployment releases should be automated. If it has to be run manually twice, it deserves a pipeline.",
    icon: "activity"
  }
] as const;

export const achievementsData = [
  {
    value: "30%",
    label: "Latency Reduction",
    description: "Optimized frontend performance across critical user journeys, dropping latency from 2.5s down to 1.7s."
  },
  {
    value: "60%",
    label: "Payload Optimization",
    description: "Drove GraphQL migration and schema tuning, reducing redundant network data transfer."
  },
  {
    value: "45%",
    label: "P95 Speedup",
    description: "Implemented server rendering, caching, and edge optimization, dropping P95 latency thresholds."
  },
  {
    value: "35%",
    label: "Bundle Shrinkage",
    description: "Streamlined code-splitting, tree-shaking, and external dependencies to maximize Web Vital scores."
  },
  {
    value: "Award",
    label: "Living Our Commitment - Excellence",
    description: "Received top engineering and execution honors at Aptos in March 2026."
  },
  {
    value: "Award",
    label: "Star of the Quarter & Best Talent",
    description: "Awarded consecutively at Valuebound for leadership in frontend architecture."
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
  { name: "Caching Strategies (Redis)", category: "Architecture" },
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
  { name: "CI/CD (GitHub Actions, Jenkins)", category: "DevOps" },
  { name: "Infrastructure as Code", category: "DevOps" },
  { name: "Observability & Telemetry", category: "DevOps" },

  // Databases & Messaging
  { name: "PostgreSQL", category: "Databases" },
  { name: "MongoDB", category: "Databases" },
  { name: "DynamoDB", category: "Databases" },
  { name: "Event-driven Workflows", category: "Messaging" },
  { name: "Message Queues", category: "Messaging" }
] as const;
