# Giotto ARC workshop landing page

Standalone static website, independent of the ARC editor.

- Add rules in `index.html` under “Workshop rules”.
- Replace the disabled submission button with a link when the URL is available.
- The supplied logo is `logo_oct5.jpeg`; CSS hides its white margins.
- Preview: `python3 -m http.server 8000`.

GitHub Pages deploys on pushes to `main`. Set Settings → Pages → Source to **GitHub Actions**. Only `index.html`, `styles.css`, `logo_oct5.jpeg`, and `.nojekyll` are published.
