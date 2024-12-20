'use client'

import React from "react";

import NavBar from "@/app/ui/components/navbar";
import { HeroSection } from "@/app/ui/changemaker/hero";
import CarouselComponent from "@/app/ui/changemaker/carousel";
import { Footer4 } from "@/app/ui/components/footer";

function page() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <CarouselComponent />
      <Footer4 />
    </div>
  );
}

export default page;
