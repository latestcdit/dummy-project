# Database Schema with Mock Data

This document provides a detailed look at the database schema for the IRN Cave platform. Each section outlines a table's purpose, its fields, and a sample of mock data to illustrate its usage.

---

## Lookup Tables

These tables store predefined values for filters and job attributes.

### `commitment_types`

**Description:** Stores the different types of job commitments (e.g., Full-time, Part-time).

**Fields:**
*   `id`: `SERIAL` (Primary Key) - Unique identifier for the commitment type.
*   `name`: `VARCHAR` - The name of the commitment type.

**Mock Data:**

| id  | name       |
| --- | ---------- |
| 1   | Full-time  |
| 2   | Part-time  |
| 3   | Contract   |
| 4   | Internship |

### `experience_levels`

**Description:** Stores the different seniority levels for jobs.

**Fields:**
*   `id`: `SERIAL` (Primary Key) - Unique identifier for the experience level.
*   `name`: `VARCHAR` - The name of the experience level.

**Mock Data:**

| id  | name              |
| --- | ----------------- |
| 1   | Entry level       |
| 2   | Mid-level         |
| 3   | Senior level      |
| 4   | No prior experience|

### `skills`

**Description:** Stores the list of technical skills that can be associated with jobs.

**Fields:**
*   `id`: `SERIAL` (Primary Key) - Unique identifier for the skill.
*   `name`: `VARCHAR` - The name of the skill.

**Mock Data:**

| id  | name         |
| --- | ------------ |
| 1   | Python       |
| 2   | React        |
| 3   | PostgreSQL   |
| 4   | Docker       |
| 5   | TypeScript   |

### `departments`

**Description:** Stores the different company departments.

**Fields:**
*   `id`: `SERIAL` (Primary Key) - Unique identifier for the department.
*   `name`: `VARCHAR` - The name of the department.

**Mock Data:**

| id  | name          |
| --- | ------------- |
| 1   | Engineering   |
| 2   | Sales         |
| 3   | Marketing     |
| 4   | Data Analytics|

### `workplace_types`

**Description:** Stores the different workplace types (e.g., Remote, Hybrid, Onsite).

**Fields:**
*   `id`: `SERIAL` (Primary Key)
*   `name`: `VARCHAR`

**Mock Data:**

| id  | name    |
| --- | ------- |
| 1   | Remote  |
| 2   | Hybrid  |
| 3   | Onsite  |

### `physical_positions`

**Description:** Stores the physical position requirements for a job.

**Fields:**
*   `id`: `SERIAL` (Primary Key)
*   `name`: `VARCHAR`

**Mock Data:**

| id  | name             |
| --- | ---------------- |
| 1   | Sitting/desk jobs|
| 2   | Active           |

### `physical_environments`

**Description:** Stores the different physical work environments.

**Fields:**
*   `id`: `SERIAL` (Primary Key)
*   `name`: `VARCHAR`

**Mock Data:**

| id  | name              |
| --- | ----------------- |
| 1   | Office            |
| 2   | Outdoor           |
| 3   | Vehicle           |
| 4   | Industrial        |
| 5   | Customer-facing   |

### `job_physical_intensities`

**Description:** Stores the physical labor intensity levels.

**Fields:**
*   `id`: `SERIAL` (Primary Key)
*   `name`: `VARCHAR`

**Mock Data:**

| id  | name   |
| --- | ------ |
| 1   | Low    |
| 2   | Medium |
| 3   | High   |

### `job_cognitive_demands`

**Description:** Stores the cognitive demand levels.

**Fields:**
*   `id`: `SERIAL` (Primary Key)
*   `name`: `VARCHAR`

**Mock Data:**

| id  | name   |
| --- | ------ |
| 1   | Low    |
| 2   | Medium |
| 3   | High   |

### `job_computer_usage_levels`

**Description:** Stores the computer usage levels.

**Fields:**
*   `id`: `SERIAL` (Primary Key)
*   `name`: `VARCHAR`

**Mock Data:**

