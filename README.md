# My Design System

A sample design system built with React + Storybook.
Design tokens live in `src/tokens/tokens.css` — this is the single source of truth for colors, typography, spacing, and more.

## Getting Started

```bash
npm install
npm run storybook
```

Storybook will open at http://localhost:6006

## Structure

```
src/
├── tokens/
│   └── tokens.css          ← All design tokens (colors, spacing, type)
└── components/
    └── Button/
        ├── Button.jsx       ← Component
        ├── Button.css       ← Styles (uses tokens)
        └── Button.stories.jsx ← Storybook stories
```

## Adding a New Component

1. Create a folder under `src/components/YourComponent/`
2. Add `YourComponent.jsx`, `YourComponent.css`, and `YourComponent.stories.jsx`
3. Use CSS variables from `tokens.css` for all style values

## Design Token Workflow

1. Make a change in Figma
2. Ask Claude to sync it to `tokens.css`
3. Commit + push via GitHub Desktop
4. Storybook updates automatically
