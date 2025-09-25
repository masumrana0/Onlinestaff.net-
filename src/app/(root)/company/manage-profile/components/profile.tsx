"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import JPForm from "@/shared/form/JPForm";
import { BasicInfoSection } from "./BasicInfoSection";
import { ContactLocationSection } from "./ContactLocationSection";
import { OnlinePresenceSection } from "./OnlinePresenceSection";
import { IndustryType } from "@/types/company.type";


const schema = z.object({
  logo: z.any().optional(),
  yearOfEstablishment: z.date(),
  companySize: z.enum([
    "1-10",
    "11-50",
    "51-200",
    "201-500",
    "501-1000",
    "1000+",
  ]),
  address: z.object({
    country: z.string().min(1, "Country is required"),
    state: z.string().min(1, "State is required"),
    zipCode: z.string().min(1, "Zip code is required"),
    fullAddress: z.string().min(1, "Full address is required"),
  }),
  industryType: z.nativeEnum(IndustryType),
  businessDescription: z
    .string()
    .min(10, "Business description must be at least 10 characters"),
  timezone: z.string().min(1, "Timezone is required"),
  homeCurrency: z.string().min(1, "Home currency is required"),
  phone: z.object({
    countryCode: z.string().min(1, "Country code is required"),
    number: z.string().min(5, "Phone number must be at least 5 characters"),
  }),
  websiteUrl: z.string().url("Invalid URL"),
  socialMediaUrls: z
    .array(
      z.object({
        platform: z.string(),
        url: z.string().url("Invalid URL"),
      })
    )
    .optional(),
});


export function CompanyProfileForm() {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto my-6">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Company Profile</CardTitle>
        <CardDescription className="text-base">
          Manage onilinestaff&apos;s information and online presence. Fill out the
          details below to create a comprehensive profile for your business.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <JPForm
          onSubmit={onSubmit}
          className="space-y-8"
          resolver={zodResolver(schema)}
        >
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="contact">Contact & Location</TabsTrigger>
              <TabsTrigger value="online">Online Presence</TabsTrigger>
            </TabsList>
            <TabsContent value="basic" className="mt-6">
              <BasicInfoSection />
            </TabsContent>
            <TabsContent value="contact" className="mt-6">
              <ContactLocationSection />
            </TabsContent>
            <TabsContent value="online" className="mt-6">
              <OnlinePresenceSection />
            </TabsContent>
          </Tabs>
          <Separator />
          <Button type="submit" className="w-full">
            Save Company Profile
          </Button>
        </JPForm>
      </CardContent>
    </Card>
  );
}
