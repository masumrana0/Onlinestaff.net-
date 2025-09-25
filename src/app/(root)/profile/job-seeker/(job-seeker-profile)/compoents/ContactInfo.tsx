"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ContactInfo = ({ data }: { data: any }) => (
  <Card className="shadow-none">
    <CardHeader className="font-heading text-lg font-semibold">Contact Information</CardHeader>
    <CardContent className="grid gap-4">
      <div className="flex items-center gap-2">
        <Phone className="h-4 w-4 text-muted-foreground" />
        <span>
          {data.phone.countryCode} {data.phone.number}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <MapPin className="h-4 w-4 text-muted-foreground" />
        <div className="grid">
          <span>{data.address.fullAddress}</span>
          <span className="text-sm text-muted-foreground">
            {data.address.stateOrCity}, {data.address.country}{" "}
            {data.address.zipCode}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Mail className="h-4 w-4 text-muted-foreground" />
        <span>{data.documentsAndLinks.socialMediaLinks[0]?.url || "N/A"}</span>
      </div>
    </CardContent>
  </Card>
);

export default ContactInfo;
