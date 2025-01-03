'use client'

import React from "react";

import NavBar from "@/app/ui/components/navbar";
import { HeroSection } from "@/app/ui/legal-awareness/hero";
import LegalAwarenessProgram from "@/app/ui/legal-awareness/carousel";
import { Footer4 } from "@/app/ui/components/footer";

function LegalConnectPage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <LegalAwarenessProgram />
      <Footer4 />
    </div>
  );
}

export default LegalConnectPage;
