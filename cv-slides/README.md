# CV to interactive Quarkdown documents

A CV compiled to interactive slides (this folder) and a searchable wiki (`../cv-wiki/`), both from `.qd` files in `src/`.

## Why

A PDF forces one reading order. A deck suits an interview; a searchable wiki lets a reader jump straight to the proof. One source file per format keeps both in sync with your CV.

## What Quarkdown is

An open-source document compiler. Write `.qd` files (markdown plus small functions) and one command compiles them to slides, multi-page HTML, or PDF. Themes, Mermaid diagrams, and client-side search come built in.

## Quickstart

```bash
brew install quarkdown
quarkdown c src/cv-slides.qd --strict
```

Open the `index.html` in the output folder it prints.

## Steps

1. One `.qd` file per format. Slides: `.doctype {slides}`. Wiki: `.include {docs}` plus `_nav.qd` and `_setup.qd`.
2. Content as markdown. Add interaction where it pays: `.grid` with a custom `.stat` function for numbers, `.fragment` for reveals, a Mermaid gantt for the timeline.
3. Compile with `--strict`, fix every error.

## Gotchas

- A line starting `.github/...` parses as a function call; use backticks.
- No sidebar from `.doctype {docs}` alone; the docs library plus `_nav.qd` adds it.
- A Mermaid gantt on slides needs `%%{init}%%` with fontSize and barHeight, or labels are tiny.
- Mermaid still draws gantt labels at `#d3d3d3`, hard-codes 10px axis years, and the slides layout caps diagrams at 50vh. The `.css` block at the top of `src/cv-slides.qd` overrides all three; keep it in the source, not in `theme/`, or recompiles drop it.
- Wiki search fetches `search-index.json`; it fails silently on `file://`, navigation still works.
- The output folder is named after `.docname`; copy its contents as needed.
- Wiki subpages show the title twice. Cosmetic.

## What you get

Deck: 10 dark slides, stat tiles, career gantt, click-to-reveal fragments. Wiki: 9 pages, sidebar, per-page TOC, cross-page search.

![Deck stat tiles](screenshots/shot-2-glance.png)
![Wiki search](../cv-wiki/screenshots/shot-8-search.png)

Screenshots are gitignored.

## View locally

```bash
python3 -m http.server 8471 -d cv-slides   # deck
python3 -m http.server 8472 -d cv-wiki     # wiki; search needs HTTP
```