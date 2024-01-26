import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ReactNode } from "react";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <Header title="Test" />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
