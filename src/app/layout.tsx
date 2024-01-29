import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Group Finder",
  description: "Find YOUR local group",
  creator: "John Dennehy",
  keywords: ["group", "finder", "local"],
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={GeistSans.className}>
          <Header title="Test" />
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
