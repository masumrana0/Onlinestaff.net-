const cities = [
  {
    name: "San Francisco, CA",
    jobs: "1,234 jobs",
  },
  {
    name: "New York, NY",
    jobs: "2,456 jobs",
  },
  {
    name: "Los Angeles, CA",
    jobs: "1,789 jobs",
  },
  {
    name: "Seattle, WA",
    jobs: "987 jobs",
  },
  {
    name: "Chicago, IL",
    jobs: "1,123 jobs",
  },
  {
    name: "Boston, MA",
    jobs: "876 jobs",
  },
  {
    name: "Austin, TX",
    jobs: "654 jobs",
  },
  {
    name: "Denver, CO",
    jobs: "543 jobs",
  },
];

export default function FeaturedCities() {
  return (
    <section className="py-20 bg-surface-light dark:bg-surface-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-h2 text-textPrimary-light dark:text-textPrimary-dark mb-8">
          Featured Cities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <div
              key={index}
              className="group relative h-48 rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/10 dark:bg-primary-dark/10 group-hover:bg-primary/20 dark:group-hover:bg-primary-dark/20 transition-colors" />
              <div
                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-dark/
50 to-transparent"
              >
                <h3 className="text-h3 text-textPrimary-light dark:text-textPrimary-dark mb-1">
                  {city.name}
                </h3>
                <p className="text-bodySmall text-textSecondary-light dark:text-textSecondary-dark">
                  {city.jobs}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
