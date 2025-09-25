'use client'

import * as React from 'react'
import { JobSeekerProfile } from '@/types/job-seeker'
import FilterAside from './filter-aside'
import SearchBar from './search-bar'
import ProfileGrid from './profile-grid'


const mockProfiles: JobSeekerProfile[] = [
  {
    photo: "/img.jpg",
    jobTitle: "Full Stack Developer",
    skills: ["React", "Node.js", "TypeScript"],
    experienceLevel: "Entry",
    hourlyPayInUSD: 45,
    locationPreference: "Remote",
    education: {
      educationLevel: "Bachelor's Degree",
      fieldOfStudy: "Computer Science",
    },
    profileCompletionPercentage: 85,
    additionalDetails: {
      lastActive: "1 week or less",
    },
  },
  {
    photo: "/img.jpg",
    jobTitle: "Digital Marketing Specialist",
    skills: ["SEO", "Social Media", "Content Writing"],
    experienceLevel: "Senior",
    hourlyPayInUSD: 45,
    locationPreference: "Onsite",
    education: {
      educationLevel: "Bachelor's Degree",
      fieldOfStudy: "Computer Science",
    },
    profileCompletionPercentage: 85,
    additionalDetails: {
      lastActive: "1 week or less",
    },
  },
  {
    photo: "/img.jpg",
    jobTitle: "SEO Specialist",
    skills: ["SEO", "Social Media", "Content Writing"],
    experienceLevel: "Senior",
    hourlyPayInUSD: 45,
    locationPreference: "Hybrid",
    education: {
      educationLevel: "Bachelor's Degree",
      fieldOfStudy: "Computer Science",
    },
    profileCompletionPercentage: 85,
    additionalDetails: {
      lastActive: "1 week or less",
    },
  },
];

export default function JobSeekerSearch() {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [filters, setFilters] = React.useState({
    experienceLevel: '',
    locationPreference: '',
    skills: [] as string[]
  })

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters)
  }

  // Apply filters and search to profiles
  const filteredProfiles = mockProfiles.filter(profile => {
    const matchesSearch = profile.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesExperience = !filters.experienceLevel || profile.experienceLevel === filters.experienceLevel
    const matchesLocation = !filters.locationPreference || profile.locationPreference === filters.locationPreference
    const matchesSkills = filters.skills.length === 0 || filters.skills.every(skill => profile.skills.includes(skill))
    return matchesSearch && matchesExperience && matchesLocation && matchesSkills
  })

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <aside className="md:w-64">
        <FilterAside filters={filters} onFilterChange={handleFilterChange} />
      </aside>
      <div className="flex-1">
        <SearchBar onSearch={handleSearch} />
        <ProfileGrid profiles={filteredProfiles} />
      </div>
    </div>
  )
}

