"use client";

import React from "react";
import { TbTopologyStarRing3 } from "react-icons/tb";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Image from "next/image";
interface IconPropsType {
  children: React.ReactNode;
}

export function FeatureSection3() {
  
const [refFirst, inViewFirst] = useInView();
const [refSecond, inViewSecond] = useInView();
const controlsSecond = useAnimation();
const controlsFirst = useAnimation();

useEffect(() => {
  if (inViewFirst) {
    controlsFirst.start({ opacity: 1, x: 0 , transition: { delay: 0.5, duration : 0.5} });
  }
}, [controlsFirst, inViewFirst]);

  useEffect(() => {
  if (inViewSecond) {
    controlsSecond.start({ opacity: 1, x: 0 , transition: { delay: 0.8, duration : 0.5 }});
  }
}, [controlsSecond, inViewSecond]);
  return (
    <section className="pb-10">
      <div className="flex flex-col items-center mt-10 mb-5">
        <h2 className="mb-4 text-3xl font-normal lg:text-6xl">Who We Are</h2>
        <div className="relative flex py-5 w-2/3  mx-auto items-center">
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
          <p className="mx-5 text-center">
            <TbTopologyStarRing3 />
          </p>
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
        </div>
      </div>
      <div className="container mx-auto  gap-10 flex items-center flex-wrap lg:flex-nowrap justify-center">
      <motion.div ref={refFirst} initial={{ opacity: 0, x: -50 }} animate={controlsFirst} exit={{ opacity: 0, y: 50 }}>
      <Image
          src={`/04-2.png`}
          alt="background image"
          className="lg:min-w-[350px]"
          width={300}
          height={500}
        />
      </motion.div>
      <motion.div ref={refSecond} initial={{ opacity: 0, x: 50 }} animate={controlsSecond} exit={{ opacity: 0, y: 50 }}>
      <div className="my-20 px-5  flex flex-col justify-evenly">
          <h3 className="mb-4 text-4xl lg:text-3xl font-bold text-center">
            Our Mission and Vision
          </h3>
          <p className="text-xl font-normal mx-6">
            Advocacy for Better Communities Foundation is dedicated to promoting
            access to justice, advocating for marginalized voices, and providing
            education on legal rights. We strive to empower individuals and
            communities to navigate the legal system with confidence and
            advocate for fair and just outcomes for all.
            <br />
            <br />
            Our vision is a Canadian society where justice is accessible to all,
            regardless of socio-economic status or background. We envision
            empowered communities actively engaged in shaping equitable legal
            systems and advocating for systemic change.
            <br />
            <br />
          </p>
        </div>
      </motion.div>
        
      </div>
    </section>
  );
}

export default FeatureSection3;
