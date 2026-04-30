# vite.wine

Landing page for vite.wine — a direct importer of Swiss natural and biodynamic wines into the Baltic states and the United Kingdom.

Built with **Next.js 15 (App Router)** + **Tailwind** + **Framer Motion** + **@vis.gl/react-google-maps**. Deploys to **Vercel** in one click.

---

## Stack

- **Next.js 15** with the App Router and Turbopack-friendly setup
- **Tailwind CSS** — bespoke palette (bone, ink, ember, moss, clay)
- **Framer Motion** — entrance and scroll animations
- **@vis.gl/react-google-maps** — modern Google Maps for React, with a custom paper-map style
- **Resend** — transactional email for the contact form (optional, falls back to logging in dev)
- **TypeScript** strict, **ESLint** clean

Distinctive typography: **Fraunces** for display (with its beautiful soft italic), **Hanken Grotesk** for body, **JetBrains Mono** for the small uppercase labels.

---

## Quick start

```bash
pnpm install        # or: npm install / yarn
cp .env.example .env.local
# fill in keys (see below)
pnpm dev
```

Open <http://localhost:3000>.

---

## Environment variables

Create `.env.local` (and add the same vars in Vercel → Project → Settings → Environment Variables).

| Var | Required | What it does |
|---|---|---|
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | yes (for map) | Get one at <https://console.cloud.google.com/google/maps-apis> → enable **Maps JavaScript API**. Restrict to your domain. |
| `NEXT_PUBLIC_GOOGLE_MAPS_ID` | optional | If you create a cloud-styled Map ID, paste it here for an even better look. Without it, the included paper-style JSON is used. |
| `RESEND_API_KEY` | yes (for form) | Sign up at <https://resend.com>. Free tier is plenty. |
| `CONTACT_TO_EMAIL` | yes (for form) | Where enquiries should land — e.g. `hello@vite.wine` |
| `CONTACT_FROM_EMAIL` | yes (for form) | A verified sender. `onboarding@resend.dev` works on day one; later, verify your domain in Resend and use `hello@vite.wine`. |

If `RESEND_API_KEY` is missing the form still works in dev — it just logs the enquiry to the server console.

---

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to <https://vercel.com/new> → **Import Git Repository** → pick your repo.
3. Framework preset: **Next.js** (auto-detected). Leave defaults.
4. Add the env vars from the table above.
5. **Deploy**. About 60–90 seconds.
6. Back in Vercel → **Domains** → add `vite.wine`. Vercel will give you DNS records — paste them at your registrar (GoDaddy, since you're buying the domain there).

---

## Editing content

Almost all of the editable content is in two places:

- **`lib/producers.ts`** — the list of growers. Add, remove, reorder, change coordinates. The map and the cards both read from here.
- **`components/Manifesto.tsx`** — the three tenets / "why us" copy.
- **`components/Hero.tsx`** — the main headline.
- **`components/Footer.tsx`** — registration, VAT, contact lines.

The bottom-of-hero stats (`06 Swiss growers`, `38ha`, etc.) are inline in `Hero.tsx`; if you change the producer list, update those too.

---

## Project structure

```
app/
  layout.tsx          # fonts, metadata, html shell
  page.tsx            # composes the sections
  globals.css         # tokens, grain texture, marquee animation
  api/contact/route.ts# POST handler for the form
components/
  Nav.tsx
  Hero.tsx
  Marquee.tsx
  Manifesto.tsx
  Producers.tsx
  MapSection.tsx
  JoinForm.tsx
  Footer.tsx
lib/
  producers.ts        # the list of partner domaines
```

---

## For the Copilot agent

If you're handing this to GitHub Copilot Workspace / agent to evolve, here's the brief:

- **Aesthetic**: editorial, paper-and-ink, refined. Fraunces serif with italic accents. Bone/cream background `#F2EBDF`, deep ink `#1A1411`, wine accent `#7A2330`. **Never** introduce purple gradients or generic SaaS spacing.
- **Tone of voice**: short, confident, slightly literary. We talk about growers and parcels, not "solutions" or "synergy".
- **Layout grammar**: 12-col grid, eyebrow `§ Section Name` in JetBrains Mono small caps, big display heading with one italic word for emphasis.
- **Animations**: subtle. Stagger on scroll-in, no parallax, no bounces.
- **Accessibility**: maintain colour contrast on the dark `JoinForm` section; all interactive elements keyboard-reachable.
- **Don't**: replace Fraunces with Inter; don't add a hero image carousel; don't add gradient buttons; don't switch to dark mode by default.

---

## Roadmap ideas

- `/producers/[id]` deep page per grower with tasting notes and parcel maps
- A simple downloadable PDF tradesheet (cron-built)
- LT / LV / ET / RU translations via `next-intl`
- Newsletter signup with Resend Audiences
- A dated harvest journal under `/journal`

---

© vite.wine — drink natural, drink responsibly.
