Makaila Schneider — Athlete Website
===================================

Modern, coach-focused athlete profile built with Next.js, TypeScript, and Tailwind CSS. This README captures everything needed to run, update, and deploy the site.

Quick Links
-----------
- Project Dir: `makaila-athlete-site/`
- App entry: `app/page.tsx`
- Components: `components/`
- Public assets: `public/assets/`
- Contact API: `app/api/contact/route.ts`

Tech Stack
---------
- Next.js 15 (App Router)
- TypeScript, React
- Tailwind CSS + custom theme (SLCC Bruins colors)

Local Development
-----------------
1) Install deps (from `makaila-athlete-site/`):
```bash
npm install
```

2) Set environment (see “Environment Variables” below). Create a `.env.local` in `makaila-athlete-site/`.

3) Run the dev server:
```bash
npm run dev
```
Visit `http://localhost:3000`.

Environment Variables
---------------------
Create `makaila-athlete-site/.env.local` with:
```bash
NEXT_PUBLIC_YOUTUBE_API_KEY=your_api_key
NEXT_PUBLIC_YOUTUBE_CHANNEL_ID=UC-xxxxxxxxxxxxxxxx
NEXT_PUBLIC_YOUTUBE_PLAYLIST_ID=PLxxxxxxxxxxxxxxxxx

# Gmail SMTP (App Password recommended)
SMTP_USER=your_gmail_address@gmail.com
SMTP_PASS=your_gmail_app_password
```

Notes:
- Channel ID must use a normal ASCII hyphen `-` (avoid the unicode “non‑breaking hyphen”). If you copy from the web and see odd behavior, retype the `-` character.
- Playlist is optional; the site will fall back to the channel’s latest uploads if the playlist is missing or empty.

YouTube Integration
-------------------
- Component: `components/YouTubeFeed.tsx`
- Behavior: fetches the latest 3 videos using `playlistItems` (if `NEXT_PUBLIC_YOUTUBE_PLAYLIST_ID` is set), else falls back to `search` by `NEXT_PUBLIC_YOUTUBE_CHANNEL_ID`.
- Coach-friendly CTA: a single, unified section with a primary button to the channel and a small “Subscribe for updates” link.

Email (Contact) Integration
---------------------------
- API route: `app/api/contact/route.ts` (Next.js App Router). Uses `nodemailer` over Gmail SMTP.
- Recipient: `makailaschneider2024@gmail.com` (BCC: `schneiderham@gmail.com`).
- Requires `SMTP_USER` and `SMTP_PASS` in env (use a Gmail App Password). If emails are not received:
  - Verify both env vars are set for the active environment (local/Preview/Production) in Vercel.
  - Check spam/junk.

Content & Components
--------------------
Key components to update content:
- `components/Hero.tsx` — hero section imagery and headline.
- `components/About.tsx` — personal statement and values.
- `components/AthleticProfile.tsx` — stats and downloadable assets.
- `components/AwardsCerts.tsx` — honors, certifications, document links.
- `components/Resume.tsx` — education, athletic career, work experience.
- `components/Contact.tsx` — Makaila’s direct contact (primary) and Coach reference (secondary).
- `components/YouTubeFeed.tsx` — YouTube videos and unified channel CTA.

Files under `public/assets/` hold PDFs, images, and certificates. When linking to files, prefer absolute paths from `public` (e.g. `/assets/Resume/YourFile.pdf`).

Deployment (Vercel)
-------------------
Workflow:
- Use branches: `develop` for ongoing work (Preview deployments), `main` for production.
- Each push to a branch triggers a Preview URL on Vercel.

CLI commands (run from `makaila-athlete-site/`):
```bash
# Preview deployment for current branch
npx vercel deploy --yes

# Production deployment
npx vercel deploy --prod --yes
```

Env vars on Vercel:
- Set the same keys for both Preview and Production environments under the Vercel project (“Environment Variables”).
- If YouTube calls return 400/Bad Request, double-check the `PLAYLIST_ID` vs `API_KEY` mix-up and the channel ID hyphen.

Troubleshooting
---------------
- YouTube 400 (Bad Request): Ensure `NEXT_PUBLIC_YOUTUBE_PLAYLIST_ID` is a playlist ID (starts with `PL...`) and not the API key.
- Channel link wrong (percent-encoded hyphen): Replace the unicode hyphen with a standard `-`.
- Emails not received: Confirm `SMTP_USER`/`SMTP_PASS` are set and valid (Gmail App Password). Try sending again and check spam.
- Next.js 15 API route types: The route uses the standard `Request` and `NextResponse` from `next/server` for compatibility.

Project Structure
-----------------
```
makaila-athlete-site/
  app/
    api/contact/route.ts   # email endpoint (Gmail SMTP)
    page.tsx               # mounts all sections
  components/              # UI sections
  public/assets/           # PDFs, images, certificates
  tailwind.config.js       # theme (SLCC Bruins colors)
```

Conventions
-----------
- Tailwind for styling; custom palette: `bruin-navy`, `bruin-gold`, etc.
- Fonts: Poppins (headings), Inter (body).
- Avoid hidden/hover-only CTAs; primary actions are always visible.

Support Checklist
-----------------
- [ ] `.env.local` present with valid keys
- [ ] Channel ID uses ASCII `-`
- [ ] Vercel env vars set for Preview and Production
- [ ] PDFs/links under `public/assets/` resolve in the browser
- [ ] Production deploy verified after major edits
