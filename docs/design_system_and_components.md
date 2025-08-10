# Design System and Component Plan (using shadcn/ui)

This document outlines the plan for the design system and component architecture for the IRN Cave front end, based on the ASCII art mockups and using `shadcn/ui`.

### Overall Approach with shadcn/ui

We will use `shadcn/ui` not as a typical component library, but as a tool to add individual, pre-built components into our codebase. This gives us full control over the code, styling, and behavior of each component. The core of our system will be combining these `shadcn/ui` components into larger, feature-specific components.

### 1. Foundation (Theming and Base Styles)

First, we'll set up the foundational design tokens in `tailwind.config.js` and `globals.css`.

*   **Colors:** We'll define a color palette. I suggest a professional and clean theme:
    *   `background`: White or a very light gray.
    *   `foreground`: Dark gray for text.
    *   `primary`: A shade of blue for interactive elements like buttons and links.
    *   `secondary`: A lighter gray for borders and secondary text.
    *   `card`: White for card backgrounds.
    *   `destructive`: A red for delete or error actions.
*   **Typography:** We'll use a clean, sans-serif font like Inter (which is the default for Tailwind) and define a consistent scale for font sizes (e.g., `sm`, `base`, `lg`, `xl`, `2xl`).
*   **Spacing & Sizing:** We will stick to Tailwind's default 4px grid system for consistent padding, margins, and component sizing.
*   **Border Radius:** We'll define a default border radius (e.g., `0.5rem`) for all components like `Card`, `Input`, and `Button` to ensure a uniform look.

### 2. Component Implementation Strategy

We'll organize our components into two main categories:

*   `components/ui`: This directory will be managed by the `shadcn/ui` CLI and will contain the base, atomic components we add to the project.
*   `components/features`: Here, we will create our own composite components by combining the base `ui` components. These will represent the actual features of our application.

Here is a breakdown of how the UI from the mockups maps to `shadcn/ui` components:

#### **Global Components**

*   **Header:** A custom `Header` component in `components/features`.
    *   **Search Bar & Location:** `Input` with integrated icons.
    *   **User Menu:** `DropdownMenu` triggered by a `Button` with a menu icon. The items inside will change based on authentication state.
*   **Job Card:** A custom `JobCard` component.
    *   **Structure:** `Card`, `CardHeader`, `CardContent`, `CardFooter`.
    *   **Tech Stack Tags:** `Badge` component.
    *   **Hover Actions:** `Button`s or a `DropdownMenu`.
*   **Pagination:** A custom component built with `Button`s.

#### **Screen-Specific Components**

*   **Home/Job Search Page:**
    *   **Category Filters Header:** A row of `Button`s.
    *   **Filter Popups:** Clicking a category button will open a `Popover` containing the filter options.
    *   **Filter Sidebar:** A custom `FilterSidebar` component.
        *   **Sections:** `Accordion` for collapsible filter groups.
        *   **Filter Controls:** `Checkbox`, `Input`, `Select`, `RadioGroup`, and `Slider` will be used for the various filter types.
*   **Saved Jobs Page:**
    *   **Status Tabs:** `Tabs` component to switch between job statuses.
*   **Account & Login/Signup:**
    *   **Modals/Popups:** `Dialog` will be used for the Account, Location Settings, and Save Search popups.
    *   **Forms:** `Card` with `CardHeader`, `CardContent` containing `Label`, `Input`, and `Button` for forms.
    *   **Login/Signup Toggle:** `Switch` or `RadioGroup` for toggling between "Save new" and "Update existing" search.
*   **Static Pages (About Us, Employers):**
    *   These will be simple pages using basic HTML elements styled with Tailwind CSS utility classes for typography and layout.

### 3. Proposed Directory Structure

```
/src
├── /app
│   ├── / (home, job search)
│   ├── /saved-jobs
│   ├── /account
│   ├── /inbox
│   └── /login
├── /components
│   ├── /ui/         // Managed by shadcn/ui CLI
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── ...
│   ├── /features/   // Our custom composite components
│   │   ├── header.tsx
│   │   ├── job-card.tsx
│   │   ├── filter-sidebar.tsx
│   │   ├── ...
│   └── /layouts/    // For overall page structure
│       └── main-layout.tsx
└── /lib
    └── /utils.ts    // For shadcn/ui helpers
```
