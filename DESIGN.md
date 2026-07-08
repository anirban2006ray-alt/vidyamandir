# Design Brief: Vidyamandir v13 — Polished Premium Edition

## Tone & Purpose
Premium editorial e-commerce for local bookshop in Purba Bardhaman, West Bengal. Refined Flipkart/Amazon retail UX with dark navy sophistication, vibrant orange accents, and polished depth. Magazine-like intensity with premium tactile surfaces and smooth interactions.

## Color Palette
| Token | Light OKLCH | Dark OKLCH | Usage |
|-------|-------------|-----------|-------|
| **Primary** (Navy) | 0.14 0.08 255 | 0.64 0.23 38 | Headers, footers, dominant surfaces |
| **Accent** (Orange) | 0.64 0.23 38 | 0.72 0.25 40 | CTAs, sale badges, active states, highlights |
| **Foreground** | 0.12 0 0 | 0.96 0 0 | Text, high contrast, improved clarity |
| **Background** | 0.98 0 0 | 0.1 0.06 255 | Page background, refined light feel in dark mode |
| **Muted** | 0.85 0 0 | 0.2 0.06 255 | Secondary text, disabled states, refined opacity |
| **Border** | 0.88 0 0 | 0.18 0.07 255 | Card borders, dividers, improved contrast |

## Typography
- **Display**: Fraunces (serif, 700 weight) — hero banners, flash sale countdown, bookshop branding, 28-48px
- **Body**: DM Sans (sans-serif, 400/500) — product descriptions, bilingual labels, dense listings, 14-16px
- **Mono**: Geist Mono (400/700) — pricing, order IDs, tracking info, 13-14px

## Elevation & Depth
Multi-tier shadow system: subtle (1px), card (4-6px), elevated (10-15px). Light mode: minimal depth via border contrast. Dark mode: layered cards with soft shadows on navy. Smooth hover transitions (0.3s) reveal elevated state. No glow or neon.

## Structural Zones
| Zone | Dark BG | Light BG | Radius | Shadow | Border |
|------|---------|----------|--------|--------|--------|
| **Header** | navy (0.1 0.06 255) | navy (0.14 0.08 255) | 0px | none | bottom 1px |
| **Flash Sale** | orange (0.64 0.23 38) | orange (0.64 0.23 38) | 0px | subtle | none |
| **Product Grid** | bg (0.1 0.06 255) | white (0.98 0 0) | — | — | none |
| **Product Card** | card (0.14 0.08 255) | card (0.97 0 0) | 8px | card/elevated | 1px |
| **Modal/Popover** | popover (0.16 0.07 255) | popover (0.98 0 0) | 12px | elevated | 1px |
| **Footer** | navy (0.1 0.06 255) | navy (0.14 0.08 255) | 0px | none | top 1px |

## Spacing & Rhythm
8px base unit: product cards 12-16px gutter, card padding 12-16px, button height 40px (mobile 44px), touch targets ≥44px. Header 56px, footer 48px. No large whitespace gaps — density supports retail urgency.

## Component Patterns
- **Sale Badge**: `badge-sale` → orange pill (6px radius), 3px padding, bold text, subtle shadow, top-right overlay
- **Product Card**: `card-elevation` → 8px radius, 1px border, shadow-card on hover → shadow-elevated, image 100% width, orange CTA full-width 40px
- **CTA Buttons**: `cta-primary` → 8px radius, orange bg, opacity hover effect (90%), smooth 0.3s transition, 40px min height
- **Secondary Buttons**: `btn-secondary` → muted background, 8px radius, darker hover, 40px min height
- **Input Fields**: `input-field` → 8px radius border, focus ring on accent color, placeholder muted, 40px min height
- **Language Toggle**: top-right header, EN | BN link style, smooth click feedback
- **PWA Download Cards**: `pwa-card` → desktop-styled app card, 8px radius, card shadow, hover lift 2px, centered icon/label, orange CTA button full-width
- **Chatbox Widget**: `chatbox-trigger` (fixed bottom-right) + `chatbox-dialog` (floating card overlay) → 12px radius dialog, slideInRight 0.3s animation, message bubbles (bot: muted bg, user: orange bg), input field at bottom, smooth transitions

