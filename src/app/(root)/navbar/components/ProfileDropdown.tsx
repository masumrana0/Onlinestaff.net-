"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logout, selectUser } from "@/redux/features/auth/authSlice";
import { menuConfig } from "./constants";
import { USER_ROLE } from "@/app/constants";
import Link from "next/link";

export function ProfileDropdown({ Trigger }: { Trigger: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  // Determine the menu based on user role
  const role = user?.role || USER_ROLE.jobseeker;
  const menuItems = menuConfig[role];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{Trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 -right-4 absolute !bg-[white] shadow-sm">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup className="space-y-2 pb-3">
          {menuItems.map(({ label, icon: Icon, action,link }, index) => (
            <DropdownMenuRadioItem
              key={index}
              value={label.toLowerCase().replace(/\s+/g, "-")}
              className="pl-3 cursor-pointer group hover:!bg-primary/5 text-[#424242] hover:!text-primary"
              onClick={
                action ||
                (label === "Logout" ? () => dispatch(logout()) : undefined)
              }
            >
              <Link href={`${link}`} className="flex items-center">    <Icon className="mr-2 h-4 w-4 text-[gray] group-hover:!text-primary" />
              {label}</Link>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
