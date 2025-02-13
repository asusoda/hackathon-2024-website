import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code Challenge XI 24",
  description: "Code Challenge XI 24",
  icons: "/assets/images/logo-dark-compact.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">
      <body className={inter.className}>{children}
        <Analytics />
        <SpeedInsights />

      </body>
    </html>

  );
}
