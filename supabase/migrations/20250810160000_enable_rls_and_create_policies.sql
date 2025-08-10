-- Enable RLS for all tables and create security policies

-- 1. Enable RLS for all tables
-- This blocks all access by default, until a policy grants it.
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.saved_jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.saved_searches ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.commitment_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.experience_levels ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.departments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workplace_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.physical_positions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.physical_environments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_physical_intensities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_cognitive_demands ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_computer_usage_levels ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_oral_communication_levels ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.role_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shift_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.availability_options ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.travel_requirements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.benefits_and_perks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.encouraged_to_apply ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.company_stages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.company_sizes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_shifts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_availability ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_travel_requirements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_benefits_and_perks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_encouraged_to_apply ENABLE ROW LEVEL SECURITY;

-- 2. Create Policies for user-specific, private tables

-- USERS table
-- Users can view their own profile.
CREATE POLICY "Allow individual user read access" ON public.users FOR SELECT
    USING (auth.uid() = id);
-- Users can update their own profile.
CREATE POLICY "Allow individual user update access" ON public.users FOR UPDATE
    USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

-- SAVED_JOBS table
-- Users can view their own saved jobs.
CREATE POLICY "Allow individual read access on saved_jobs" ON public.saved_jobs FOR SELECT
    USING (auth.uid() = user_id);
-- Users can create a saved job for themselves.
CREATE POLICY "Allow individual insert access on saved_jobs" ON public.saved_jobs FOR INSERT
    WITH CHECK (auth.uid() = user_id);
-- Users can update their own saved job status.
CREATE POLICY "Allow individual update access on saved_jobs" ON public.saved_jobs FOR UPDATE
    USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
-- Users can delete their own saved job.
CREATE POLICY "Allow individual delete access on saved_jobs" ON public.saved_jobs FOR DELETE
    USING (auth.uid() = user_id);

-- SAVED_SEARCHES table
-- Users can view their own saved searches.
CREATE POLICY "Allow individual read access on saved_searches" ON public.saved_searches FOR SELECT
    USING (auth.uid() = user_id);
-- Users can create a saved search for themselves.
CREATE POLICY "Allow individual insert access on saved_searches" ON public.saved_searches FOR INSERT
    WITH CHECK (auth.uid() = user_id);
-- Users can update their own saved search.
CREATE POLICY "Allow individual update access on saved_searches" ON public.saved_searches FOR UPDATE
    USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
-- Users can delete their own saved search.
CREATE POLICY "Allow individual delete access on saved_searches" ON public.saved_searches FOR DELETE
    USING (auth.uid() = user_id);

-- 3. Create Policies for public, read-only tables
-- This allows anyone to read from these tables, but no one can write to them from the client.

CREATE POLICY "Allow public read access" ON public.jobs FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.companies FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.commitment_types FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.experience_levels FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.skills FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.departments FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.workplace_types FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.physical_positions FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.physical_environments FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.job_physical_intensities FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.job_cognitive_demands FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.job_computer_usage_levels FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.job_oral_communication_levels FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.role_types FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.shift_types FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.availability_options FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.travel_requirements FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.benefits_and_perks FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.encouraged_to_apply FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.company_stages FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.company_sizes FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.job_skills FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.job_shifts FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.job_availability FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.job_travel_requirements FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.job_benefits_and_perks FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.job_encouraged_to_apply FOR SELECT USING (true);
