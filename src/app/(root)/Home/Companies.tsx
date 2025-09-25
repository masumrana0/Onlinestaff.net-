"use client";

import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import { H2 } from "@/components/ui/typography";

interface Company {
  name: string;
  logo: string;
}

const companies: Company[] = [
  { name: "Apple", logo: "/logo/logo.png" },
  { name: "Google", logo: "/logo/logo.png" },
  { name: "Microsoft", logo: "/logo/logo.png" },
  { name: "Amazon", logo: "/logo/logo.png" },
  { name: "Facebook", logo: "/logo/logo.png" },
  { name: "Tesla", logo: "/logo/logo.png" },
  { name: "Netflix", logo: "/logo/logo.png" },
  { name: "Adobe", logo: "/logo/logo.png" },
];


export default function CompaniesMarquee() {

  return (
    <main className="flex">
      <section className="w-full mx-auto">
        <H2 className="text-center mb-12">
          Trusted by professionals and companies alike.
        </H2>
        <InfiniteMovingLogos
          items={companies}
          speed="fast"
          pauseOnHover={true}
        />
      </section>
    </main>
  );
}
