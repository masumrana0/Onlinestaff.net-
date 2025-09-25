"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Send } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <Container className="py-16">
      <Card className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L100,0 L100,100 L0,100 Z"
              fill="hsl(var(--primary))"
              fillOpacity="0.05"
            />
            <path
              d="M0,50 Q25,0 50,50 T100,50 L100,100 L0,100 Z"
              fill="hsl(var(--secondary))"
              fillOpacity="0.05"
            />
          </svg>
        </div>
        <div className="relative z-10 p-8 md:p-12">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <H2 className="mb-4">Stay Updated</H2>
              <Paragraph className="text-muted-foreground">
                Subscribe to our newsletter for the latest job opportunities and
                career insights.
              </Paragraph>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="relative flex-grow">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pr-10"
                />
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Subscribe
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </Card>
    </Container>
  );
}
