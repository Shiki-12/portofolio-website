# Futuristic Sci-Fi Portfolio

A complete, highly professional, and responsive personal portfolio website built with modern web technologies. The design features a cyberpunk, high-tech laboratory aesthetic with glassmorphism, neon glows, and dynamic animations.

## 🚀 Features

- **Cyberpunk Aesthetic**: True black backgrounds (`#050505`) with Electric Cyan (`#00FFFF`) and Neon Purple (`#B026FF`) accents and glows.
- **Dynamic Projects**: The "Projects" section automatically fetches and displays the 6 most recently updated public repositories from the GitHub API using Next.js Incremental Static Regeneration (ISR).
- **Interactive Animations**: Smooth scroll reveals, hover scaling, and staggered enter animations powered by Framer Motion.
- **Terminal UI**: An "About Me" section creatively styled as a macOS/Linux terminal with line-by-line command prompt execution animations.
- **Glassmorphism**: Floating navbar and project/service cards feature frosted glass effects (`backdrop-blur`).
- **Contact Form**: Integrated working contact form using Web3Forms.
- **Responsive**: Fully optimized for mobile, tablet, and desktop viewports.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (UI text) & [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (Headings & code)

## 📦 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shiki-12/portofolio-website.git
   cd portofolio-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   *or*
   ```bash
   yarn install
   ```

3. **Configure Contact Form (Optional):**
   The footer contact form uses Web3Forms. If you want to use your own email, update the `access_key` in `src/components/Footer.tsx` inside the `handleSubmit` function.

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   *or*
   ```bash
   yarn dev
   ```

5. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```text
├── src/
│   ├── app/
│   │   ├── globals.css      # Tailwind config & custom cyberpunk design variables
│   │   ├── layout.tsx       # Root layout, font definitions (Space Grotesk/JetBrains)
│   │   └── page.tsx         # Main async Server Component fetching GitHub data
│   │
│   └── components/
│       ├── About.tsx        # Terminal-style bio section
│       ├── Footer.tsx       # Contact form and social links
│       ├── Hero.tsx         # Typewriter animation & main CTA
│       ├── Navbar.tsx       # Floating glassmorphic header
│       ├── Projects.tsx     # Grid of GitHub repositories
│       ├── Services.tsx     # What I Do section
│       └── Skills.tsx       # Infinite scrolling tech stack marquee
│
├── public/                  # Static assets (images, resumes, etc.)
├── package.json
└── tailwind.config.ts / postcss.config.mjs
```

## 🌐 API Integrations

### GitHub API
The project dynamically fetches repository data using the GitHub REST API:
```typescript
fetch("https://api.github.com/users/shiki-12/repos?sort=updated&per_page=6", {
  next: { revalidate: 3600 } // Caches the response for 1 hour (ISR)
})
```

## 🎨 Theme & Colors
- **Background:** `#050505`
- **Ambient Overlays:** Radial gradients and transparent grid patterns.
- **Primary Glow / Accent:** `#00FFFF` (Cyan)
- **Secondary Glow / Accent:** `#B026FF` (Purple)

---
*Developed by Shiki. All systems operational.*
