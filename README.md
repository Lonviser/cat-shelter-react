# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

```
cat-shelter
├─ .eslintrc.json
├─ .osp
│  └─ project.ini
├─ .prettierrc
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.svg
│  └─ icons.svg
├─ README.md
├─ src
│  ├─ app
│  │  ├─ router.tsx
│  │  └─ store.ts
│  ├─ App.css
│  ├─ App.tsx
│  ├─ assets
│  │  └─ img
│  │     ├─ about-bg.png
│  │     ├─ logo.svg
│  │     └─ vk.svg
│  ├─ components
│  │  ├─ Header
│  │  │  ├─ Header.module.scss
│  │  │  └─ Header.tsx
│  │  ├─ Layout
│  │  │  ├─ Layout.module.scss
│  │  │  └─ Layout.tsx
│  │  ├─ Loader
│  │  │  └─ Loader.tsx
│  │  ├─ NewsCard
│  │  │  ├─ NewsCard.module.scss
│  │  │  └─ NewsCard.tsx
│  │  └─ PetCard
│  │     └─ PetCard.tsx
│  ├─ features
│  │  ├─ catalog
│  │  │  ├─ api
│  │  │  ├─ slices
│  │  │  └─ ui
│  │  └─ news
│  │     ├─ api
│  │     │  └─ newsApi.ts
│  │     ├─ slices
│  │     │  └─ newsSlice.ts
│  │     └─ ui
│  │        └─ NewsCard.tsx
│  ├─ index.scss
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ HomePage
│  │  │  ├─ HomePage.module.scss
│  │  │  └─ HomePage.tsx
│  │  └─ NewsPage.tsx
│  └─ shared
│     ├─ api
│     │  └─ client.ts
│     ├─ hooks
│     │  └─ redux.ts
│     ├─ mocks
│     │  └─ news.ts
│     ├─ types
│     │  └─ news.ts
│     └─ utils
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```