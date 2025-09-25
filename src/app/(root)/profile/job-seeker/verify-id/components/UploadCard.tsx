import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";
import Image from "next/image";

interface UploadCardProps {
  title: string;
  description: string;
  onUpload: (file: File | null) => void;
  preview?: string;
}

export default function UploadCard({
  title,
  description,
  onUpload,
  preview,
}: UploadCardProps) {
  return (
    <div className="relative">
      <input
        type="file"
        accept="image/*"
        className="absolute inset-0 cursor-pointer opacity-0"
        onChange={(e) => {
          const file = e.target.files?.[0];
          onUpload(file || null);
        }}
      />
      <Card className="h-[300px] border-dashed shadow-none">
        <CardContent className="flex h-full flex-col items-center justify-center p-6">
          {preview ? (
            <div className="relative h-full w-full">
              <Image
                width={300}
                height={300}
                src={preview}
                alt={title}
                className="h-full w-full rounded-md object-cover"
              />
              <Button
                size="icon"
                variant="destructive"
                className="absolute right-2 top-2"
                onClick={(e) => {
                  e.preventDefault();
                  onUpload(null);
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <>
              <Upload className="mb-2 h-8 w-8 text-muted-foreground" />
              <p className="text-sm font-medium">{title}</p>
              <p className="text-xs text-muted-foreground">{description}</p>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
