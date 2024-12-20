'use client'

import React from "react";

import NavBar from "@/app/ui/components/navbar";
import { HeroSection } from "@/app/ui/united-journeys/hero";
import UnitedJourneys from "@/app/ui/united-journeys/carousel";
import { Footer4 } from "@/app/ui/components/footer";

function LegalConnectPage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <UnitedJourneys />
      <Footer4 />
    </div>
  );
}

export default LegalConnectPage;
