import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { JobCard } from "@/components/JobCard";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { MapPin, Menu } from "lucide-react";
import { useUser } from "@supabase/auth-helpers-react";
import { supabase } from "@/utils/supabase";
import { useEffect, useState } from "react";

const filterCategories = [
  "Department",
  "Salary",
  "Commitment",
  "Experience",
  "Job Titles and Keywords",
  "Education",
  "License and Certification",
  "Security Clearance",
  "Languages",
  "Shifts and Schedules",
  "Travel Requirements",
  "Benefits and Perks",
  "Encouraged to Apply",
];

const workplaceTypes = ["Remote", "Hybrid", "Onsite"];
const physicalPositions = ["Sitting or desk jobs", "Active"];
const physicalEnvironments = ["Office", "Outdoor", "Vehicle", "Industrial", "Customer-facing"];
const laborIntensities = ["Low", "Medium", "High"];
const cognitiveDemands = ["Low", "Medium", "High"];
const computerUsageLevels = ["Low", "Medium", "High"];
const oralCommunicationLevels = ["Low", "Medium", "High"];

export default function Home() {
  const user = useUser();
  const [jobs, setJobs] = useState<any[]>([]);
  const [selectedWorkplaceTypes, setSelectedWorkplaceTypes] = useState<string[]>([]);
  const [selectedPhysicalPositions, setSelectedPhysicalPositions] = useState<string[]>([]);
  const [selectedPhysicalEnvironments, setSelectedPhysicalEnvironments] = useState<string[]>([]);
  const [selectedLaborIntensities, setSelectedLaborIntensities] = useState<string[]>([]);
  const [selectedCognitiveDemands, setSelectedCognitiveDemands] = useState<string[]>([]);
  const [selectedComputerUsageLevels, setSelectedComputerUsageLevels] = useState<string[]>([]);
  const [selectedOralCommunicationLevels, setSelectedOralCommunicationLevels] = useState<string[]>([]);
  const [departments, setDepartments] = useState<any[]>([]);
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [minSalary, setMinSalary] = useState<number | null>(null);
  const [maxSalary, setMaxSalary] = useState<number | null>(null);
  const [commitmentTypes, setCommitmentTypes] = useState<any[]>([]);
  const [selectedCommitmentTypes, setSelectedCommitmentTypes] = useState<string[]>([]);
  const [experienceLevels, setExperienceLevels] = useState<any[]>([]);
  const [selectedExperienceLevels, setSelectedExperienceLevels] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchFilters = async () => {
      const { data: departmentsData, error: departmentsError } = await supabase.from("departments").select("*");
      if (departmentsError) console.error("Error fetching departments:", departmentsError);
      else setDepartments(departmentsData);

      const { data: commitmentTypesData, error: commitmentTypesError } = await supabase.from("commitment_types").select("*");
      if (commitmentTypesError) console.error("Error fetching commitment types:", commitmentTypesError);
      else setCommitmentTypes(commitmentTypesData);

      const { data: experienceLevelsData, error: experienceLevelsError } = await supabase.from("experience_levels").select("*");
      if (experienceLevelsError) console.error("Error fetching experience levels:", experienceLevelsError);
      else setExperienceLevels(experienceLevelsData);
    };
    fetchFilters();
  }, []);

  const handleWorkplaceTypeChange = (type: string) => {
    setSelectedWorkplaceTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handlePhysicalPositionChange = (position: string) => {
    setSelectedPhysicalPositions((prev) =>
      prev.includes(position) ? prev.filter((p) => p !== position) : [...prev, position]
    );
  };

  const handlePhysicalEnvironmentChange = (env: string) => {
    setSelectedPhysicalEnvironments((prev) =>
      prev.includes(env) ? prev.filter((e) => e !== env) : [...prev, env]
    );
  };

  const handleLaborIntensityChange = (intensity: string) => {
    setSelectedLaborIntensities((prev) =>
      prev.includes(intensity) ? prev.filter((i) => i !== intensity) : [...prev, intensity]
    );
  };

  const handleCognitiveDemandChange = (demand: string) => {
    setSelectedCognitiveDemands((prev) =>
      prev.includes(demand) ? prev.filter((d) => d !== demand) : [...prev, demand]
    );
  };

  const handleComputerUsageChange = (level: string) => {
    setSelectedComputerUsageLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  const handleOralCommunicationChange = (level: string) => {
    setSelectedOralCommunicationLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  const handleClearFilters = () => {
    setSelectedWorkplaceTypes([]);
    setSelectedPhysicalPositions([]);
    setSelectedPhysicalEnvironments([]);
    setSelectedLaborIntensities([]);
    setSelectedCognitiveDemands([]);
    setSelectedComputerUsageLevels([]);
    setSelectedOralCommunicationLevels([]);
  };

  const handleDepartmentChange = (department: string) => {
    setSelectedDepartments((prev) =>
      prev.includes(department) ? prev.filter((d) => d !== department) : [...prev, department]
    );
  };

  const handleCommitmentChange = (commitment: string) => {
    setSelectedCommitmentTypes((prev) =>
      prev.includes(commitment) ? prev.filter((c) => c !== commitment) : [...prev, commitment]
    );
  };

  const handleExperienceLevelChange = (experience: string) => {
    setSelectedExperienceLevels((prev) =>
      prev.includes(experience) ? prev.filter((e) => e !== experience) : [...prev, experience]
    );
  };

  useEffect(() => {
    const fetchJobs = async () => {
      let query = supabase.from("jobs").select(
        `
          *,
          companies (
            name
          ),
          job_skills (
            skills (
              name
            )
          )
        `
      );

      if (selectedWorkplaceTypes.length > 0) {
        query = query.in("work_type", selectedWorkplaceTypes);
      }
      if (selectedPhysicalPositions.length > 0) {
        query = query.in("physical_position_id", selectedPhysicalPositions.map(p => physicalPositions.indexOf(p) + 1));
      }
      if (selectedPhysicalEnvironments.length > 0) {
        query = query.in("physical_environment_id", selectedPhysicalEnvironments.map(e => physicalEnvironments.indexOf(e) + 1));
      }
      if (selectedLaborIntensities.length > 0) {
        query = query.in("physical_intensity_id", selectedLaborIntensities.map(i => laborIntensities.indexOf(i) + 1));
      }
      if (selectedCognitiveDemands.length > 0) {
        query = query.in("cognitive_demand_id", selectedCognitiveDemands.map(d => cognitiveDemands.indexOf(d) + 1));
      }
      if (selectedComputerUsageLevels.length > 0) {
        query = query.in("computer_usage_id", selectedComputerUsageLevels.map(l => computerUsageLevels.indexOf(l) + 1));
      }
      if (selectedOralCommunicationLevels.length > 0) {
        query = query.in("oral_communication_id", selectedOralCommunicationLevels.map(l => oralCommunicationLevels.indexOf(l) + 1));
      }
      if (selectedDepartments.length > 0) {
        const departmentIds = departments.filter(dep => selectedDepartments.includes(dep.name)).map(dep => dep.id);
        query = query.in("department_id", departmentIds);
      }
      if (minSalary) {
        query = query.gte("salary_min", minSalary);
      }
      if (maxSalary) {
        query = query.lte("salary_max", maxSalary);
      }
      if (selectedCommitmentTypes.length > 0) {
        const commitmentTypeIds = commitmentTypes.filter(ct => selectedCommitmentTypes.includes(ct.name)).map(ct => ct.id);
        query = query.in("commitment_type_id", commitmentTypeIds);
      }
      if (selectedExperienceLevels.length > 0) {
        const experienceLevelIds = experienceLevels.filter(el => selectedExperienceLevels.includes(el.name)).map(el => el.id);
        query = query.in("experience_level_id", experienceLevelIds);
      }
      if (searchTerm) {
        query = query.ilike("title", `%${searchTerm}%`);
      }

      const { data, error } = await query;

      if (error) {
        console.error("Error fetching jobs:", error);
      } else {
        setJobs(data);
      }
    };

    fetchJobs();
  }, [
    selectedWorkplaceTypes,
    selectedPhysicalPositions,
    selectedPhysicalEnvironments,
    selectedLaborIntensities,
    selectedCognitiveDemands,
    selectedComputerUsageLevels,
    selectedOralCommunicationLevels,
    selectedDepartments,
    departments,
    minSalary,
    maxSalary,
    selectedCommitmentTypes,
    commitmentTypes,
    selectedExperienceLevels,
    experienceLevels,
    searchTerm,
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 border-b">
        <div className="text-2xl font-bold">IRN Cave</div>
        <div className="flex-1 max-w-xl mx-4">
          <Input placeholder="Search..." />
        </div>
        <div className="flex items-center gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <MapPin className="mr-2 h-4 w-4" /> Location
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-96">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Locations and Environments</h3>
                <div className="max-h-[400px] overflow-y-auto pr-4 space-y-4">
                  <div>
                    <Label>Location</Label>
                    <Input placeholder="Germany" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Workplace Type</h4>
                    {workplaceTypes.map((type) => (
                      <div key={type} className="flex items-center space-x-2 mt-2">
                        <Checkbox id={type} checked={selectedWorkplaceTypes.includes(type)} onCheckedChange={() => handleWorkplaceTypeChange(type)} />
                        <Label htmlFor={type}>{type}</Label>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-semibold">Physical Position</h4>
                    {physicalPositions.map((position) => (
                      <div key={position} className="flex items-center space-x-2 mt-2">
                        <Checkbox id={position} checked={selectedPhysicalPositions.includes(position)} onCheckedChange={() => handlePhysicalPositionChange(position)} />
                        <Label htmlFor={position}>{position}</Label>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-semibold">Physical Environment</h4>
                    {physicalEnvironments.map((env) => (
                      <div key={env} className="flex items-center space-x-2 mt-2">
                        <Checkbox id={env} checked={selectedPhysicalEnvironments.includes(env)} onCheckedChange={() => handlePhysicalEnvironmentChange(env)} />
                        <Label htmlFor={env}>{env}</Label>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-semibold">Physical Labor Intensity</h4>
                    {laborIntensities.map((intensity) => (
                      <div key={intensity} className="flex items-center space-x-2 mt-2">
                        <Checkbox id={intensity} checked={selectedLaborIntensities.includes(intensity)} onCheckedChange={() => handleLaborIntensityChange(intensity)} />
                        <Label htmlFor={intensity}>{intensity}</Label>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-semibold">Cognitive Demand</h4>
                    {cognitiveDemands.map((demand) => (
                      <div key={demand} className="flex items-center space-x-2 mt-2">
                        <Checkbox id={demand} checked={selectedCognitiveDemands.includes(demand)} onCheckedChange={() => handleCognitiveDemandChange(demand)} />
                        <Label htmlFor={demand}>{demand}</Label>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-semibold">Computer Usage Level</h4>
                    {computerUsageLevels.map((level) => (
                      <div key={level} className="flex items-center space-x-2 mt-2">
                        <Checkbox id={level} checked={selectedComputerUsageLevels.includes(level)} onCheckedChange={() => handleComputerUsageChange(level)} />
                        <Label htmlFor={level}>{level}</Label>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-semibold">Oral Communication Level</h4>
                    {oralCommunicationLevels.map((level) => (
                      <div key={level} className="flex items-center space-x-2 mt-2">
                        <Checkbox id={level} checked={selectedOralCommunicationLevels.includes(level)} onCheckedChange={() => handleOralCommunicationChange(level)} />
                        <Label htmlFor={level}>{level}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between pt-4 border-t">
                  <Button variant="ghost" onClick={handleClearFilters}>Clear</Button>
                  <Button>Apply</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <Menu className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48">
              <div className="space-y-2">
                {user ? (
                  <>
                    <Button variant="ghost" className="w-full justify-start">Saved Jobs</Button>
                    <Button variant="ghost" className="w-full justify-start">Account</Button>
                    <Button variant="ghost" className="w-full justify-start">Inbox</Button>
                    <Button variant="ghost" className="w-full justify-start" onClick={() => supabase.auth.signOut()}>Logout</Button>
                  </>
                ) : (
                  <>
                    <Link href="/login">
                      <Button variant="ghost" className="w-full justify-start">Sign Up/Login</Button>
                    </Link>
                    <Button variant="ghost" className="w-full justify-start">About Us</Button>
                    <Button variant="ghost" className="w-full justify-start">Employers</Button>
                  </>
                )}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="w-1/4 p-4 border-r">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div className="space-y-2">
            {filterCategories.map((category) => {
              if (category === "Department") {
                return (
                  <Popover key={category}>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" className="w-full justify-start">
                        {category}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-96">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Department</h3>
                        <div className="max-h-[400px] overflow-y-auto pr-4 space-y-4">
                          {departments.map((department) => (
                            <div key={department.id} className="flex items-center space-x-2 mt-2">
                              <Checkbox id={department.name} checked={selectedDepartments.includes(department.name)} onCheckedChange={() => handleDepartmentChange(department.name)} />
                              <Label htmlFor={department.name}>{department.name}</Label>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between pt-4 border-t">
                          <Button variant="ghost" onClick={() => setSelectedDepartments([])}>Clear</Button>
                          <Button>Apply</Button>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                );
              }
              if (category === "Salary") {
                return (
                  <Popover key={category}>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" className="w-full justify-start">
                        {category}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-96">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Salary</h3>
                        <div className="space-y-2">
                          <div>
                            <Label htmlFor="min-salary">Min Salary</Label>
                            <Input id="min-salary" type="number" placeholder="e.g., 50000" onChange={(e) => setMinSalary(Number(e.target.value))} />
                          </div>
                          <div>
                            <Label htmlFor="max-salary">Max Salary</Label>
                            <Input id="max-salary" type="number" placeholder="e.g., 120000" onChange={(e) => setMaxSalary(Number(e.target.value))} />
                          </div>
                        </div>
                        <div className="flex justify-between pt-4 border-t">
                          <Button variant="ghost" onClick={() => { setMinSalary(null); setMaxSalary(null); }}>Clear</Button>
                          <Button>Apply</Button>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                );
              }
              if (category === "Commitment") {
                return (
                  <Popover key={category}>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" className="w-full justify-start">
                        {category}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-96">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Commitment</h3>
                        <div className="max-h-[400px] overflow-y-auto pr-4 space-y-4">
                          {commitmentTypes.map((commitment) => (
                            <div key={commitment.id} className="flex items-center space-x-2 mt-2">
                              <Checkbox id={commitment.name} checked={selectedCommitmentTypes.includes(commitment.name)} onCheckedChange={() => handleCommitmentChange(commitment.name)} />
                              <Label htmlFor={commitment.name}>{commitment.name}</Label>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between pt-4 border-t">
                          <Button variant="ghost" onClick={() => setSelectedCommitmentTypes([])}>Clear</Button>
                          <Button>Apply</Button>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                );
              }
              if (category === "Experience") {
                return (
                  <Popover key={category}>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" className="w-full justify-start">
                        {category}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-96">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Experience</h3>
                        <div className="max-h-[400px] overflow-y-auto pr-4 space-y-4">
                          {experienceLevels.map((experience) => (
                            <div key={experience.id} className="flex items-center space-x-2 mt-2">
                              <Checkbox id={experience.name} checked={selectedExperienceLevels.includes(experience.name)} onCheckedChange={() => handleExperienceLevelChange(experience.name)} />
                              <Label htmlFor={experience.name}>{experience.name}</Label>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between pt-4 border-t">
                          <Button variant="ghost" onClick={() => setSelectedExperienceLevels([])}>Clear</Button>
                          <Button>Apply</Button>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                );
              }
              if (category === "Job Titles and Keywords") {
                return (
                  <Popover key={category}>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" className="w-full justify-start">
                        {category}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-96">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Job Titles and Keywords</h3>
                        <div className="space-y-2">
                          <Input placeholder="e.g., Software Engineer" onChange={(e) => setSearchTerm(e.target.value)} />
                        </div>
                        <div className="flex justify-between pt-4 border-t">
                          <Button variant="ghost" onClick={() => setSearchTerm("")}>Clear</Button>
                          <Button>Apply</Button>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                );
              }
              return (
                <Button key={category} variant="ghost" className="w-full justify-start">
                  {category}
                </Button>
              );
            })}
          </div>
        </aside>
        <main className="w-3/4 p-4 space-y-4">
          <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              title={job.title}
              companyName={job.companies.name}
              location={job.location}
              workType={job.work_type}
              description={job.description}
              requirements={job.description}
              tags={job.job_skills.map((js: any) => js.skills.name)}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
