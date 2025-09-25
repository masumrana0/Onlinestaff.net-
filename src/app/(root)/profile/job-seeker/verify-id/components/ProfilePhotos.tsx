import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { H3 } from "@/components/ui/typography";

interface ProfilePhotosProps {
  formData: {
    profilePhoto: string;
  };
  handleFileUpload: (file: File, field: string) => void;
}

export default function ProfilePhotos({
  formData,
  handleFileUpload,
}: ProfilePhotosProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
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
              {formData.profilePhoto ? (
                <AvatarImage src={formData.profilePhoto} />
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
                  if (file) handleFileUpload(file, "profilePhoto");
                }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
