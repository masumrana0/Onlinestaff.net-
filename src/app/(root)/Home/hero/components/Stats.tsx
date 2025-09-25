"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, Users, FileText } from "lucide-react";

const stats = [
  { number: "175,324", label: "Live Jobs", icon: Briefcase },
  { number: "97,354", label: "Companies", icon: Building2 },
  { number: "3,847,154", label: "Candidates", icon: Users },
  { number: "7,532", label: "New Jobs", icon: FileText },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="bg-white backdrop-blur-sm p-4 rounded-lg border border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <stat.icon className="w-4 h-4 text-primary" />
            <div className="text-2xl font-bold text-foreground">
              {stat.number}
            </div>
          </div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;
