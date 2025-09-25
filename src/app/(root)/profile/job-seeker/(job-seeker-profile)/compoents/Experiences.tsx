/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Experience = ({ data }: { data: any }) => (
  <Card className="shadow-none"> 
    <CardHeader className="font-heading text-lg font-semibold">Experience</CardHeader>
    <CardContent className="grid gap-4">
      {data.workExperience?.hasExperience &&
        data.workExperience.experiences?.map((exp: any, idx: number) => (
          <div key={idx} className="grid gap-2">
            <h3 className="font-heading font-semibold">{exp.companyName}</h3>
            <p className="text-sm text-muted-foreground">{exp.role}</p>
            <p className="text-sm text-muted-foreground">
              {exp.duration.start.toLocaleDateString()} -{" "}
              {exp.duration.end.toLocaleDateString()}
            </p>
            {exp.description && (
              <p className="text-sm text-muted-foreground">{exp.description}</p>
            )}
            <Separator />
          </div>
        ))}
    </CardContent>
  </Card>
);

export default Experience;
