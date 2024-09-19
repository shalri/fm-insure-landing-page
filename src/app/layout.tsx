import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

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
        className={`${karla.className} flex min-h-screen flex-col scroll-smooth antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
