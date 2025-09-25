import { Container } from "@/components/ui/container";
import { PremiumBanner } from "./components/PremiumBanner";
import { CompanyHeader } from "./components/CompanyHeader";
import { CompanyStats } from "./components/CompanyStats";
import { JobPostsSection } from "./components/JobPostsSection";
import { WorkersSection } from "./components/WorkersSection";
import ReferralBanner from "./components/ReferralBanner";

const page = () => {
  return (
    <div>
      <Container className="space-y-6">
        <PremiumBanner />
        <CompanyHeader />
        <CompanyStats />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <JobPostsSection />
          <WorkersSection />
        </div>
        <ReferralBanner />
      </Container>
    </div>
  );
};

export default page;