| id  | name   |
| --- | ------ |
| 1   | Low    |
| 2   | Medium |
| 3   | High   |

### `job_oral_communication_levels`

**Description:** Stores the oral communication levels.

**Fields:**
*   `id`: `SERIAL` (Primary Key)
*   `name`: `VARCHAR`

**Mock Data:**

| id  | name   |
| --- | ------ |
| 1   | Low    |
| 2   | Medium |
| 3   | High   |

### `role_types`

**Description:** Stores the role types (e.g., Individual contributor, People manager).

**Fields:**
*   `id`: `SERIAL` (Primary Key)
*   `name`: `VARCHAR`

**Mock Data:**

| id  | name                   |
| --- | ---------------------- |
| 1   | Individual contributor |
| 2   | People manager         |

### `shift_types`

**Description:** Stores the different shift types.

**Fields:**
*   `id`: `SERIAL` (Primary Key)
*   `name`: `VARCHAR`

**Mock Data:**

| id  | name                   |
| --- | ---------------------- |
| 1   | Morning/day            |
| 2   | Afternoon/evening      |
| 3   | Overnight/graveyard    |

### `availability_options`

**Description:** Stores the availability options for a job.

**Fields:**
*   `id`: `SERIAL` (Primary Key)
*   `name`: `VARCHAR`

**Mock Data:**

| id  | name      |
| --- | --------- |
| 1   | Weekend   |
| 2   | Holiday   |
| 3   | Overtime  |

### `travel_requirements`

**Description:** Stores the travel requirements for a job.

**Fields:**
*   `id`: `SERIAL` (Primary Key)
*   `travel_type`: `VARCHAR` (e.g., Air, Land)
*   `intensity`: `VARCHAR` (e.g., Non-minimal, Moderate, Extensive)

**Mock Data:**

| id  | travel_type | intensity   |
| --- | ----------- | ----------- |
| 1   | Air         | Non-minimal |
| 2   | Air         | Moderate    |
| 3   | Air         | Extensive   |
| 4   | Land        | Non-minimal |
| 5   | Land        | Moderate    |
| 6   | Land        | Extensive   |

### `benefits_and_perks`

**Description:** Stores the list of benefits and perks that can be associated with jobs.

**Fields:**
*   `id`: `SERIAL` (Primary Key)
*   `name`: `VARCHAR`

**Mock Data:**

| id  | name                |
| --- | ------------------- |
| 1   | Health insurance    |
| 2   | Dental insurance    |
| 3   | Vision insurance    |
| 4   | 401(k)              |
| 5   | Paid time off       |

### `encouraged_to_apply`

**Description:** Stores the list of groups that are encouraged to apply.

**Fields:**
*   `id`: `SERIAL` (Primary Key)
*   `name`: `VARCHAR`

**Mock Data:**

| id  | name                     |
| --- | ------------------------ |
| 1   | Veterans                 |
| 2   | People with disabilities |
| 3   | Formerly incarcerated    |

### `company_stages`

**Description:** Stores the current stage of a company (e.g., Public, Private).

**Fields:**
*   `id`: `SERIAL` (Primary Key)
*   `name`: `VARCHAR`

**Mock Data:**

| id  | name    |
| --- | ------- |
| 1   | Public  |
| 2   | Private |

### `company_sizes`

**Description:** Stores the size of a company by employee count.

**Fields:**
*   `id`: `SERIAL` (Primary Key)
*   `range`: `VARCHAR`

**Mock Data:**

| id  | range     |
| --- | --------- |
| 1   | 1-10      |
| 2   | 11-50     |
| 3   | 51-200    |
| 4   | 201-500   |
| 5   | 501-1000  |
| 6   | 1001-5000 |
| 7   | 5001+     |

---

## Core Tables

These are the main tables that drive the application.

### `users`

**Description:** Stores public user profile data, linked to the Supabase `auth.users` table.

