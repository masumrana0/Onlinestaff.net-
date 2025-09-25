import { motion } from "framer-motion";

const FloatingIcons = () => {
  return (
    <div className="hidden md:block">
      {/* Animated Images */}
      <motion.img
        src="/home/job.png"
        alt="Job Icon"
        className="absolute size-36 opacity-5 z-30"
        style={{ bottom: "10%", left: "10%" }}
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -20, 20, 0],
          transition: {
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror", // Valid string literal
            ease: "easeInOut",
          },
        }}
      />

      <motion.img
        src="/home/search.png"
        alt="Search Icon"
        className="absolute size-36 opacity-5 z-30"
        style={{ top: "10%", right: "15%" }}
        animate={{
          x: [0, -20, 20, 0],
          y: [0, 30, -30, 0],
          transition: {
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          },
        }}
      />

      <motion.img
        src="/home/file.gif"
        alt="Notification Icon"
        className="absolute size-36 opacity-5 z-30"
        style={{ top: "5%", left: "5%" }}
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -10, 10, 0],
          transition: {
            duration: 7,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          },
        }}
      />

      <motion.img
        src="/home/gear.gif"
        alt="Gear Icon"
        className="absolute size-36 opacity-5 z-30"
        style={{ bottom: "5%", right: "10%" }}
        animate={{
          x: [0, -30, 30, 0],
          y: [0, 20, -20, 0],
          transition: {
            duration: 5.5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          },
        }}
      />
    </div>
  );
};

export default FloatingIcons;
