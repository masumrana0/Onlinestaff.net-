import FadeUp from "@/shared/animation/FadeUp";
import { motion } from "framer-motion";

export const HeroHeading = () => {
  return (
    <>
      <div className="space-y-4">
        <motion.h1
          className="text-4xl sm:text-5xl mt-8 md:text-5xl font-bold tracking-tight !leading-[53px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Largest Skilled Database For
          <span className="text-primary"> Bangladeshi Job Seekers</span>
        </motion.h1>
        <FadeUp>
          <p className="text-lg md:text-lg lg:text-xl">
            50% Cheaper Compare with Other Platforms For Employers .No Middleman
            Fees, No Service Charge! Hire Direct and Cancel When You are Done.
          </p>
        </FadeUp>
      </div>
    </>
  );
};
