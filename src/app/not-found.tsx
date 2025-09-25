import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import { H1, H2, Paragraph } from "@/components/ui/typography";


export default function ComingSoon() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-muted text-center overflow-hidden">
      <div className="relative z-10 space-y-6 px-4">
        <div className="relative">
          <RocketIcon className="mx-auto h-24 w-24 text-primary animate-bounce" />
        </div>
        <H1>Coming Soon</H1>
        <H2 className="font-semibold text-muted-foreground">
          Something amazing is on its way!
        </H2>
        <Paragraph>
          We&apos;re working hard to bring you something spectacular. Stay tuned
          for updates and be ready for an exciting launch!
        </Paragraph>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link href="/">Go Back</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/Faq">Learn More</Link>
          </Button>
        </div>
      </div>
      <footer className="relative z-10 mt-16 text-sm text-muted-foreground font-body">
        © {new Date().getFullYear()} onlinestaff. All rights reserved.
      </footer>
    </div>
  );
}
