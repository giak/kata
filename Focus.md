# Project Focus: kata

**Current Goal:** Project directory structure and information

**Project Context:**
Type: Language: typescript
Target Users: Users of kata
Main Functionality: Project directory structure and information
Key Requirements:

- Type: TypeScript Project
- Language: typescript
- Framework: vue
- File and directory tracking
- Automatic updates

**Development Guidelines:**

- Keep code modular and reusable
- Follow best practices for the project type
- Maintain clean separation of concerns

# 📁 Project Structure

├─ 📄 env.d.ts (1 lines) - TypeScript source file
├─ 📄 eslint.config.ts (30 lines) - TypeScript source file
├─ 📄 vite.config.ts (38 lines) - TypeScript source file
├─ 📄 vitest.config.ts (14 lines) - TypeScript source file
└─ 📁 src
├─ 📄 App.vue (19 lines) - Project file
├─ 📄 main.ts (18 lines) - TypeScript source file
├─ 📁 assets
│ ├─ 📄 base.css (86 lines) - Project file
│ ├─ 📄 main.css (95 lines) - Project file
│ ├─ 📁 components
│ │ ├─ 📄 app.css (93 lines) - Project file
│ │ ├─ 📄 code-editor.css (7 lines) - Project file
│ │ ├─ 📄 kata-badges.css (47 lines) - Project file
│ │ ├─ 📄 kata-detail.css (213 lines) - Project file
│ │ ├─ 📄 kata-list.css (78 lines) - Project file
│ │ └─ 📄 test-editor.css (37 lines) - Project file
│ └─ 📁 theme
│ ├─ 📄 base.css (129 lines) - Project file
│ └─ 📄 variables.css (87 lines) - Project file
├─ 📁 components
│ ├─ 📄 CodeEditor.vue (98 lines) - Project file
│ └─ 📄 TestEditor.vue (104 lines) - Project file
├─ 📁 katas
│ ├─ 📄 loader.ts (15 lines) - TypeScript source file
│ ├─ 📁 implementations
│ │ ├─ 📁 multiples-3-5
│ │ │ ├─ 📄 kata.test.ts (89 lines) - TypeScript source file
│ │ │ ├─ 📄 kata.ts (18 lines) - TypeScript source file
│ │ │ └─ 📄 metadata.ts (14 lines) - TypeScript source file
│ │ └─ 📁 string-ends-with
│ │ ├─ 📄 kata.test.ts (10 lines) - TypeScript source file
│ │ ├─ 📄 kata.ts (12 lines) - TypeScript source file
│ │ └─ 📄 metadata.ts (17 lines) - TypeScript source file
│ └─ 📁 types
│ └─ 📄 kata.types.ts (29 lines) - TypeScript source file
├─ 📁 router
│ └─ 📄 index.ts (25 lines) - TypeScript source file
├─ 📁 stores
│ └─ 📄 kata.store.ts (44 lines) - TypeScript source file
├─ 📁 types
│ └─ 📄 kata.ts (15 lines) - TypeScript source file
├─ 📁 utils
│ └─ 📄 fileLoader.ts (7 lines) - TypeScript source file
└─ 📁 views
└─ 📁 katas
├─ 📄 KataDetailView.vue (223 lines) - Project file
└─ 📄 KataListView.vue (70 lines) - Project file

# 🔍 Key Files with Methods

`src/assets/components/app.css` (93 lines)
Functions:

- .navbar\_\_brand
- .navbar\_\_content
- rgba
- var

`src/assets/theme/base.css` (129 lines)
Functions:

- .sr-only
- a
- body
- button,
  select
- h1
- h2
- h3
- html
- p
- rect
- var

`src/assets/base.css` (86 lines)
Functions:

- body
- media
- rgba
- var

`src/assets/components/code-editor.css` (7 lines)
Functions:

- .code-editor

`src/components/CodeEditor.vue` (98 lines)
Functions:

- getWorker

`src/utils/fileLoader.ts` (7 lines)
Functions:

- loadRawFileContent

`src/assets/components/kata-detail.css` (213 lines)
Functions:

- .kata-code
- .kata-code\_\_container
- .kata-code**editor,
  .kata-code**tests
- .kata-code\_\_header
- .kata-code\_\_results
- .kata-info\_\_back
- .kata-info\_\_description
- .kata-info\_\_header
- .kata-info\_\_link
- .kata-info\_\_meta
- .kata-info\_\_tags
- .kata-info\_\_title
- .run-tests-button
- .test-failed
- .test-passed
- .test-result
- .test-result\_\_icon
- .test-results
- .test-results--empty
- media
- var

`src/assets/components/kata-list.css` (78 lines)
Functions:

- .kata-card
- .kata-card\_\_actions
- .kata-card\_\_button
- .kata-card\_\_description
- .kata-card\_\_link
- .kata-card\_\_meta
- .kata-card\_\_tags
- .kata-list
- .kata-list\_\_filter
- .kata-list\_\_filters
- .kata-list\_\_grid
- .kata-list\_\_header
- rgba
- var

`src/stores/kata.store.ts` (44 lines)
Functions:

- addKata
- defineStore
- saveImplementation
- updateKataStatus

`src/katas/implementations/multiples-3-5/kata.test.ts` (89 lines)
Functions:

- assertEquals

`src/katas/implementations/multiples-3-5/kata.ts` (18 lines)
Functions:

- solution

`src/katas/implementations/string-ends-with/kata.ts` (12 lines)
Functions:

- solution

`src/views/katas/KataDetailView.vue` (223 lines)
Functions:

- formatStatus
- handleCodeChange
- handleTestsChange
- runTests

`src/views/katas/KataListView.vue` (70 lines)
Functions:

- formatStatus

`src/katas/loader.ts` (15 lines)
Functions:

- loadKatas

`src/assets/main.css` (95 lines)
Functions:

- .main-content
- .sr-only
- a,
  .green
- hsla
- media
- rect
- var

`src/assets/components/test-editor.css` (37 lines)
Functions:

- .test-editor
- var

`src/components/TestEditor.vue` (104 lines)
Functions:

- getWorker

`src/assets/theme/variables.css` (87 lines)
Functions:

- bezier
- rgb

# 📊 Project Overview

**Files:** 32 | **Lines:** 1,782

## 📁 File Distribution

- .css: 10 files (872 lines)
- .ts: 17 files (396 lines)
- .vue: 5 files (514 lines)

_Updated: February 16, 2025 at 05:52 AM_
