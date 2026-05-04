# Personal Portfolio Website Design Specification

## Overview
A professional, modern, and static Single Page Application (SPA) designed to showcase personal data, work experience, skills, and an application portfolio. The site is optimized for deployment on GitHub Pages.

## Architecture
- **Framework**: React.js
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Hosting**: GitHub Pages
- **Data Management**: Static JSON file (`src/data/portfolioData.json`)

## Data Flow
All dynamic content is cleanly separated from the UI components. The components will import and map over data from `portfolioData.json`. This ensures easy maintenance without needing to touch the React code.

### JSON Schema Structure
- `personal`: Name, role, contact info, about me, social links.
- `experience`: Array of objects (company, role, start/end dates, description, achievements).
- `skills`: Array of categories, each containing an array of skill names.
- `portfolio`: Array of objects (title, description, image url, tech stack array, live link, repo link).

## Component Structure & Layout
The application is a Single Page Application with smooth scrolling between sections.

### 1. Navigation (Navbar)
- Sticky top navigation.
- Logo/Name on the left.
- Links to sections on the right (About, Experience, Skills, Portfolio).

### 2. Hero Section
- Professional greeting.
- Name and current primary role.
- Professional profile image placeholder.
- Primary CTA: "Download CV" or "View Portfolio".
- Secondary CTA: "Contact Me" (mailto link or anchor to footer).

### 3. About Section
- Brief professional summary highlighting core competencies and career goals.

### 4. Experience Section (Timeline)
- Vertical timeline layout.
- Each item displays:
  - Role Title
  - Company Name
  - Duration
  - Bulleted list of responsibilities/achievements.

### 5. Skills Section
- Categorized layout (e.g., Frontend, Backend, Tools).
- Each category displays a visual grid of skill tags.

### 6. Portfolio Section
- Grid layout of project cards.
- Each card contains:
  - Project thumbnail/screenshot.
  - Project Title.
  - Short description.
  - Tech stack tags.
  - Action links (GitHub/Live demo).

### 7. Footer
- Copyright notice.
- Links to LinkedIn, GitHub, Email.

## Visual Design
- **Theme**: Professional & Corporate.
- **Color Palette**: Deep Blue/Slate for primary brand colors, crisp white/light gray backgrounds for sections to maintain high contrast and readability.
- **Typography**: `Inter` or `Roboto` for clean, modern readability.
- **Interactions**:
  - Smooth scrolling for internal links.
  - Subtle hover states on buttons and project cards (slight elevation/shadow increase).
