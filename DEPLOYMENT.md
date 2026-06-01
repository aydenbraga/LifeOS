# LifeOS Deployment Guide

This guide will take your local LifeOS project to a live, cloud-synced production environment.

## 🏗️ Infrastructure Stack
- **Frontend:** [Vercel](https://vercel.com) (Optimized for Next.js)
- **Backend/Database:** [Supabase](https://supabase.com) (PostgreSQL + Auth + Realtime)
- **AI Intelligence:** [Anthropic Claude API](https://console.anthropic.com)

---

## 🚀 Step 1: Database Setup (Supabase)
1. Create a free account at [supabase.com](https://supabase.com).
2. Create a new project named `LifeOS`.
3. Go to the **SQL Editor** in the left sidebar.
4. Copy the contents of `packages/db/schema.sql` from this repository.
5. Paste the SQL into the editor and click **Run**.
   - This will instantly build your entire "Nervous System" (Profiles, Health, Gym, Study, Finance, Habits, Goals).

## 🚀 Step 2: Environment Variables
Create a `.env.local` file in `apps/web/` (or add these to the Vercel dashboard):

```env
# Supabase Config
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Local AI (Ollama) Configuration
OLLAMA_ENDPOINT=http://localhost:11434/api/generate
OLLAMA_MODEL=llama3
```

## 🚀 Step 3: Frontend Deployment (Vercel)
1. Push your code to a GitHub repository.
2. Connect your GitHub account to [Vercel](https://vercel.com).
3. Import the `LifeOS` repository.
4. **Crucial Configuration**:
   - **Root Directory**: `apps/web`
   - **Framework Preset**: `Next.js`
   - **Build Command**: `npm run build`
   - **Install Command**: `npm install`
5. Add the Environment Variables from Step 2 into the Vercel "Environment Variables" section.
6. Click **Deploy**.

---

## ✅ Post-Deployment Checklist
- [ ] **Auth Test**: Try signing up/logging in via the app.
- [ ] **Data Flow**: Log a weight entry in the Health Hub $\rightarrow$ Verify it appears in the Supabase Table Editor.
- [ ] **AI Briefing**: Check if the Home Dashboard generates a briefing based on the data.
- [ ] **Responsiveness**: Open the Vercel URL on your iPhone/Android to verify the mobile-first design.
