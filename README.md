# OrgChemMap

OrgChemMap is a simple static site for navigating organic chemistry chapters.

## Project structure

```text
OrgChemMap/
├─ index.html
├─ 404.html
├─ README.md
├─ robots.txt
├─ assets/
│  ├─ favicon.svg
│  └─ chapters.js
└─ chapter/
   ├─ class11/
   └─ class12/
```

## Add a new chapter

1. Create a new HTML file in the correct class folder:
   - `chapter/class11/` for Class 11
   - `chapter/class12/` for Class 12
2. Add the new chapter entry in `assets/chapters.js`:
   - `className`: `class11` or `class12`
   - `title`: card/search display title
   - `file`: chapter HTML filename
3. Open `index.html` and verify the new chapter appears in cards, search results, and graph.
