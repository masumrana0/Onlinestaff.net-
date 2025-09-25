"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  DollarSign,
  ArrowRight,
  Briefcase,
  Globe2,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { H2, Paragraph, Small } from "@/components/ui/typography";

interface Job {
  title: string;
  company: string;
  logo: string;
  locations: string[];
  salary: string;
  link: string;
  type: "Full-time" | "Part-time" | "Contract";
  remote: boolean;
}

const jobs: Job[] = [
  {
    title: "Senior Software Engineer",
    company: "Google",
    logo: "/demo.png",
    locations: ["Mountain View, CA", "New York, NY"],
    salary: "$150,000 - $250,000 /year",
    link: "#",
    type: "Full-time",
    remote: true,
  },
  {
    title: "Product Manager",
    company: "Amazon",
    logo: "/demo.png",
    locations: ["Seattle, WA", "Austin, TX"],
    salary: "$130,000 - $200,000 /year",
    link: "#",
    type: "Full-time",
    remote: false,
  },
  {
    title: "Data Scientist",
    company: "Microsoft",
    logo: "/demo.png",
    locations: ["Redmond, WA", "Boston, MA"],
    salary: "$140,000 - $220,000 /year",
    link: "#",
    type: "Full-time",
    remote: true,
  },
  {
    title: "UX Designer",
    company: "Apple",
    logo: "/demo.png",
    locations: ["Cupertino, CA", "Chicago, IL"],
    salary: "$120,000 - $180,000 /year",
    link: "#",
    type: "Full-time",
    remote: true,
  },
];

function JobCard({ job, className }: { job: Job; className?: string }) {
  return (
    <Card
      className={cn(
        "w-full max-w-[350px] mx-auto hover:shadow-lg transition-all duration-300 group",
        className
      )}
    >
      <CardContent className="p-4 sm:p-6 space-y-4">
        {/* Header Section */}
        <div className="flex justify-between items-start">
          <Badge
            variant="secondary"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Actively hiring
          </Badge>
          <Image
            src={job.logo}
            alt={job.company}
            width={48}
            height={48}
            className="object-contain rounded-md group-hover:scale-105 transition-transform"
          />
        </div>

        {/* Job Title and Company */}
        <div>
          <Paragraph className="font-semibold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors">
            {job.title}
          </Paragraph>
          <Small className="text-muted-foreground mt-1">{job.company}</Small>
        </div>

        {/* Job Type Badges */}
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="flex items-center gap-1 text-foreground text-xs sm:text-sm"
          >
            <Briefcase className="h-3 w-3" />
            {job.type}
          </Badge>
          {job.remote && (
            <Badge
              variant="outline"
              className="flex items-center gap-1 text-foreground text-xs sm:text-sm"
            >
              <Globe2 className="h-3 w-3" />
              Remote
            </Badge>
          )}
        </div>

        {/* Location */}
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
          <Small className="text-muted-foreground text-xs sm:text-sm truncate">
            {job.locations.join(", ")}
          </Small>
        </div>

        {/* Salary */}
        <div className="flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-muted-foreground flex-shrink-0" />
          <Small className="text-muted-foreground text-xs sm:text-sm">
            {job.salary}
          </Small>
        </div>

        {/* Footer Section */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <Badge
            variant="secondary"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors text-xs sm:text-sm"
          >
            Apply now
          </Badge>

          <a
            href={job.link}
            className="flex items-center gap-1 text-primary hover:text-primary/90 text-xs sm:text-sm font-medium transition-colors group"
          >
            View details
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

export default function FeaturedJobs() {
  return (
    <section>
      <H2 className="mb-8 text-center text-foreground">Featured Jobs</H2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </section>
  );
}
