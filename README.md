# Tarshith Bantupalli — Personal Developer Portfolio

A modern, responsive, and functional personal portfolio website designed and developed for **Tarshith Bantupalli**, a Computer Science Engineering undergraduate passionate about Python, web development, AI, and building practical technology solutions.

---

## 1. Project Overview
- **Student Developer:** Tarshith Bantupalli
- **Degree:** Bachelor of Technology in Computer Science & Engineering (Class of 2028)
- **Current Academic Standing:** CGPA 7.78 / 10
- **Location:** Visakhapatnam, Andhra Pradesh, India
- **Primary Focus:** Python Development, Modern Web Applications (React, Vite, JavaScript), AI Prototyping,Agentic AI Developer and Problem Solving.

---

## 2. Key Highlights & Features
- **Modern Dark Aesthetic:** Deep charcoal surfaces, electric blue/indigo accents, and high-contrast typography designed specifically for developer portfolios.
- **Interactive Navigation:** Smooth section scrolling, active scrollspy tracking, sticky glassmorphic navigation bar, and accessible mobile drawer.
- **Developer Hero Terminal:** Live code window highlighting background, technical interests, and student achievements.
- **Featured Projects Showcase:** Interactive cards for **CareRoute**, **AI-Powered Railway Block Planning**, **Smart Business Assistant for MSMEs**, and **Code Intelligence Agent**, with architectural modal breakdowns and direct GitHub repository links.
- **Accurate Academic & Hackathon Timelines:** Factual documentation of participation in the **Smart India Hackathon (SIH)**, AI & Vibe Coding Challenge, MSME Innovation showcase, and campus leadership roles.
- **ATS-Ready Web Resume:** Integrated printable resume modal with instant PDF print trigger and raw text/markdown export.
- **Verified Contact Integration:** Form with client-side validation, direct email copy tool, and honest mailto launcher.
- **SEO & Social Optimization:** Pre-configured OpenGraph tags, Twitter cards, and Schema.org structured data (JSON-LD `Person` schema).

---

## 3. Technology Stack
- **Frontend Framework:** React 19 + TypeScript
- **Bundler & Build Tool:** Vite
- **Styling:** Tailwind CSS (Modern utility classes with custom dark developer theme)
- **Icons:** `lucide-react`
- **Typography:** Inter & JetBrains Mono (via Google Fonts)

---

## 4. Landing Page Architecture & Sections
The page follows a clear, cohesive storytelling flow:
1. **Navbar:** Sticky header with logo "TB", desktop links, mobile hamburger menu, resume CTA, and quick "Let's Connect" button.
2. **Hero:** Introduction, supporting headline, location, CGPA badge, primary project CTA, resume download, and interactive code card.
3. **About Me:** Core engineering statement, key focus badges, and academic statistics cards (7.78 CGPA, 2028 Graduation, 5+ Projects, Multiple Hackathons).
4. **Skills:** Categorized technical competencies (Programming, Web Dev, AI & Modern Dev, Developer Tools, Core CS Foundations) with authentic competency levels.
5. **Projects:** Detailed cards with architectural highlights, technology badges, live preview dialogs, and GitHub repo buttons.
6. **Experience & Participation:** Timeline highlighting Smart India Hackathon railway planning, CareRoute emergency health finding, and MSME business tools.
7. **Achievements:** Collegiate milestones including SIH participation, team leadership, technical demonstrations, and Articulation Club public speaking.
8. **Education:** Progression timeline displaying B.Tech in CSE (CGPA 7.78), Intermediate MPC (91.83%), and 10th Standard (72%).
9. **Certifications:** Verified coursework in Python programming, web development, and prompt engineering with credential notices.
10. **Resume CTA:** High-contrast dedicated section providing 1-click access to the web resume and PDF print tools.
11. **Contact:** Direct contact info (Email, Location, GitHub, LinkedIn), 1-click email copy, and validated contact form.
12. **Footer:** Copyright, development credits, and quick back-to-top button.

---

## 5. Folder Structure
```text
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Responsive sticky navigation & mobile drawer
│   │   ├── Hero.tsx            # Hero section, interactive terminal & CTAs
│   │   ├── About.tsx           # About me statement, traits & statistics cards
│   │   ├── Skills.tsx          # Categorized skills matrix with level badges
│   │   ├── Projects.tsx        # Projects showcase container & category filters
│   │   ├── ProjectCard.tsx     # Reusable individual project card
│   │   ├── ProjectModal.tsx    # Detailed architectural preview modal
│   │   ├── Experience.tsx      # Factual hackathon & participation timeline
│   │   ├── Achievements.tsx    # Leadership & academic milestones
│   │   ├── Education.tsx       # B.Tech, 12th, and 10th timeline
│   │   ├── Certifications.tsx  # Coursework & certifications
│   │   ├── ResumeCTA.tsx       # Dedicated Resume section
│   │   ├── ResumeModal.tsx     # Printable ATS resume & text exporter
│   │   ├── Contact.tsx         # Contact info & validated email form
│   │   └── Footer.tsx          # Credits, social links & back-to-top
│   ├── data/
│   │   └── portfolioData.ts    # Centralized factual data store
│   ├── types.ts                # TypeScript interfaces
│   ├── App.tsx                 # Root application composition
│   ├── main.tsx                # React DOM entry point
│   └── index.css               # Global Tailwind CSS & typography imports
├── index.html                  # HTML entry point with SEO & Schema.org JSON-LD
├── metadata.json               # Platform metadata configuration
├── package.json                # Dependencies and build scripts
├── tsconfig.json               # TypeScript compiler options
├── vite.config.ts              # Vite configuration
└── README.md                   # Project documentation
```

---

## 6. Installation & Local Development

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/tarshith2006/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```text
   http://localhost:3000
   ```

---

## 7. Production Build & Vercel Deployment

### Verify Build Locally
Run the production build:
```bash
npm run build
```
This outputs compiled, optimized static assets into the `dist/` directory.

### Deploying to Vercel
1. Push your code to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: complete personal portfolio landing page"
   git push origin main
   ```
2. Log in to [Vercel](https://vercel.com).
3. Click **Add New Project** and select your GitHub repository.
4. Vercel automatically detects Vite:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**. Your portfolio will be live with a global CDN and automatic HTTPS!

---

## 8. Customization Guide
- **Personal Details:** Edit `src/data/portfolioData.ts` to update email, links, or statistics.
- **Projects:** Add or edit project entries in `src/data/portfolioData.ts`.
- **Styling:** Colors and surfaces can be customized via Tailwind classes in `src/index.css` and individual component files.

---

## 9. Security & Privacy
- No API keys, secrets, or sensitive credentials are committed.
- Contact form uses client-side safe triggers (`mailto:`) and verified personal links.

---

## 10. License & Credits
- **Designed & Developed by:** Tarshith Bantupalli
- **License:** Open for personal portfolio usage and academic demonstration.
