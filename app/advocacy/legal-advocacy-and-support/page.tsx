'use client'

import React from "react";
import Link from "next/link";
import NavBar from "@/app/ui/components/navbar";
import { HeroSection } from "@/app/ui/legal-advocacy-support/hero";
import LegalAdvocacySupport from "@/app/ui/legal-advocacy-support/carousel";
import { Footer4 } from "@/app/ui/components/footer";

function LegalConnectPage() {
  return (
    <Link href="/advocacy/legal-advocacy-and-support" target="_blank" rel="noopener noreferrer">
      <div>
        <NavBar />
        <HeroSection />
        <LegalAdvocacySupport />
        <Footer4 />
      </div>
    </Link>
  );
}

export default LegalConnectPage;
