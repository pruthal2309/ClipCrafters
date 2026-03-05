# ClipCrafters — React Frontend

> Production-grade React 18 frontend for the ClipCrafters AI Video Editing Platform

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)

---

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup & Run](#setup--run)
- [Pages & Routes](#pages--routes)
- [Components](#components)
- [State Management](#state-management)
- [API Integration](#api-integration)
- [Design System](#design-system)
- [Environment Variables](#environment-variables)

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18 | UI framework |
| Vite | 5 | Build tool + dev proxy |
| TailwindCSS | 4 | Utility CSS |
| Framer Motion | 11 | All animations |
| React Router DOM | 6 | Client-side routing |
| Axios | 1 | HTTP client |
| Lucide React | latest | Icons |
| Sonner | latest | Toast notifications |
| react-intersection-observer | latest | Scroll reveal |

---

## Project Structure

```
client/
├── index.html                  # Entry HTML (dark class default)
├── vite.config.js              # Vite config + API proxy to :5001
├── tailwind.config.js          # Custom fonts, colors, animations
├── postcss.config.js
├── package.json
└── src/
    ├── App.jsx                 # Routes + AnimatePresence + providers
    ├── main.jsx                # ReactDOM entry
    │
    ├── styles/
    │   └── globals.css         # Design system CSS variables (dark + light)
    │
    ├── components/
    │   ├── ui/                 # Reusable UI primitives
    │   │   ├── CustomCursor.jsx
    │   │   ├── ParticleField.jsx
    │   │   ├── GradientBlob.jsx
    │   │   ├── Loader.jsx
    │   │   ├── ThemeToggle.jsx
    │   │   ├── Badge.jsx
    │   │   ├── ProgressBar.jsx
    │   │   ├── Modal.jsx
    │   │   ├── SkeletonCard.jsx
    │   │   ├── Tooltip.jsx
    │   │   └── CommandPalette.jsx   # ⌘K global search
    │   │
    │   ├── layout/
    │   │   ├── Navbar.jsx           # Sticky nav, theme toggle, auth dropdown
    │   │   ├── Sidebar.jsx          # Dashboard sidebar, collapse, theme toggle
    │   │   └── Footer.jsx
    │   │
    │   ├── common/
    │   │   ├── ProtectedRoute.jsx   # Redirects unauthenticated users
    │   │   ├── PageTransition.jsx   # Framer Motion page wrapper
    │   │   ├── ScrollReveal.jsx     # IntersectionObserver reveal
    │   │   ├── AnimatedImage.jsx    # Lazy blur-up image
    │   │   └── ErrorBoundary.jsx
    │   │
    │   ├── home/
    │   │   ├── HeroSection.jsx      # Particles, parallax, CTA
    │   │   ├── FeatureCards.jsx     # 3D tilt cards
    │   │   ├── StatsSection.jsx     # Animated counters
    │   │   ├── TestimonialsSlider.jsx
    │   │   ├── PricingCards.jsx     # Monthly/annual toggle
    │   │   ├── CTABanner.jsx
    │   │   └── DemoSection.jsx
    │   │
    │   ├── dashboard/
    │   │   ├── ProjectCard.jsx
    │   │   ├── StatWidget.jsx
    │   │   ├── ActivityFeed.jsx
    │   │   └── QuickActions.jsx
    │   │
    │   └── editor/
    │       ├── ScenePanel.jsx
    │       ├── VideoPreview.jsx
    │       ├── TimelineBar.jsx
    │       └── SceneEditModal.jsx
    │
    ├── pages/
    │   ├── Home.jsx             # Landing page
    │   ├── Login.jsx            # Split-screen auth
    │   ├── Register.jsx         # Split-screen auth
    │   ├── Dashboard.jsx        # User dashboard
    │   ├── ProjectCreate.jsx    # Multi-step project form
    │   ├── ProjectDetails.jsx   # Project + AI generation
    │   ├── VideoEditor.jsx      # 3-panel video editor
    │   ├── SceneEditor.jsx      # Scene detail editor
    │   ├── Profile.jsx          # Account settings
    │   └── NotFound.jsx         # 404 page
    │
    ├── context/
    │   ├── AuthContext.jsx      # user, login, register, logout, isAuthenticated
    │   └── ThemeContext.jsx     # theme, isDark, toggle
    │
    ├── hooks/
    │   ├── useAuth.js
    │   ├── useTheme.js
    │   ├── useScrollY.js
    │   ├── useMousePosition.js
    │   ├── useAnimatedCounter.js
    │   ├── useIntersection.js
    │   └── useCommandPalette.js
    │
    ├── services/
    │   ├── api.js               # Axios instance + JWT interceptor
    │   ├── auth.service.js
    │   ├── project.service.js
    │   └── video.service.js
    │
    └── utils/
        ├── animations.js        # All Framer Motion variants
        ├── constants.js         # API_BASE_URL, ROUTES, STORAGE_KEYS
        ├── formatDate.js        # Date helpers
        └── imageLoader.js       # Unsplash URL builder
```

---

## Setup & Run

```bash
cd client
npm install
npm run dev
```

App runs on **http://localhost:5173** (or next available port).  
API calls are proxied through Vite to `http://localhost:5001` — **no CORS issues**.

---

## Pages & Routes

| Route | Component | Auth | Description |
|---|---|---|---|
| `/` | `Home` | ❌ | Landing page with all sections |
| `/login` | `Login` | ❌ | Sign in form |
| `/register` | `Register` | ❌ | Sign up form |
| `/dashboard` | `Dashboard` | ✅ | Projects overview + stats |
| `/projects/create` | `ProjectCreate` | ✅ | Multi-step new project form |
| `/projects/:id` | `ProjectDetails` | ✅ | Project info + AI generate trigger |
| `/editor/:id` | `VideoEditor` | ✅ | 3-panel video editor |
| `/scene/:id` | `SceneEditor` | ✅ | Individual scene editing |
| `/profile` | `Profile` | ✅ | Account settings + theme |
| `*` | `NotFound` | ❌ | 404 page |

All `✅` routes are wrapped in `<ProtectedRoute>` — unauthenticated users are redirected to `/login`.

All routes are **lazy loaded** with `React.lazy + Suspense`.

---

## Components

### `CommandPalette` (`⌘K`)
Open with `Ctrl+K` / `Cmd+K`. Search and navigate the app.

### `CustomCursor`
Premium spring-animated cursor (desktop only, hidden on touch devices).

### `ParticleField`
Canvas-based particle background with mouse interaction (used in HeroSection).

### `ThemeToggle`
Animated sun/moon toggle button. Works in Navbar, Sidebar, and Profile page.

### `SkeletonCard`
Shimmer loading placeholders for project cards.

### `ScrollReveal`
Wraps any child in an `IntersectionObserver`-triggered Framer Motion reveal.

---

## State Management

| Concern | Solution |
|---|---|
| **Authentication** | `AuthContext` — user object, token, login/logout functions |
| **Theme** | `ThemeContext` — dark/light toggle, persisted to localStorage |
| **Server state** | Inline `useState` + direct service calls (no Redux needed) |
| **Form state** | Local `useState` per page |
| **Toast notifications** | `sonner` toast() calls |

### AuthContext API
```js
const { user, isAuthenticated, loading, login, register, logout } = useAuth();
```

### ThemeContext API
```js
const { isDark, toggle, theme, toggleTheme } = useTheme();
```

---

## API Integration

All API calls go through `src/services/api.js`:

```js
import api from './api';

// Requests automatically attach JWT from localStorage
const res = await api.get('/projects');
const res = await api.post('/projects/create', { title, topic });
```

**Proxy config** in `vite.config.js`:
```js
proxy: {
  '/api': { target: 'http://localhost:5001', changeOrigin: true }
}
```

---

## Design System

Defined in `src/styles/globals.css` as CSS variables:

### Fonts
- **Display/Headings:** `Plus Jakarta Sans` (700–800)
- **Body:** `Inter` (400–600)
- **Mono:** `JetBrains Mono`

### Colors (Dark theme)
| Variable | Value | Usage |
|---|---|---|
| `--color-bg` | `#09090f` | Page background |
| `--color-bg-card` | `#1a1a2e` | Card backgrounds |
| `--color-text` | `#e8e6f0` | Primary text |
| `--color-text-muted` | `#6b6882` | Placeholder/hint text |
| `--color-border` | `rgba(109,40,217,0.15)` | Card borders |
| `--gradient-brand` | purple → cyan | Buttons, accents |

### Colors (Light theme)
| Variable | Value |
|---|---|
| `--color-bg` | `#f8f7ff` |
| `--color-text` | `#1c1040` |
| `--color-bg-card` | `#ffffff` |

### Utility Classes
- `.card` — glass card with hover glow
- `.btn-primary` — gradient brand button
- `.btn-ghost` — outlined button
- `.gradient-text` — purple→cyan text gradient
- `.glass` — frosted glass effect
- `.section-label` — pill badge for section headings
- `.input-field` — styled form input

---

## Environment Variables

No `.env` file needed for development.  
For production, create `client/.env`:

```env
# Optional: override the API base URL
VITE_API_URL=https://api.yourdomain.com/api

# Optional: Unsplash access key for image search
VITE_UNSPLASH_ACCESS_KEY=your_unsplash_key
```
