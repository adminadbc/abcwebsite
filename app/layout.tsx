import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Script from "next/script";

import NavBar from "./ui/components/navbar";
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
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MQW2S3KCX7"
        ></Script>
        <Script id="google-analytics">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', "${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}");
 `}
        </Script>
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
