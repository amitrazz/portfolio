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
      "Architected and engineered a Federated Micro-Frontend Platform, unblocking 10+ autonomous squads to release updates independently and eliminating weekly release bottlenecks.",
      "Evolved a multi-theme, WCAG AA Compliant Enterprise Design System, achieving 95%+ component reuse rate across 5 core portals and reducing UI code duplication.",
      "Led runtime performance auditing and optimization cycles across critical user journeys, reducing P95 latency by 30% (from 2.5s down to 1.7s).",
      "Established organizational frontend architecture standards, outlining module boundaries, rendering strategies (SSR/CSR), and cache-aside data guidelines.",
      "Standardized build pipelines, developer tooling, and automated CI/CD workflows, shortening developer cycle times by 40%.",
      "Collaborated with backend architecture squads to optimize API schema designs, reducing redundant network payload weights by 60%."
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
      "Led frontend architecture design and technical roadmap execution for enterprise webinar portals supporting millions of active users.",
      "Drove adoption of a schema-federated GraphQL topology, pruning network payload sizes and data transfer weights by 60%.",
      "Implemented Incremental Static Regeneration (ISR), Apollo Client caching, and localized CloudFront CDN edge routing, improving P95 dashboard loading times by 45%.",
      "Built and maintained a unified UI design library, standardizing code boundaries across multiple organizational segments.",
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
      "Developed high-throughput OTT streaming dashboard interfaces with strict performance budgets using React, Next.js, and TypeScript.",
      "Pruned bundle weights by 35% through route-based code splitting, dynamic dependency lazy loading, and dependency tree-shaking.",
      "Optimized Time to First Byte (TTFB) to ~300ms by tuning server-side rendering parameters and configuring edge caching."
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
      "Optimized catalog page rendering speeds using static server prerendering, browser image resizing, and cache policies.",
      "Delivered reusable UI primitives, accelerating team frontend feature execution timelines by 20%."
    ],
    tech: ["React.js", "JavaScript", "SSR", "Caching", "Lazy Loading", "Component Architecture", "E-commerce"]
  }
] as const;

