import { Users } from 'lucide-react'
import { EmptyState } from "./EmptyState"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function WorkersSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Your Workers</CardTitle>
      </CardHeader>
      <CardContent>
        <EmptyState
          icon={Users}
          title="No workers yet"
          description="Your hires and prospects will appear here"
          actionLabel="Browse resumes"
        page="/resumes"
        />
      </CardContent>
    </Card>
  )
}

