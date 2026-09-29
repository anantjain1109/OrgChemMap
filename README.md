# OrgChemMap
Interactive 3D map of JEE Advanced Organic Chemistry (Class 11-12). Static site: HTML, CSS, JavaScript only.

## Run locally
`python -m http.server 8080` then open http://localhost:8080

## Add a chapter
1. Generate the chapter page with the team prompt; save as `chapter/class11/Name.html` or `chapter/class12/Name.html` (no spaces in file names).
2. In `assets/chapters.js`, set `ready:true` for that chapter (or add a new line).
3. Update `weightage` from your book stats. Push to GitHub; Vercel redeploys automatically.

Educational project. Verify all chemistry against standard textbooks.
