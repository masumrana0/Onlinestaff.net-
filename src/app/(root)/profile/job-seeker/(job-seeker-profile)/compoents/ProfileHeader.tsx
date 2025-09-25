/* eslint-disable @next/next/no-img-element */
"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ProfileHeader = ({ data }: { data: any }) => (
  <Card className="flex flex-col gap-4 md:flex-row md:items-start bg-white py-8 px-5 shadow-none md:gap-6">
    <div className="relative size-36 md:size-48 overflow-hidden rounded-lg">
      <Image
        src={data?.photo} // Static placeholder
        alt="Profile photo"
        className="object-cover rounded-full"
        fill
        priority
      />
    </div>
    <div className="flex flex-1 flex-col gap-2">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex gap-1 items-center">
            <h1 className="font-heading text-2xl font-bold">{data.jobTitle}</h1>
            <img
              src="/profile/blue_tick.svg"
              className=" size-4 md:size-4"
              alt=""
            />
          </div>
          <p className="text-muted-foreground">{data.experienceLevel}</p>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-xl font-bold">
            {data.profileCompletionPercentage}%
          </span>
          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        </div>
      </div>
      <div className="flex gap-2">
        <Button>Send message</Button>
        <Button variant="outline">Contacts</Button>
      </div>
    </div>
  </Card>
);

export default ProfileHeader;
