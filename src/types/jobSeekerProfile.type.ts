export type JobSeekerProfile = {
    photo: File | string;
    dateOfBirth: string;
    gender: 'Male' | 'Female' | 'Other';
    nationality: string;
    phone: {
      countryCode: string;
      number: string;
    };
    address: {
      country: string;
      stateOrCity: string;
      zipCode: string;
      fullAddress: string;
    };
    jobTitle: string;
    skills: string[];
    experienceLevel: 'Entry' | 'Mid' | 'Senior' | 'Expert';
    homeCurrency: string;
    timezone: string;
    preferredJobTypes: string[];
    availableHours: number;
    hourlyPayInUSD: number;
    yearsOfExperience: number;
    locationPreference: 'Remote' | 'Onsite' | 'Hybrid';
    nationalIdNo: string;
    education: {
      educationLevel: string;
      fieldOfStudy?: string;
      graduationYear?: number;
    };
    workExperience?: {
      hasExperience: boolean;
      experiences?: {
        companyName: string;
        role: string;
        duration: {
          start: Date;
          end: Date;
        };
        description?: string;
      }[];
    };
    additionalDetails: {
      languages: {
        language: string;
        proficiency: 'Fluent' | 'Intermediate' | 'Beginner';
      }[];
      lastActive: '1 week or less' | '1 month or less' | 'More than a month';
      isVerified: boolean;
      expectedSalary: number;
    };
    documentsAndLinks: {
      resume: File | string;
      portfolioLinks: string[];
      nationalIdImages: {
        front: File | string;
        back: File | string;
        selfieWithIDPhoto: File | string;
      };
      certifications: {
        title: string;
        dateAchieved: string;
      }[];
      socialMediaLinks: {
        platform: string;
        url: string;
      }[];
    };
    profileCompletionPercentage: number;
  }
  
  