import { createClient } from '@supabase/supabase-js';

// IMPORTANT: Replace with your Supabase project URL and service role key.
// It is recommended to use environment variables for these in a real application.
const SUPABASE_URL = 'https://hbzldpmtezrahlpksdsp.supabase.co';
const SUPABASE_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhiemxkcG10ZXpyYWhscGtzZHNwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NDgxNjA3NSwiZXhwIjoyMDcwMzkyMDc1fQ.gX6_-i57RtJQKyhhudVJvJeIDgS96IxG6q-oDjEYmoQ';

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function main() {
  // Mock Data
  const companies = [
    { name: 'TechCorp', description: 'A leading technology company.', website: 'https://techcorp.com', logo_url: 'https://example.com/logo.png', employee_count: 1000 },
    { name: 'HealthWell', description: 'A healthcare provider.', website: 'https://healthwell.com', logo_url: 'https://example.com/logo.png', employee_count: 500 },
  ];

  const commitment_types = [
    { name: 'Full-time' },
    { name: 'Part-time' },
    { name: 'Contract' },
  ];

  const experience_levels = [
    { name: 'Entry-level' },
    { name: 'Mid-level' },
    { name: 'Senior-level' },
  ];

  const departments = [
    { name: 'Engineering' },
    { name: 'Marketing' },
    { name: 'Sales' },
  ];

  const workplace_types = [
    { name: 'Remote' },
    { name: 'Hybrid' },
    { name: 'Onsite' },
  ];

  const physical_positions = [
    { name: 'Sitting or desk jobs' },
    { name: 'Active' },
  ];

  const physical_environments = [
    { name: 'Office' },
    { name: 'Outdoor' },
    { name: 'Vehicle' },
  ];

  const job_physical_intensities = [
    { name: 'Low' },
    { name: 'Medium' },
    { name: 'High' },
  ];

  const job_cognitive_demands = [
    { name: 'Low' },
    { name: 'Medium' },
    { name: 'High' },
  ];

  const job_computer_usage_levels = [
    { name: 'Low' },
    { name: 'Medium' },
    { name: 'High' },
  ];

  const job_oral_communication_levels = [
    { name: 'Low' },
    { name: 'Medium' },
    { name: 'High' },
  ];

  const skills = [
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'React' },
    { name: 'Node.js' },
    { name: 'Python' },
    { name: 'SQL' },
  ];

  // Insert data
  const { data: insertedCompanies, error: companiesError } = await supabase.from('companies').insert(companies).select();
  if (companiesError) console.error('Error inserting companies:', companiesError);

  const { data: insertedCommitmentTypes, error: commitmentTypesError } = await supabase.from('commitment_types').insert(commitment_types).select();
  if (commitmentTypesError) console.error('Error inserting commitment_types:', commitmentTypesError);

  const { data: insertedExperienceLevels, error: experienceLevelsError } = await supabase.from('experience_levels').insert(experience_levels).select();
  if (experienceLevelsError) console.error('Error inserting experience_levels:', experienceLevelsError);

  const { data: insertedDepartments, error: departmentsError } = await supabase.from('departments').insert(departments).select();
  if (departmentsError) console.error('Error inserting departments:', departmentsError);

  const { data: insertedWorkplaceTypes, error: workplaceTypesError } = await supabase.from('workplace_types').insert(workplace_types).select();
  if (workplaceTypesError) console.error('Error inserting workplace_types:', workplaceTypesError);

  const { data: insertedPhysicalPositions, error: physicalPositionsError } = await supabase.from('physical_positions').insert(physical_positions).select();
  if (physicalPositionsError) console.error('Error inserting physical_positions:', physicalPositionsError);

  const { data: insertedPhysicalEnvironments, error: physicalEnvironmentsError } = await supabase.from('physical_environments').insert(physical_environments).select();
  if (physicalEnvironmentsError) console.error('Error inserting physical_environments:', physicalEnvironmentsError);

  const { data: insertedJobPhysicalIntensities, error: jobPhysicalIntensitiesError } = await supabase.from('job_physical_intensities').insert(job_physical_intensities).select();
  if (jobPhysicalIntensitiesError) console.error('Error inserting job_physical_intensities:', jobPhysicalIntensitiesError);

  const { data: insertedJobCognitiveDemands, error: jobCognitiveDemandsError } = await supabase.from('job_cognitive_demands').insert(job_cognitive_demands).select();
  if (jobCognitiveDemandsError) console.error('Error inserting job_cognitive_demands:', jobCognitiveDemandsError);

  const { data: insertedJobComputerUsageLevels, error: jobComputerUsageLevelsError } = await supabase.from('job_computer_usage_levels').insert(job_computer_usage_levels).select();
  if (jobComputerUsageLevelsError) console.error('Error inserting job_computer_usage_levels:', jobComputerUsageLevelsError);

  const { data: insertedJobOralCommunicationLevels, error: jobOralCommunicationLevelsError } = await supabase.from('job_oral_communication_levels').insert(job_oral_communication_levels).select();
  if (jobOralCommunicationLevelsError) console.error('Error inserting job_oral_communication_levels:', jobOralCommunicationLevelsError);

  const { data: insertedSkills, error: skillsError } = await supabase.from('skills').insert(skills).select();
  if (skillsError) console.error('Error inserting skills:', skillsError);

  const jobs = [
    {
      title: 'Software Engineer',
      description: 'We are looking for a talented software engineer to join our team.',
      company_id: insertedCompanies[0].id,
      location: 'San Francisco, CA',
      work_type: 'Remote',
      commitment_type_id: insertedCommitmentTypes[0].id,
      experience_level_id: insertedExperienceLevels[1].id,
      salary_min: 100000,
      salary_max: 150000,
      workplace_type_id: insertedWorkplaceTypes[0].id,
      physical_position_id: insertedPhysicalPositions[0].id,
      physical_environment_id: insertedPhysicalEnvironments[0].id,
      physical_intensity_id: insertedJobPhysicalIntensities[0].id,
      cognitive_demand_id: insertedJobCognitiveDemands[1].id,
      computer_usage_id: insertedJobComputerUsageLevels[2].id,
      oral_communication_id: insertedJobOralCommunicationLevels[1].id,
    },
    {
      title: 'Product Manager',
      description: 'We are looking for an experienced product manager to lead our product team.',
      company_id: insertedCompanies[1].id,
      location: 'New York, NY',
      work_type: 'Hybrid',
      commitment_type_id: insertedCommitmentTypes[0].id,
      experience_level_id: insertedExperienceLevels[2].id,
      salary_min: 120000,
      salary_max: 180000,
      workplace_type_id: insertedWorkplaceTypes[1].id,
      physical_position_id: insertedPhysicalPositions[0].id,
      physical_environment_id: insertedPhysicalEnvironments[0].id,
      physical_intensity_id: insertedJobPhysicalIntensities[0].id,
      cognitive_demand_id: insertedJobCognitiveDemands[2].id,
      computer_usage_id: insertedJobComputerUsageLevels[2].id,
      oral_communication_id: insertedJobOralCommunicationLevels[2].id,
    },
  ];

  const { data: insertedJobs, error: jobsError } = await supabase.from('jobs').insert(jobs).select();
  if (jobsError) console.error('Error inserting jobs:', jobsError);

  const job_skills = [
    { job_id: insertedJobs[0].id, skill_id: insertedSkills[0].id },
    { job_id: insertedJobs[0].id, skill_id: insertedSkills[1].id },
    { job_id: insertedJobs[0].id, skill_id: insertedSkills[2].id },
    { job_id: insertedJobs[1].id, skill_id: insertedSkills[4].id },
    { job_id: insertedJobs[1].id, skill_id: insertedSkills[5].id },
  ];

  const { error: jobSkillsError } = await supabase.from('job_skills').insert(job_skills);
  if (jobSkillsError) console.error('Error inserting job_skills:', jobSkillsError);

  console.log('Database seeded successfully!');
}

main().catch(console.error);
