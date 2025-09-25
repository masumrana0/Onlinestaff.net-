export interface JobSeekerProfile {
  photo: string
  jobTitle: string
  skills: string[]
  experienceLevel: 'Entry' | 'Mid' | 'Senior' | 'Expert'
  hourlyPayInUSD: number
  locationPreference: 'Remote' | 'Onsite' | 'Hybrid'
  education: {
    educationLevel: string
    fieldOfStudy: string
  }
  profileCompletionPercentage: number
  additionalDetails: {
    lastActive: string
  }
}

