'use client'

import React from "react";

import NavBar from "@/app/ui/components/navbar";
import { HeroSection } from "@/app/ui/engage/hero";
import Engage from "@/app/ui/engage/carousel";
import { Footer4 } from "@/app/ui/components/footer";

function LegalConnectPage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Engage />
      <Footer4 />
    </div>
  );
}

export default LegalConnectPage;
