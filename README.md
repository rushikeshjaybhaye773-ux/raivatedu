# Raivatedu — Premium Technical Education & Cohort Learning Platform

Raivatedu is a modern, production-quality education and cohort-learning web application built with **Next.js (App Router)**, **React 19**, and **Tailwind CSS**. Designed specifically for ambitious engineering and product talent, Raivatedu bridges the gap between academic theory and high-growth industry standards through hands-on capstone curricula, expert faculty mentorship, and verifiable digital credentials.

---

## 🌟 Key Features

### 1. Home Page (`/`)
- **Sticky Navigation Bar:** Custom Raivatedu wordmark logo, responsive navigation links, sticky glassmorphism backdrop blur on scroll, and accessible mobile drawer menu.
- **Hero Section with Live Course Search:** Interactive course search input that immediately filters and navigates to the `/courses` route with URL query parameters synchronized.
- **Dual CTA & Trust Signals:** Quick pathways to explore courses or meet faculty, complemented by verifiable learning badges (100% Project-Based, Live Faculty Q&A, Money-Back Guarantee).
- **Curriculum Disciplines:** Categorized track cards (Web Development, Programming, Data Science, AI, UI/UX Design, Business & Management) linking directly to pre-filtered course catalogs.
- **Featured Bootcamps:** Reusable course cards displaying price in INR, original strike-through prices, savings percentages, duration, student counts, and illustrative demo ratings.
- **Faculty & Leadership Grid:** Mentor cards highlighting industry backgrounds (Ex-Razorpay, Ex-Oracle, Ex-Microsoft, etc.), teaching specializations, and student impact metrics.
- **Cohort Success Metrics:** Illustrative impact counters (25,000+ Enrolled Learners, 120+ Industry Mentors, 94% Completion Rate, 4.9/5 Rating).
- **Alumni Reviews & Testimonials:** Student career transition stories and ratings.
- **Keyboard-Accessible FAQ Accordion:** Accessible FAQ component with ARIA attributes (`aria-expanded`, `aria-controls`), smooth expand/collapse transitions, and full keyboard navigation.
- **High-Conversion Footer CTA & Comprehensive Footer:** Site map, curriculum track directory, illustrative contact details, and social channels.

### 2. Courses Discovery & Catalog (`/courses`)
- **Multi-Faceted Search & Filtering:** Filter simultaneously by text keyword, category track, and skill level (Beginner, Intermediate, Advanced).
- **URL Parameter Synchronization:** Keeps search queries and selected categories in sync with browser query strings (`?search=...&category=...&level=...&sort=...`), enabling shareable URLs and seamless navigation from the homepage.
- **Sorting Controls:** Sort courses by *Featured*, *Price: Low to High*, *Price: High to Low*, and *Highest Rating*.
- **Live Counter & Filter State:** Displays real-time matching result count with a one-click **"Reset All Filters"** control.
- **Helpful Empty State:** Clean, user-friendly empty state screen when no courses match search parameters, with quick filter reset actions.

### 3. Dynamic Course Detail (`/courses/[id]`)
- **Static Generation (SSG):** Pre-rendered using `generateStaticParams()` for optimal performance and sub-second load times.
- **Breadcrumb Navigation:** Accessible hierarchical navigation (`Home / Courses / Course Title`).
- **Comprehensive Course Overview:** Detailed curriculum descriptions, badge tags, and hero media.
- **What You Will Learn:** Grid of actionable, real-world learning outcomes.
- **Interactive Syllabus Accordion:** Expandable curriculum modules detailing lectures, topics, and duration with "Expand All" and "Collapse All" controls.
- **Instructor Profile Box:** Faculty credentials, company pedigree, biography, and student ratings.
- **Prerequisites & Target Audience:** Clear prerequisites and learner profiles.
- **Student Reviews Section:** Real-world feedback breakdown with demo rating disclosures.
- **Sticky Tuition & Enrollment Card:** Desktop sticky card with pricing breakdown, money-back guarantee, and schedule details; companion floating mobile quick-enrollment bar.
- **Frontend Enrollment Modal:** Interactive demo enrollment workflow with complete client-side form validation (name, email, phone, learning goals) and an instant simulated cohort confirmation state.
- **Related Courses:** Suggested alternative tracks based on category or skill level.
- **Custom 404 Route (`/not-found`):** Graceful recovery for invalid course slugs.

### 4. Accessibility & User Experience
- Semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
- Exactly one `<h1>` per page with a logical heading hierarchy (`<h2>` to `<h4>`).
- Strict contrast ratio adhering to WCAG AA (≥ 4.5:1 for all text).
- Visible focus rings (`:focus-visible`) for keyboard navigation.
- Respects user preference for reduced motion (`prefers-reduced-motion`).
- Dark Mode toggle with persistent `localStorage` preference and smooth color transitions.

---

## 🎨 Design System & Palette

| Token | Hex Code | Purpose & Semantic Role |
| :--- | :--- | :--- |
| **Primary Indigo** | `#4338CA` | Inspires focus, depth, and academic credibility. |
| **Dark Indigo** | `#312E81` | High-contrast headers, dark surface accents, and borders. |
| **Sunny Yellow Accent** | `#FACC15` | Brings youthful warmth, optimism, and high-visibility CTAs. |
| **Soft Off-White Background** | `#FAFAF5` | Warm, non-fatiguing reading canvas that enhances long-form readability. |
| **Card White** | `#FFFFFF` | Crisp contrast surface for cards and interactive inputs. |
| **Dark Theme Background** | `#090D16` | Deep neutral background for dark mode. |
| **Dark Theme Card** | `#111827` | Slate-900 surface for cards in dark mode. |

