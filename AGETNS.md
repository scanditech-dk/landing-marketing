# AGENT.md — Bylt Landing & Marketing Site (Next.js App Router)

This repository is the **public landing + marketing** site for Bylt (construction lifecycle SaaS). It also includes **auth entry points** (login/signup) and **account management** and can **redirect users to the dashboard** after successful registration. The goal is: **fast, SEO-friendly, SSR-first**, and **cleanly maintainable** as we import UI blocks from external libraries (Aceternity, Untitled UI, etc.).

---

## Core principles

1. **SSR-first for pages, Client-only for interactions**
   - Default every route to **Server Components**.
   - Add `"use client"` only for components that need hooks, event handlers, animations, or browser-only APIs.

2. **Marketing site is not the dashboard**
   - Keep this repo focused on: landing pages, pricing, docs/marketing content, auth entry, account management UI.
   - Do not add heavy “app module” features here.

3. **No inline component dumps in `page.tsx`**
   - Pages should read like composition:
     - fetch data (server)
     - render sections
   - Imported blocks belong in `/components` (local wrappers), not pasted into page files.

4. **Performance & SEO are non-negotiable**
   - Keep bundles small, avoid global client layouts, prefer server rendering.
   - Use Next metadata, OpenGraph, and structured content.

---

## Folder & file conventions

### App Router structure
- `app/(marketing)/...`
  - Public pages: `/`, `/pricing`, `/features`, `/about`, `/contact`, etc.
- `app/(auth)/...`
  - `/login`, `/signup`, `/verify`, `/reset-password`, etc.
- `app/(account)/...`
  - Account management pages available after auth (profile, billing portal link, settings, etc.)
- `app/api/...`
  - Route handlers only when needed (e.g., webhooks, auth callbacks if applicable)

> Rule: **Do not place large UI blocks directly in `app/**/page.tsx`.** Pages compose sections from `components/`.

### Components
Use this structure:

- `components/`
  - `layout/` (Header, Footer, Nav, Containers, PageShell)
  - `sections/` (Hero, Logos, FeaturesGrid, PricingTable, FAQ, CTA, etc.)
  - `ui/` (shared primitives: Button, Badge, Input, Modal, etc. – ideally shadcn-style)
  - `vendor/` (third-party imported blocks, wrapped)
  - `icons/` (SVG components)
  - `forms/` (auth + marketing forms)
  - `motion/` (animation wrappers if needed)

---

## Importing external components (Aceternity / Untitled UI / etc.)

### Golden rule
**Never paste vendor code inside `page.tsx` or `layout.tsx`.**  
Instead:

1. Put vendor component code in:
   - `components/vendor/<library>/<ComponentName>.tsx`
2. Create a thin “Bylt wrapper” in:
   - `components/sections/<SectionName>.tsx` (recommended)
3. Pages import only **sections**, not vendor blocks directly.

Example:
- `components/vendor/aceternity/HeroParallax.tsx`
- `components/sections/Hero.tsx` (wraps + sets props + tokens)
- `app/(marketing)/page.tsx` imports `<Hero />`

### Client boundary rules
- Vendor components that use animations/hooks must be `"use client"` **inside the vendor file**, not forced at the page.
- Keep the page server-rendered; isolate client behavior to the smallest possible subtree.

### Styling rules
- Prefer Tailwind utility classes and design tokens.
- Do not introduce random CSS files from vendors unless absolutely required.
- Keep typography and spacing consistent with Bylt design tokens.

---

## SSR, auth, and redirects

### SSR approach
- Pages render on server by default.
- Use server actions or route handlers only where they simplify flows.

### Login / signup
- Auth pages should remain light and fast.
- Forms should live in `components/forms/` and be client components if they handle interactive validation.

### Redirect to dashboard
- After successful registration/login:
  - redirect to a configured dashboard base URL (e.g., `DASHBOARD_URL`)
  - never hardcode environment URLs in components
- Handle redirects on the server when possible (better UX + SEO cleanliness).

---

## Account management section

This repo includes basic account pages like:
- Profile basics
- Billing / subscription link-out
- Security settings (password reset, MFA entry point if applicable)

Rules:
- Keep account pages minimal and consistent.
- Anything that is “core dashboard functionality” belongs in the dashboard app, not here.
- If account pages need user data:
  - fetch on server (preferred)
  - avoid client-side waterfalls

---

## Data fetching rules

- **Marketing content:** static where possible (MDX/content files or hardcoded config objects).
- **Pricing / plans:** can be server-fetched with caching.
- Use caching intentionally:
  - `force-cache` or `revalidate` for marketing content
  - avoid `no-store` unless truly necessary (e.g., auth session checks)

---

## Environment variables

Must be documented and validated.

Common expected vars:
- `NEXT_PUBLIC_SITE_URL` (canonical site URL)
- `DASHBOARD_URL` (post-auth redirect target)
- Auth provider keys (if used)
- Analytics keys (optional)

Rules:
- Never reference `process.env.*` inside client components unless it is `NEXT_PUBLIC_*`.
- Prefer a single `lib/env.ts` that validates required vars at boot.

---

## Code quality & conventions

- TypeScript strict on.
- Prefer named exports for components.
- No giant “kitchen sink” components; split into subcomponents when sections get big.
- Keep `page.tsx` files short:
  - layout + composition only
- Add basic accessibility:
  - semantic headings
  - keyboard focus states
  - aria labels where needed

---

## What not to do

- Don’t turn the entire marketing site into `"use client"` via layout.
- Don’t inline vendor components into pages.
- Don’t add dashboard module logic here.
- Don’t fetch data client-side “just because” (SSR-first).

---

## Quick checklist before merging

- [ ] Page remains a Server Component unless unavoidable
- [ ] Vendor imports live under `components/vendor/*`
- [ ] Pages import `components/sections/*` (not vendor blocks)
- [ ] No hardcoded URLs; use env + central config
- [ ] Auth redirect works to dashboard URL
- [ ] Lighthouse-friendly: images optimized, minimal JS, no layout shift

---

## Bylt context

Bylt is a modular construction lifecycle SaaS ecosystem spanning tendering, estimation, project execution, QA, time logging, materials, and warranty/service — this landing site’s job is to explain the value, convert users, and provide secure entry to the platform and account management. 
