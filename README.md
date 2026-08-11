# Jules HABARUREMA — Portfolio

Developer portfolio for Jules HABARUREMA, Senior Software Engineer & Team Lead.

**Live:** [jules-hb-250.netlify.app](https://jules-hb-250.netlify.app)

## Stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion
- React Scroll

## Project Structure

```
src/
├── data/                  # CV content (single source of truth)
│   ├── profile.js         # Personal info, links, about
│   ├── experience.js      # Work history
│   ├── education.js       # Academic background
│   ├── projects.js        # Portfolio projects
│   ├── skills.js          # Tech stack
│   ├── navigation.js      # Nav links
│   └── index.js           # Barrel export
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # Hero, About, Experience, Projects, Skills, Contact
│   ├── ui/                # Reusable: Button, Badge, ProfilePhoto, ProjectCard
│   └── index.js
├── App.jsx
├── main.jsx
└── index.css
```

## Development

```bash
npm install
npm run dev
```

## Updating Content

Edit files in `src/data/` to update portfolio content. All sections pull from this data layer, keeping content separate from UI.
