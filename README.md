# My Design System

Built with React + Storybook, synced from the NOCT Design System in Figma.
Design tokens live in `src/tokens/tokens.css` — the single source of truth.

## Getting Started

```bash
npm install
npm run storybook
```

Storybook opens at http://localhost:6006

## Structure

```
src/
├── tokens/
│   └── tokens.css              ← All design tokens (synced from Figma)
└── components/
    └── Button/
        ├── Button.jsx
        ├── Button.css
        └── Button.stories.jsx
```

## Syncing from Figma

1. Make changes in Figma
2. Ask Claude to sync → it updates tokens.css
3. Copy only the updated file(s) into this folder
4. Commit + push via GitHub Desktop
