# Copilot Instructions for useful-calcs\_\_ls

## Project Overview

- **Stack:** React + TypeScript + Vite + SCSS + MUI
- **Main Features:**
  - **Alco-calendar:** Track daily alcohol consumption (standardized to vodka ml), display stats per day/month/year, and visualize in a calendar.
  - **Salary:** Calculate Polish net salary, including overtime, sick leave, vacation, etc.
- **Data Storage:** All user data is stored locally (localStorage); no backend/server communication.

## Architecture & Patterns

- **Component Structure:**
  - Major features are in `src/components/AlcoCounter` and `src/components/Salary`.
  - Shared UI and logic are organized in subfolders (e.g., `alcoComponents/`, `ui/`).
- **State Management:**
  - Uses Redux Toolkit (see `src/store/`).
  - Custom hooks in `src/store/hooks/redux.ts`.
  - Reducers and business logic in `src/store/reducer/` (feature-specific subfolders for handlers).
- **Constants & Types:**
  - All static text and config in `src/constants/`.
  - TypeScript types in `src/types/`.
- **Styling:**
  - SCSS modules per feature/component (e.g., `_AlcoCounter.scss`).
  - Theme and language support via Redux state.

## Developer Workflows

- **Build/Run:**
  - Use Vite for dev/build: `npm run dev`, `npm run build`.
- **Testing:**
  - No explicit test setup found; add tests in `src/` if needed.
- **Debugging:**
  - Use browser devtools and Redux DevTools for state inspection.

## Project-Specific Conventions

- **Component Naming:** PascalCase for components, SCSS partials prefixed with `_`.
- **State/Handlers:** Feature logic is split into handler files (e.g., `addVodkaToState.ts`).
- **Localization:** Language content in constants, selected via Redux state.
- **No Backend:** Never add server calls; all logic and storage are client-side.

## Key Files/Directories

- `src/components/AlcoCounter/alcoComponents/Display.tsx`: Example of data display and theming.
- `src/store/reducer/alcoHandlers/`: Core business logic for alcohol tracking.
- `src/constants/alcoConstants.ts`: Localization and static content.
- `src/store/index.tsx`: Redux store setup.

## Integration Points

- **MUI:** Used for some UI elements (import as needed).
- **Vite:** Handles build/dev server; config in `vite.config.ts`.

---

**When in doubt, prefer local state, follow the folder structure, and keep all logic client-side.**
