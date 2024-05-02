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
import NavBar from "../ui/components/navbar";


import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function MainPage() {
  const controlsFirst = useAnimation();
  const controlsSecond = useAnimation();
  const controlsThird = useAnimation();
  const [refFirst, inViewFirst] = useInView();
  const [refSecond, inViewSecond] = useInView();
  const [refThird, inViewThird] = useInView();

  useEffect(() => {
    if (inViewFirst) {
      controlsFirst.start({ opacity: 1, y: 0 , transition: { delay: 0.5} });
    }
  }, [controlsFirst, inViewFirst]);

  useEffect(() => {
    if (inViewSecond) {
      controlsSecond.start({ opacity: 1, y: 0 , transition: { delay: 0.5 }});
    }
  }, [controlsSecond, inViewSecond]);

  useEffect(() => {
    if (inViewThird) {
      controlsThird.start({ opacity: 1, y: 0 ,   transition: { delay: 0.5 } });
    }
  }, [controlsThird, inViewThird]);
  return (
    <div className="w-screen overflow-x-hidden">
       <motion.div ref={refFirst} initial={{ opacity: 0, y: 50 }} animate={controlsFirst}>
      <HeroSection12 />
      </motion.div>
      {/* <NavBar /> */}
      <motion.div ref={refSecond} initial={{ opacity: 0, y: 50 }} animate={controlsSecond}>
      <FeatureSection3 />
      </motion.div>
      <motion.div ref={refThird} initial={{ opacity: 0, y: 50 }} animate={controlsThird}>
      <DonateSeperator />
      </motion.div>
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
