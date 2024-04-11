import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const bodoni = localFont({ src: "../bodoniflf-webfont/BodoniFLF-Roman.woff" });

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
    <html lang="en" style={{width : "screen", overflowX :"hidden"}}>
      <body className={bodoni.className}>{children}</body>
    </html>
  );
}
