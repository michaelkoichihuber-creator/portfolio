# Michael Huber — Developer Portfolio

A clean, responsive landing page built with React + Vite, showcasing projects
with live demo and source links.

## Running locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── components/
│   ├── Hero          # Name, subtitle, intro
│   ├── Projects       # Projects section wrapper + grid
│   ├── ProjectCard     # Individual project card (title, description, links)
│   └── Footer         # Site footer
├── data/
│   └── projects.js    # Project content and links
└── index.css           # Design tokens + global styles
```

## Stack

React + Vite + Vercel
