# Admin Page Plan

## Overview

This document outlines the plan for developing a dedicated admin page for the IRN Cave job search platform. The primary purpose of this admin page is to provide comprehensive CRUD (Create, Read, Update, Delete) capabilities for all dynamic data within the application, ensuring that administrators can manage job postings, company profiles, and all associated lookup data that drives the filtering and categorization on the user-facing side.

## Core Principles

*   **Centralized Data Management:** All application data, especially dynamic content and filter options, will be manageable through this admin interface.
*   **Consistency:** Built using the existing Next.js, TypeScript, and Supabase stack, leveraging `shadcn/ui` for a consistent UI/UX.
*   **Security:** The admin page will be strictly protected, accessible only to authorized users with appropriate roles.
*   **Scalability:** Designed to easily extend and manage new data types as the application evolves.

## Key Features

The admin page will provide CRUD capabilities for the following data entities:

### 1. Core Data Management

#### 1.1. Jobs
*   **Purpose:** To manage individual job postings displayed on the platform.
*   **Capabilities:**
    *   **Create New Job:** A comprehensive form to input all details of a new job posting, including title, description, company, location, salary ranges, and all associated lookup table IDs (e.g., commitment type, experience level, workplace type, etc.).
    *   **Edit Existing Job:** Ability to modify any detail of an existing job posting.
    *   **Delete Job:** Functionality to remove job postings from the database.
    *   **View All Jobs:** A paginated and searchable table view displaying all current job postings, with options for sorting and filtering.
*   **Relationships:** The job management interface will handle the complex relationships with other tables, such as linking jobs to companies and skills.

#### 1.2. Companies
*   **Purpose:** To manage the profiles of companies posting jobs on the platform.
*   **Capabilities:**
    *   **Create New Company:** Form to add new company profiles (name, description, website, logo URL, employee count).
    *   **Edit Existing Company:** Ability to modify company details.
    *   **Delete Company:** Functionality to remove company profiles.
    *   **View All Companies:** A table view displaying all registered companies.

### 2. Lookup Data Management (Dynamic Filters)

This is a critical section, enabling administrators to dynamically control the options presented in the various filters and categories on the user-facing job search page. Each of these will have dedicated interfaces for CRUD operations.

*   **`commitment_types`**: (e.g., Full-time, Part-time, Contract, Internship, Temporary, Seasonal, Volunteer)
*   **`experience_levels`**: (e.g., Entry-level, Mid-level, Senior-level)
*   **`skills`**: (e.g., JavaScript, Python, React, SQL)
*   **`departments`**: (e.g., Engineering, Marketing, Sales)
*   **`workplace_types`**: (e.g., Remote, Hybrid, Onsite)
*   **`physical_positions`**: (e.g., Sitting or desk jobs, Active)
*   **`physical_environments`**: (e.g., Office, Outdoor, Vehicle, Industrial, Customer-facing)
*   **`job_physical_intensities`**: (e.g., Low, Medium, High)
*   **`job_cognitive_demands`**: (e.g., Low, Medium, High)
*   **`job_computer_usage_levels`**: (e.g., Low, Medium, High)
*   **`job_oral_communication_levels`**: (e.g., Low, Medium, High)
*   **`role_types`**: (e.g., Individual contributor, People manager)
*   **`shift_types`**: (e.g., Morning/day, Afternoon/evening, Overnight/graveyard)
*   **`availability_options`**: (e.g., Weekend, Holiday, Overtime)
*   **`travel_requirements`**: (e.g., Air travel, Land travel with intensity)
*   **`benefits_and_perks`**: (e.g., Health Insurance, Paid Time Off)
*   **`encouraged_to_apply`**: (e.g., Veterans, Women, Minorities)
*   **`company_stages`**: (e.g., Public, Private)
*   **`company_sizes`**: (e.g., 1-10, 11-50, 51-200)

### 3. User Management (Basic)

*   **Purpose:** To provide basic oversight of registered users.
*   **Capabilities:**
    *   **View Registered Users:** A list or table displaying user accounts.
    *   **Account Status Toggle (Potential):** Ability to enable or disable user accounts (this might leverage Supabase Auth directly or require custom RLS).

