"use client";

import { useState } from "react";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import JPForm from "@/shared/form/JPForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PrimaryButton from "@/shared/ui/PrimaryButton";
import { H3 } from "@/components/ui/typography";
import { IDVerificationGuide } from "./components/IdVerificationGuid";
import Heading from "./components/Heading";

import ProfileName from "./components/ProfileName";
import BackgroundBlob from "@/shared/ui/BackgroundBlob";
import IDVerification from "./components/IdVerification";

// Demo data for profile photos
const demoProfiles = [
  { id: 1, name: "Sarah", image: "/profile/profile_1.jpg" },
  { id: 2, name: "Mike", image: "/placeholder.svg?height=40&width=40" },
  { id: 3, name: "Alex", image: "/placeholder.svg?height=40&width=40" },
  { id: 4, name: "Emma", image: "/placeholder.svg?height=40&width=40" },
  { id: 5, name: "John", image: "/profile/profile_1.jpg" },
  { id: 6, name: "Lisa", image: "/placeholder.svg?height=40&width=40" },
  { id: 7, name: "David", image: "/placeholder.svg?height=40&width=40" },
  { id: 8, name: "Anna", image: "/placeholder.svg?height=40&width=40" },
];



export default function ProfileVerification() {
  const [profilePhoto, setProfilePhoto] = useState<string>();
  const [idFront, setIdFront] = useState<string>();
  const [idBack, setIdBack] = useState<string>();
  const [selfie, setSelfie] = useState<string>();
  const [additionalPhoto, setAdditionalPhoto] = useState<string>();

  const handleFileUpload = (file: File, setPreview: (url: string) => void) => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    } else {
      setPreview("");
    }
  };

  const onSubmit = (data: any) => {
    console.log("Form submitted:", {
      data,
      profilePhoto,
      idFront,
      idBack,
      selfie,
      additionalPhoto,
    });
  };

  return (
    <div className="min-h-screen  p-4 md:p-8  relative">
        <BackgroundBlob />
      <div className="mx-auto max-w-4xl space-y-8 !pt-8 ">
        <Heading />
        <IDVerificationGuide />
        <JPForm onSubmit={onSubmit} className="space-y-8">
          {/* Profile Photos Section */}
          <Card className="shadow-none">
            <CardHeader>
              <CardTitle className="flex items-center font-body gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground">
                  1
                </span>
                <H3 className="md:!text-lg !text-sm">Profile Photos</H3>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20">
                    {profilePhoto ? (
                      <AvatarImage src={profilePhoto} />
                    ) : (
                      <AvatarFallback>
                        <Camera className="h-8 w-8 text-muted-foreground" />
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    <h3 className="font-medium">Profile Picture</h3>
                    <p className="text-sm text-muted-foreground">
                      Upload a clear photo of yourself
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2"
                      onClick={() =>
                        document.getElementById("profile-upload")?.click()
                      }
                    >
                      Choose Photo
                    </Button>
                    <input
                      id="profile-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload(file, setProfilePhoto);
                      }}
                    />
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-medium">
                    Recently Verified Users
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {demoProfiles.map((profile) => (
                      <Avatar key={profile.id} className="h-10 w-10 border">
                        <AvatarImage src={profile.image} alt={profile.name} />
                        <AvatarFallback>{profile.name[0]}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <ProfileName />


          <IDVerification
            idFront={idFront}
            idBack={idBack}
            selfie={selfie}
            additionalPhoto={additionalPhoto}
            handleFileUpload={handleFileUpload}
            setIdFront={setIdFront}
            setIdBack={setIdBack}
            setSelfie={setSelfie}
            setAdditionalPhoto={setAdditionalPhoto}
          />
          <div className="flex justify-end">
            <PrimaryButton
              type="submit"
              text="Submit Verification"
              className="w-1/2 py-5"
            />
          </div>
        
        </JPForm>
      </div>
    </div>
  );
}
