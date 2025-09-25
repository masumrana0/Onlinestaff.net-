import { H1 } from "@/components/ui/typography";
import { Briefcase, HardHat, Headphones, PieChart } from "lucide-react";

const categories = [
  {
    icon: Briefcase,
    title: "Business Development",
    count: "120+ positions",
  },
  {
    icon: HardHat,
    title: "Construction",
    count: "80+ positions",
  },
  {
    icon: Headphones,
    title: "Customer Service",
    count: "90+ positions",
  },
  {
    icon: PieChart,
    title: "Finance",
    count: "100+ positions",
  },
];

export default function Categories() {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-h2 text-textPrimary-light dark:text-textPrimary-dark">
            <H1>Search by Category</H1>
          </h2>
          <a
            href="#"
            className="text-primary dark:text-primary-dark text-bodySmall"
          >
            All Categories →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-light dark:shadow-dark hover:shadow-lg transition-shadow"
            >
              <category.icon className="w-12 h-12 text-primary dark:text-primary-dark mb-4" />
              <h3 className="text-h3 text-textPrimary-light dark:text-textPrimary-dark mb-2">
                {category.title}
              </h3>
              <p className="text-bodySmall text-textSecondary-light dark:text-textSecondary-dark">
                {category.count}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
