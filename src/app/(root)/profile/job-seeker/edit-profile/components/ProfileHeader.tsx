import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader } from "@/components/ui/card";
import { H3 } from "@/components/ui/typography";
import { Trophy } from "lucide-react";

export function ProfileHeader() {
  return (
    <Card className="border-none shadow-none ">
      <CardHeader className="flex   md:flex-row p-0 items-center gap-4 space-y-5">
        <Avatar className="h-20 w-20">
          <AvatarImage src="/img.jpg" alt="Profile picture" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex-1 text-center md:text-left space-y-1">
          <H3>Complete Your Profile</H3>
          <p className="text-[gray] text-lg">Fill in your information to create a comprehensive professional
          profile</p>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
          <Trophy className="h-5 w-5" />
          <span className="font-semibold">30% Complete</span>
        </div>

      </CardHeader>
    </Card>
  );
}
