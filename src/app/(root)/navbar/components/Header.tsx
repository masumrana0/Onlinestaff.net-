"use client";

import Link from "next/link";
import { Navbar } from "../Navbar";
import { AuthButtons } from "./AuthButtons";
import { Container } from "@/components/ui/container";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 transition-colors hover:opacity-90"
          >
           <Image src="/logo/logo.png" className="h-10 w-44" alt="logo" width={500} height={500} />
          </Link>
          {/* Navbar */}
          <Navbar />
          {/* Authentication Buttons */}
          <AuthButtons />
        </div>
      </Container>
    </header>
  );
}
