# Giotto ARC workshop landing page

Standalone static website, independent of the ARC editor.

- The download box retrieves the assigned team's task from `https://storage.googleapis.com/giotto-events-efpl-download/FILE_NAME.json`. File names accept an optional `.json` suffix and surrounding whitespace.
- Downloads save the file locally. If the direct URL blocks browser requests, the Google Cloud Storage JSON download API retrieves the same object with CORS support. Files must be publicly readable; missing files and download failures show an inline message.
- Submissions use two password-protected Tally forms: [Submit JSON](https://tally.so/r/xXeqrv) and [Submit rule description](https://tally.so/r/A7Vgd0).
- The supplied logo is `logo_oct5.jpeg`; CSS hides its white margins.
- Preview: `python3 -m http.server 8000`.

GitHub Pages deploys on pushes to `main`. Set Settings → Pages → Source to **GitHub Actions**. Only `index.html`, `styles.css`, `download.js`, `logo_oct5.jpeg`, and `.nojekyll` are published.
