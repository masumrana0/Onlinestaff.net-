import { Container } from "@/components/ui/container";
import { FilterTabs } from "./FilterTabs";
import { CustomerReviews } from "./CustomerReview";
import Newsletter from "./Newsletter";
import FeaturedJobs from "./FeaturedJobs/FeaturedJobs";
import PricingSection from "./Pricing";
import CompaniesMarquee from "./Companies";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Container className="relative">
        <div className="space-y-8 py-6 lg:py-8">
          <FilterTabs />
          <FeaturedJobs />
          <PricingSection />
          <CustomerReviews />
          <CompaniesMarquee />
          <Newsletter />
        </div>
      </Container>
    </main>
  );
}
