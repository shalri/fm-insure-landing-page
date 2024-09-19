import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const karla = Karla({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Insure Landing Page | FScode",
  description:
    "Solution for Insure Landing Page challenge from Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${karla.className} grid min-h-screen grid-cols-1 content-between scroll-smooth antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