## Technical Implementation Plan

### Phase 1: Foundation & Lookup Data Management

1.  **Define Admin Role and Protected Route:**
    *   **Mechanism:** Implement a clear method for identifying admin users. This will likely involve adding a `role` column (e.g., `admin`, `user`) to the `users` table in Supabase and/or utilizing custom JWT claims for more granular control.
    *   **Protected Route:** Create a dedicated Next.js route (e.g., `/admin` or `/dashboard/admin`) that is only accessible to authenticated users with the `admin` role. This will involve server-side checks (e.g., in `getServerSideProps` or API routes) and client-side redirection.

2.  **Generic CRUD UI for Lookup Tables:**
    *   **Goal:** Develop a reusable UI pattern for managing simple lookup tables.
    *   **Components:**
        *   A generic table component to display existing entries (e.g., `id`, `name`).
        *   A simple form component for adding new entries (e.g., an input field for `name`).
        *   Buttons/icons for editing and deleting individual entries within the table rows.
    *   **Initial Focus:** Start with one of the simpler lookup tables, such as `commitment_types` or `workplace_types`, to establish the full CRUD flow.

3.  **API Endpoints for Lookup Data:**
    *   **Architecture:** Create dedicated Next.js API routes (e.g., `/api/admin/commitment-types`, `/api/admin/skills`) to handle the CRUD operations for each lookup table.
    *   **Interaction:** These API routes will interact directly with the Supabase client to perform database operations (insert, select, update, delete).
    *   **Security:** Ensure these API routes are also protected and only accessible to authenticated admin users.

### Phase 2: Core Data Management (Jobs & Companies)

1.  **Jobs Management UI:**
    *   **List View:** A more advanced table for jobs, including search, pagination, and potentially filtering by related entities (e.g., company name).
    *   **Job Form:** A comprehensive form for creating and editing jobs. This form will need to handle:
        *   All direct job attributes (title, description, location, salary, etc.).
        *   Dropdowns/selects for linking to lookup tables (e.g., `commitment_type_id` will be a dropdown populated from `commitment_types`).
        *   Multi-select components for `job_skills` (linking to `skills` table).
    *   **Delete Functionality:** Clear and safe deletion of job records.

2.  **Companies Management UI:**
    *   Similar to jobs, but with a simpler form for company-specific attributes.

3.  **API Endpoints for Core Data:**
    *   Create Next.js API routes (e.g., `/api/admin/jobs`, `/api/admin/companies`) to handle the CRUD operations for these core tables. These will be more complex due to relationships and potentially larger data payloads.

### Phase 3: Enhancements & User Management

1.  **User Management UI:**
    *   A simple table to view registered users.
    *   Consider adding functionality to toggle user status (active/inactive) if not handled directly by Supabase Auth UI.
2.  **Dashboard Overview:**
    *   A landing page for the admin section, potentially showing key metrics (e.g., total jobs, total companies, recent activity).
3.  **Improved UI/UX:**
    *   Refine forms with better validation feedback, loading states, and user-friendly layouts.
    *   Implement robust error handling and notifications for admin actions.

## Technical Considerations

*   **Supabase Integration:** Leverage Supabase's client library for all database interactions.
*   **Row Level Security (RLS):** Crucial for securing data access. Ensure RLS policies are correctly configured in Supabase to prevent unauthorized access or modification of data, especially for admin operations.
*   **Form Management:** Utilize a form library (e.g., React Hook Form, Formik) for complex forms to streamline state management and validation.
*   **State Management:** For client-side state, React's `useState` and `useReducer` will suffice, potentially combined with a data fetching library like SWR or React Query for caching and synchronization.
*   **Styling:** Continue using Tailwind CSS for consistent styling.

## Success Criteria for Admin Page

*   Administrators can successfully create, read, update, and delete all specified data entities.
*   The admin page is secure and only accessible to authorized users.
*   The admin interface is intuitive and efficient for data management.
*   Changes made in the admin panel are immediately reflected on the user-facing job search platform.
