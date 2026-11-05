# Site overhaul plan

Goal: turn alecu.protocultura.net into a showcase of alecu's volunteer and community projects, with the projects above the fold and retrospective blog posts about the work behind them.

Decisions so far:

- English first. Structure is ready for `/es/`, and a translation pass is the last step of the work.
- Stay on Jekyll and GitHub Pages, with whitelisted plugins only.
- Keep the tagline "Retrofuturismo con alecu".
- Framing: "community and volunteer projects". Name the groups (Club de Jaqueo, Megajuegos, EspacioTec).
- Old Snappy posts move to an Archive and stay out of the main blog and the homepage.
- Reflektor links to `http://reflektor.protocultura.net/` (currently redirects to the post on this blog; adjust later if the blog layout changes).
- One restoration project is **not public yet**. Nothing about it goes into this repo (it is public) until alecu says so. Private notes live in `.private/`, which git ignores.

## Projects

Main (cards above the fold):

| Project | Link | Notes |
|---|---|---|
| Ventilastation | https://ventilastation.protocultura.net/ | Winner of the Ultimate IndieMash (broadcast 24 May 2025; [Sickhouse announcement](https://www.sickhouse.nl/news/ventilastation-winner-uim), 26 May 2025). Prize: a place at the Overkill Festival. |
| Super Ventilagon | https://ventilagon.protocultura.net/ | The original game that grew into Ventilastation (2015). |
| Reflektor | http://reflektor.protocultura.net/ | First electromechanical game (2013). |
| Megajuegos | https://www.megajuegos.com.ar/ | Founded and led by alecu, 2016-2022. |
| Restorations | `/projects/restorations/` | Apple Lisa (alecu's collection) and restorations for EspacioTec. |

Smaller (demos and tools):

- Vlad Farty, 1st place oldskool demo, FlashParty '23. https://www.youtube.com/watch?v=Qut9HRcUoM0
- Alisando el Camino (Apple Lisa demo), 2nd place oldskool demo, FlashParty '26. https://www.youtube.com/watch?v=NqTfBPqbfzc
- numsid, a C64 SID / Amiga MOD / MIDI player in Python, with video: https://www.youtube.com/watch?v=QAMZvv-m03c. Repo: https://github.com/alecu/numsid

Talks (new):

| Talk | Event | Language | Links |
|---|---|---|---|
| Videojuegos en un Ventilador | Nerdearla Buenos Aires 2025, Maker/Retro track | Spanish | [Video](https://www.youtube.com/watch?v=Kwif1NEeSZU), [Nerdearla page](https://nerdearla.com/nerdflix/Kwif1NEeSZU/) |
| Juegos en un ventilador con MicroPython | PyDay Hurlingham 2024, 26 October 2024, UNAHUR auditorium, organised by Python Argentina and UNAHUR | Spanish | [Video](https://www.youtube.com/watch?v=8yWTWJdrpBc), [Event page](https://eventos.python.org.ar/events/pyday-hurlingham-2024/) |

What each talk covers, from the event pages: the Nerdearla talk is about designing and building the first open source, open hardware console made in Latin America, and the highs and lows of amateur hardware projects. The PyDay talk presents Ventilastation, its history and how it works, and shows how to write your own games with MicroPython.

The first talk is the Nerdearla talk the Ventilastation site already lists, so it is not a third talk. Both talks used the same slides, `dump2024` ("The history and future of Ventilastation"), published at https://ventilastation.protocultura.net/dump2024/ (source: https://github.com/ventilastation/dump2024). Both talk entries link to them as `slides`.

Not shown yet: other unannounced work. Private notes live in `.private/`.

## Information architecture

- `/` home
- `/projects/<slug>/` one page per project, one per file in `_projects/`, which also drive the homepage cards
- `/talks/` talks, newest first: title, event, date, language, video, slides when there are any
- `/blog/` posts, filterable by project; each post has `project:` front matter
- `/archive/` the 2015 Snappy posts and other old writing
- `/about/`

Talks live in `_data/talks.yml` with an optional `project:` field, so a talk also shows up on its project page next to the related posts. The site is English-first, so each talk carries its spoken language (`es`/`en`) and is labelled when it is not English. Videos load on click, like the demos.

Projects are a Jekyll collection (`_projects/*.md`): front matter drives the homepage cards and the body is the project page. Unannounced work is not added to the repo at all.

## Homepage

Thin header, one-line intro with the tagline, then the card grid above the fold:

```
┌──────────────────────┬─────────────┬─────────────┐
│ VENTILASTATION       │ Ventilagon  │ Reflektor   │
│ photo + IndieMash    ├─────────────┼─────────────┤
│ winner badge         │ Megajuegos  │ Restorations│
└──────────────────────┴─────────────┴─────────────┘
```

Mobile stacks the cards with Ventilastation first. Below the fold:

1. Lineage strip: Reflektor (2013) → Super Ventilagon (2015) → Ventilastation (2025)
2. Restorations spotlight (Lisa for now)
3. Demos and small projects (YouTube embeds load on click)
4. Talks: the latest two or three, with a link to `/talks/`
5. Latest writing
6. About and contact

## Technical approach

- Jekyll, GitHub Pages compatible. Plugins: `jekyll-seo-tag`, `jekyll-redirect-from`. The RSS feed is a hand-written `feed.xml` that skips archived posts.
- Remove Bootstrap 3, jQuery, Grunt/LESS, and the `theme: jekyll-theme-cayman` line. Plain CSS, dark retro-futurist look, light/dark following the system.
- Keep existing post URLs. Use `redirect_from` wherever a URL changes. Switch `url` to https.
- Localisation-ready: `lang:` in front matter, UI strings in `_data/i18n.yml`, `/es/` reserved, `hreflang` added when Spanish pages exist.
- Photos: originals stay out of the repo. A script produces web-sized images (about 1600px) and thumbnails into `img/`.
- Social cards and `description` on every page.

## Photos

Placeholders for now. Once the texts are approved, alecu exports matching photos from the Google Photos albums (links in `.private/`) and the build script resizes them into `img/`. Originals stay out of the repo.

## Blog backlog

Written as retrospective posts, drafted from repos, commit history, docs and alecu's notes, then edited by alecu before publishing. Order is by impact:

1. Ventilastation: path from Ventilagon, ESP32 with 107 LEDs at 600 RPM, slip ring, MicroPython and the VS2 API, the IndieMash win, the two talks (the shared `dump2024` slides are a source).
2. Apple Lisa restoration: multi-part series (ProFile and ESProFile storage, the Alisando demo).
3. Super Ventilagon: POV display, Wixel link, press coverage.
4. Megajuegos 2016-2022: founding, adapting *Vigilen los Cielos*, building *Independencia*, running 50+ player games, funding for school cooperadoras. Needs alecu's input.
5. Reflektor making-of: beyond the existing post.
6. Demos: Vlad Farty, Alisando el Camino, numsid.
7. Talk companions (optional): a short post per talk with the summary, slides and links, which also gives non-Spanish readers something to read.
8. Unannounced restorations: drafted privately in `.private/`, published only after the announcement.

## Phases

1. **Foundation (done, uncommitted on `site-overhaul`):** branch, clean out the old theme, new layouts, CSS tokens, the `_projects/` collection, redirects.
2. **Homepage** with placeholder images and draft copy (done, awaiting text review).
3. **Project pages, blog, archive** (done; Snappy posts are tagged `archive: true`). `/restorations/` became the project page `/projects/restorations/`.
3b. **Talks (done):** `_data/talks.yml`, the `/talks/` page, a homepage block and a list on the Ventilastation page. Talks are in the nav.
4. **Content:** write posts in batches, one project per batch, with alecu reviewing each.
5. **Polish:** accessibility, performance, social cards, link check.
6. **Launch:** preview review, merge, verify the live URLs, including the old Reflektor URL.
7. **Translation (last):** Spanish for the project pages first, then selected posts; add `/es/` and `hreflang`.

## Still needed from alecu

- Matching photos, after the texts are approved.
- Talks: the exact Nerdearla date, if you want it shown.
- Confirmation of facts that can't be read online: Megajuegos history and the Lisa restoration timeline.
- Go-ahead before any unannounced work becomes public.