export const projectsData = [
  {
    title: "Federated Micro-Frontend Platform",
    subtitle: "Aptos India Pvt. Ltd.",
    problem: "A monolithic retail dashboard shared across 10+ engineering teams suffered from deployment bottlenecks, where a failure in one feature blocked weekly release deployments for all teams. Build cycles exceeded 45 minutes, and local runs were fragile.",
    solution: "Designed and engineered a decentralized Micro-Frontend (MFE) runtime orchestration framework. Implemented runtime component injection using Webpack Module Federation with decoupled domain boundaries, autonomous build pipelines, and dynamic asset manifests.",
    architecture: `+------------------ User Browser -------------------+
|                                                   |
|             [ Host Shell Application ]             |
|                         │                         |
|             (Demands Remote Modules)              |
|                         │                         |
|                         ▼                         |
|          [ Custom Remote Module Loader ]          |
|                         │                         |
|         ┌───────────────┼───────────────┐         |
|         ▼               ▼               ▼         |
|     [ MFE 1 ]       [ MFE 2 ]       [ MFE 3 ]     |
|    (Analytics)     (Checkout)      (Inventory)    |
|         │               │               │         |
|         └───── Federated State Sync ────┘         |
+---------------------------------------------------+`,
    technologies: ["React.js", "Next.js", "TypeScript", "Module Federation", "Tailwind CSS", "GitHub Actions", "Docker"],
    businessImpact: "Decoupled deployment cycles for 10 independent squads. Reduced cross-team code integration friction, boosting development velocity and product feature release cycles.",
    challenges: "Handling major/minor version discrepancies of shared dependencies (e.g. React Core, Framer Motion) without bloating runtime assets, and isolating CSS namespaces under tailwind utility compiles.",
    results: "100% autonomous deployment boundaries achieved. Build times crashed from 45 minutes to under 5 minutes. Release cycles improved from bi-weekly synchronized deployments to instant, zero-downtime production updates.",
  },
  {
    title: "Enterprise Core Design System",
    subtitle: "Aptos & Airmeet Systems",
    problem: "Severe visual inconsistencies across multiple product suites led to high CSS bloating, layout bugs, and duplicate engineering efforts across frontlines, delaying critical feature delivery by weeks.",
    solution: "Architected a multi-theme, accessible-first (WCAG AA Compliant) core design library from the ground up. Enforced structural tokens via Style Dictionary, wrapping headless primitives with robust brand-compliant guidelines.",
    architecture: `+------------------ Figma Tokens -------------------+
|                        │                          |
|                        ▼                          |
|         [ Token Compiler (Style Dict) ]           |
|            ├── Generate CSS Variables             |
|            └── Export Theme JSON                      |
|                        │                          |
|                        ▼                          |
|         [ Headless Radix Primitives ]             |
|                        │                          |
|                        ▼                          |
|         [ Custom Accessible UI Library ]          |
+---------------------------------------------------+`,
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Radix UI", "Storybook", "Lerna / Turborepo", "Semantic Release"],
    businessImpact: "Created a single source of truth for UX design, accelerating development timelines and aligning corporate branding standards across high-traffic customer interfaces.",
    challenges: "Securing organization-wide adoption of breaking system transitions and structuring clean semver release version boundaries for downstream platforms.",
    results: "Achieved 95%+ component reuse rates across core portals, speeding up UI creation times for new features by 30% and guaranteeing out-of-the-box keyboard/screen-reader accessibility.",
  },
  {
    title: "GraphQL Caching & Rendering Engine",
    subtitle: "Airmeet Platform",
    problem: "Excessive client payloads, over-fetching on real-time dashboards, and poor SEO indexing for webinar register landing pages due to heavy client-side GraphQL query processing.",
    solution: "Led migration to a schema-federated GraphQL topology. Implemented Next.js Incremental Static Regeneration (ISR) with localized cache-aside strategies, edge routing, and granular cache policies.",
    architecture: `+----------------- Network Traffic -----------------+
|                                                   |
|                 [ Client Browser ]                |
|                        │                          |
|                 (Requests Route)                  |
|                        │                          |
|                        ▼                          |
|             [ CloudFront Edge CDN ]               |
|            (Serves Cached Static HTML)            |
|                        │                          |
|                    Cache Miss                     |
|                        ▼                          |
|              [ Next.js ISR Render ]               |
|                        │                          |
|             (GraphQL Federated Query)             |
|                        ▼                          |
|            [ Apollo Gateway Engine ]              |
+---------------------------------------------------+`,
    technologies: ["Next.js", "TypeScript", "GraphQL", "Apollo Client", "GraphQL Codegen", "CloudFront CDN"],
    businessImpact: "Reduced server-side query loads and bandwidth consumption while vastly increasing site speed indexing and registration conversions.",
    challenges: "Resolving complex Apollo client-side cache invalidations for highly dynamic event calendars without introducing stale data reads.",
    results: "P95 latency thresholds dropped by 45%, network API data payload weights reduced by 60%, and page rendering speeds optimized to near-instant transitions.",
  },
  {
    title: "High-Performance OTT Video Engine",
    subtitle: "Discovery, Inc. Client Project",
    problem: "Severe playback loading delays and high mobile buffering rates on media dashboard players, leading to user drops and low engagement statistics on video components.",
    solution: "Overhauled the streaming platform's compilation bundles. Implemented dynamic asset code splitting, route-based dynamic component lazy loading, and fine-tuned preloading scripts.",
    architecture: `+----------------- Video Playback ------------------+
|                                                   |
|                 [ Browser Shell ]                 |
|                        │                          |
|             (Dynamic Import of Player)            |
|                        │                          |
|                        ▼                          |
|              [ CloudFront Edge CDN ]              |
|             (Streams HLS Chunk Blocks)            |
|                        │                          |
|                    Cache Miss                     |
|                        ▼                          |
|             [ Media Transcode Server ]            |
+---------------------------------------------------+`,
    technologies: ["React.js", "Next.js", "TypeScript", "Webpack", "CloudFront", "Lighthouse", "Web Vitals Optimization"],
    businessImpact: "Maximized video watch times and mobile engagement metrics by eliminating resource compilation blocks during initial stream playback starts.",
    challenges: "Shrinking Javascript bundle weights containing heavy media drivers without delaying initial media interaction playback triggers.",
    results: "Total bundle size reduced by 35%, Time to First Byte (TTFB) optimized to ~300ms, and Google Lighthouse performance index raised to 95+.",
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
