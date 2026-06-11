# Portfolio

A single-page, static portfolio site — plain HTML/CSS/JS, **no build step**, hosted on GitHub Pages.

**Live:** https://zachou66.github.io/

## Editing it

All the content you'll change lives in **one file: [`projects.js`](projects.js)**.

- **Your name / headline / contact links** → the `SITE` object at the top.
- **Section wording** → the `SECTIONS` list.
- **Your projects** → the `PROJECTS` object, grouped into three sections:
  `azure` (Azure / Windows Server), `aws`, and `endpoint` (Windows / Endpoint).

To add a project, copy a `{ ... }` block into the right section and fill in:

```js
{
  title:       "Project name",
  description: "One line on what it does / what you did.",
  tags:        ["Tag1", "Tag2"],
  repo:        "https://github.com/you/your-repo"   // use "" to hide the button
}
```

Save, then commit and push — GitHub Pages redeploys automatically in about a minute.

## Files

| File          | What it is                                          |
|---------------|-----------------------------------------------------|
| `index.html`  | Page structure (rarely needs editing).              |
| `styles.css`  | Styling. Colors/spacing are variables at the top.   |
| `projects.js` | **Your data — edit this.**                          |
| `render.js`   | Builds the page from your data (no need to touch).  |

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000   # then visit http://localhost:8000
```
