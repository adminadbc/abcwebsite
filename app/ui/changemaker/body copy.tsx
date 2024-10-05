"use client";

import React from "react";
import { TagIcon, CloudIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { TbTopologyStarRing3 } from "react-icons/tb";
import { FaPersonCircleCheck } from "react-icons/fa6";
function Option({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="mb-4">
        <Icon className="h-6 w-6 text-gray-900" />
      </div>
      <div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="font-normal  lg:max-w-xs">{children}</Typography>
      </div>
    </div>
  );
}

export function ContentSection11() {
  const [refFirst, inViewFirst] = useInView();
  const [refSecond, inViewSecond] = useInView();
  const [refThird, inViewThird] = useInView();
  const [refFour, inViewFour] = useInView();
  const [refFive, inViewFive] = useInView();
  // const [refSix, inViewSix] = useInView();
  // const [refSeven, inViewSeven] = useInView();
    const controlsSecond = useAnimation();
  const controlsFirst = useAnimation();
  const controlsThird = useAnimation();
  const controlsFour = useAnimation();
  const controlsFive = useAnimation();
  const controlsSix = useAnimation();
  const controlsSeven = useAnimation();
    useEffect(() => {
      if (inViewFirst) {
        controlsFirst.start({ opacity: 1, y: 0 , transition: { delay: 0.5, duration : 0.5} });
      }
    }, [controlsFirst, inViewFirst]);
  
      useEffect(() => {
      if (inViewSecond) {
        controlsSecond.start({ opacity: 1, y: 0 , transition: { delay: 0.8, duration : 0.5 }});
      }
    }, [controlsSecond, inViewSecond]);
    useEffect(() => {
      if (inViewThird) {
        controlsThird.start({ opacity: 1, y: 0 , transition: { delay: 1.2, duration : 0.5} });
      }
    }, [controlsThird, inViewThird]);
    useEffect(() => {
      if (inViewFour) {
        controlsFour.start({ opacity: 1, y: 0 , transition: { delay: 1.2, duration : 0.5} });
      }
    }, [controlsFour, inViewFour]);
    useEffect(() => {
      if (inViewFive) {
        controlsFive.start({ opacity: 1, y: 0 , transition: { delay: 1.4, duration : 0.5} });
      }
    }, [controlsFive, inViewFive]);
    // useEffect(() => {
    //   if (inViewSix) {
    //     controlsSix.start({ opacity: 1, y: 0 , transition: { delay: 1.8, duration : 0.5} });
    //   }
    // }, [controlsSix, inViewSix]);
    // useEffect(() => {
    //   if (inViewSeven) {
    //     controlsSeven.start({ opacity: 1, y: 0 , transition: { delay: 2, duration : 0.5} });
    //   }
    // }, [controlsSeven, inViewSeven]);
  return (
    <section className="mx-auto container max-w-5xl px-8 py-10">
      <div className="text-center mb-10 lg:mb-24">
      <motion.div ref={refFirst} initial={{ opacity: 0, y: -50 }} animate={controlsFirst} exit={{ opacity: 0, y: 50 }}>
      <h3 className="text-4xl">Empowering Change Through Changemakers</h3>
        <div className="relative flex py-5  mx-auto items-center">
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
          <p className="mx-5  text-center">
            <TbTopologyStarRing3 />
          </p>
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
        </div>
      </motion.div>   
      </div>
      <div className="lg:space-y-24 space-y-12 mb-20">
        <div className="grid grid-cols-1 items-center place-items-center gap-y-16 lg:grid-cols-2">
          <div className="h-[480px] text-center shadow-lg flex flex-col justify-center lg:max-w-md mx-auto rounded-2xl bg-white p-14">
            <Image
              src="/change.jpeg"
              alt="legal connect app logo"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col gap-8">
          <motion.div ref={refSecond} initial={{ opacity: 0, y: -50 }} animate={controlsSecond} exit={{ opacity: 0, y: 50 }}>
          <Option icon={CloudIcon} title="Unity Through Inclusion:">
              ABC Foundation&#x2019;s Changemakers initiative provides a
              fortified and inclusive platform for influential voices and
              transformative entities to collaborate and confront persistent
              crises within Canada&#x2019;s economy.
            </Option>
      </motion.div>
      <motion.div ref={refThird} initial={{ opacity: 0, y: -50 }} animate={controlsThird} exit={{ opacity: 0, y: 50 }}>
      <Option icon={TagIcon} title="Empowering Dialogue:">
              Through dynamic real-time dialogues and active engagement,
              Changemakers impassions and mobilizes Canadians, empowering them
              to actively shape the trajectory of their communities.
            </Option>
      </motion.div>
      <motion.div ref={refFour} initial={{ opacity: 0, y: -50 }} animate={controlsFour} exit={{ opacity: 0, y: 50 }}>
      <Option icon={Cog6ToothIcon} title="Unified Collaboration:">
              With a commitment to inclusivity, Changemakers harnesses the
              collective prowess and varied perspectives of diverse
              stakeholders, fostering collaboration and driving seismic shifts
              across Canada&#x2019;s economic and social fabric.
            </Option>
      </motion.div>
      
      <motion.div ref={refFive} initial={{ opacity: 0, y: -50 }} animate={controlsFive} exit={{ opacity: 0, y: 50 }}>
      <Option icon={FaPersonCircleCheck} title="Action-Oriented: ">
              Changemakers embraces inclusivity, bringing together diverse
              stakeholders&#x2019; expertise and perspectives to foster
              collaboration and propel substantial changes throughout
              Canada&#x2019;s economic and social structure.
            </Option>
      </motion.div>
      
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentSection11;
