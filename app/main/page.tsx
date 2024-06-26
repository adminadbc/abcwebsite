"use client";

import React from "react";
import { HeroSection12 } from "../ui/main/hero";
import { FeatureSection3 } from "../ui/main/whoweare";
import { FeatureSection14 } from "../ui/main/whatwedo";
import { WidgetsExample6 } from "../ui/main/seperatoone";
import { DonateSeperator } from "../ui/main/donateseperator";
import { FounderMessage } from "../ui/main/foundermessage";
import { ProjectSection } from "../ui/main/projects";
import { LogoSection6 } from "../ui/main/testimonials";
import { WorkWithUs } from "../ui/main/workwithus";
import { NewsLetter1 } from "../ui/main/newsletter";
import LogoCarousel from "../ui/logocarousel/logoCarousel";
import { Footer4 } from "../ui/components/footer";

function MainPage() {

  return (
    <div className="w-screen overflow-x-hidden">
      <HeroSection12 />
        <FeatureSection3 />
         <DonateSeperator />
        <FeatureSection14 />
      <WidgetsExample6 />
      <FounderMessage />
      <ProjectSection />
      <LogoSection6 />
      <WorkWithUs />
      <LogoCarousel />
      <NewsLetter1 />
      <Footer4 />
    </div>
  );
}

export default MainPage;