## Motion & Micro-interactions
- **Smooth base transition**: `transition-smooth` (0.3s cubic-bezier) on all interactive elements
- **Card hover**: lift shadow from card → elevated state, no scale, pure shadow depth
- **Button hover**: opacity 90% fill, no lift
- **Loading state**: shimmer animation (2s infinite) on skeleton blocks
- **Focus state**: ring-2 on accent color, offset 0 (no gap)
- **Countdown timer**: live number updates (no animation), serif Fraunces font

## Signature Detail
**Dark navy header** with centered logo + bilingual toggle drives bookshop identity. **Orange flash sale banner** with live countdown (Fraunces serif, 24px bold) signals urgency. **Refined card elevation** system (8-12px rounded corners, layered shadows) creates premium tactile feel. Product cards lift on hover, revealing depth. Navy + orange + refined shadows = editorial, local, premium, premium retail.

## Study Materials — Question Papers (extension)
Visual language for the new Study Materials / Question Papers section. Reuses existing navy/orange tokens — no new palette, no new fonts. Productivity-restraint density: filter-first layout, metadata-rich PDF cards, admin upload dropzone.

### Layout
- **Browse page**: 2-column → left `filter-sidebar` (sticky, 280px) + right PDF grid (1-col mobile, 2-col tablet, 3-col desktop)
- **Cascading filters**: Department → Year → Semester → Subject → Regulation → Class Test, each a chip group with `chip-filter` pills; selections cascade (later groups populate from earlier picks)
- **Admin tab**: `upload-dropzone` + form fields (subject, code, dept, year, sem, regulation, class test) + `pdf-admin-row` list with edit/delete

### Component Patterns (new utilities)
| Pattern | Class | Description |
|---------|-------|-------------|
| Filter chip | `chip-filter` | Pill, muted bg, orange fill when `[data-active=true]`, 0.2s transition |
| Filter group label | `filter-group-label` | Mono uppercase 11px tracking, muted-foreground |
| Filter sidebar | `filter-sidebar` | Card surface, 1px border, shadow-card, sticky on desktop |
| PDF card | `pdf-card` | Card-elevation base, 3px orange left stripe, 4:3 thumb, metadata grid, full-width download btn |
| PDF thumb | `pdf-card-thumb` + `pdf-card-thumb-icon` | Muted gradient bg, orange doc icon centered |
| PDF metadata | `pdf-meta-grid` / `pdf-meta-key` / `pdf-meta-val` | 2-col grid, mono keys, right-aligned values |
| PDF download | `pdf-download-btn` | Full-width orange gradient CTA, 32px height |
| Upload dropzone | `upload-dropzone` | Dashed border, muted bg, orange glow on dragover via `[data-dragging=true]` |
| Upload progress | `upload-progress-track` + `upload-progress-fill` | 6px track, gradient fill with shimmer animation |
| Admin row | `pdf-admin-row` | Compact row, hover border-accent + muted bg |
| Empty state | `pdf-empty-state` | Centered muted-foreground block |

### Motion (new)
- `chip-enter` (0.25s) — cascading reveal as filters populate after a parent selection
- `upload-progress-shimmer` (1.8s) — animated gradient on the progress fill while uploading
- Dropzone dragover: scale(1.005) + accent ring + icon scale, 0.25s ease
- PDF card hover: same lift as `card-elevation` (shadow-card → shadow-elevated, translateY -2px)

### Bilingual & Taxonomy
- All filter labels and metadata keys render EN | BN via existing i18n flat map
- Departments: CSE, ECE, EE, ME, CE | Regulations: R-23, R-25 | Class Tests: CT1, CT2, Semester
- Subject codes use Geist Mono (`pdf-meta-key`) for scanability

## Constraints
- Dark mode default; light mode via CSS class `.light`
- Border radius: 0px header/footer/banner, 6-8px cards/inputs, 12px modals, 24px pills
- Shadow hierarchy: subtle → card → elevated (no glow, no blur > 15px)
- High contrast text (AA+ compliance): foreground on backgrounds, muted on muted has 0.48–0.65 L range
- Bilingual content toggle (EN/BN) in header; persists to localStorage
- Responsive: mobile 320px (1-col cards, 12px gap), tablet 768px (2-col), desktop 1024px (4-col)
- Touch targets: ≥44px on mobile, ≥40px on desktop
