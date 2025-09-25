"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { H2, H3, Small } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, DollarSign, Briefcase } from "lucide-react";

interface Job {
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
}

const featuredJobs: Job[] = [
  {
    title: "Senior Auto Technician",
    company: "AutoCare Plus",
    location: "New York, NY",
    salary: "$65,000 - $85,000",
    type: "Full-time",
  },
  {
    title: "Sales Manager",
    company: "Premium Motors",
    location: "Los Angeles, CA",
    salary: "$70,000 - $90,000",
    type: "Full-time",
  },
  {
    title: "Parts Specialist",
    company: "CarParts Pro",
    location: "Chicago, IL",
    salary: "$45,000 - $55,000",
    type: "Full-time",
  },
  {
    title: "Automotive Engineer",
    company: "TechDrive",
    location: "Detroit, MI",
    salary: "$80,000 - $110,000",
    type: "Full-time",
  },
  {
    title: "Sales Manager",
    company: "Premium Motors",
    location: "Los Angeles, CA",
    salary: "$70,000 - $90,000",
    type: "Full-time",
  },
];

export function FeaturedJobs() {
  return (
    <section className="py-12 px-4">
      <H2 className="text-center mb-8 text-foreground">Featured Jobs</H2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {featuredJobs.map((job, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-300">
                <CardHeader className="space-y-2">
                  <Badge
                    variant="secondary"
                    className="w-fit bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Featured
                  </Badge>
                  <H3 className="text-lg font-semibold text-foreground line-clamp-2">
                    {job.title}
                  </H3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building2 className="h-4 w-4 shrink-0" />
                    <Small className="truncate">{job.company}</Small>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 flex-grow">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 shrink-0" />
                    <Small className="truncate">{job.location}</Small>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <DollarSign className="h-4 w-4 shrink-0" />
                    <Small className="truncate">{job.salary}</Small>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Briefcase className="h-4 w-4 shrink-0" />
                    <Small className="truncate">{job.type}</Small>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                    Apply Now
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden sm:block">
          <CarouselPrevious className="-left-12 bg-background text-foreground border-border hover:bg-secondary hover:text-secondary-foreground" />
          <CarouselNext className="-right-12 bg-background text-foreground border-border hover:bg-secondary hover:text-secondary-foreground" />
        </div>
      </Carousel>
    </section>
  );
}
