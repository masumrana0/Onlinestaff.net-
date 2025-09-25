import { CreditCard, Settings, User } from "lucide-react";

export const navigationItems = {
    company: [
      {
        label: "Profile",
        icon: <User className="mr-2 h-4 w-4" />,
        path: "/company",
      },
      {
        label: "Account Management",
        icon: <CreditCard className="mr-2 h-4 w-4" />,
        path: "/company/manage-profile",
      },
    ],
    "job-seeker": [
      {
        label: "Verify Id",
        icon: <User className="mr-2 h-4 w-4" />,
        path: "/profile/job-seeker/verify-id",
      },
      {
        label: "Profile",
        icon: <User className="mr-2 h-4 w-4" />,
        path: "/profile/job-seeker",
      },
      {
        label: "Account Settings",
        icon: <Settings className="mr-2 h-4 w-4" />,
        path: "/profile/job-seeker/account-setting",
      },
    ],
  };
  