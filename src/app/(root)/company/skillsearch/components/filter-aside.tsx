import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

interface FilterAsideProps {
  filters: {
    experienceLevel: string
    locationPreference: string
    skills: string[]
  }
  onFilterChange: (filters: FilterAsideProps['filters']) => void
}

export default function FilterAside({ filters, onFilterChange }: FilterAsideProps) {
  const [skillInput, setSkillInput] = useState('')

  const handleExperienceChange = (value: string) => {
    onFilterChange({ ...filters, experienceLevel: value })
  }

  const handleLocationChange = (value: string) => {
    onFilterChange({ ...filters, locationPreference: value })
  }

  const handleAddSkill = () => {
    if (skillInput && !filters.skills.includes(skillInput)) {
      onFilterChange({ ...filters, skills: [...filters.skills, skillInput] })
      setSkillInput('')
    }
  }

  const handleRemoveSkill = (skill: string) => {
    onFilterChange({ ...filters, skills: filters.skills.filter(s => s !== skill) })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Experience Level</h3>
        <Select value={filters.experienceLevel} onValueChange={handleExperienceChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select experience level" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Entry">Entry Level</SelectItem>
              <SelectItem value="Mid">Mid Level</SelectItem>
              <SelectItem value="Senior">Senior Level</SelectItem>
              <SelectItem value="Expert">Expert Level</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Location Preference</h3>
        <Select value={filters.locationPreference} onValueChange={handleLocationChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select location preference" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Remote">Remote</SelectItem>
              <SelectItem value="Onsite">Onsite</SelectItem>
              <SelectItem value="Hybrid">Hybrid</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Skills</h3>
        <div className="flex gap-2">
          <Input
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            placeholder="Add a skill"
          />
          <Button onClick={handleAddSkill}>Add</Button>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {filters.skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="cursor-pointer" onClick={() => handleRemoveSkill(skill)}>
              {skill} ×
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

