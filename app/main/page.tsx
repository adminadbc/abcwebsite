"use client";

import React from "react";
import { HeroSection12 } from "../ui/main/hero";

import { FeatureSection3 } from "../ui/main/whoweare";
import { FeatureSection14 } from "../ui/main/whatwedo";
import { WidgetsExample6 } from "../ui/main/seperatoone";
import { FounderMessage } from "../ui/main/foundermessage";
import { ProjectSection } from "../ui/main/projects";
import { TestimonialSection6 } from "../ui/main/testimonials";
import { WorkWithUs } from "../ui/main/workwithus";
import { NewsLetter1 } from "../ui/main/newsletter";

import { Footer4 } from "../ui/components/footer";
import NavBar from "../ui/components/navbar";
import Custom from "../ui/components/dropDown";

function MainPage() {
  return (
    <div>
    <NavBar />
      <HeroSection12 />
      <FeatureSection3 />
      <FeatureSection14 />
      <WidgetsExample6 />
      <FounderMessage />
      <ProjectSection />
      <TestimonialSection6 />
      <WorkWithUs />
      <NewsLetter1 />
      <Footer4 />
    </div>
  );
}

export default MainPage;
