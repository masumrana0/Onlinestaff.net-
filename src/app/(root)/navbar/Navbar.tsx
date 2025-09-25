import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { USER_ROLE } from "@/app/constants";
import { useAppSelector } from "@/redux/hook";
import { selectUser } from "@/redux/features/auth/authSlice";

export function Navbar() {
  const user = useAppSelector(selectUser);

  return (
    <nav className="hidden items-center gap-6 md:flex">
      {/* Dropdown Menu: Resources */}

      {(!user?.role || user?.role === USER_ROLE.COMPANY) && (
        <Link
          href="/pricing"
          className="text-base font-medium text-muted-foreground hover:text-foreground"
        >
          Pricing
        </Link>
      )}

      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1 text-base font-medium text-muted-foreground hover:text-foreground">
          Resources
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-48 bg-[white] shadow-none"
        >
          <DropdownMenuItem asChild>
            <Link href="/faq" className="w-full">
              Job Title FAQ
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/jobboard" className="w-full">
              Jobboard
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Simple Links */}
      <Link
        href="/messages"
        className="text-base font-medium text-muted-foreground hover:text-foreground"
      >
        Messages
      </Link>

      {/* Button: Find Jobs */}
      {user?.role === USER_ROLE.jobseeker ? (
        <Button variant="outline" size="default" asChild>
          <Link href="/jobs">Find Jobs</Link>
        </Button>
      ) : (
        user?.role === USER_ROLE.COMPANY && (
          <Button variant="outline" size="default" asChild>
            <Link href="/company/skillsearch">Find Talents</Link>
          </Button>
        )
      )}

      {/* Dropdown Menu: Post a Job */}
      <DropdownMenu>
        {user?.role && user?.role === USER_ROLE.COMPANY && (
          <DropdownMenuTrigger asChild>
            <Button
              size="default"
              className="gap-1 border bg-background text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Post A Job
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
        )}
        <DropdownMenuContent
          align="end"
          className="w-48 bg-[white] shadow-none"
        >
          <DropdownMenuItem asChild>
            <Link href="/post-job" className="w-full">
              Post a New Job
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/manage-jobs" className="w-full">
              Manage Posted Jobs
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
