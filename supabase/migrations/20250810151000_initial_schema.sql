-- IRN Cave Initial Schema

-- Create Lookup Tables
CREATE TABLE IF NOT EXISTS commitment_types (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS experience_levels (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS skills (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS workplace_types (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS physical_positions (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS physical_environments (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS job_physical_intensities (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS job_cognitive_demands (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS job_computer_usage_levels (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS job_oral_communication_levels (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS role_types (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS shift_types (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS availability_options (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS travel_requirements (
    id SERIAL PRIMARY KEY,
    travel_type VARCHAR NOT NULL,
    intensity VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS benefits_and_perks (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS encouraged_to_apply (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS company_stages (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS company_sizes (
    id SERIAL PRIMARY KEY,
    range VARCHAR NOT NULL
);

-- Create Core Tables
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email VARCHAR UNIQUE,
    daily_digest_enabled BOOLEAN DEFAULT true,
    new_matches_notification_enabled BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS companies (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    description TEXT,
    website VARCHAR,
    logo_url VARCHAR,
    employee_count INT
);

CREATE TABLE IF NOT EXISTS jobs (
    id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    description TEXT,
    company_id INT REFERENCES companies(id) ON DELETE CASCADE,
    location VARCHAR,
    work_type VARCHAR,
    commitment_type_id INT REFERENCES commitment_types(id),
    experience_level_id INT REFERENCES experience_levels(id),
    salary_min INT,
    salary_max INT,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    workplace_type_id INT REFERENCES workplace_types(id),
    physical_position_id INT REFERENCES physical_positions(id),
    physical_environment_id INT REFERENCES physical_environments(id),
    physical_intensity_id INT REFERENCES job_physical_intensities(id),
    cognitive_demand_id INT REFERENCES job_cognitive_demands(id),
    computer_usage_id INT REFERENCES job_computer_usage_levels(id),
    oral_communication_id INT REFERENCES job_oral_communication_levels(id),
    role_type_id INT REFERENCES role_types(id),
    years_of_experience INT,
    years_of_management_experience INT,
    education_level VARCHAR,
    education_requirement VARCHAR,
    requires_license BOOLEAN,
    requires_security_clearance BOOLEAN
);

CREATE TABLE IF NOT EXISTS saved_searches (
    id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR NOT NULL,
    search_parameters JSONB,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create Join Tables
CREATE TABLE IF NOT EXISTS saved_jobs (
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    job_id INT REFERENCES jobs(id) ON DELETE CASCADE,
    status VARCHAR,
    saved_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    PRIMARY KEY (user_id, job_id)
);

CREATE TABLE IF NOT EXISTS job_skills (
    job_id INT REFERENCES jobs(id) ON DELETE CASCADE,
    skill_id INT REFERENCES skills(id) ON DELETE CASCADE,
    PRIMARY KEY (job_id, skill_id)
);

CREATE TABLE IF NOT EXISTS job_shifts (
    job_id INT REFERENCES jobs(id) ON DELETE CASCADE,
    shift_type_id INT REFERENCES shift_types(id) ON DELETE CASCADE,
    requirement VARCHAR,
    PRIMARY KEY (job_id, shift_type_id)
);

CREATE TABLE IF NOT EXISTS job_availability (
    job_id INT REFERENCES jobs(id) ON DELETE CASCADE,
    availability_option_id INT REFERENCES availability_options(id) ON DELETE CASCADE,
    requirement VARCHAR,
    PRIMARY KEY (job_id, availability_option_id)
);

CREATE TABLE IF NOT EXISTS job_travel_requirements (
    job_id INT REFERENCES jobs(id) ON DELETE CASCADE,
    travel_requirement_id INT REFERENCES travel_requirements(id) ON DELETE CASCADE,
    PRIMARY KEY (job_id, travel_requirement_id)
);

CREATE TABLE IF NOT EXISTS job_benefits_and_perks (
    job_id INT REFERENCES jobs(id) ON DELETE CASCADE,
    benefit_perk_id INT REFERENCES benefits_and_perks(id) ON DELETE CASCADE,
    PRIMARY KEY (job_id, benefit_perk_id)
);

CREATE TABLE IF NOT EXISTS job_encouraged_to_apply (
    job_id INT REFERENCES jobs(id) ON DELETE CASCADE,
    encouraged_to_apply_id INT REFERENCES encouraged_to_apply(id) ON DELETE CASCADE,
    PRIMARY KEY (job_id, encouraged_to_apply_id)
);
