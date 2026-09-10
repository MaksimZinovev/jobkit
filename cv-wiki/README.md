# CV wiki (Quarkdown)

A CV compiled into a 9-page searchable site: sidebar navigation with active-page highlight, per-page table of contents, full-text search across pages. Sources live in `src/` (`main.qd`, `_setup.qd`, `_nav.qd`, 8 subdocuments).

The full guide to converting a CV into Quarkdown documents is in [`../cv-slides/README.md`](../cv-slides/README.md).

## View

```bash
python3 -m http.server 8472
```

Run from this folder, then open <http://localhost:8472>. Search needs HTTP; `file://` blocks the `search-index.json` fetch, navigation still works.

![Wiki search results](screenshots/shot-8-search.png)

## Rebuild

```bash
quarkdown c src/main.qd --strict --out build
cp -R build/Maksim-Zinovev-CV-Wiki/* .
```