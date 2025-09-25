import { JobSeekerProfile } from '@/types/job-seeker'
import ProfileCard from './profile-card'


interface ProfileGridProps {
  profiles: JobSeekerProfile[]
}

export default function ProfileGrid({ profiles }: ProfileGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {profiles.map((profile, index) => (
        <ProfileCard key={index} profile={profile} />
      ))}
    </div>
  )
}

