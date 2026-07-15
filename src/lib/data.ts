// This file contains static data for the portfolio. It is purely static data with no React components
// or icon imports, allowing for optimal tree shaking and preventing transitively bloating layouts.

export const links = [
  { name: "Home", hash: "/" },
  { name: "About", hash: "/#about" },
  { name: "Expertise", hash: "/#expertise" },
  { name: "Experience", hash: "/#experience" },
  { name: "Projects", hash: "/#projects" },
  { name: "Achievements", hash: "/#achievements" },
  { name: "Contact", hash: "/#contact" },
] as const;

export const experiencesData = [
  {
    title: "Associate Principal Engineer",
    company: "Aptos India Pvt. Ltd.",
    location: "Bangalore, India",
    duration: "May 2023 – Present",
    icon: "cpu",

    roleOverview:
      "Leading frontend platform architecture for enterprise retail commerce products by defining platform strategy, engineering standards, and scalable application architecture across multiple autonomous engineering organizations.",

    organizationScale: {
      domain: "Enterprise Retail Commerce",
      engineeringSquads: "10+",
      products: "Multiple Retail Platforms",
      architectureScope: [
        "Frontend Platform Architecture",
        "Micro-Frontend Platform",
        "Enterprise Design System",
        "Performance Engineering",
        "Developer Experience",
        "Architecture Governance",
      ],
    },

    architectureLeadership: [
      "Architected a federated Micro-Frontend Platform enabling 10+ engineering squads to independently develop, deploy, and release applications while eliminating centralized release bottlenecks.",
      "Defined the enterprise frontend reference architecture covering module boundaries, rendering strategies, routing, state management, API integration, caching, observability, and platform governance.",
      "Designed and scaled an enterprise Design System achieving 95%+ component reuse through token-driven theming, accessibility standards, and shared UI governance.",
      "Partnered with backend architects to redesign API contracts, reducing payload sizes by 60% while improving frontend resilience and long-term maintainability.",
    ],

    strategicInitiatives: [
      "Established platform engineering standards for CI/CD, quality gates, automated testing, release governance, and developer tooling.",
      "Led Core Web Vitals optimization initiatives reducing P95 page latency by 30% (2.5s → 1.7s) through rendering optimization, code splitting, caching, and bundle optimization.",
      "Introduced architecture governance through RFC reviews, reusable architectural patterns, and platform documentation.",
      "Standardized frontend engineering practices across product teams, improving consistency, maintainability, and long-term scalability.",
    ],

    engineeringImpact: [
      "Enabled fully independent deployments across 10+ engineering squads.",
      "Reduced engineering feedback cycles by 40% through standardized developer workflows.",
      "Achieved 95%+ shared component adoption across enterprise applications.",
      "Reduced frontend integration complexity through platform standardization.",
      "Improved platform scalability while minimizing release coordination overhead.",
    ],

    businessImpact: [
      "Accelerated enterprise product delivery velocity.",
      "Improved customer experience through faster page performance.",
      "Reduced long-term engineering maintenance cost.",
      "Established a scalable frontend platform supporting future business growth.",
    ],

    leadership: [
      "Platform roadmap ownership",
      "Cross-functional architecture reviews",
      "Engineering mentoring",
      "Technical governance",
      "Platform adoption strategy",
    ],

    metrics: {
      engineeringSquads: "10+",
      componentReuse: "95%+",
      apiPayloadReduction: "60%",
      p95LatencyImprovement: "30%",
      developerProductivityGain: "40%",
    },

    technologyFootprint: [
      "React",
      "Next.js",
      "TypeScript",
      "Webpack Module Federation",
      "SSR",
      "Enterprise Design Systems",
      "Core Web Vitals",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  {
    title: "Tech Lead",
    company: "Valuebound Consulting Services (Client: Airmeet)",
    location: "Bangalore, India",
    duration: "Jul 2021 – May 2023",
    icon: "network",

    roleOverview:
      "Owned frontend architecture for a globally distributed virtual events platform serving millions of users by driving GraphQL platform evolution, rendering performance, and frontend architecture modernization.",

    organizationScale: {
      domain: "Virtual Events Platform",
      scale: "Millions of Users",
      architectureScope: [
        "Frontend Architecture",
        "GraphQL Platform",
        "Rendering Strategy",
        "Performance Engineering",
        "Design System",
      ],
    },

    architectureLeadership: [
      "Defined the frontend architecture roadmap supporting large-scale webinar and virtual event products.",
      "Led migration to a schema-federated GraphQL architecture reducing over-fetching and network payloads by 60%.",
      "Designed a multi-layer caching strategy using Apollo Cache, Incremental Static Regeneration (ISR), and CloudFront Edge caching.",
      "Built and governed a shared UI component platform standardizing frontend development across engineering teams.",
    ],

    strategicInitiatives: [
      "Established frontend performance budgets and monitoring for critical customer journeys.",
      "Improved rendering performance through SSR optimization, route prefetching, caching, and bundle optimization.",
      "Defined reusable frontend engineering patterns adopted across multiple product teams.",
    ],

    engineeringImpact: [
      "Reduced P95 dashboard load time by 45%.",
      "Improved frontend scalability for high-concurrency virtual events.",
      "Accelerated feature delivery through reusable platform components.",
      "Mentored 12+ engineers on scalable frontend architecture and performance engineering.",
    ],

    businessImpact: [
      "Improved customer experience during live events.",
      "Enhanced platform scalability under peak traffic.",
      "Accelerated engineering delivery through standardization.",
      "Established long-term frontend architecture practices.",
    ],

    leadership: [
      "Architecture ownership",
      "Technical mentoring",
      "Cross-team collaboration",
      "Platform standardization",
      "Engineering best practices",
    ],

    metrics: {
      users: "Millions",
      payloadReduction: "60%",
      dashboardPerformance: "45%",
      engineersMentored: "12+",
    },

    technologyFootprint: [
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

    roleOverview:
      "Engineered high-performance OTT streaming experiences focused on rendering optimization, streaming performance, and aggressive frontend performance budgets.",

    organizationScale: {
      domain: "OTT Streaming",
      architectureScope: [
        "Performance Engineering",
        "Rendering Optimization",
        "Frontend Architecture",
      ],
    },

    architectureLeadership: [
      "Optimized application rendering pipeline using SSR, route-based code splitting, lazy loading, and dependency optimization.",
      "Reduced JavaScript bundle size by 35% through build optimization and dependency governance.",
      "Improved Time to First Byte (TTFB) to approximately 300ms by tuning server-side rendering and CDN edge delivery.",
    ],

    strategicInitiatives: [
      "Implemented frontend performance budgets for critical user journeys.",
      "Enhanced rendering efficiency through browser-level optimization techniques.",
    ],

    engineeringImpact: [
      "Improved playback startup experience.",
      "Reduced application load latency.",
      "Enhanced streaming responsiveness across supported devices.",
    ],

    businessImpact: [
      "Improved customer engagement.",
      "Delivered faster streaming experiences.",
      "Enhanced overall application responsiveness.",
    ],

    metrics: {
      bundleReduction: "35%",
      ttfb: "~300ms",
    },

    technologyFootprint: [
      "React",
      "Next.js",
      "TypeScript",
      "Webpack",
      "CloudFront",
      "SSR",
      "Core Web Vitals",
    ],
  },
  {
    title: "Software Engineer",
    company: "Creatise",
    location: "Bangalore, India",
    duration: "Jun 2016 – Feb 2021",
    icon: "layers",

    roleOverview:
      "Delivered scalable frontend solutions across e-commerce and media platforms while establishing expertise in reusable architecture, rendering performance, and frontend engineering best practices.",

    organizationScale: {
      domain: "E-commerce & Media",
      architectureScope: [
        "Frontend Engineering",
        "Reusable Component Architecture",
        "Performance Optimization",
      ],
    },

    architectureLeadership: [
      "Designed reusable UI architecture accelerating delivery across multiple client engagements.",
      "Optimized rendering performance through server-side rendering, browser caching, image optimization, and lazy loading.",
      "Established reusable component patterns reducing duplicate engineering effort across projects.",
    ],

    strategicInitiatives: [
      "Improved frontend architecture consistency through reusable design patterns.",
      "Introduced frontend optimization techniques improving rendering efficiency across applications.",
    ],

    engineeringImpact: [
      "Improved page performance across multiple customer-facing applications.",
      "Reduced feature development effort by approximately 20% through reusable component architecture.",
      "Created reusable engineering foundations adopted across multiple client projects.",
    ],

    businessImpact: [
      "Improved customer experience.",
      "Accelerated feature delivery.",
      "Reduced long-term development effort.",
    ],

    metrics: {
      deliveryAcceleration: "20%",
    },

    technologyFootprint: [
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
    id: "store-inventory-management-fulfillment",

    featured: true,

    title: "Store Inventory Management & Fulfillment",

    subtitle: "Aptos Retail",

    category: "Enterprise Mobile Platform",

    role: "Associate Principal Engineer",

    duration: "May 2023 – Present",

    executiveSummary:
      "Architecting the next-generation Store Inventory Management & Fulfillment mobile platform for Aptos Retail, enabling retailers to manage inventory, fulfillment, receiving, transfers, cycle counts, returns, and store operations through a modular React Native micro-frontend architecture. The platform integrates seamlessly with Order Management, Merchandising, and enterprise retail services through an event-driven integration layer built on AWS.",

    businessContext: {
      domain: "Enterprise Retail Store Operations",

      product:
        "Store Inventory Management & Fulfillment (SIMF)",

      users: [
        "Store Associates",
        "Store Managers",
        "Operations Teams",
        "Inventory Teams",
        "Fulfillment Teams"
      ],

      businessCapabilities: [
        "Inventory Lookup",
        "Receiving",
        "Transfers",
        "Cycle Counts",
        "Stock Adjustments",
        "Order Picking",
        "Packing",
        "Store Fulfillment",
        "Returns",
        "Task Management"
      ],

      integrations: [
        "Order Management System (OMS)",
        "Merchandising",
        "Enterprise Identity",
        "Notification Services"
      ],

      challenge:
        "Modern retail operations require rapid feature delivery across multiple business domains while maintaining high availability, offline capabilities, and seamless integration with enterprise retail systems."
    },

    problemStatement:
      "The platform needed to support independently evolving business capabilities without introducing release dependencies, while providing a consistent user experience and resilient integrations with enterprise backend systems.",

    objectives: [
      "Enable autonomous feature ownership",
      "Standardize enterprise mobile architecture",
      "Support independent feature deployments",
      "Improve developer productivity",
      "Provide resilient backend integrations",
      "Support offline-first retail workflows",
      "Increase long-term platform scalability"
    ],

    architecture: {
      overview:
        "Designed a modular React Native micro-frontend platform where every business capability is independently owned and developed as an isolated feature module. A lightweight application shell provides navigation, authentication, feature flags, analytics, shared UI components, and platform services. Enterprise integrations are abstracted through an event-driven integration layer using AWS EventBridge and Amazon SQS, decoupling mobile applications from backend systems.",

      keyComponents: [
        "React Native Application Shell",
        "Micro-Frontend Feature Modules",
        "Shared Platform SDK",
        "Enterprise Design System",
        "Feature Flag Framework",
        "Authentication Layer",
        "AWS EventBridge",
        "Amazon SQS",
        "Integration Services",
        "OMS",
        "Merchandising Services"
      ],

      dataFlow: [
        "Store Associate → Mobile Shell",
        "Shell → Feature Module",
        "Feature Module → Integration Service",
        "Integration Service → EventBridge",
        "EventBridge → SQS",
        "Backend Services → OMS / Merchandising",
        "Domain Events → Mobile Synchronization"
      ],

      designPatterns: [
        "Micro-Frontend Architecture",
        "Domain-Driven Design",
        "Backend for Frontend",
        "Event-Driven Architecture",
        "Publisher / Subscriber",
        "CQRS",
        "Shared Kernel",
        "Offline-First Synchronization"
      ]
    },

    engineeringHighlights: [
      "Architected a modular React Native platform enabling independent development of retail business capabilities.",
      "Defined frontend platform standards covering module boundaries, navigation, dependency governance, state isolation, and shared services.",
      "Designed a reusable platform SDK for authentication, networking, analytics, feature flags, offline storage, and observability.",
      "Established architecture governance through reusable patterns, design reviews, and engineering standards.",
      "Partnered with backend platform teams to design scalable event-driven integration patterns across enterprise retail systems."
    ],

    architectureDecisions: [
      {
        decision: "Domain-Oriented Micro-Frontend Architecture",

        rationale:
          "Allow each retail capability to evolve independently without introducing cross-team deployment dependencies.",

        tradeoffs: [
          "Additional platform governance",
          "Shared dependency management",
          "Runtime orchestration complexity"
        ],

        alternatives: [
          "Monolithic React Native Application",
          "Multiple Independent Mobile Applications"
        ]
      },

      {
        decision: "Event-Driven Enterprise Integrations",

        rationale:
          "Reduce coupling between mobile clients and enterprise backend systems while improving resilience and scalability.",

        tradeoffs: [
          "Eventual consistency",
          "Distributed tracing complexity",
          "Operational observability"
        ],

        alternatives: [
          "Direct REST Integrations",
          "Synchronous Service Orchestration"
        ]
      }
    ],

    technicalChallenges: [
      {
        challenge:
          "Maintaining architectural consistency across independently owned business modules.",

        solution:
          "Established shared platform contracts, design system governance, navigation standards, and platform SDKs.",

        outcome:
          "Consistent user experience with autonomous engineering teams."
      },

      {
        challenge:
          "Supporting enterprise integrations across OMS and Merchandising platforms.",

        solution:
          "Designed asynchronous integration services leveraging AWS EventBridge and Amazon SQS.",

        outcome:
          "Improved scalability, resilience, and reduced system coupling."
      },

      {
        challenge:
          "Ensuring application reliability in retail environments with intermittent connectivity.",

        solution:
          "Implemented offline-first synchronization, local persistence, retry strategies, and background synchronization.",

        outcome:
          "Reliable store operations even during network interruptions."
      }
    ],

    reliability: {
      resiliency: [
        "Offline-First Architecture",
        "Graceful Degradation",
        "Retry Policies",
        "Dead Letter Queues",
        "Circuit Breakers",
        "Event Replay"
      ],

      observability: [
        "Distributed Tracing",
        "Application Telemetry",
        "CloudWatch Monitoring",
        "Crash Analytics",
        "Business Event Metrics"
      ],

      deployment: [
        "Independent CI/CD Pipelines",
        "Feature Flags",
        "Blue/Green Releases",
        "Canary Deployments"
      ]
    },

    technologies: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "React Navigation",
      "AWS EventBridge",
      "Amazon SQS",
      "AWS Lambda",
      "API Gateway",
      "CloudWatch",
      "GitHub Actions",
      "Docker"
    ],

    businessImpact: [
      "Enabled domain-oriented engineering ownership across retail capabilities.",
      "Standardized enterprise mobile architecture for future product expansion.",
      "Reduced coupling between mobile applications and enterprise backend systems.",
      "Improved maintainability through reusable platform services.",
      "Accelerated delivery of new retail capabilities through modular architecture."
    ],

    lessonsLearned: [
      "Business capabilities should define architectural boundaries.",
      "Platform engineering is essential for sustainable micro-frontend ecosystems.",
      "Shared services should remain minimal to avoid distributed monoliths.",
      "Event-driven integrations provide significantly better scalability than tightly coupled synchronous APIs.",
      "Offline-first architecture is a fundamental requirement for enterprise retail applications."
    ]
  },
  {
    id: "enterprise-integration-platform",

    featured: true,

    title: "Enterprise Integration & Automation Platform",

    subtitle: "Airmeet",

    category: "Platform Engineering",

    role: "Senior Software Engineer",

    duration: "Jul 2021 – May 2023",

    executiveSummary:
      "Architected and led the development of Airmeet's Enterprise Integration & Automation Platform, enabling seamless connectivity between Airmeet and enterprise CRM, marketing automation, analytics, and business applications. Designed a reusable connector framework and webhook-driven integration architecture that standardized third-party integrations, accelerated enterprise onboarding, and reduced engineering duplication across product teams.",

    businessContext: {
      domain: "Enterprise Virtual Events Platform",

      product: "Enterprise Integration Platform",

      users: [
        "Enterprise Customers",
        "Marketing Teams",
        "Sales Teams",
        "Customer Success",
        "Product Engineering"
      ],

      supportedPlatforms: [
        "Salesforce CRM",
        "Microsoft Dynamics 365",
        "HubSpot",
        "Google Analytics",
        "Google Tag Manager",
        "Facebook Pixel",
        "Marketo",
        "Mailchimp",
        "Zapier",
        "Slack",
        "Eventbrite",
        "Custom Webhooks"
      ],

      challenge:
        "Enterprise customers relied on Airmeet to seamlessly integrate with their existing CRM, analytics, and marketing ecosystems. Individual product teams were implementing integrations independently, resulting in duplicated logic, inconsistent APIs, and increasing maintenance complexity."
    },

    problemStatement:
      "The platform required a scalable integration architecture capable of supporting multiple enterprise providers while maintaining consistent authentication, payload transformation, webhook delivery, and operational reliability.",

    objectives: [
      "Standardize enterprise integrations",
      "Accelerate connector development",
      "Reduce engineering duplication",
      "Enable reusable integration architecture",
      "Simplify enterprise onboarding",
      "Improve reliability and observability"
    ],

    architecture: {
      overview:
        "Designed a centralized webhook-driven integration platform exposing reusable connector abstractions for enterprise systems. Airmeet business events were published through configurable webhooks where provider-specific connectors transformed and synchronized data with CRM, analytics, marketing automation, and external business applications. The platform standardized authentication, payload transformation, retry policies, and delivery mechanisms while abstracting third-party implementation details behind a common connector framework.",

      keyComponents: [
        "Integration Gateway",
        "Connector Framework",
        "Webhook Engine",
        "Authentication Manager",
        "Payload Transformation Layer",
        "Configuration Service",
        "Retry Engine",
        "Monitoring Dashboard"
      ],

      dataFlow: [
        "Airmeet Business Event",
        "Webhook Dispatcher",
        "Connector Framework",
        "Payload Transformation",
        "Enterprise Platform",
        "Delivery Monitoring & Retry"
      ],

      designPatterns: [
        "Webhook Architecture",
        "Adapter Pattern",
        "Strategy Pattern",
        "Factory Pattern",
        "Dependency Injection",
        "Template Method"
      ]
    },

    engineeringHighlights: [
      "Architected a reusable connector framework supporting CRM, analytics, marketing automation, and business application integrations.",
      "Designed a configurable webhook platform enabling reliable event delivery to external enterprise systems.",
      "Standardized authentication, payload transformation, connector lifecycle management, and error handling.",
      "Built customer-configurable webhook subscriptions supporting custom business workflows.",
      "Defined reusable integration contracts that significantly reduced the effort required to onboard new integration providers."
    ],

    architectureDecisions: [
      {
        decision: "Reusable Connector Framework",

        rationale:
          "Abstract provider-specific implementations behind standardized contracts to simplify future integrations.",

        tradeoffs: [
          "Additional abstraction layer",
          "Connector lifecycle governance",
          "Framework maintenance"
        ],

        alternatives: [
          "Direct API Integrations",
          "Product-specific Connector Implementations"
        ]
      },

      {
        decision: "Webhook-Driven Integration Architecture",

        rationale:
          "Provide loosely coupled, near real-time synchronization between Airmeet and external enterprise systems.",

        tradeoffs: [
          "Webhook delivery monitoring",
          "Retry handling",
          "Provider-specific payload transformations"
        ],

        alternatives: [
          "Scheduled Batch Synchronization",
          "Synchronous REST APIs"
        ]
      }
    ],

    technicalChallenges: [
      {
        challenge:
          "Supporting multiple authentication mechanisms across enterprise platforms.",

        solution:
          "Built a pluggable authentication framework supporting OAuth 2.0, API Keys, JWT, and provider-specific authentication flows.",

        outcome:
          "Simplified onboarding of new enterprise integrations."
      },

      {
        challenge:
          "Maintaining consistent payload structures across heterogeneous third-party APIs.",

        solution:
          "Designed a canonical event model with provider-specific transformation adapters.",

        outcome:
          "Reduced connector complexity while improving maintainability."
      },

      {
        challenge:
          "Handling webhook delivery failures and external API availability.",

        solution:
          "Implemented configurable retry policies, idempotent processing, webhook delivery tracking, and operational monitoring.",

        outcome:
          "Improved delivery reliability without impacting core Airmeet workflows."
      }
    ],

    reliability: {
      resiliency: [
        "Webhook Retry Policies",
        "Idempotent Event Processing",
        "Delivery Tracking",
        "Graceful Failure Handling",
        "Configurable Retry Strategies"
      ],

      observability: [
        "Webhook Delivery Metrics",
        "Integration Health Dashboard",
        "Connector Performance Monitoring",
        "Application Logging",
        "Operational Alerts"
      ],

      deployment: [
        "Independent Connector Releases",
        "Feature Toggles",
        "Backward Compatible APIs",
        "Zero-Downtime Deployments"
      ]
    },

    technologies: [
      "Node.js",
      "TypeScript",
      "React JS",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Webhooks",
      "OAuth 2.0",
      "JWT",
      "Jest",
      "OpenAPI",
      "Swagger"
    ],

    businessImpact: [
      "Standardized enterprise integration architecture across the Airmeet platform.",
      "Reduced engineering effort through reusable connector infrastructure.",
      "Accelerated onboarding of enterprise customers and third-party integrations.",
      "Simplified maintenance through standardized integration contracts.",
      "Enabled rapid expansion of Airmeet's enterprise integration ecosystem."
    ],

    lessonsLearned: [
      "Reusable connector frameworks provide significantly greater engineering leverage than provider-specific implementations.",
      "Webhook-driven architectures enable loosely coupled enterprise integrations while remaining simple to extend.",
      "Canonical event models reduce long-term maintenance complexity.",
      "Observability and delivery tracking are fundamental requirements for enterprise integration platforms.",
      "Platform engineering creates sustainable scalability by enabling product teams to build on shared infrastructure rather than duplicating integration logic."
    ]
  }
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
    icon: "blocks",
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