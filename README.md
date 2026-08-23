# Squirrel Construction — Separated Website

## Structure

- `index.html` — page shell and component placeholders
- `css/main.css` — existing website CSS
- `js/main.js` — existing website JavaScript
- `components/navbar.html` — navbar
- `components/services.html` — services
- `components/about.html` — about
- `components/projects.html` — projects/gallery
- `components/footer.html` — footer

The JavaScript was extracted from `index.html` without intentionally changing
the existing website behavior or component markup.

Run through a static server because the components are loaded with `fetch()`:

```bash
npx serve .
```
