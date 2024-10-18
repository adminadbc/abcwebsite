'use client'

import React from "react";

import NavBar from "@/app/ui/components/navbar";
import { HeroSection } from "@/app/ui/legal-awareness/hero";
import  LegalAwarenessProgram  from "@/app/ui/legal-awareness/carousel";
import LegalAwarenessGallery from "@/app/ui/legal-awareness/legalawarenessgallery";
import { Footer4 } from "@/app/ui/components/footer";

function LegalConnectPage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <LegalAwarenessProgram />
      <LegalAwarenessGallery/>
      <Footer4 />
    </div>
  );
}

export default LegalConnectPage;
