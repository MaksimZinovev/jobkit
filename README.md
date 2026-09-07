# jobkit

**Assemble job applications from pre-written pieces.** Live: https://maksimzinovev.github.io/jobkit/

## What

A local explorer for reusable writing pieces extracted from work experience:
achievements, skills, role context, and personal projects. Select pieces, then
copy them as markdown or as a ready-to-paste prompt for an AI assistant.

Pieces live in `intellihub-extracted-pieces.json` and are tagged with canonical
target roles (`applied_ai`, `ai_enablement`, `test_automation`,
`quality_engineering`, `automation_tooling`) so filters match real job titles.

## Why

Tailoring an application means picking the right 10 pieces out of 65. Re-reading
raw notes each time is slow. The explorer makes selection the only task:
search, filter by role, tick, copy.

## Quick Start

```bash
# merge template + data into a self-contained file
node build.mjs

# open in a browser — double-click works too
open index.html
```

> **Note:** `index.html` is generated. Edit `pieces.template.html` or the JSON,
> then rebuild. Selections are saved in browser localStorage.

## Structure

```text
jobkit/
├── pieces.template.html              # the UI, no data
├── intellihub-extracted-pieces.json  # the pieces (source of truth)
├── build.mjs                         # merges template + data -> index.html
├── index.html                        # generated, self-contained; open by double-click
└── README.md
```

## Recommended skills and tools


| No  | Name   | Description                                                                         |
| --- | ------ | ----------------------------------------------------------------------------------- |
| 1   | Unslop | [Unslop](https://github.com/cursor/plugins/blob/main/pstack/skills/unslop/SKILL.md) |

