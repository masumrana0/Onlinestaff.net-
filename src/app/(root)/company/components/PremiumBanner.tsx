import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { H3, Paragraph } from "@/components/ui/typography";
import { Crown, Rocket } from "lucide-react";
import Link from "next/link";

export function PremiumBanner() {
  return (
    <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200 mt-10">
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="h-12 w-12 rounded-full bg-yellow-200 flex items-center justify-center">
            <Crown className="h-8 w-8 text-yellow-700" />
          </div>
          <div>
            <H3>Upgrade to Premium</H3>
            <Paragraph>
              Make hiring more efficient with premium features and unlimited job
              posts
            </Paragraph>
          </div>
        </div>
        <Link href="/pricing">
          <Button className="bg-yellow-500 hover:bg-yellow-600">
            <Rocket className="mr-2 h-4 w-4" />
            Upgrade Now
          </Button>
        </Link>
      </div>
    </Card>
  );
}
