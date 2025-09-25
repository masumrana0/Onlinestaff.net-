"use client";

import * as React from "react";
import { LogOut, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hook";
import { selectUser } from "@/redux/features/auth/authSlice";
import { USER_ROLE } from "@/app/constants";
import { navigationItems } from "./Index";

export function DrawerMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const user = useAppSelector(selectUser);

  const handleNavigation = (path: string) => {
    setOpen(false);
    router.push(path);
  };

  // Get navigation items based on user role
  const role = user?.role || USER_ROLE.jobseeker;
  const items =
    navigationItems[role as keyof typeof navigationItems] ||
    navigationItems["job-seeker"];

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className=" flex md:hidden">
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-full w-[300px] sm:w-[400px] right-0 left-auto">
        <div className="mx-auto w-full">
          <DrawerHeader>
            <DrawerTitle>Navigation Menu</DrawerTitle>
          </DrawerHeader>
          <nav className="flex flex-col space-y-2 p-4">
            {items.map(({ label, icon, path }) => (
              <Button
                key={label}
                variant="ghost"
                className="justify-start"
                onClick={() => handleNavigation(path)}
              >
                {icon}
                {label}
              </Button>
            ))}
            <Button
              variant="ghost"
              className="justify-start text-red-500 hover:text-red-600 hover:bg-red-100"
              onClick={() => handleNavigation("/logout")}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Log Out
            </Button>
          </nav>
          <DrawerClose asChild>
            <Button variant="outline" className="mt-4 w-full">
              Close Menu
            </Button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
