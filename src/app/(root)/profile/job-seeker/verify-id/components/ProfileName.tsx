import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { H3 } from "@/components/ui/typography";
import JPInput from "@/shared/form/JPInput";




export default function ProfileName() {
  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground">
            2
          </span>
          <H3 className="md:!text-lg !text-sm">Profile Name</H3>
        </CardTitle>
        <p className="text-[#656565]">
          Your full name, including your middle name, should match the name on
          your uploaded government ID. No nicknames. Incomplete names will be
          disapproved.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <JPInput
            name="firstname"
            placeholder="First name"
          />
          <JPInput
            name="lastname"
            placeholder="Last name"
          />
        </div>
      </CardContent>
    </Card>
  );
}
