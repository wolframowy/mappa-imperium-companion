# Mappa Imperium Companion - AI Coding Instructions

## Project Overview

This is a React Router 7 web app for the "Mappa Imperium" tabletop game, providing quick table lookups and customizable options. The app serves as a digital companion for a world-building RPG.

## Architecture & Key Patterns

### Content-Driven Design

- **Static JSON Data**: All game content lives in `app/assets/text/*.json` files with structured data
- **Dynamic Tables**: Tables are referenced by ID keys in `Tables.json` and rendered with the `Table` component
- **Text References**: Use `[Display Text](#tableId)` syntax in content; `TextWithRefs` component creates popup table lookups

### Component Structure

- **Layout Pattern**: `root.tsx` provides global layout with theme switching and table shelf context
- **Route Organization**: Era-based routes (`era1.tsx` through `era6.tsx`) plus core gameplay routes
- **Reusable Components**: Focus on `Table`, `Section`, `TextWithRefs`, `TableShelf` for consistent UI

### State Management

```tsx
// Global context for table shelf (quick access tables)
export const TableShelfContext = createContext<{
  lookupTables: Array<any>;
  setLookupTables: (tables: Array<any>) => void;
} | null>(null);
```

### Table System

- **Data Format**: `{ Title?: string, Header: string[], Rows: string[][] }`
- **Auto-splitting**: Tables auto-split into columns based on row count (6 rows per column max)
- **Quick Access**: Tables can be added to a persistent "shelf" for easy reference during play

## Development Workflow

### Commands

```bash
npm run dev          # Development server with HMR (port 5173)
npm run build        # Production build
npm run typecheck    # Type checking with React Router codegen
```

### File Organization

- Routes: `app/routes/*.tsx` - each era and core game section
- Components: `app/components/*.tsx` - reusable UI components
- Data: `app/assets/text/*.json` - all game content and tables
- Styling: TailwindCSS 4 with custom theme in `app.css`

## Key Conventions

### Styling

- **Theme System**: Dark/light mode with custom color palette (primary, accent colors)
- **Custom Classes**: `inset-shadow-*`, `text-shadow-*` for game aesthetic
- **Responsive**: Mobile-first design with expanding table shelf on larger screens

### Content References

- Use `TextWithRefs` for any text containing table references
- Reference format: `[Display Text](#tableId)` where tableId matches Tables.json keys
- Tables auto-render in responsive popups/modals

### Component Props

- `Table`: Always include `autoSplit={true}` for responsive column behavior
- `Section`: Use `noUnderline` prop for title-only sections
- Prefer `dangerouslySetInnerHTML` for JSON content containing HTML links

## Integration Points

### External Dependencies

- `reactjs-popup`: For table reference popups
- `react-router`: Modern file-based routing with SSR
- Custom media query utilities in `util/mediaQueries.tsx`

### Build & Deployment

- Vite-powered with Docker support
- Production base path: `/mappa-imperium-companion/`
- Assets bundled to `build/client/assets/`

## Content Editing

When adding new game content:

1. Add structured data to appropriate `app/assets/text/*.json` file
2. Reference tables using `[Text](#tableKey)` syntax in content
3. Ensure table data follows the standard `{ Header: [], Rows: [] }` format
4. Test table splitting behavior with `autoSplit={true}`
