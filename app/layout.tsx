import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { TopScroll } from "@/lib/topScroll";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Central Coast Fishing Charters",
  description: "The leading database of finance contacts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${montserrat.className} flex flex-col`}>
          <TopScroll />
          {children}
      </body>
    </html>
  );
}