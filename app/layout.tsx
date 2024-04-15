import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";

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
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
