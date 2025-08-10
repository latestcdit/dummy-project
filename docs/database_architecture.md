# Database Architecture

This document outlines the proposed database architecture for the IRN Cave job search platform, based on the features specified in the `prd.md` and `screens.md` documents.

### Core Principle: Supabase Auth Integration

We will use Supabase's built-in `auth.users` table for handling user authentication. Our own `users` table will be in the `public` schema and will contain a foreign key that references the `id` of a user in the `auth.users` table. This keeps our application data separate from the authentication credentials.

### Key Tables and Their Relationships

Here is a high-level overview of the primary tables and how they are interconnected:

1.  **`users`**
    *   **Purpose:** To store public profile information and application-specific user data.
    *   **Relationships:**
        *   **One-to-One** with Supabase's `auth.users` table.
        *   **One-to-Many** with `saved_searches` (one user can have many saved searches).
        *   **One-to-Many** with `saved_jobs` (one user can save many jobs).

2.  **`companies`**
    *   **Purpose:** To store all information related to the companies that are posting jobs.
    *   **Relationships:**
        *   **One-to-Many** with the `jobs` table (a single company can have multiple job listings).

3.  **`jobs`**
    *   **Purpose:** This is the central table of the application, holding all the details for each job posting.
    *   **Relationships:**
        *   **Many-to-One** with the `companies` table (every job is associated with one company).
        *   **Many-to-Many** with various lookup tables (e.g., `skills`, `benefits`, `languages`) via join tables.

4.  **`saved_jobs`**
    *   **Purpose:** This is a join table that connects users to the jobs they have saved. It will also hold the status of that job in the user's pipeline (e.g., 'Saved', 'Applied', 'Interviewing').
    *   **Relationships:**
        *   **Many-to-One** with `users`.
        *   **Many-to-One** with `jobs`.

5.  **`saved_searches`**
    *   **Purpose:** To store the specific filter criteria that a user saves to run again later.
    *   **Relationships:**
        *   **Many-to-One** with `users`.

6.  **Lookup Tables (for Filters)**
    *   **Purpose:** To normalize and store the possible options for all the different job filters (e.g., departments, commitment types, experience levels). This makes the filter system scalable and easy to manage.
    *   **Examples:** `departments`, `commitment_types`, `experience_levels`, `skills`, `benefits`, `industries`.
    *   **Relationships:** These tables will generally have a **Many-to-Many** relationship with the `jobs` table, using join tables (e.g., a `job_skills` table would link jobs to their required skills).
