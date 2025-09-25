import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { H3, Small } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

interface FilterGroupProps {
  title: string;
  items: {
    label: string;
    count?: number;
    href: string;
  }[];
  className?: string;
}

function FilterGroup({ title, items, className }: FilterGroupProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <H3 className="text-base font-semibold lg:text-lg">{title}</H3>
      <ScrollArea className="w-full whitespace-nowrap pb-2 lg:whitespace-normal">
        <div className="flex gap-2 lg:flex-wrap">
          {items.map((item) => (
            <Button
              key={item.label}
              variant="outline"
              size="sm"
              className="flex shrink-0 items-center gap-1.5 lg:shrink"
              asChild
            >
              <a href={item.href}>
                {item.label}
                {item.count && (
                  <Small className="text-muted-foreground">
                    ({item.count})
                  </Small>
                )}
              </a>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export function FilterSection() {
  return (
    <Card className="border-none bg-background/60 shadow-none backdrop-blur-sm">
      <CardContent className="space-y-6 p-4 lg:p-6">
        <FilterGroup
          title="Popular Makes"
          items={[
            { label: "Toyota", count: 1234, href: "#" },
            { label: "Honda", count: 890, href: "#" },
            { label: "Ford", count: 567, href: "#" },
          ]}
        />
        <FilterGroup
          title="Vehicle Types"
          items={[
            { label: "SUV", count: 456, href: "#" },
            { label: "Sedan", count: 789, href: "#" },
            { label: "Truck", count: 234, href: "#" },
          ]}
        />
        <FilterGroup
          title="Body Styles"
          items={[
            { label: "Coupe", count: 123, href: "#" },
            { label: "Hatchback", count: 456, href: "#" },
            { label: "Wagon", count: 789, href: "#" },
          ]}
        />
      </CardContent>
    </Card>
  );
}
