# Warm Editorial Services Bento

## Goal
Replace the current homepage services grid with a responsive, editorial bento section that makes the three flagship engineering offers immediately tangible while keeping the full startup support suite easy to scan.

## What will change
- Create a reusable `SpotlightCard` foundation with a crisp warm surface, ambient border, restrained lift, keyboard focus state, and cursor-tracked amber glow powered by Framer Motion.
- Build a responsive flagship trio:
  - **Mobile App Development** — compact phone interface, 60 FPS readout, native gesture badges, and App Store approval state.
  - **Full-Stack Web Applications** — terminal/HUD interface with edge-region activity, 12ms latency, and 99.99% SLA.
  - **SaaS & AI Product Engineering** — animated query → retrieval → RAG → LLM → streaming pipeline.
- Add a dense secondary bento suite for Legal & Compliance, App Store Publishing, Funding Guidance, Payment Integration, CRM, Digital Marketing, Hiring, and Ongoing Support.
- Add concise technology chips and clear arrow/link affordances without turning the cards into nested panels.
- Preserve the warm linen/sand palette, DM Serif Display headings, terracotta accents, semantic color tokens, and current service URLs.

## Responsive and accessible behavior
- Use semantic section, heading, list/article, and link structure.
- Make each service card reachable by keyboard with a visible focus ring and descriptive accessible label.
- Disable decorative pointer tracking and reduce preview motion when reduced motion is preferred.
- Stack cards cleanly on phones, use two columns on tablets, and resolve into an asymmetric bento composition on wide screens.
- Keep all preview content legible and clipped within stable card dimensions.

## Technical details
- Implement the reusable card in a focused component file and compose all service previews from the services section.
- Use Framer Motion values/transforms for pointer position and glow opacity; no new package is required.
- Extend the existing semantic theme with warm spotlight/surface tokens and utility styles only where Tailwind utilities cannot express the effect cleanly.
- Reuse existing routes; the two web/product flagship cards will point to the current web-development page, while each secondary service uses its existing dedicated page.
- Validate the finished section in the live preview at desktop and mobile widths, including links, keyboard focus, overflow, and console errors.
