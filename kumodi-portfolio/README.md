# Kumodi Bogahawatte — Academic Portfolio
### Software Engineering Undergraduate · Sri Lanka Institute of Information Technology (SLIIT) · PPW Assignment

Built with **React + Vite + Tailwind CSS**

---

## Project Structure

```
kumodi-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          ← Sticky nav + dark mode toggle
│   │   ├── Introduction.jsx    ← Hero section (10 marks)
│   │   ├── Journal.jsx         ← Reflective journal PPW
│   │   ├── CareerPlan.jsx      ← Career development plan
│   │   ├── CV.jsx              ← Curriculum vitae
│   │   ├── Certifications.jsx  ← Certifications / professional development
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
└── package.json
```

---

## Local Development

```bash
npm install       # Install dependencies
npm run dev       # Start at http://localhost:5173
npm run build     # Build for production
npm run preview   # Preview production build
```

---

## Deploy to Vercel

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
# Follow prompts — your site is live in seconds
# Redeploy: vercel --prod
```

### Option B — Vercel Dashboard

1. Push to GitHub
2. Go to https://vercel.com → Add New Project
3. Import your repo
4. Click Deploy (Vite auto-detected, no config needed)

**Build Settings (auto-detected):**
| Setting | Value |
|---|---|
| Framework | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |

---

## Export as PDF

1. Open the site in browser
2. Press **Ctrl+P** (or Cmd+P on Mac)
3. Destination: **Save as PDF**
4. Paper: A4 · Enable **Background graphics**
5. Save

The navbar, buttons, and decorative elements hide automatically in print mode.

---

## Personal Details

- Name: Kumodi Bogahawatte
- Email: kumodib@gmail.com
- Location: Colombo, Sri Lanka
- GitHub: https://github.com/KumodiBogahawatte
- LinkedIn: https://www.linkedin.com/in/kumodibogahawatte

---

*Kumodi Bogahawatte · SLIIT · 2026*
