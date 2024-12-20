import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Script from "next/script";

import NavBar from "./ui/components/navbar";
import GoogleAnalytics from './components/GoogleAnalytics';
// Specify the weight property along with subsets
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "ABC Foundation",
  description: "ABC Foundation Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body
        // Wrap the max-width from the body
        className={roboto.className}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
