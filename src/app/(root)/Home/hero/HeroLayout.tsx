"use client";

import FadeUp from "@/shared/animation/FadeUp";
import FloatingIcons from "./components/FloatingIcons";
import HeroBackgroundImage from "./components/HeroBackgroundImage";

import { HeroHeading } from "./components/HeroHeading";

import SearchSection from "./components/SearchSection";
import Stats from "./components/Stats";
import { useAppSelector } from "@/redux/hook";
import { selectUser } from "@/redux/features/auth/authSlice";

const HeroLayout = () => {

  const user = useAppSelector(selectUser)
  
  console.log(user)
  return (
    <section className="relative min-h-[80vh] bg-white flex items-center justify-center py-11">
      <HeroBackgroundImage />

      {/* White Layer on Top of the Image */}
      <div className="absolute inset-0 bg-white bg-opacity-95 z-10" />

      <FloatingIcons />
      {/* Main Content */}
      <div className="container px-4 relative z-30">
        <div className="flex flex-col items-center md:text-center">
          <FadeUp className="space-y-8 max-w-3xl">
            <HeroHeading />
            <SearchSection />

            <Stats />
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default HeroLayout;
