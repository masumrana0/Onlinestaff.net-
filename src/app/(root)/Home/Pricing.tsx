"use client";

import { useState } from "react";
import { Check, Zap, Shield, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { H2, H3, Paragraph, Small } from "@/components/ui/typography";
import { Container } from "@/components/ui/container";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  features: PricingFeature[];
  highlight?: boolean;
  current?: boolean;
  icon: React.ReactNode;
}

const pricingTiers: PricingTier[] = [
  {
    name: "FREE",
    monthlyPrice: 0,
    annualPrice: 0,
    current: true,
    icon: <Zap className="h-6 w-6 text-blue-500" />,
    features: [
      { text: "Create up to 3 job posts per month", included: true },
      { text: "Max 15 applications per job", included: true },
      { text: "2 days Job Post approval", included: true },
      { text: "View Job Applications", included: true },
      { text: "Use Timeproof", included: true },
      { text: "Bookmark Workers", included: true },
      { text: "Easypay", included: true },
    ],
  },
  {
    name: "PRO",
    monthlyPrice: 69,
    annualPrice: 663,
    highlight: true,
    icon: <Star className="h-6 w-6 text-yellow-500" />,
    features: [
      { text: "Create up to 3 job posts per month", included: true },
      { text: "Max 200 applications per job", included: true },
      { text: "Instant Job Post approval", included: true },
      { text: "View Job Applications", included: true },
      { text: "Use Timeproof", included: true },
      { text: "Bookmark Workers", included: true },
      { text: "Easypay", included: true },
      { text: "Contact 75 workers / month", included: true },
      { text: "Read Worker Reviews", included: true },
    ],
  },
  {
    name: "PREMIUM",
    monthlyPrice: 99,
    annualPrice: 950,
    icon: <Shield className="h-6 w-6 text-green-500" />,
    features: [
      { text: "Create up to 10 job posts per month", included: true },
      { text: "Max 200 applications per job", included: true },
      { text: "Instant Job Post approval", included: true },
      { text: "View Job Applications", included: true },
      { text: "Use Timeproof", included: true },
      { text: "Bookmark Workers", included: true },
      { text: "Easypay", included: true },
      { text: "Contact 500 workers / month", included: true },
      { text: "Read Worker Reviews", included: true },
      { text: "Unlimited Background Data Checks", included: true },
      { text: "Worker Mentoring Service", included: true },
    ],
  },
];

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section>
      <Container>
        <div className="flex flex-col items-center space-y-8">
          <div className="flex flex-col items-center space-y-4">
            <H2 className="text-center">Simple, transparent pricing</H2>
            <Paragraph className="text-center text-muted-foreground">
              Choose the perfect plan for your business needs
            </Paragraph>
          </div>

          <div className="flex items-center space-x-4 pb-4">
            <span
              className={`text-sm font-medium ${
                !isAnnual ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Monthly
            </span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
            <span
              className={`text-sm font-medium ${
                isAnnual ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Annually
              <span className="ml-1.5 text-xs font-medium text-green-500">
                Save up to 20%
              </span>
            </span>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`relative flex flex-col ${
                  tier.highlight ? "border-primary shadow-lg scale-105" : ""
                } transition-all duration-200 hover:shadow-md`}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground rounded-full shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="space-y-2">
                  <div className="flex items-center space-x-3">
                    {tier.icon}
                    <H3 className="text-xl font-bold">{tier.name}</H3>
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">$</span>
                    <span className="text-5xl font-extrabold tracking-tight">
                      {isAnnual
                        ? Math.floor(tier.annualPrice / 12)
                        : tier.monthlyPrice}
                    </span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  {isAnnual && (
                    <Small className="text-muted-foreground">
                      ${tier.annualPrice} billed annually
                    </Small>
                  )}
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                        <span className="text-sm">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={
                      tier.current
                        ? "secondary"
                        : tier.highlight
                        ? "default"
                        : "outline"
                    }
                    className="w-full py-6 text-lg font-semibold transition-colors"
                  >
                    {tier.current ? "Current Plan" : "Choose Plan"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
