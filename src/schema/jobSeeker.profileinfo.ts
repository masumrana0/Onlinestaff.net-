
import { z } from "zod"

export const personalInfoSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  jobTitle: z.string().min(2, "Job title must be at least 2 characters"),
  location: z.string().min(2, "Location is required"),
  bio: z.string().min(10, "Bio must be at least 10 characters"),
})

export const experienceSchema = z.object({
  currentRole: z.string().min(2, "Current role is required"),
  company: z.string().min(2, "Company name is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().optional(),
  description: z.string().min(10, "Description must be at least 10 characters"),
})

export const educationSchema = z.object({
  degree: z.string().min(2, "Degree is required"),
  institution: z.string().min(2, "Institution is required"),
  graduationYear: z.string().min(4, "Graduation year is required"),
})

export const skillsSchema = z.object({
  skills: z.string().min(2, "At least one skill is required"),
})

export const profileFormSchema = z.object({
  personalInfo: personalInfoSchema,
  experience: experienceSchema,
  education: educationSchema,
  skills: skillsSchema,
})

export type ProfileFormValues = z.infer<typeof profileFormSchema>

