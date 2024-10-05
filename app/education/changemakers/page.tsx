'use client'

import React from "react";

import NavBar from "@/app/ui/components/navbar";
import { HeroSection } from "@/app/ui/changemaker/hero";
import  CarouselComponent  from "@/app/ui/changemaker/carousel";
// import { ContentSection11 } from "@/app/ui/changemaker/body";
import GalleryWidget from "@/app/ui/about/gallery";
import { Footer4 } from "@/app/ui/components/footer";

function page() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      {/* <ContentSection11 /> */}
      <CarouselComponent/>
      <GalleryWidget/>
      <Footer4 />
    </div>
  );
}

export default page;
