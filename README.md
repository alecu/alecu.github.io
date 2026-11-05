# alecu.protocultura.net

Source of https://alecu.protocultura.net/, a showcase of alecu's volunteer and community projects. Jekyll on GitHub Pages. The overhaul plan is in [PLAN.md](PLAN.md).

## Local preview

Needs Ruby 3.x.

```bash
bundle install
bundle exec jekyll serve
```

## Where things are

- `_projects/` one file per project: front matter drives the homepage cards, the body is the project page.
- `_posts/` blog posts. `archive: true` moves a post to `/archive/`; `project: <slug>` lists it on that project's page.
- `_data/demos.yml` the demos section. `_data/i18n.yml` UI strings.
- `img/projects/` and `img/restorations/` hold the photos, resized to at most 1600px.
