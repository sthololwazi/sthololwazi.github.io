
# Sthololwazi Projects — Corporate Website (v3, cloning your existing site)

Skip design directions. Clone the look and structure of https://sthololwaziprojects.lovable.app/ directly, with two intentional differences you already requested: Building is Division 01 (lead), and your uploaded logo replaces the existing one.

## Design system to clone
- **Palette**: dark forest green primary, warm gold accent, cream/canvas background, deep ink text — taken from the reference.
- **Typography**: large editorial serif for headings (Fraunces-style), clean sans for body (Inter).
- **Composition**: full-bleed hero with construction photo + green/gold tint overlay, eyebrow line, oversized serif headline with one italic gold word, supporting paragraph, two-button CTA, bottom-left metric strip (2017 · Level 1 · 100% · 3).
- **Sections (in order)**: hero → philosophy block ("Not a contractor. An infrastructure & social development partner.") → three division cards → quote CTA band → empowerment multiplier with image → 3-card project track record → people / closing CTA with logo + final "Let's build something that lasts." block.
- **Header**: logo + horizontal nav (Home, About, Services, Projects, Contact) + green pill "REQUEST A QUOTE" button.
- **Footer**: contact + compliance + slogan.

## Routes (TanStack file-based, matching the reference)
- `/` Home
- `/about`
- `/services` — divisions overview (Building 01, Civil 02, Materials 03)
- `/services/building`, `/services/civil`, `/services/materials` — detail pages
- `/projects` — full project list
- `/contact` — address, phone, email + Request a Quote form

Each route gets its own unique `head()` (title, description, og:title, og:description, og:url) and a leaf-level canonical.

## Two intentional differences from the reference
1. **Building is Division 01**, Civil 02, Materials 03 — copy, numbering and visual emphasis adjusted accordingly. Building card is the featured / larger one.
2. **Your uploaded logo** (cleaned of the "Design.com" watermark) replaces the reference's logo in header, footer, the closing CTA block, and is wired as favicon + apple-touch-icon in `__root.tsx`.

## Content (verbatim from your brief)
- Slogan: "Building Infrastructure. Empowering Communities. Mending the Future."
- Main heading: "Sthololwazi Projects: Building Infrastructure, Empowering Communities"
- Trust metrics: Est. 2017 · Level 1 B-BBEE · 100% Black-Owned · 3 Divisions
- Division copy with SANS references (SANS 1200, SANS 10400T, SANS 523), NHBRC-compliant RDP, "Each One, Teach One", Integrated Supply Chain
- Compliance: Reg 2017/135433/07 · Tax 9071664248 · NHBRC 3000190954 · CIDB 10127071 · CSD MAAA0446751
- Projects: 500 RDP Houses (R53,000,000), Evander Hospital, Tholinhlanhla Primary School
- Contact: K01041 Hilaria, Msogwaba, Mbombela 1215 · projectssithololwazi@gmail.com · 064 620 4247

## Backend (Lovable Cloud)
Quote form on `/contact` posts to a `createServerFn` with Zod validation, stored in `quote_requests` table (RLS: public insert, authenticated select; explicit GRANTs per public-schema rules). Fields: Name, Company/Department, Email, Phone, Project Brief.

## Imagery
Generate hero (construction site at golden hour with workers reviewing plans), craft-bricks, RDP houses, hospital, school, foreman portrait — saved to `src/assets/` and referenced via Lovable Assets pointers when binary. Tone-matched to the reference's photography.

## SEO + a11y
- Per-route metadata (title <60ch, description <160ch, og + twitter)
- Single H1 per page, semantic landmarks, alt text on imagery
- JSON-LD `Organization` on home with address/phone/email + logo URL
- Logo wired as favicon + apple-touch-icon

## Tech stack
TanStack Start v1 + React 19 + Tailwind v4 (tokens via `@theme inline` in `src/styles.css`). Lovable Cloud for the quote form. No third-party libs beyond what's already configured.
