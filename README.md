# ekonkar.systems

Personal portfolio for Ekonkar Singh, built with Next.js (App Router) and Tailwind CSS.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Editing content

All copy lives in `content/`; no component changes are needed to update it.

| What | Where |
|---|---|
| Name, role, headline, summary, email | `content/root/whoami.md` |
| Skills, certifications, publications | `content/etc/config.yaml` |
| Experience (one file per role) | `content/cronjobs/*.md` |
| Projects (one file per project) | `content/deployments/*.md` |

Set `featured: true` in a project to pin it to the top of the grid and include it on the resume page.
Site-wide links and SEO text are in `lib/site.ts`. The printable resume at `/resume` is generated from the same content.
