# GitHub Pages Deployment Guide

## 🚀 Automated Deployment with GitHub Actions

The repository is already configured for automatic deployment to GitHub Pages using GitHub Actions.

### Requirements:
- **Node.js 18+** (using Node.js 20 in CI)
- **Stable versions**: React 18, React Router 6, Vite 5
- **npm with legacy peer deps** (for compatibility)

### Setup Steps:

1. **Enable GitHub Pages**:
   - Go to your repository: https://github.com/jawahar-mca/stock-app
   - Click on **Settings** tab
   - Scroll down to **Pages** section (left sidebar)
   - Under **Source**, select **GitHub Actions**

2. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Initial commit with GitHub Actions deployment"
   git push origin main
   ```

3. **Automatic Deployment**:
   - The workflow will automatically trigger on every push to `main`
   - Check the deployment status at: https://github.com/jawahar-mca/stock-app/actions
   - Once complete, your site will be live at: https://jawahar-mca.github.io/stock-app

### Manual Deployment (Alternative):

If you prefer manual deployment using gh-pages:

```bash
# Build and deploy manually
npm run build
npm run deploy
```

### Configuration Files:

- **GitHub Actions**: `.github/workflows/deploy.yml`
- **NPM Config**: `.npmrc` (handles peer dependency conflicts)
- **Base URL**: Configured in `vite.config.ts` (only for production builds)
- **Homepage**: Set in `package.json`
- **SPA Routing**: `public/404.html` + script in `index.html` for client-side routing

### Troubleshooting:

1. **Check GitHub Actions logs** if deployment fails
2. **Ensure Pages is enabled** in repository settings
3. **Verify base URL** matches your repository name
4. **Check Node.js version** compatibility (using Node 20 for Vite 5)
5. **Peer Dependency Issues**: Uses `--legacy-peer-deps` to resolve React version conflicts
6. **Build Verification**: Workflow verifies `dist` directory exists after build

That's it! Your React app will be automatically deployed to GitHub Pages on every push to main! 🎉
