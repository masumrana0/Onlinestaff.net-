import { JobSeekerProfile } from '@/types/job-seeker'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

interface ProfileCardProps {
  profile: JobSeekerProfile
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-32 bg-gradient-to-r from-primary/10 to-primary/30">
          <Avatar className="absolute -bottom-6 left-6 h-20 w-20 border-4 border-background">
            <AvatarImage src={profile.photo} alt={profile.jobTitle} />
            <AvatarFallback>{profile.jobTitle.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
        </div>
      </CardHeader>
      <CardContent className="pt-8">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">{profile.jobTitle}</h3>
            <p className="text-sm text-muted-foreground">
              ${profile.hourlyPayInUSD}/hour • {profile.locationPreference}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
          <Separator />
          <div className="grid gap-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Education</span>
              <span>{profile.education.educationLevel}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Last Active</span>
              <span>{profile.additionalDetails.lastActive}</span>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Profile Completion</span>
                <span>{profile.profileCompletionPercentage}%</span>
              </div>
              <Progress value={profile.profileCompletionPercentage} />
            </div>
          </div>
          <div className="flex gap-2">
            <Button className="flex-1">View Profile</Button>
            <Button variant="outline" className="flex-1">
              Hire
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

