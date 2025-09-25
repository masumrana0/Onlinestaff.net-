import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, BookOpen, Users, Briefcase } from "lucide-react";

export function QuickLinks() {
  const links = [
    {
      title: "Search for Talent",
      icon: Search,
      description: "Quickly find the right talent for your needs",
    },
    {
      title: "Read Case Studies",
      icon: BookOpen,
      description: "Explore success stories of our valued students",
    },
    {
      title: "Browse Candidates",
      icon: Users,
      description: "View profiles of available candidates",
    },
    {
      title: "Post a Job",
      icon: Briefcase,
      description: "List your job openings for top talent",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
      {links.map((link, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center space-x-4 pb-2">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
              <link.icon size={18} />
            </div>
            <CardTitle className="text-lg">{link.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{link.description}</p>
            <Button variant="link" className="mt-2 p-0">
              Learn more
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
