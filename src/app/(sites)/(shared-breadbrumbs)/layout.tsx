import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "../../globals.css";
import Footer from "@/components/footer/Footer";
import SitesNavbar from "@/components/navigation/SitesNavbar";
import { BreadCrumbs } from "@/components/reusable/BreadCrumbs";
import SmoothScroll from "@/components/reusable/SmoothScroll";

const dmSans = DM_Sans({
  weight: ["400", "600", "700"],
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  weight: "600",
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apex Motorsports",
  description: "Western Sydney University Formula SAE Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${barlowCondensed.variable} antialiased`}
      >
        <SmoothScroll />
        <SitesNavbar />
        <BreadCrumbs />

        {children}
        <Footer />
      </body>
    </html>
  );
}
