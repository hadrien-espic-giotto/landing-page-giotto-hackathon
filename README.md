# Giotto ARC workshop landing page

Standalone static website, independent of the ARC editor.

- Add rules in `index.html` under “Workshop rules”.
- Submissions use two password-protected Tally forms: [Submit JSON](https://tally.so/r/xXeqrv) and [Submit rule description](https://tally.so/r/A7Vgd0).
- The supplied logo is `logo_oct5.jpeg`; CSS hides its white margins.
- Preview: `python3 -m http.server 8000`.

GitHub Pages deploys on pushes to `main`. Set Settings → Pages → Source to **GitHub Actions**. Only `index.html`, `styles.css`, `logo_oct5.jpeg`, and `.nojekyll` are published.
