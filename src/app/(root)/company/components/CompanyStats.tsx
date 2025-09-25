import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Users, Star, Eye } from 'lucide-react'

export function CompanyStats() {
  const stats = [
    { label: "Active Jobs", value: "0", icon: Briefcase },
    { label: "Total Applications", value: "0", icon: Users },
    { label: "Profile Views", value: "0", icon: Eye },
    { label: "Saved Candidates", value: "0", icon: Star },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardContent className="flex items-center p-6">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
              <stat.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