**Fields:**
*   `id`: `UUID` (Primary Key, Foreign Key to `auth.users.id`) - The user's unique identifier from Supabase Auth.
*   `email`: `VARCHAR` - The user's email address.
*   `daily_digest_enabled`: `BOOLEAN` - Preference for receiving daily digest emails.
*   `new_matches_notification_enabled`: `BOOLEAN` - Preference for receiving new match emails.
*   `created_at`: `TIMESTAMP` - Timestamp of when the user profile was created.

**Mock Data:**

| id                                   | email                  | daily_digest_enabled | new_matches_notification_enabled | created_at          |
| ------------------------------------ | ---------------------- | -------------------- | -------------------------------- | ------------------- |
| `8f7bdf2c-5f1a-4a2b-8b9e-1e2c3d4f5a6b` | alice@example.com      | true                 | true                             | `2023-10-28 10:00:00` |
| `c2a1b3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d` | bob@example.com        | false                | true                             | `2023-10-28 11:30:00` |

### `companies`

**Description:** Stores information about the companies posting jobs.

**Fields:**
*   `id`: `SERIAL` (Primary Key) - Unique identifier for the company.
*   `name`: `VARCHAR` - The name of the company.
*   `description`: `TEXT` - A short description of the company.
*   `website`: `VARCHAR` - The company's official website.
*   `logo_url`: `VARCHAR` - URL for the company's logo.
*   `employee_count`: `INT` - The number of employees.

**Mock Data:**

| id  | name              | description                               | website                 | logo_url                    | employee_count |
| --- | ----------------- | ----------------------------------------- | ----------------------- | --------------------------- | -------------- |
| 1   | InnovateTech Inc. | A leading provider of cloud solutions.    | https://innovatetech.com| https://cdn/innovate.png    | 550            |
| 2   | DataDriven Co.    | Specializing in big data analytics.       | https://datadriven.com  | https://cdn/datadriven.png  | 120            |

### `jobs`

**Description:** The central table for all job postings.

**Fields:**
*   `id`: `SERIAL` (Primary Key) - Unique identifier for the job.
*   `title`: `VARCHAR` - The job title.
*   `description`: `TEXT` - The full job description.
*   `company_id`: `INT` (Foreign Key to `companies.id`) - The company posting the job.
*   `location`: `VARCHAR` - The job location (e.g., "Berlin, Germany").
*   `work_type`: `VARCHAR` - e.g., "Remote", "Onsite", "Hybrid".
*   `commitment_type_id`: `INT` (Foreign Key to `commitment_types.id`) - The type of commitment.
*   `experience_level_id`: `INT` (Foreign Key to `experience_levels.id`) - The required experience level.
*   `salary_min`: `INT` - The minimum salary for the position.
*   `salary_max`: `INT` - The maximum salary for the position.
*   `created_at`: `TIMESTAMP` - Timestamp of when the job was posted.
*   `workplace_type_id`: `INT` (Foreign Key to `workplace_types.id`)
*   `physical_position_id`: `INT` (Foreign Key to `physical_positions.id`)
*   `physical_environment_id`: `INT` (Foreign Key to `physical_environments.id`)
*   `physical_intensity_id`: `INT` (Foreign Key to `job_physical_intensities.id`)
*   `cognitive_demand_id`: `INT` (Foreign Key to `job_cognitive_demands.id`)
*   `computer_usage_id`: `INT` (Foreign Key to `job_computer_usage_levels.id`)
*   `oral_communication_id`: `INT` (Foreign Key to `job_oral_communication_levels.id`)
*   `role_type_id`: `INT` (Foreign Key to `role_types.id`)
*   `years_of_experience`: `INT`
*   `years_of_management_experience`: `INT`
*   `education_level`: `VARCHAR` (e.g., Associate, Bachelor, Master, Doctorate)
*   `education_requirement`: `VARCHAR` (e.g., Required, Preferred, Not mentioned)
*   `requires_license`: `BOOLEAN`
*   `requires_security_clearance`: `BOOLEAN`

**Mock Data:**

