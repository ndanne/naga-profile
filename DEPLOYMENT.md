# GitHub Pages Deployment Guide

## 🚀 Automated Deployment with GitHub Actions

This portfolio website is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Requirements:
- **Node.js 18+** (using Node.js 20 in CI)
- **Stable versions**: React 18, React Router 6, Vite 5
- **TypeScript support** for type safety
- **Sass/SCSS** for styling

### Setup Steps:

1. **Enable GitHub Pages**:
   - Go to your repository: https://github.com/ndanne/naga-profile
   - Click on **Settings** tab
   - Scroll down to **Pages** section (left sidebar)
   - Under **Source**, select **GitHub Actions**

2. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Deploy portfolio website"
   git push origin main
   ```

3. **Automatic Deployment**:
   - The workflow will automatically trigger on every push to `main`
   - Check the deployment status at: https://github.com/ndanne/naga-profile/actions
   - Once complete, your portfolio will be live at: https://ndanne.github.io/naga-profile

### Manual Deployment (Alternative):

If you prefer manual deployment using gh-pages:

```bash
# Build and deploy manually
npm run build
npm run deploy
```

### Configuration Files:

- **GitHub Actions**: `.github/workflows/deploy.yml`
- **Base URL**: Configured in `vite.config.ts` (for GitHub Pages)
- **Homepage**: Set in `package.json` (https://ndanne.github.io/naga-profile)
- **SPA Routing**: `public/404.html` + script in `index.html` for client-side routing
- **TypeScript**: `tsconfig.json` and `tsconfig.app.json` for type checking

### Troubleshooting:

1. **Check GitHub Actions logs** if deployment fails
2. **Ensure Pages is enabled** in repository settings
3. **Verify base URL** matches your repository name
4. **Check Node.js version** compatibility (using Node 20 for Vite 5)
5. **Peer Dependency Issues**: Uses `--legacy-peer-deps` to resolve React version conflicts
6. **Build Verification**: Workflow verifies `dist` directory exists after build

That's it! Your portfolio website will be automatically deployed to GitHub Pages on every push to main! 🎉

## 📝 Additional Notes:

- **Portfolio Sections**: Home, About, Projects, Contact
- **Responsive Design**: Works on desktop and mobile devices
- **Modern Tech Stack**: React 18, TypeScript, Sass, Vite
- **Performance Optimized**: Built with Vite for fast loading

## 🔗 Live Portfolio:
[View Portfolio](https://ndanne.github.io/naga-profile)
