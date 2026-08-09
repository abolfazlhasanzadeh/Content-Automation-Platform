import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { AppSidebar } from "@/components/core/sidebar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import MotionProvider from "@/components/core/motion/MotionProvider";
import { Item } from "@/components/core/motion/StaggerGroup";
import Masthead from "@/components/core/header/Masthead";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dana = localFont({
  src: [
    {
      path: "../fonts/Dana-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Dana-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Dana-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Dana-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "اتوماسیون محتوا | اخبار برنامه‌نویسی",
  description: "پلتفرم تولید و بازبینی خودکار خبرهای برنامه‌نویسی",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  const today = new Intl.DateTimeFormat("fa-IR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date());
  
  return (
    <html
      lang="fa"
      dir="rtl"
      className={cn(
        "antialiased",
        dana.className,
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body className="min-h-svh">
        <MotionProvider>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <Item>
                <Masthead date={today} />
              </Item>
              {children}
            </SidebarInset>
          </SidebarProvider>
        </MotionProvider>
      </body>
    </html>
  );
}