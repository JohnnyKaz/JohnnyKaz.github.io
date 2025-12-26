
# Personal Portfolio Website

This is a portfolio website built with React, TypeScript, and Vite. The original project is available at https://www.figma.com/design/Z9xhRfBoepUX5WdSBAAPNd/Personal-Portfolio-Website.

## Running the code locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

The site will open at `http://localhost:3000`.

## Deploying to GitHub Pages

### Initial Setup

1. Create a new repository on GitHub
2. Initialize git and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

### Deploy

Run the deploy command to build and publish to GitHub Pages:
```bash
npm run deploy
```

This will:
- Build your site for production
- Create/update the `gh-pages` branch
- Push the built files to GitHub Pages

### Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select the `gh-pages` branch
4. Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Updating the Site

Whenever you make changes:
```bash
git add .
git commit -m "Your commit message"
git push
npm run deploy
```

## Credits

This project includes components from [shadcn/ui](https://ui.shadcn.com/) used under [MIT license](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md).

Photos from [Unsplash](https://unsplash.com) used under [license](https://unsplash.com/license).
  