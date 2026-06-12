# Home Dashboard

A personalized home dashboard with customizable panels, Google Calendar integration, and more!

## Features
- 🎨 Drag-and-drop customizable panels
- 📅 Google Calendar integration
- ⚙️ Settings panel with visibility toggles
- 📱 Responsive iPad/Safari optimized design
- 🔐 OAuth authentication with Google

## Setup
1. Add environment variables to Vercel:
   - DATABASE_URL (NeonDB PostgreSQL)
   - GOOGLE_CLIENT_ID
   - GOOGLE_CLIENT_SECRET
   - NEXTAUTH_SECRET (generate one)
   - NEXTAUTH_URL (https://your-domain.com)

2. Install dependencies: `npm install`
3. Run: `npm run dev`

## Deployment
Connected to Vercel with automatic deploys on git push.
