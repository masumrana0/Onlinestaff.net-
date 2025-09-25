"use client";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChevronRight,
  Building2,
  Briefcase,
  MapPin,
  Globe,
  GraduationCap,
  Shield,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

interface FilterCategory {
  icon: React.ReactNode;
  label: string;
  subCategories: {
    name: string;
    count: number;
    href: string;
  }[];
}

const filterCategories: Record<string, FilterCategory> = {
  industry: {
    icon: <Building2 className="h-4 w-4" />,
    label: "By Industry",
    subCategories: [
      { name: "Technology", count: 512, href: "#" },
      { name: "Healthcare", count: 423, href: "#" },
      { name: "Finance", count: 398, href: "#" },
      { name: "Education", count: 312, href: "#" },
      { name: "Retail", count: 256, href: "#" },
      { name: "Construction", count: 198, href: "#" },
      { name: "Automotive", count: 187, href: "#" },
      { name: "Energy", count: 156, href: "#" },
      { name: "Telecommunications", count: 234, href: "#" },
      { name: "Media & Entertainment", count: 276, href: "#" },
    ],
  },
  role: {
    icon: <Briefcase className="h-4 w-4" />,
    label: "By Role",
    subCategories: [
      { name: "Software Engineer", count: 789, href: "#" },
      { name: "Project Manager", count: 567, href: "#" },
      { name: "Data Scientist", count: 456, href: "#" },
      { name: "Product Designer", count: 389, href: "#" },
      { name: "Marketing Specialist", count: 345, href: "#" },
      { name: "HR Manager", count: 276, href: "#" },
      { name: "Sales Representative", count: 423, href: "#" },
      { name: "Customer Support", count: 312, href: "#" },
      { name: "Business Analyst", count: 267, href: "#" },
      { name: "Quality Assurance", count: 234, href: "#" },
    ],
  },
  location: {
    icon: <MapPin className="h-4 w-4" />,
    label: "By Location",
    subCategories: [
      { name: "Remote", count: 732, href: "#" },
      { name: "New York", count: 567, href: "#" },
      { name: "San Francisco", count: 456, href: "#" },
      { name: "London", count: 398, href: "#" },
      { name: "Berlin", count: 312, href: "#" },
      { name: "Sydney", count: 276, href: "#" },
      { name: "Paris", count: 234, href: "#" },
      { name: "Tokyo", count: 267, href: "#" },
      { name: "Singapore", count: 189, href: "#" },
      { name: "Toronto", count: 212, href: "#" },
    ],
  },
  expertise: {
    icon: <GraduationCap className="h-4 w-4" />,
    label: "By Expertise",
    subCategories: [
      { name: "Entry-Level", count: 623, href: "#" },
      { name: "Mid-Level", count: 512, href: "#" },
      { name: "Senior-Level", count: 389, href: "#" },
      { name: "Management", count: 276, href: "#" },
      { name: "Director", count: 189, href: "#" },
      { name: "Executive", count: 123, href: "#" },
      { name: "Intern", count: 234, href: "#" },
      { name: "Apprentice", count: 156, href: "#" },
      { name: "Specialist", count: 287, href: "#" },
      { name: "Expert Consultant", count: 98, href: "#" },
    ],
  },
  jobType: {
    icon: <Globe className="h-4 w-4" />,
    label: "By Job Type",
    subCategories: [
      { name: "Full-Time", count: 832, href: "#" },
      { name: "Part-Time", count: 567, href: "#" },
      { name: "Internship", count: 389, href: "#" },
      { name: "Contract", count: 276, href: "#" },
      { name: "Freelance", count: 198, href: "#" },
      { name: "Temporary", count: 156, href: "#" },
      { name: "Remote Full-Time", count: 423, href: "#" },
      { name: "Hybrid", count: 312, href: "#" },
      { name: "Seasonal", count: 187, href: "#" },
      { name: "Volunteer", count: 98, href: "#" },
    ],
  },
  companySize: {
    icon: <Shield className="h-4 w-4" />,
    label: "By Company Size",
    subCategories: [
      { name: "1-50 Employees", count: 389, href: "#" },
      { name: "51-200 Employees", count: 456, href: "#" },
      { name: "201-500 Employees", count: 567, href: "#" },
      { name: "501-1000 Employees", count: 276, href: "#" },
      { name: "1001-5000 Employees", count: 198, href: "#" },
      { name: "5000+ Employees", count: 123, href: "#" },
      { name: "Startup (<10 Employees)", count: 234, href: "#" },
      { name: "Mid-Market (201-1000)", count: 312, href: "#" },
      { name: "Enterprise (5000+)", count: 189, href: "#" },
      { name: "Small Business (10-50)", count: 267, href: "#" },
    ],
  },
  compensation: {
    icon: <DollarSign className="h-4 w-4" />,
    label: "By Compensation",
    subCategories: [
      { name: "$0-$50K", count: 456, href: "#" },
      { name: "$50K-$75K", count: 389, href: "#" },
      { name: "$75K-$100K", count: 312, href: "#" },
      { name: "$100K-$150K", count: 276, href: "#" },
      { name: "$150K-$200K", count: 198, href: "#" },
      { name: "$200K+", count: 123, href: "#" },
      { name: "Equity Offered", count: 234, href: "#" },
      { name: "Performance Bonus", count: 187, href: "#" },
      { name: "Stock Options", count: 156, href: "#" },
      { name: "Commission-Based", count: 98, href: "#" },
    ],
  },
};

function FilterGroup({ category }: { category: FilterCategory }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
      {category.subCategories.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="group flex items-center justify-between rounded-lg px-3 py-2 hover:bg-accent"
        >
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium leading-none">
              {item.name}
            </span>
            <span className="text-sm text-muted-foreground">
              ({item.count})
            </span>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
        </Link>
      ))}
    </div>
  );
}

export function FilterTabs() {
  return (
    <Card className="overflow-hidden border-none bg-background/60 backdrop-blur-sm">
      <Tabs defaultValue="industry" className="w-full">
        <div className="flex items-center border-b px-4 py-2">
          <TabsList className="grid w-full grid-cols-3 sm:grid-cols-4 md:grid-cols-6 h-auto gap-1 bg-muted p-1 rounded-lg">
            {Object.entries(filterCategories).map(([key, category]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-2 py-1.5 text-xs sm:text-sm md:text-sm font-medium 
                transition-all duration-200 ease-in-out
                hover:bg-accent hover:text-accent-foreground
                data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                disabled:pointer-events-none disabled:opacity-50"
              >
                <div className="flex items-center justify-center gap-1">
                  <span className=" hidden sm:inline-block">
                    {category.icon}
                  </span>
                  <span className="flex sm:gap-2">{category.label}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {Object.entries(filterCategories).map(([key, category]) => (
          <TabsContent key={key} value={key} className="p-4">
            <FilterGroup category={category} />
          </TabsContent>
        ))}
      </Tabs>
    </Card>
  );
}
