'use client'

import React from "react";
import NavBar from "@/app/ui/components/navbar";
import { HeroSection } from "@/app/ui/legal-advocacy-support/hero";
import LegalAdvocacySupport from "@/app/ui/legal-advocacy-support/carousel";
import { Footer4 } from "@/app/ui/components/footer";

function LegalConnectPage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <LegalAdvocacySupport />
      <Footer4 />
    </div>
  );
}

export default LegalConnectPage;
