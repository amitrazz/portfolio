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
    id: "federated-microfrontend",

    title: "Federated Micro-Frontend Platform",

    company: "Aptos India Pvt. Ltd.",

    duration: "2023 - Present",

    domain: "Retail Commerce Platform",

    role: "Associate Principal Engineer",

    featured: true,

    executiveSummary:
      "Architected a federated micro-frontend platform that transformed a tightly coupled retail application into independently deployable domain applications. Established architectural governance, runtime contracts, and shared platform standards enabling autonomous delivery across multiple engineering squads.",

    businessContext: {
      industry: "Retail",
      users: "Internal Operations",
      engineeringTeams: "10+",
      repositories: "15+",
      deploymentFrequency: "Weekly",
      challenge:
        "Independent product teams were blocked by a shared frontend monolith where every release required synchronized deployments and full regression testing."
    },

    problemStatement:
      "The organization had outgrown a centralized frontend architecture. A single application served multiple business domains including inventory, merchandising, promotions, fulfillment, and analytics. Every feature required rebuilding and redeploying the entire application, creating long feedback cycles and high operational risk.",

    objectives: [
      "Enable independent deployments",
      "Reduce deployment risk",
      "Improve developer experience",
      "Scale engineering organization",
      "Establish frontend platform governance"
    ],

    constraints: [
      "Existing React ecosystem",
      "Backward compatibility",
      "No downtime migration",
      "Shared authentication",
      "Shared routing",
      "Shared design system",
      "Cross-MFE communication",
      "Independent release cycles"
    ],

    architecture: {
      overview:
        "Introduced a runtime-composed micro-frontend platform using Module Federation with a lightweight shell application responsible for authentication, routing, layout composition, dependency management, and platform services.",

      diagram: `...`,

      components: [
        {
          name: "Shell Application",
          responsibility: [
            "Authentication",
            "Routing",
            "Layout",
            "Shared dependencies",
            "Platform services"
          ]
        },
        {
          name: "Remote Applications",
          responsibility: [
            "Business capabilities",
            "Independent deployment",
            "Domain ownership"
          ]
        },
        {
          name: "Module Registry",
          responsibility: [
            "Runtime discovery",
            "Version resolution",
            "Remote manifest loading"
          ]
        },
        {
          name: "Shared Platform",
          responsibility: [
            "Design System",
            "Analytics",
            "Telemetry",
            "Error Boundary",
            "Feature Flags"
          ]
        }
      ]
    },

    architectureDecisions: [
      {
        decision:
          "Adopt Module Federation instead of monorepo-only architecture",

        rationale:
          "Independent deployments were the primary business requirement.",

        alternatives: [
          "Nx Monorepo",
          "Single SPA",
          "Iframe composition"
        ],

        tradeoffs: [
          "Runtime complexity",
          "Dependency governance",
          "Version management"
        ]
      },
      {
        decision:
          "Centralize platform capabilities in the shell application",

        rationale:
          "Avoid duplicated authentication, routing, telemetry and shared state.",

        tradeoffs: [
          "Shell versioning",
          "Platform ownership"
        ]
      }
    ],

    scale: {
      squads: "10+",
      repositories: "15+",
      deployments: "Independent",
      buildTimeBefore: "45 min",
      buildTimeAfter: "<5 min"
    },

    technicalChallenges: [
      {
        title: "Dependency Versioning",

        description:
          "Multiple MFEs required different React and third-party library versions.",

        solution:
          "Implemented shared dependency contracts with singleton enforcement and semantic version validation."
      },
      {
        title: "Shared State",

        description:
          "Cross-domain communication without introducing tight coupling.",

        solution:
          "Built event-driven communication using custom event bus and shared platform APIs."
      },
      {
        title: "CSS Isolation",

        description:
          "Tailwind utility collisions across independently deployed applications.",

        solution:
          "Introduced namespace isolation and shared design tokens."
      }
    ],

    performance: {
      improvements: [
        "Build time reduced by 89%",
        "Independent deployments",
        "Reduced CI execution",
        "Smaller deployment artifacts"
      ]
    },

    resiliency: {
      strategies: [
        "Remote fallback components",
        "Runtime timeout handling",
        "Error boundaries per MFE",
        "Graceful degradation",
        "Manifest validation"
      ]
    },

    observability: {
      metrics: [
        "Remote load time",
        "Bundle size",
        "Runtime failures",
        "Error rate",
        "Deployment success",
        "Core Web Vitals"
      ]
    },

    businessImpact: [
      "Enabled autonomous engineering teams",
      "Reduced release coordination",
      "Accelerated feature delivery",
      "Lower deployment risk",
      "Improved developer productivity"
    ],

    measurableResults: [
      {
        metric: "Build Time",
        before: "45 min",
        after: "<5 min"
      },
      {
        metric: "Deployment Model",
        before: "Centralized",
        after: "Independent"
      },
      {
        metric: "Release Frequency",
        before: "Weekly",
        after: "On-demand"
      }
    ],

    leadership: {
      responsibilities: [
        "Defined platform architecture",
        "Established engineering standards",
        "Reviewed RFCs",
        "Mentored engineers",
        "Drove cross-team adoption"
      ]
    },

    lessonsLearned: [
      "Organizational boundaries matter more than technical boundaries.",
      "Dependency governance is critical in federated architectures.",
      "Platform ownership determines long-term success."
    ],

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Module Federation",
      "Webpack",
      "GitHub Actions",
      "Docker"
    ]
  }
]

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