| id  | title                 | company_id | location          | work_type | commitment_type_id | experience_level_id | salary_min | salary_max | created_at          |
| --- | --------------------- | ---------- | ----------------- | --------- | ------------------ | ------------------- | ---------- | ---------- | ------------------- |
| 101 | Senior Backend Engineer | 1          | Berlin, Germany   | Hybrid    | 1                  | 3                   | 85000      | 110000     | `2023-10-27 09:00:00` |
| 102 | Junior Frontend Dev   | 2          | Munich, Germany   | Onsite    | 1                  | 1                   | 55000      | 65000      | `2023-10-28 14:00:00` |
| 103 | Data Scientist        | 2          | Remote            | Remote    | 2                  | 2                   | 70000      | 90000      | `2023-10-28 16:00:00` |

---

## Join and Relationship Tables

These tables manage the relationships between the core tables.

### `job_skills`

**Description:** A join table to manage the many-to-many relationship between jobs and skills.

**Fields:**
*   `job_id`: `INT` (Foreign Key to `jobs.id`)
*   `skill_id`: `INT` (Foreign Key to `skills.id`)

**Mock Data:**

| job_id | skill_id |
| ------ | -------- |
| 101    | 1        |
| 101    | 3        |
| 101    | 4        |
| 102    | 2        |
| 102    | 5        |
| 103    | 1        |

### `saved_jobs`

**Description:** Connects users to the jobs they have saved and tracks the status.

**Fields:**
*   `user_id`: `UUID` (Foreign Key to `users.id`)
*   `job_id`: `INT` (Foreign Key to `jobs.id`)
*   `status`: `VARCHAR` - The status of the job (e.g., "saved", "applied", "rejected").
*   `saved_at`: `TIMESTAMP` - When the job was saved.

**Mock Data:**

| user_id                              | job_id | status  | saved_at            |
| ------------------------------------ | ------ | ------- | ------------------- |
| `8f7bdf2c-5f1a-4a2b-8b9e-1e2c3d4f5a6b` | 101    | saved   | `2023-10-28 12:05:00` |
| `8f7bdf2c-5f1a-4a2b-8b9e-1e2c3d4f5a6b` | 103    | applied | `2023-10-28 18:30:00` |
| `c2a1b3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d` | 101    | saved   | `2023-10-28 19:00:00` |

### `saved_searches`

**Description:** Stores the search criteria that users save for later use.

**Fields:**
*   `id`: `SERIAL` (Primary Key) - Unique identifier for the saved search.
*   `user_id`: `UUID` (Foreign Key to `users.id`) - The user who saved the search.
*   `name`: `VARCHAR` - A user-defined name for the search.
*   `search_parameters`: `JSONB` - The search filters and keywords stored as a JSON object.
*   `created_at`: `TIMESTAMP` - When the search was saved.

**Mock Data:**

| id  | user_id                              | name                  | search_parameters                                       | created_at          |
| --- | ------------------------------------ | --------------------- | ------------------------------------------------------- | ------------------- |
| 1   | `8f7bdf2c-5f1a-4a2b-8b9e-1e2c3d4f5a6b` | "Senior Backend Jobs" | `{"query": "backend", "experience_level_id": 3}`      | `2023-10-28 13:00:00` |
| 2   | `c2a1b3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d` | "Remote Data Roles"   | `{"work_type": "Remote", "department_id": 4}`         | `2023-10-28 20:15:00` |

### `job_shifts`
*   `job_id`: `INT` (FK)
*   `shift_type_id`: `INT` (FK)
*   `requirement`: `VARCHAR` (e.g., Required, Optional, Not indicated)

### `job_availability`
*   `job_id`: `INT` (FK)
*   `availability_option_id`: `INT` (FK)
*   `requirement`: `VARCHAR` (e.g., Required, Not indicated, Doesn't matter)

### `job_travel_requirements`
*   `job_id`: `INT` (FK)
*   `travel_requirement_id`: `INT` (FK)

### `job_benefits_and_perks`
*   `job_id`: `INT` (FK)
*   `benefit_perk_id`: `INT` (FK)

### `job_encouraged_to_apply`
*   `job_id`: `INT` (FK)
*   `encouraged_to_apply_id`: `INT` (FK)