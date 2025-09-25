"use client";
import BackgroundPatterns from "@/components/ui/BackgroundPatterns";
import HeroLayout from "./Home/hero/HeroLayout";
import Home from "./Home/Index";

const page = () => {
  return (
    <div className="min-h-screen bg-background-light">
      <BackgroundPatterns />
      <main>
        <HeroLayout />
        <Home />
        {/* <Categories />
        <Newsletter /> */}
      </main>
    </div>
  );
};

export default page;
