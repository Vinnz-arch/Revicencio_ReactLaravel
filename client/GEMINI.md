# Revicencio React Client (Vite + TypeScript)

This is the React frontend portion of the Revicencio_ReactLaravel project. It serves as a modern client application built with React 19, Vite, and Tailwind CSS 4.

## Project Overview

*   **Type:** React Frontend (SPA)
*   **Main Technologies:** React 19, TypeScript, Vite, Tailwind CSS 4, ESLint.
*   **Architecture:** Standard Vite-based React application with a component-based structure in the `src/` directory.

## Building and Running

### Prerequisites
*   Node.js (LTS version recommended)
*   npm or yarn

### Commands
| Command | Description |
| :--- | :--- |
| `npm install` | Install all dependencies. |
| `npm run dev` | Start the development server (HMR enabled). |
| `npm run build` | Build the project for production (Type-checks + Vite build). |
| `npm run lint` | Run ESLint to identify code style issues. |
| `npm run preview` | Locally preview the production build. |

## Development Conventions

*   **Styling:** Tailwind CSS 4 is used for styling. Configuration is managed via the `@tailwindcss/vite` plugin.
*   **TypeScript:** Strictly typed using TypeScript. Ensure types are correctly defined for components and props.
*   **Linting:** Follow the ESLint rules defined in `eslint.config.js`. Type-aware linting is encouraged for production reliability.
*   **Components:** Functional components with React Hooks are preferred. The project uses React 19 features where applicable.

## Project Structure

*   `src/`: Main source code directory.
    *   `main.tsx`: Application entry point.
    *   `App.tsx`: Root component containing core UI logic.
    *   `App.css`: Component-specific styles.
    *   `index.css`: Global styles (includes Tailwind directives).
    *   `assets/`: Static assets such as images and icons.
*   `public/`: Public assets that are served directly.
*   `vite.config.ts`: Vite configuration, including React and Tailwind plugins.
*   `tsconfig.json`: TypeScript compiler configuration.
*   `package.json`: Project metadata, scripts, and dependency management.
