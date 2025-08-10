# Design System and Component Plan (ShadCN UI)

This document outlines the design system and component plan for the IRN Cave job search platform, based on ShadCN UI.

## Design System

*   **Colors:** A color palette with primary, secondary, accent, destructive, and neutral colors will be defined using CSS variables.
*   **Typography:** A modern, readable font like "Inter" will be used. Font sizes, weights, and line heights will be defined for headings, paragraphs, and other text elements.
*   **Spacing:** A consistent spacing scale (e.g., based on rems) will be used for margins, padding, and gaps between elements.
*   **Border Radius:** A consistent border-radius will be used for all components to create a cohesive look and feel.

## Component System (Atomic Design)

### Atoms

*   **Button:** Primary, Secondary, Destructive, Ghost, Link variants.
*   **Input:** Text, Password, Textarea, Search.
*   **Label:** For form elements.
*   **Checkbox:** For filters and forms.
*   **RadioGroup:** For single-selection options.
*   **Select:** Dropdown menus for sorting, filtering.
*   **Avatar:** For user profiles or company logos.
*   **Icon:** Using an icon library like `lucide-react`.
*   **Badge:** For tags like "Remote", "Full-time", tech stack.
*   **Separator:** For dividing sections.
*   **Switch:** For toggles.

### Molecules

*   **SearchBar:** Input with a search icon/button.
*   **LocationInput:** Input with a location icon.
*   **FormField:** Label, Input, and error message.
*   **FilterCheckbox:** Checkbox with a label for filter categories.
*   **JobCard:** Combination of text, badges, and an avatar/logo to display a single job posting. On-hover actions include "Apply Directly," "Mark Applied," "Save," "Copy Link," and "Hide Job."
*   **StatusTab:** A tab for the different statuses on the "Saved Jobs" page.
*   **Notification:** For success or error messages.
*   **UserMenu:** Avatar with a dropdown menu for authenticated users.
*   **HeaderFilter:** A button with a dropdown/popover for filtering categories in the third header.

### Organisms

*   **Header:** The main navigation bar, including the logo, search bar, location input, and user menu.
*   **FilterSidebar:** The entire left-hand side panel with all the filter categories. This will be composed of various complex filter components, such as hierarchical checkboxes, text inputs, and dropdowns, as defined in the PRD.
*   **JobSearchResults:** The list of all job cards, including pagination and result stats.
*   **JobDetailsSidebar:** The right-hand side panel that shows the full details of a selected job.
*   **LoginForm:** The form for logging in or signing up.
*   **AccountForm:** The form for managing account settings.
*   **SavedJobsList:** The list of saved jobs with the status tabs.

### Templates

*   **DefaultLayout:** A template with the header and a main content area.
*   **JobSearchPageLayout:** A two-column layout with the filter sidebar on the left and the job search results on the right.
*   **CenteredLayout:** A layout for pages like login/signup where the content is centered.

### Pages

*   **HomePage**
*   **SavedJobsPage**
*   **AccountPage**
*   **InboxPage**
*   **LoginPage**
*   **AboutUsPage**
*   **EmployersPage**

## ShadCN UI Component Mapping

*   `Button` -> `Button`
*   `Input` -> `Input`
*   `Label` -> `Label`
*   `Checkbox` -> `Checkbox`
*   `RadioGroup` -> `RadioGroup`
*   `Select` -> `Select`
*   `Avatar` -> `Avatar`
*   `Badge` -> `Badge`
*   `Separator` -> `Separator`
*   `Switch` -> `Switch`
*   `Card` -> for `JobCard`
*   `Tabs` -> for `StatusTab`
*   `Dialog` or `Sheet` -> for popups and sidebars (`Location Settings`, `Job Details`)
*   `DropdownMenu` -> for the `UserMenu`
*   `Popover` -> for the `HeaderFilter`
*   `Accordion` -> for the hierarchical checkboxes in the `FilterSidebar`
*   `Toast` -> for notifications
