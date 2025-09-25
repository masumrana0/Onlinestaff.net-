import { Lightbulb, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description:
      "We deliver cutting-edge solutions tailored to your business needs.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Our products are optimized for speed and efficiency.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "We prioritize the security and reliability of your data.",
  },
];

export default function Features() {
  return (
    <section className="bg-background-light dark:bg-background-dark py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-h2 text-textPrimary-light dark:text-textPrimary-dark text-center mb-12">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-light dark:shadow-dark"
            >
              <feature.icon className="w-12 h-12 text-primary dark:text-primary-dark mb-4" />
              <h3 className="text-h3 text-textPrimary-light dark:text-textPrimary-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-bodySmall text-textSecondary-light dark:text-textSecondary-dark">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
