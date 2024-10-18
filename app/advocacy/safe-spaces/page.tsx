'use client'

import React from "react";

import NavBar from "@/app/ui/components/navbar";
import { HeroSection } from "@/app/ui/safespaces/hero";
import  SafeSpaces  from "@/app/ui/safespaces/carousel";
import SafeSpacesGallery from "@/app/ui/safespaces/safespacesgallery"
import { Footer4 } from "@/app/ui/components/footer";

function LegalConnectPage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <SafeSpaces />
      <SafeSpacesGallery/>
      <Footer4 />
    </div>
  );
}

export default LegalConnectPage;
