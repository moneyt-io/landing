# Project Planning: MoneyT Landing Page

## 1. Introduction

This document centralizes the planning, technical structure, and information architecture for the development of the MoneyT landing page. It serves as a guide to ensure project coherence and organization.

## 2. Project Architecture

Defines the technical structure and conventions of the project.

    # Tech Stack
        - Framework: SvelteKit
        - Language: TypeScript
        - Styling: Tailwind CSS (with Forms and Typography plugins)
        - Svelte Preprocessor: VitePreprocess
        - SvelteKit Adapter: Adapter-Auto (initially)
        - Package Manager: npm

    # File and Folder Structure (Proposal)
        /
        ├── static/             # Static assets (favicon, images, fonts)
        │   └── images/
        ├── src/
        │   ├── lib/            # Components, utilities, stores, JS assets
        │   │   ├── components/ # Reusable UI components
        │   │   │   ├── layout/ # Structural components (Header, Footer, Nav)
        │   │   │   └── common/ # Other common components (Button, Card)
        │   │   ├── sections/   # Components for each landing page section (Hero, Features, Pricing)
        │   │   ├── styles/     # Additional CSS/SCSS files (if needed)
        │   │   ├── utils/      # Utility functions (helpers)
        │   │   └── assets/     # Assets imported via JS/TS (SVGs as components)
        │   ├── routes/         # SvelteKit route definitions
        │   │   ├── +layout.svelte # Main application layout
        │   │   ├── +page.svelte   # Main page (landing)
        │   │   └── (api)/      # API routes (optional, e.g., GitHub counter)
        │   ├── app.css         # Global Tailwind imports and base CSS
        │   ├── app.d.ts        # Global application types
        │   ├── app.html        # Main HTML template
        │   └── hooks.server.ts # Server-side hooks (optional)
        ├── .github/            # CI/CD Workflows (optional)
        ├── .vscode/            # VSCode specific settings (optional)
        ├── .gitignore
        ├── manifesto.md        # This file
        ├── package.json
        ├── svelte.config.js
        ├── tailwind.config.cjs # Tailwind configuration
        ├── tsconfig.json
        └── vite.config.ts

    # Design Considerations
        - CSS Framework: Tailwind CSS for all styling.
        - Inspiration: Adaptation of principles from Material Design, Ant Design, Duolingo.
        - Palette and Typography: To be defined (aim for trust/professionalism, readability).
        - Responsiveness: Mobile-first approach.

    # Deployment (Tentative)
        - Platform: To be defined (Vercel, Netlify, GitHub Pages, etc.).
        - Domain: `moneyt.io` or subdomain (`landing.moneyt.io`).

    # Tooling and Code Quality
        - Linting/Formatting: Svelte Check (Prettier optional).
        - Typing: Strict use of TypeScript.

## 3. Information Architecture (IA)

Defines the content structure and navigation of the page.

### 3.1. Main Navigation (Header)

*   MoneyT Logo
*   Main links (section anchors):
    *   Features (`#features`)
    *   Pricing (`#pricing`)
    *   Download (`#download`)  <!-- Added based on previous user input -->
    *   Community (`#community`)
    *   About (`#about`)
*   Primary CTA Button: "Get Started"
*   Secondary Button: "Sign In" (Link to: `https://app.moneyt.io`)
*   **(Optional) GitHub Link with Stars:** GitHub Icon + link to `https://github.com/moneyt-io` (Show star count ⭐) - *Positioned discreetly*.

### 3.2. Hero Section (`#hero`)

*   **Purpose:** Immediately capture attention and communicate the core value.
*   **Content:**
    *   **Main Headline (H1):** Clear and benefit-oriented (e.g., "Take Full Control of Your Personal Finances"). Reflect the manifesto's vision.
    *   **Sub-headline:** Brief description expanding on the headline (e.g., "The platform that simplifies financial management with advanced accounting tools.").
    *   **Visual:** Attractive image or app mockup (mobile/web).
    *   **Primary CTA:** Prominent button (e.g., "Download the App").
    *   **(Optional) Small Mention:** "Open Source" or "Build in Public" as an early differentiator.

### 3.3. Key Features Section (`#features`)

*   **Purpose:** Detail key functionalities and their benefits.
*   **Content:**
    *   Section Title (e.g., "Everything you need to manage your money").
    *   Grid or list with 3-5 highlighted features from the manifesto (e.g., Comprehensive Financial Management, Bank Synchronization, Smart Budgets, Multi-currency).
    *   For each feature:
        *   Representative icon.
        *   Short title.
        *   Brief description focused on user benefit.

### 3.4. About MoneyT Section (`#about`)

*   **Purpose:** Explain MoneyT's mission, vision, and core values.
*   **Content:**
    *   Title (e.g., "Our Mission: Simplify Your Finances").
    *   Paragraph about the **Vision:** Eliminate financial complexity, accessible advanced tools.
    *   Blocks or icons highlighting **Values:**
        *   **Transparency / Open Source:** We build in public. Open source code.
        *   **Privacy:** Your data, your control. Security as a priority.
        *   **Accessibility:** Intuitive design and globally adapted pricing.

### 3.5. Pricing Section (`#pricing`)

*   **Purpose:** Clearly present the different service tiers.
*   **Content:**
    *   Title (e.g., "Plans for Every Need").
    *   Comparison table or cards for the plans: Free, Cloud, Dev.
    *   Detail key features included in each plan.
    *   Clear prices ($0, $15/month, $150 one-time payment).
    *   Mention of dynamic pricing model/regional discounts.
    *   CTA button for each plan (e.g., "Start for Free", "Subscribe to Cloud", "Get Dev").

### 3.6. Community / Build in Public Section (`#community`)

*   **Purpose:** Invite users to join, participate, and follow the open development.
*   **Content:**
    *   Title (e.g., "Join Our Open Community").
    *   Brief text about the "Build in Public" philosophy and how to participate.
    *   Direct icons/links to platforms: GitHub, Discord, Reddit, LinkedIn.

### 3.7. Final CTA Section (`#cta-final`)

*   **Purpose:** Last chance for conversion.
*   **Content:**
    *   Catchy title (e.g., "Ready to transform your finances?").
    *   Primary CTA Button (repeated).
    *   **(Optional) Secondary Link:** "Explore Documentation" (Link to: `https://docs.moneyt.io`) or "View Source Code".

### 3.8. Footer

*   **Purpose:** Organized legal info, contact, and secondary navigation.
*   **Content:**
    *   MoneyT Logo (small).
    *   Copyright (© 2025 moneyt.io).
    *   **Legal/Info Links:**
        *   Privacy Policy
        *   Terms of Service
        *   Contact / Support
        *   Documentation (Link to: `https://docs.moneyt.io`)
    *   **Community/Social Links:**
        *   GitHub https://github.com/moneyt-io
        *   LinkedIn https://www.linkedin.com/company/moneyt-io
        *   Discord https://www.reddit.com/r/moneyt_io/
        *   Reddit https://discord.com/invite/zG4yNyym
