"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Skills = ({ data }: { data: any }) => (
  <Card className="shadow-none">
    <CardHeader className="font-heading text-lg font-semibold">Skills</CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-2">
        {data.skills.map((skill: string) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default Skills;
