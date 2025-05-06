import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../../components/app-sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          {/* Navbar */}
          <Navbar />

          <div className="flex">
            {/* Sidebar */}
            <AppSidebar />

            {/* Sidebar Trigger */}

            {/* Main Content */}
            <main className="flex-1">
              {/*<SidebarTrigger className="absolute top-4 left-4 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 z-50" />*/}
              {children}</main>

          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
