'use client'

import React from "react";
import Link from "next/link";
import NavBar from "@/app/ui/components/navbar";
import { HeroSection } from "@/app/ui/safespaces/hero";
import SafeSpaces from "@/app/ui/safespaces/carousel";
import { Footer4 } from "@/app/ui/components/footer";

function LegalConnectPage() {
  return (
    <Link href="/advocacy/safe-spaces" target="_blank" rel="noopener noreferrer">
      <div>
        <NavBar />
        <HeroSection />
        <SafeSpaces />
        <Footer4 />
      </div>
    </Link>
  );
}

export default LegalConnectPage;