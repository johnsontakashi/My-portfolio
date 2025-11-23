# Deployment Instructions

## Manual Deployment to Vercel

1. Go to [vercel.com](https://vercel.com) and log in with your account
2. Click "New Project" 
3. Import from Git Repository:
   - Connect your GitHub account if not connected
   - Select the repository: `My-portfolio` or `johnsontakashi/My-portfolio`
4. Configure the project:
   - Framework Preset: **Next.js**
   - Root Directory: **./** (leave as default)
   - Build Command: **npm run build** (should be auto-detected)
   - Output Directory: **.next** (should be auto-detected)
5. Click "Deploy"

## Alternative: Deploy via GitHub Integration

1. The project should auto-deploy when you push to the main branch
2. Check your Vercel dashboard for deployment status
3. The URL will be something like: `https://my-portfolio-{random-string}.vercel.app`

## Local Development

To run locally:
```bash
npm install
npm run dev
```

Visit: http://localhost:3000