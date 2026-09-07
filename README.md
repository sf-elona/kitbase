# Kitbase

A small, growing library of free UI kits, templates and design notes — built and
maintained by **Shafiatul Ferdous**, a UI/UX designer based in Dhaka.

Static multi-page site: plain HTML + CSS, one small JS file. No build step.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home — hero, featured kits, blog teaser, newsletter |
| `kits.html` | Grid of free Figma / HTML kits |
| `templates.html` | Free and premium templates |
| `premium.html` | Premium Pack pitch + pricing (checkout placeholder) |
| `blog.html` | Design notes |
| `about.html` | About the designer + links |
| `contact.html` | Contact form (demo) + direct links |

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy (GitHub Pages)

1. Push this folder to a public repo.
2. Repo **Settings → Pages → Build from branch → `main` / root**.
3. Site goes live at `https://<username>.github.io/<repo>/`.

The `.nojekyll` file tells Pages to serve everything as-is.

## Making it real

- **Downloads** — link the kit cards to Figma Community pages or files in a `/files` folder.
- **Payments** — point the Premium buttons at a [Gumroad](https://gumroad.com) or
  [Lemon Squeezy](https://lemonsqueezy.com) product (one embed per page).
- **Forms** — connect the newsletter and contact forms to
  [Formspree](https://formspree.io), Buttondown or ConvertKit.
- **Analytics** — add a privacy-friendly tag like [Plausible](https://plausible.io).

## License

Site code: MIT. Resource files distributed through the site carry their own licenses.
