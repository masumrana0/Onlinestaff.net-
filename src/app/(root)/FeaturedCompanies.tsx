"use client";

import { Card, CardContent } from "@/components/ui/card";
import { H2 } from "@/components/ui/typography";
import Image from "next/image";
import { useEffect, useState } from "react";

const companies = [
  { name: "AutoCare Plus", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Premium Motors", logo: "/placeholder.svg?height=40&width=120" },
  { name: "CarParts Pro", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Elite Auto", logo: "/placeholder.svg?height=40&width=120" },
  { name: "MasterMech", logo: "/placeholder.svg?height=40&width=120" },
  // Add more companies as needed
];

export function FeaturedCompanies() {
  const [duplicatedCompanies, setDuplicatedCompanies] = useState(companies);

  useEffect(() => {
    // Duplicate the companies array for seamless infinite scroll
    setDuplicatedCompanies([...companies, ...companies]);
  }, []);

  return (
    <section className="py-12 overflow-hidden">
      <H2 className="text-center mb-8">Featured Companies</H2>
      <div className="relative">
        <div className="flex animate-marquee">
          {duplicatedCompanies.map((company, index) => (
            <Card
              key={index}
              className="shrink-0 mx-4 w-[200px] hover:shadow-md transition-shadow"
            >
              <CardContent className="flex items-center justify-center p-6">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
