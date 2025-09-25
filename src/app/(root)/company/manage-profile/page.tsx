import { Container } from "@/components/ui/container";
import { CompanyProfileForm } from "./components/profile";
import { QuickLinks } from "./components/QucikLinks";

const page = () => {
  return (
    <Container>
      <CompanyProfileForm />
      <QuickLinks/>
    </Container>
  );
};

export default page;
