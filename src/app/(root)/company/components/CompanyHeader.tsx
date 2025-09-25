import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building, MapPin, LinkIcon, Edit } from "lucide-react";
import Link from "next/link";

export function CompanyHeader() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <div className="h-20 w-20 rounded-lg bg-muted flex items-center justify-center">
              <Building className="h-10 w-10 text-muted-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Company Name</h1>
              <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                <span className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  Location
                </span>
                <span className="flex items-center">
                  <LinkIcon className="h-4 w-4 mr-1" />
                  website.com
                </span>
              </div>
              <p className="mt-4 text-sm">
                company description will appear here. Click edit to add a
                description.
              </p>
            </div>
          </div>
          <Link href="/company/manage-profile">
            <Button variant="outline" size="sm">
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
