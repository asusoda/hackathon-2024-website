import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
const inter = Inter({ subsets: ["latin"] });
import Navbar2 from "@/components/Navbar2";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DIgital Swag",
  description: "Get your digital swag here and post it on social media!",
  icons: "/assets/images/duhacks.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">
      <Navbar2 />
      {/* <button className="bg-white rounded-md p-4">Go Back to DUHACKS 3.0</button> */}
      <body className={inter.className}>
        <div className="">
        {children}
          </div>
      </body>
      <Footer />
    </html>

  );
}
