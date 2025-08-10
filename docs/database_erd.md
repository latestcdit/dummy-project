```mermaid
erDiagram
    users {
        UUID id PK
        VARCHAR email
        BOOLEAN daily_digest_enabled
        BOOLEAN new_matches_notification_enabled
        TIMESTAMP created_at
    }

    companies {
        SERIAL id PK
        VARCHAR name
        TEXT description
        VARCHAR website
        VARCHAR logo_url
        INT employee_count
    }

    jobs {
        SERIAL id PK
        VARCHAR title
        TEXT description
        INT company_id FK
        VARCHAR location
        VARCHAR work_type
        INT commitment_type_id FK
        INT experience_level_id FK
        INT salary_min
        INT salary_max
        TIMESTAMP created_at
        INT workplace_type_id FK
        INT physical_position_id FK
        INT physical_environment_id FK
        INT physical_intensity_id FK
        INT cognitive_demand_id FK
        INT computer_usage_id FK
        INT oral_communication_id FK
        INT role_type_id FK
        INT years_of_experience
        INT years_of_management_experience
        VARCHAR education_level
        VARCHAR education_requirement
        BOOLEAN requires_license
        BOOLEAN requires_security_clearance
    }

    saved_jobs {
        UUID user_id PK, FK
        INT job_id PK, FK
        VARCHAR status
        TIMESTAMP saved_at
    }

    saved_searches {
        SERIAL id PK
        UUID user_id FK
        VARCHAR name
        JSONB search_parameters
        TIMESTAMP created_at
    }

    commitment_types { SERIAL id PK; VARCHAR name; }
    experience_levels { SERIAL id PK; VARCHAR name; }
    skills { SERIAL id PK; VARCHAR name; }
    departments { SERIAL id PK; VARCHAR name; }
    workplace_types { SERIAL id PK; VARCHAR name; }
    physical_positions { SERIAL id PK; VARCHAR name; }
    physical_environments { SERIAL id PK; VARCHAR name; }
    job_physical_intensities { SERIAL id PK; VARCHAR name; }
    job_cognitive_demands { SERIAL id PK; VARCHAR name; }
    job_computer_usage_levels { SERIAL id PK; VARCHAR name; }
    job_oral_communication_levels { SERIAL id PK; VARCHAR name; }
    role_types { SERIAL id PK; VARCHAR name; }
    shift_types { SERIAL id PK; VARCHAR name; }
    availability_options { SERIAL id PK; VARCHAR name; }
    travel_requirements { SERIAL id PK; VARCHAR travel_type; VARCHAR intensity; }
    benefits_and_perks { SERIAL id PK; VARCHAR name; }
    encouraged_to_apply { SERIAL id PK; VARCHAR name; }
    company_stages { SERIAL id PK; VARCHAR name; }
    company_sizes { SERIAL id PK; VARCHAR range; }

    job_skills { INT job_id PK, FK; INT skill_id PK, FK; }
    job_shifts { INT job_id PK, FK; INT shift_type_id PK, FK; VARCHAR requirement; }
    job_availability { INT job_id PK, FK; INT availability_option_id PK, FK; VARCHAR requirement; }
    job_travel_requirements { INT job_id PK, FK; INT travel_requirement_id PK, FK; }
    job_benefits_and_perks { INT job_id PK, FK; INT benefit_perk_id PK, FK; }
    job_encouraged_to_apply { INT job_id PK, FK; INT encouraged_to_apply_id PK, FK; }

    users ||--o{ saved_jobs : "saves"
    users ||--o{ saved_searches : "creates"
    companies ||--o{ jobs : "posts"
    jobs }o--|| commitment_types : "has"
    jobs }o--|| experience_levels : "requires"
    jobs }o--|| workplace_types : "has"
    jobs }o--|| physical_positions : "has"
    jobs }o--|| physical_environments : "has"
    jobs }o--|| job_physical_intensities : "has"
    jobs }o--|| job_cognitive_demands : "has"
    jobs }o--|| job_computer_usage_levels : "has"
    jobs }o--|| job_oral_communication_levels : "has"
    jobs }o--|| role_types : "is"
    jobs ||--o{ saved_jobs : "is saved in"

    jobs }o--o{ job_skills : "uses"
    skills }o--o{ job_skills : "is used in"

    jobs }o--o{ job_shifts : "has"
    shift_types }o--o{ job_shifts : "is in"

    jobs }o--o{ job_availability : "requires"
    availability_options }o--o{ job_availability : "is required in"

    jobs }o--o{ job_travel_requirements : "has"
    travel_requirements }o--o{ job_travel_requirements : "is in"

    jobs }o--o{ job_benefits_and_perks : "offers"
    benefits_and_perks }o--o{ job_benefits_and_perks : "is offered in"

    jobs }o--o{ job_encouraged_to_apply : "encourages"
    encouraged_to_apply }o--o{ job_encouraged_to_apply : "is encouraged in"
```
