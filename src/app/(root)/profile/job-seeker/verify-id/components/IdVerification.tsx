import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { H3 } from "@/components/ui/typography";
import UploadCard from "./UploadCard"; // Assuming UploadCard is a separate component

interface IDVerificationProps {
  idFront: string | undefined;
  idBack: string | undefined;
  selfie: string | undefined;
  additionalPhoto: string | undefined;
  handleFileUpload: (file: any, setPreview: React.Dispatch<React.SetStateAction<string | undefined>>) => void;
  setIdFront: React.Dispatch<React.SetStateAction<string | undefined>>;
  setIdBack: React.Dispatch<React.SetStateAction<string | undefined>>;
  setSelfie: React.Dispatch<React.SetStateAction<string | undefined>>;
  setAdditionalPhoto: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const IDVerification: React.FC<IDVerificationProps> = ({
  idFront,
  idBack,
  selfie,
  additionalPhoto,
  handleFileUpload,
  setIdFront,
  setIdBack,
  setSelfie,
  setAdditionalPhoto,
}) => {
  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground">
            3
          </span>
          <H3 className="md:!text-lg !text-sm">ID Verification</H3>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <UploadCard
            title="Front of ID"
            description="Upload the front side of your government-issued ID"
            onUpload={(file) => handleFileUpload(file, setIdFront)}
            preview={idFront}
          />
          <UploadCard
            title="Back of ID"
            description="Upload the back side of your government-issued ID"
            onUpload={(file) => handleFileUpload(file, setIdBack)}
            preview={idBack}
          />
          <UploadCard
            title="Selfie with ID"
            description="Take a photo of yourself holding your ID"
            onUpload={(file) => handleFileUpload(file, setSelfie)}
            preview={selfie}
          />
          <UploadCard
            title="Additional Photo"
            description="Upload any additional verification photo if required"
            onUpload={(file) => handleFileUpload(file, setAdditionalPhoto)}
            preview={additionalPhoto}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default IDVerification;
