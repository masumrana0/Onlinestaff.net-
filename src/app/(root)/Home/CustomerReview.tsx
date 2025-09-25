"use client";

import { H2, H3, Paragraph } from "@/components/ui/typography";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    text: "Found my dream job through this platform!",
    position: "Software Engineer",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    text: "Great selection of gigs, very user-friendly.",
    position: "Freelance Designer",
  },
  {
    id: 3,
    name: "Mike Johnson",
    rating: 5,
    text: "Excellent support team, always helpful.",
    position: "Marketing Specialist",
  },
];

export function CustomerReviews() {
  return (
    <section className="py-16">
      <H2 className="text-center mb-12">What Our Users Say</H2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <H3 className="font-semibold">{review.name}</H3>
                  <Paragraph className="text-sm text-muted-foreground">
                    {review.position}
                  </Paragraph>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Paragraph className="italic text-muted-foreground">
                &ldquo;{review.text}&rdquo;
              </Paragraph>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
