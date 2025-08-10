# Screens for IRN Cave Job Search Platform

This document outlines the screens that need to be created for the IRN Cave job search platform MVP, based on the Product Requirements Document.

## 1. Home/Job Search Page (Unauthenticated & Authenticated)

*   **Description:** This is the main landing page for the application. It will feature the primary header with the company logo, a prominent search bar, and a location box. When job results are active, a third header will appear below the primary header with category filters. Below the header, it will display a list of job search categories and filters on the left, and the job search results on the right. When a user is authenticated, the header will also contain a menu with links to "Saved Jobs," "Account," and "Inbox."
*   **Components:**
    *   Primary Header (Logo, Search Bar, Location Box, Menu Icon)
    *   Third Header (Job Results Active): Contains category filters that appear as buttons. Clicking on a button opens a popup with filter options.
    *   Saved Searches Display: A section above the job results that shows the user's saved searches.
    *   Job Search Categories/Filters Sidebar (Static and Dynamic)
    *   Job Search Results (Job Cards, Sorting, Filtering, Stats)
    *   Job Details Sidebar (appears when a job is selected)
    *   Pagination for job results.

## 2. Saved Jobs Page (Authenticated)

*   **Description:** This page allows authenticated users to view and manage their saved jobs. It will have a secondary header (without the location box). The main content area will display a list of saved jobs, with a status tracker to categorize them as "Saved," "Applied," "Interviewed," "Rejected," or "Hidden."
*   **Components:**
    *   Secondary Header (Logo, Search Bar, Menu Icon)
    *   Job Status Tracker/Tabs
    *   List of Saved Jobs (Job Cards with status)
    *   Empty state message if no jobs are saved.

## 3. Account Page (Authenticated)

*   **Description:** This page allows authenticated users to manage their account settings. It will be accessible from the menu. The page will display the user's profile information (email), security settings (change password), and email notification preferences.
*   **Components:**
    *   Secondary Header
    *   Account Management Popup/Modal (as per PRD)
        *   Profile Section
        *   Security Section
        *   Email Notifications Section

## 4. Inbox Page (Authenticated)

*   **Description:** This page is for authenticated users to view any application requests from companies. It will have a secondary header. The main content area will display a list of requests or an empty state message if there are no requests.
*   **Components:**
    *   Secondary Header
    *   List of application requests
    *   Empty state message.

## 5. Login/Signup Page (Unauthenticated)

*   **Description:** A unified page for both login and signup. It will feature a simple form with email and password fields, a "Continue" button, and an option for social login (Google).
*   **Components:**
    *   Unified Login/Signup Form
    *   Social Login Button (Google)
    *   Welcome Message

## 6. About Us Page (Unauthenticated & Authenticated)

*   **Description:** A static page providing information about IRN Cave. It will be accessible from the menu in both authenticated and unauthenticated states.
*   **Components:**
    *   Header (Primary or Secondary depending on auth state)
    *   Static content about the company.

## 7. Employers Page (Unauthenticated & Authenticated)

*   **Description:** A static page for potential employers. It will be accessible from the menu in both authenticated and unauthenticated states.
*   **Components:**
    *   Header (Primary or Secondary depending on auth state)
    *   Static content for employers.

## Popups/Modals (as part of other screens)

*   **Location Settings Popup:** Appears when the location box in the header is clicked. Allows users to set their location and workplace preferences.
*   **Menu Focus Group:** A dropdown/flyout menu that appears when the menu icon is clicked. Shows different options based on whether the user is authenticated or not.
*   **Save Search Popup:** Appears when a user wants to save their current search criteria.
*   **Account Management Popup:** This might be a modal on the account page for editing details. The PRD calls it a "popup".
*   **Header Category Filter Popup:** Appears when a category filter button in the "Third Header" is clicked. Contains checkboxes and other filter controls related to that category.
