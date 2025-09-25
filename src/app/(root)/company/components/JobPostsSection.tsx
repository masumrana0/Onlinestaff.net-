import { Briefcase, } from 'lucide-react'
import { EmptyState } from "./EmptyState"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function JobPostsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Your Job Posts</CardTitle>
      </CardHeader>
      <CardContent>
        <EmptyState
          icon={Briefcase}
          title="No job posts yet"
          description="Your job posts will appear here"
          actionLabel="Add my first job post"
          page="/company/jobs/create-post"
        />
      </CardContent>
    </Card>
  );
}

