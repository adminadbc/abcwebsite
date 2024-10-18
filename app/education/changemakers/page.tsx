'use client'

import React from "react";

import NavBar from "@/app/ui/components/navbar";
import { HeroSection } from "@/app/ui/changemaker/hero";
import  CarouselComponent  from "@/app/ui/changemaker/carousel";
// import { ContentSection11 } from "@/app/ui/changemaker/body";
import ChangemakersGallery from "@/app/ui/changemaker/changemakersgallery";
import { Footer4 } from "@/app/ui/components/footer";

function page() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      {/* <ContentSection11 /> */}
      <CarouselComponent/>
      <ChangemakersGallery/>
      <Footer4 />
    </div>
  );
}

export default page;
