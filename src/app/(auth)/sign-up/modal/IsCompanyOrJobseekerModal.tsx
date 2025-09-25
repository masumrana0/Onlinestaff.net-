"use client";

import { useState } from "react";
import { Briefcase, User } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type UserType = "company" | "jobseeker" | null;

interface UserTypeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function UserTypeModal({ open, onOpenChange }: UserTypeModalProps) {
  const [selectedType, setSelectedType] = useState<UserType>(null);
  const router = useRouter();

  const handleSelect = (type: UserType) => {
    setSelectedType(type);
    onOpenChange(false);
    router.push("/sign-up?userType=" + type);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-heading">
            Choose Your Path
          </DialogTitle>
          <DialogDescription className="text-center">
            Select how you would like to use our platform
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
          <button
            onClick={() => handleSelect("company")}
            className={cn(
              "flex flex-col items-center gap-4 rounded-lg p-6 text-left transition-colors hover:bg-muted/50",
              selectedType === "company" && "bg-primary/10"
            )}
          >
            <div className="rounded-full bg-primary/10 p-3">
              <User className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="font-heading text-xl">I&apos;m an employer</h3>
              <p className="text-sm text-muted-foreground">
                looking for amazing hires
              </p>
            </div>
          </button>
          <button
            onClick={() => handleSelect("jobseeker")}
            className={cn(
              "flex flex-col items-center gap-4 rounded-lg p-6 text-left transition-colors hover:bg-muted/50",
              selectedType === "jobseeker" && "bg-primary/10"
            )}
          >
            <div className="rounded-full bg-primary/10 p-3">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="font-heading text-xl">I&apos;m a worker</h3>
              <p className="text-sm text-muted-foreground">
                looking to find work
              </p>
            </div>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
