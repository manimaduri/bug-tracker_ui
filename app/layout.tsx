import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bug Tracker",
  description: "Create bugs and track their progress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  data-theme="dark">
      <body className={inter.className}>
        <Navbar/>
        <div className="lg:flex pt-16">
          <Sidebar />
          <div className="lg:w-full pl-3 pt-3">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
