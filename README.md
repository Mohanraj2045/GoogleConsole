# Dummy Netlify Website

A small multi-page static website you can deploy directly to Netlify.

## Pages

- `index.html`
- `about.html`
- `services.html`
- `contact.html`
- `404.html`
- `google79c3c0cd98ef7f41.html` (Google Search Console verification file)

## Project Structure

- `assets/css/styles.css` - shared styling
- `assets/js/main.js` - active navigation highlighting
- `netlify.toml` - Netlify publish and security headers
- `scripts/smoke_test.py` - lightweight page/link smoke test

## Local Run

```bash
npm run smoke
npm run serve
```

Open `http://localhost:8080` in your browser.

## Deploy to Netlify

### Option 1: Drag and Drop
1. Zip this project folder.
2. Go to Netlify -> Sites -> Add new site -> Deploy manually.
3. Drop the zip/folder.

### Option 2: Connect Git Repo
1. Push this project to GitHub/GitLab/Bitbucket.
2. In Netlify, choose **Add new site -> Import an existing project**.
3. Build settings:
   - Build command: *(leave empty)*
   - Publish directory: `.`
4. Deploy.

After deploy, verify these routes:

- `/`
- `/about.html`
- `/services.html`
- `/contact.html`
- `/google79c3c0cd98ef7f41.html`
- Any unknown route should render `404.html`

The verification file is kept at the site root and is also linked in the main navigation for quick access.

