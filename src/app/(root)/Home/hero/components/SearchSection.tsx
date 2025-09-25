"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import HeroSearchBar from "./HeroSearchBar";
import { useAppSelector } from "@/redux/hook";
import { selectUser } from "@/redux/features/auth/authSlice";

const SearchSection = () => {
  const router = useRouter();
  const [jobSearch, setJobSearch] = useState("");
  const [talentSearch, setTalentSearch] = useState("");
  const user = useAppSelector(selectUser);
 
  const handleSearch = () => {
    let searchQuery = "/";
    if (jobSearch.trim()) {
      searchQuery += `job=${encodeURIComponent(jobSearch)}`;
    }
    if (talentSearch.trim()) {
      if (searchQuery.length > 7) searchQuery += "&";
      searchQuery += `talent=${encodeURIComponent(talentSearch)}`;
    }
    router.push(searchQuery);
  };

  return (
    <div className="space-y-4 w-full">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Conditionally render search inputs */}
        {!user?.role && (
          <>
            <HeroSearchBar
              placeholder="Search for jobs..."
              value={jobSearch}
              onChange={setJobSearch}
              className="sm:flex-[2]"
            />
            <HeroSearchBar
              placeholder="Search for talents..."
              value={talentSearch}
              onChange={setTalentSearch}
              className="sm:flex-[2]"
            />
          </>
        )}

        {user?.role === "company" && (
          <HeroSearchBar
            placeholder="Search for talents..."
            value={talentSearch}
            onChange={setTalentSearch}
            className="sm:flex-[2]"
          />
        )}

        {user?.role === "job-seeker" && (
          <HeroSearchBar
            placeholder="Search for jobs..."
            value={jobSearch}
            onChange={setJobSearch}
            className="sm:flex-[2]"
          />
        )}

        {/* Search Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="w-full sm:w-auto mt-3 md:mt-0 py-3 md:py-6 md:text-md rounded-full"
            onClick={handleSearch}
          >
            Search
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default SearchSection;
