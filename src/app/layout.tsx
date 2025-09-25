import type { Metadata } from "next";
import { Merriweather, Montserrat } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";
import ChatBot from "@/components/shared/ChatBot";
import AppContext from "@/context/AppContext";
import { Toaster } from "@/components/ui/toaster";

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "online staff",
  description: "Online Staff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${montserrat.variable} antialiased`}
      >
        <AppContext>
          <ChatBot />
          <Providers>{children}</Providers>
          <Toaster />
        </AppContext>
      </body>
    </html>
  );
}
