# Portfolio

> A modern, high-performance developer portfolio built with Next.js, TypeScript, and Tailwind CSS to showcase projects, technical expertise, and engineering experience.

<p align="center">
  <a href="https://amitrazz.in"><strong>🌐 Live Website</strong></a>
</p>

---

## Overview

This repository contains the source code for my personal portfolio website.

The portfolio is designed with a focus on performance, accessibility, responsive design, and maintainability while providing a clean user experience across desktop and mobile devices.

Beyond showcasing projects and experience, it also serves as a production-ready example of modern frontend architecture using the latest React ecosystem.

---

## Features

* Responsive design
* Dark mode support
* Project showcase
* Experience timeline
* Skills overview
* Resume download
* Contact section
* SEO optimization
* Fast page loading
* Accessible UI
* Smooth animations

---

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

### UI

* Framer Motion
* Lucide Icons

### Tooling

* ESLint
* Prettier
* npm

### Deployment

* Vercel

---

# Architecture

```text
                    Browser
                        │
                        ▼
               Next.js Application
                        │
        ┌───────────────┼────────────────┐
        │               │                │
     Home Page      Projects        Experience
        │               │                │
        └───────────────┼────────────────┘
                        │
                 Shared Components
                        │
        ┌───────────────┼────────────────┐
        │               │                │
     Layout         UI Components     Utilities
                        │
                  Static Assets
```

The application follows a component-driven architecture with clear separation between pages, reusable UI components, and shared utilities.

---

# Engineering Principles

The project emphasizes:

* Component reusability
* Type safety
* Accessibility-first development
* Performance optimization
* Responsive layouts
* Modular architecture
* Clean folder structure
* Maintainable styling

---

# Project Structure

```text
src/
├── app/
├── components/
├── sections/
├── hooks/
├── lib/
├── utils/
├── styles/
└── assets/

public/
```

---

# Performance

The portfolio is optimized to provide an excellent user experience.

Optimizations include:

* Static site generation
* Route optimization
* Image optimization
* Code splitting
* Lazy loading
* Font optimization
* Optimized bundle size
* Lighthouse-friendly implementation

---

# Accessibility

The application follows accessibility best practices:

* Semantic HTML
* Keyboard navigation
* Focus management
* Sufficient color contrast
* Responsive typography
* Screen reader compatibility

---

# SEO

Implemented SEO improvements include:

* Metadata optimization
* Open Graph tags
* Twitter cards
* Canonical URLs
* Sitemap
* Robots.txt
* Structured metadata

---

# Local Development

Clone the repository:

```bash
git clone https://github.com/amitrazz/portfolio.git
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Visit:

```text
http://localhost:3000
```

---

# Deployment

The application is deployed on **Vercel** and supports continuous deployment from the main branch.

Typical deployment workflow:

1. Push changes to GitHub
2. Automatic build
3. Static optimization
4. Production deployment

---

# Roadmap

Future enhancements include:

* Blog with MDX
* Case studies
* Interactive architecture diagrams
* Project filtering
* Search
* Analytics dashboard
* Internationalization (i18n)
* Performance monitoring
* Automated Lighthouse audits

---

# Featured Projects

* Task Management Platform
* Collaborative Whiteboard
* Loom Clone
* Serverless Dashboard
* UI Kit
* Developer AI Assistant
* Local Development Stack

---

# License

This project is open source and available under the MIT License.

---

## Author

**Amit Raj**

Principal Software Engineer

* Portfolio: https://amitrazz.in
* GitHub: https://github.com/amitrazz
* LinkedIn: https://linkedin.com/in/amitrazz
