"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import JPDatePicker from "@/shared/form/JPDatePicker";

import JPForm from "@/shared/form/JPForm";
import JPInput from "@/shared/form/JPInput";
import JPSelect from "@/shared/form/JPSelect";
import JPTextArea from "@/shared/form/JPTextarea";
import { ProfileHeader } from "./components/ProfileHeader";
import { Step, Stepper } from "./components/Stepper";
import {
  educationSchema,
  experienceSchema,
  personalInfoSchema,
  skillsSchema,
} from "@/schema/jobSeeker.profileinfo";

import { Container } from "@/components/ui/container";
import PrimaryButton from "@/shared/ui/PrimaryButton";

const steps: Step[] = [
  {
    id: "personal",
    title: "Personal Information",
    description: "Basic information about you",
  },
  {
    id: "experience",
    title: "Work Experience",
    description: "Your professional background",
  },
  {
    id: "education",
    title: "Education",
    description: "Your educational history",
  },
  {
    id: "skills",
    title: "Skills & Portfolio",
    description: "Your expertise and work samples",
  },
];

const educationOptions = [
  { label: "High School Diploma", value: "high_school" },
  { label: "Bachelor's Degree", value: "bachelors" },
  { label: "Master's Degree", value: "masters" },
  { label: "Ph.D.", value: "phd" },
];

const ProfilePage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const schemas = [
    personalInfoSchema,
    experienceSchema,
    educationSchema,
    skillsSchema,
  ];

  const onSubmit = (data: any) => {
    console.log(data);
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Final Data Submitted", data);
    }
  };

  return (
    <Container>
      <div className="min-h-screen bg-muted/10 p-3 md:p-8">
        <div className="space-y-8">
          <ProfileHeader />

          <div className="grid gap-8 pt-5 pl-2 lg:grid-cols-[300px,1fr]">
            <aside className="hidden lg:block">
              <Stepper
                steps={steps}
                currentStep={currentStep}
                onStepClick={setCurrentStep}
              />
            </aside>

            <Card>
              <CardContent className="pt-6">
                <JPForm
                  onSubmit={onSubmit}
                  resolver={zodResolver(schemas[currentStep])}
                  className="space-y-6"
                >
                  {currentStep === 0 && (
                    <>
                      <JPInput
                        name="fullName"
                        label="Full Name"
                        placeholder="John Doe"
                      />
                      <JPInput
                        name="jobTitle"
                        label="Job Title"
                        placeholder="Senior Software Engineer"
                      />
                      <JPInput
                        name="location"
                        label="Location"
                        placeholder="New York, USA"
                      />
                      <JPTextArea
                        name="bio"
                        placeholder="Tell us about yourself..."
                      />
                    </>
                  )}

                  {currentStep === 1 && (
                    <>
                      <JPInput
                        name="currentRole"
                        label="Current Role"
                        placeholder="Senior Developer"
                      />
                      <JPInput
                        name="company"
                        label="Company"
                        placeholder="Tech Corp"
                      />
                      <div className="grid gap-4 sm:grid-cols-2">
                        <JPDatePicker name="startDate" label="Start Date" />
                        <JPDatePicker name="endDate" label="End Date" />
                      </div>
                      <JPTextArea
                        name="description"
                        placeholder="Describe your responsibilities and achievements..."
                      />
                    </>
                  )}

                  {currentStep === 2 && (
                    <>
                      <JPSelect
                        name="degree"
                        label="Degree"
                        placeholder="Select your degree"
                        options={educationOptions}
                      />
                      <JPInput
                        name="institution"
                        label="Institution"
                        placeholder="University name"
                      />
                      <JPInput
                        name="graduationYear"
                        label="Graduation Year"
                        placeholder="YYYY"
                      />
                    </>
                  )}

                  {currentStep === 3 && (
                    <>
                      <JPInput
                        name="skills"
                        label="Skills"
                        placeholder="Add your key skills (comma separated)"
                      />
                    </>
                  )}

                  <div className="md:flex justify-between md:pt-4">
                    <Button
                      type="button"
                      variant="ghost"
                      className="rounded-full w-full hidden md:block h-11 px-20 mt-4"
                      onClick={() =>
                        setCurrentStep(Math.max(0, currentStep - 1))
                      }
                      disabled={currentStep === 0}
                    >
                      Previous
                    </Button>

                    <div>
                      <PrimaryButton
                        type="submit"
                        text={`${
                          currentStep === steps.length - 1 ? "Complete" : "Next"
                        }`}
                        className="rounded-full h-11 px-20 mt-4"
                      />
                    </div>
                  </div>
                </JPForm>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProfilePage;
