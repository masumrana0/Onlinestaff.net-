import { H2, Paragraph } from "@/components/ui/typography";
import { Share2, Users2, Wallet } from "lucide-react";
import Link from "next/link";

export default function ReferralBanner() {
  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6 md:p-8 relative overflow-hidden">
      {/* Background SVGs */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(0,0,0,0.05)"
              strokeWidth="1"
            />
          </pattern>
          <pattern
            id="circles"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="50"
              cy="50"
              r="20"
              fill="none"
              stroke="rgba(59,130,246,0.1)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#circles)" />
        <path d="M0,0 Q50,100 100,0 V100 H0 Z" fill="rgba(59,130,246,0.03)" />
      </svg>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
        {/* Left side - SVG Illustrations */}
        <div className="relative w-full md:w-1/3 flex justify-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center gap-2 p-4 bg-blue-50 rounded-lg shadow-md transition-transform hover:scale-105">
              <Users2 className="w-12 h-12 text-blue-500" />
              <span className="text-sm font-medium text-blue-700">Connect</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-green-50 rounded-lg shadow-md transition-transform hover:scale-105">
              <Share2 className="w-12 h-12 text-green-500" />
              <span className="text-sm font-medium text-green-700">Share</span>
            </div>
            <div className="col-span-2 flex flex-col items-center gap-2 p-4 bg-purple-50 rounded-lg shadow-md transition-transform hover:scale-105">
              <Wallet className="w-12 h-12 text-purple-500" />
              <span className="text-sm font-medium text-purple-700">Earn</span>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <H2>
            Invite friends to{" "}
            <span className="text-blue-600">OnlineStaff.net</span> and earn a{" "}
            <span className="text-blue-600">40% lifetime commission</span>
          </H2>

          <div className="space-y-4">
            <Paragraph className="text-gray-600 font-medium">
              SHARE YOUR REFERRAL LINK:
            </Paragraph>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 px-4 py-2 bg-gray-100 rounded-lg text-gray-800 font-mono text-sm truncate">
                http://onlinestaff.net/?ref=675460
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
            <Link
              href="/affiliate"
              className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              AFFILIATE AREA
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/learn-more"
              className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
