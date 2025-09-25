import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlusCircle, Trash2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import JPInput from "@/shared/form/JPInput";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function OnlinePresenceSection() {
  const [socialMediaUrls, setSocialMediaUrls] = useState<
    { platform: string; url: string }[]
  >([]);

  const addSocialMedia = () => {
    setSocialMediaUrls([...socialMediaUrls, { platform: "", url: "" }]);
  };

  const removeSocialMedia = (index: number) => {
    setSocialMediaUrls(socialMediaUrls.filter((_, i) => i !== index));
  };

  const updateSocialMedia = (
    index: number,
    field: "platform" | "url",
    value: string
  ) => {
    const updatedUrls = [...socialMediaUrls];
    updatedUrls[index][field] = value;
    setSocialMediaUrls(updatedUrls);
  };

  const socialPlatforms = [
    { value: "facebook", label: "Facebook" },
    { value: "twitter", label: "Twitter" },
    { value: "linkedin", label: "LinkedIn" },
    { value: "instagram", label: "Instagram" },
    { value: "youtube", label: "YouTube" },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Website URL</Label>
        <JPInput name="websiteUrl" placeholder="Website URL" />
      </div>
      <div className="space-y-4">
        <Label>Social Media URLs</Label>
        <ScrollArea className="h-[200px] w-full rounded-md border p-4">
          {socialMediaUrls.map((social, index) => (
            <div key={index} className="flex items-center space-x-2 mb-4">
              <Select
                value={social.platform}
                onValueChange={(value) =>
                  updateSocialMedia(index, "platform", value)
                }
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent>
                  {socialPlatforms.map((platform) => (
                    <SelectItem key={platform.value} value={platform.value}>
                      {platform.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <JPInput
                name={`socialMediaUrls.${index}.url`}
                placeholder="URL"
                className="flex-1"
                onChange={(e:any) =>
                  updateSocialMedia(index, "url", e.target.value)
                }
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => removeSocialMedia(index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </ScrollArea>
        <Button
          type="button"
          variant="outline"
          onClick={addSocialMedia}
          className="w-full"
        >
          <PlusCircle className="mr-2 h-4 w-4" /> Add Social Media
        </Button>
      </div>
    </div>
  );
}
