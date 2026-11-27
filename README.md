# alecu.protocultura.net

Source of https://alecu.protocultura.net/, a showcase of alecu's volunteer and community projects. Jekyll on GitHub Pages. The overhaul plan is in [PLAN.md](PLAN.md).

## Local preview

Needs Ruby 3.x.

```bash
bundle install
bundle exec jekyll serve
```

## Where things are

- `_projects/` one file per project: front matter drives the homepage cards, the body is the project page. `card: false` keeps a project out of the card grid; The Lisa Sentinel has its own homepage section and uses the `game` layout.
- `emu/lisaem/` LisaEm Web, built with the LisaEm checkout's `web/build-pages.mjs`. `/emu/lisaem/?disk=sentinel` boots the newest Sentinel disk in `emu/lisaem/media/`.
- `downloads/` files offered for download, such as disk images and PDFs. When a new Sentinel beta replaces the one in `emu/lisaem/media/`, update `downloads/lisa-sentinel/` and the `version`, `released` and `disk` fields in `_projects/lisa-sentinel.md` to match.
- `_posts/` blog posts. `archive: true` moves a post to `/archive/`; `project: <slug>` lists it on that project's page, whose "Writing about this" section appears only once it has a post.
- `_data/demos.yml` the demos section. `_data/i18n.yml` UI strings.
- `img/projects/` and `img/restorations/` hold the photos, resized to at most 1600px.
