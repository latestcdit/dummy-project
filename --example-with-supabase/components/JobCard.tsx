import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface JobCardProps {
  title: string;
  companyName: string;
  location: string;
  workType: string;
  description: string;
  requirements: string;
  tags: string[];
}

export function JobCard({
  title,
  companyName,
  location,
  workType,
  description,
  requirements,
  tags,
}: JobCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {companyName} | {location} | {workType}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-2">{description}</p>
        <p className="text-sm text-gray-500">{requirements}</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