### Typography
- **Primary Typeface:** `Plus Jakarta Sans` via `next/font/google`.
- **Reasoning:** Geometric clarity, contemporary aesthetic, high x-height for readability across desktop and mobile screens, and zero layout shift via Next.js font optimization.

---

## 🛠️ Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (latest stable with App Router)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/) (plus inline SVGs for social platforms)
- **Fonts:** `next/font/google` (`Plus_Jakarta_Sans`)
- **Images:** `next/image` with remote patterns configured for Unsplash CDN
- **State Management:** URL Query Parameters (`useSearchParams`) + React State
- **Linting:** ESLint 9 with Next.js Core Web Vitals config

---

## 📁 Project Structure

```
raivatedu/
├── app/
│   ├── layout.js              # Root layout with font, metadata, Navbar, Footer
│   ├── page.js                # Home page (8 distinct sections)
│   ├── globals.css            # Tailwind directives, color tokens, dark mode
│   ├── not-found.js           # Custom 404 page for invalid routes
│   └── courses/
│       ├── page.js            # Course discovery & catalog page
│       └── [id]/
│           └── page.js        # Dynamic course detail page (SSG)
├── components/
│   ├── Navbar.jsx             # Sticky navigation with mobile drawer & theme toggle
│   ├── Footer.jsx             # Comprehensive footer with links and social icons
│   ├── Button.jsx             # Reusable accessible button with variants
│   ├── SectionHeading.jsx     # Reusable section heading with badge & highlight
│   ├── CourseCard.jsx         # Reusable course card component
│   ├── CategoryCard.jsx       # Category card with icon and count
│   ├── MentorCard.jsx         # Faculty & mentor card
│   ├── FAQAccordion.jsx       # Keyboard-operable FAQ accordion
│   ├── HeroSearch.jsx         # Hero search input with popular query tags
│   ├── CoursesExplorer.jsx    # Client-side filtering, search, and sorting
│   ├── CourseDetailClient.jsx # Syllabus accordion, sticky enrollment, reviews
│   ├── EnrollModal.jsx        # Demo enrollment dialog with form validation
│   └── ThemeToggle.jsx        # Light / Dark mode toggle with persistent storage
├── data/
│   ├── courses.js             # Shared courses catalog and curriculum tracks
│   ├── mentors.js             # Mentor profiles, bios, and specializations
│   ├── testimonials.js        # Student transition stories and reviews
│   ├── faqs.js                # Frequently asked questions dataset
│   └── stats.js               # Illustrative impact numbers
├── public/                    # Static public assets
├── next.config.mjs            # Next.js config with Unsplash remote patterns
└── package.json
```

---

## 🚀 Getting Started (Local Development)

### Prerequisites
- **Node.js:** v18.18.0 or later (v20+ recommended)
- **npm:** v9.0.0 or later

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd raivatedu
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
To create an optimized production build:
```bash
npm run build
npm run start
```

### Linting
To run code quality and syntax checks:
```bash
npm run lint
```

---

## 🌐 Routes Overview

| Route | Description | Rendering Strategy |
| :--- | :--- | :--- |
| `/` | Landing page featuring Hero, Categories, Featured Courses, Mentors, Stats, Testimonials, FAQ, and Footer CTA. | Static (prerendered) |
| `/courses` | Searchable and filterable course catalog with category, level, and sort dropdowns synchronized with query parameters. | Dynamic / Client Suspended |
| `/courses/[id]` | Dynamic course detail route featuring syllabus accordion, mentor card, sticky tuition card, reviews, and interactive enrollment modal. | SSG (`generateStaticParams`) |
| `/courses/*` | Custom 404 error page displayed when an invalid course slug is requested. | Static |

---

## 📋 Assumptions & Demo Data Disclosures

1. **Frontend-Only Scope:** In accordance with the assignment brief, this is an exclusively client-side frontend project. No actual backend, external database, authentication provider, or payment gateway is integrated.
2. **Demo Data Identification:** All student statistics (e.g., 25,000+ students, 94% completion), mentor biographies, student reviews, and course ratings are illustrative demo content created solely for design evaluation purposes.
3. **Simulated Enrollment:** Clicking "Enroll Now" opens a client-side enrollment form with real-time field validation (Full Name, Email, Phone, Learning Goal). Submitting the form simulates a successful seat reservation and generates a unique test enrollment ID (`RAIVAT-XXXXXX`) with an explicit notice that no real charge occurred.
4. **Contact Details:** Email addresses, phone numbers, and physical office addresses listed in the footer and help sections are illustrative placeholders.

---

## 🔮 Future Improvements with Additional Time

1. **Course Video Preview Player:** Integrate a custom accessible video player modal allowing prospective students to sample the first lesson of Module 1.
2. **Student Dashboard & Progress Tracker:** Add a client-side localStorage-backed learner portal to track module completion percentages and quiz submissions.
3. **Curriculum Comparison View:** Build a side-by-side comparison matrix allowing learners to compare two similar engineering bootcamps (e.g. Next.js vs Python).
4. **Interactive Skill Quiz:** A 3-question career diagnostic tool recommending the best track (Web, AI, or Data Science) based on learner background.
5. **Localization (i18n):** Add multi-language support (English, Hindi, Marathi) for diverse learners across regions.

---

## 🚢 Deployment Instructions (Vercel)

This application is 100% prepared for zero-configuration deployment to **Vercel**:

1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import the repository.
4. Vercel will automatically detect **Next.js** and configure:
   - Framework Preset: `Next.js`
   - Build Command: `next build`
   - Output Directory: `.next`
5. Click **"Deploy"**. The site will build and be live in under 60 seconds with SSL enabled.

---

© 2026 Raivatedu. Crafted with pride for Meru Technosoft Frontend Internship Selection.
