# Hero IO

Hero IO is a responsive app discovery platform built for Assignment 03. Users can browse top apps, search all apps in real-time, sort by downloads, view app details with review charts, install apps, and manage installed apps from a dedicated installation page.

## Live Features

- Responsive layout for mobile, tablet, and desktop
- Header with active nav links and contribution button
- Home page banner, stats section, and top apps section
- All apps page with live case-insensitive search
- Sort by downloads (High-Low, Low-High)
- App details page with install flow and Recharts review chart
- Installation page with uninstall functionality
- LocalStorage persistence for install state
- Custom error pages and relevant not found messages
- Loading animations for route change and search interactions

## Technologies

- React
- React Router DOM
- Recharts
- Vite
- CSS

## Local Setup

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deployment Guide

### 1) Netlify

1. Push your project to GitHub.
2. In Netlify, click Add new site -> Import an existing project.
3. Connect your repository and select this project.
4. Use:
	- Build command: `npm run build`
	- Publish directory: `dist`
5. Deploy site.

Netlify SPA reload fix is already included in `netlify.toml` and `public/_redirects`.

### 2) Vercel

1. Push your project to GitHub.
2. In Vercel, click Add New -> Project.
3. Import your repository.
4. Framework preset: Vite (auto-detected).
5. Build and deploy.

Vercel SPA reload fix is already included in `vercel.json`.

### 3) Cloudflare Pages

1. Push your project to GitHub.
2. In Cloudflare Pages, Create a project and connect your repository.
3. Use:
	- Build command: `npm run build`
	- Build output directory: `dist`
4. Deploy.

Cloudflare route reload support is covered using `public/_redirects`.

## Submission

- **Live Link:** https://mission-restart-a3.netlify.app
- **GitHub Repository:** https://github.com/solaimanSawon/Mission-Restart-A3

## Submission Checklist

- ✅ Live link added in this README.
- ✅ GitHub repository link added in this README.
- ⏳ Make at least 5 meaningful commits.
- ✅ Verify all routes work after reload on deployed site.

## Assignment Notes

- JSON dataset contains 12 app objects following the required structure.
- Install state is saved in browser localStorage and restored automatically.
- Reload-safe routing is implemented for SPA deployment targets such as Netlify, Vercel, and Cloudflare.
