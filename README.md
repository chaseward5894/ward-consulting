# Ward Consulting — Landing Page

Production-ready Next.js landing page for Ward Consulting.

---

## Prerequisites

Install **Node.js** (v18 or higher) before doing anything else:

- Download from [nodejs.org](https://nodejs.org) — choose the **LTS** version
- Run the installer and accept all defaults
- Verify it worked: open a terminal and run `node --version`

---

## Running Locally

### 1. Install dependencies

Open a terminal in this folder and run:

```bash
npm install
```

### 2. Set up environment variables

```bash
copy .env.example .env.local
```

Open `.env.local` in a text editor. For now, you can leave the values as-is — the form will still work locally (submissions are just logged to the terminal).

### 3. Start the development server

```bash
npm run dev
```

Open your browser and go to: **http://localhost:3000**

That's it. The site is running locally.

---

## Form Submissions (Local)

When someone submits the contact form, the data is logged in your terminal window where `npm run dev` is running. You'll see a block like:

```
========== NEW CONTACT FORM SUBMISSION ==========
Name:          John Smith
Business:      Smith Electric LLC
Email:         john@smithelectric.com
...
=================================================
```

No email service or Zapier is required to run the site locally.

---

## Connecting Real Integrations

Open `app/api/contact/route.ts` to find clearly marked TODO comments for each integration:

### Send email notifications via Resend
1. Sign up at [resend.com](https://resend.com) (free tier available)
2. Get your API key
3. Add `RESEND_API_KEY=re_xxxx` to `.env.local`
4. Install: `npm install resend`
5. Uncomment the Resend block in `route.ts`

### Log to Google Sheets via Zapier
1. Go to [zapier.com](https://zapier.com) and create a new Zap
2. Trigger: **Webhooks by Zapier → Catch Hook**
3. Action: **Google Sheets → Create Spreadsheet Row**
4. Copy the webhook URL into `.env.local` as `ZAPIER_WEBHOOK_URL`
5. Uncomment the Zapier block in `route.ts`

---

## Deploying to Vercel

Vercel is the easiest way to deploy a Next.js site. It's free for personal/small projects.

### 1. Push your code to GitHub

If you haven't already:
```bash
git init
git add .
git commit -m "Initial commit"
```

Create a new repo on GitHub, then:
```bash
git remote add origin https://github.com/YOUR_USERNAME/ward-consulting.git
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign up (use your GitHub account)
2. Click **Add New Project**
3. Import your `ward-consulting` GitHub repository
4. Leave all settings as defaults — Vercel auto-detects Next.js
5. Click **Deploy**

Your site will be live at a `*.vercel.app` URL in about 60 seconds.

### 3. Add environment variables on Vercel

1. In your Vercel project, go to **Settings → Environment Variables**
2. Add the same variables from your `.env.local` file
3. Redeploy (Vercel dashboard → **Deployments → Redeploy**)

### 4. Add a custom domain (optional)

1. In Vercel, go to **Settings → Domains**
2. Add your domain (e.g. `wardconsulting.com`)
3. Follow the DNS instructions Vercel provides

---

## Project Structure

```
ward-consulting/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts     ← Form submission handler
│   ├── globals.css
│   ├── layout.tsx           ← Root layout + SEO metadata
│   └── page.tsx             ← Main landing page
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── Solution.tsx
│   ├── HowItWorks.tsx
│   ├── Package.tsx
│   ├── WhoItsFor.tsx
│   ├── DemoWorkflow.tsx
│   ├── FAQ.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── .env.example             ← Template for environment variables
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## Adding Your Demo Video

To embed a demo video, open `components/Package.tsx` and replace the blue note box with an embed:

```tsx
{/* Replace this with your actual video embed */}
<div className="aspect-video rounded-2xl overflow-hidden bg-slate-100 mb-6">
  <iframe
    src="https://www.loom.com/embed/YOUR_VIDEO_ID"
    className="w-full h-full"
    allowFullScreen
  />
</div>
```

Loom links follow the format: `https://www.loom.com/share/XXXX` → change `share` to `embed`.

---

## Quick Command Reference

| Command | What it does |
|---|---|
| `npm install` | Install all dependencies |
| `npm run dev` | Start local dev server (localhost:3000) |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint checks |
