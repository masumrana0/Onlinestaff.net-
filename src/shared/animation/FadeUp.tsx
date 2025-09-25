import { motion } from "framer-motion";
import { ReactNode } from "react";
const FadeUp = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={`${className} text-xl text-gray-500 max-w-2xl mx-auto`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
