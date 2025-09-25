import FadeUp from "@/shared/animation/FadeUp";
import { motion } from "framer-motion";

const Heading = () => {
  return (
    <>
      {/* Headline */}
      <div className="space-y-4">
        <motion.h1
          className="text-4xl sm:text-5xl mt-8 md:text-5xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Find Your Perfect
          <span className="text-primary"> Career Path</span>
        </motion.h1>
        <FadeUp>
          <p className="text-lg">
            Discover opportunities that match your skills and interests. Whether
            you&apos;re looking for a full-time job or freelance gigs.
          </p>
        </FadeUp>
      </div>
    </>
  );
};

export default Heading;
