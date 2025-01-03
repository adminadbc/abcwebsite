"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { TbTopologyStarRing3 } from "react-icons/tb";
import { useInView } from "react-intersection-observer";
import { FaSquareFacebook, FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import Image from "next/image";
import { EngMission } from "./engagemission";

export default function Engage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [refFirst, inViewFirst] = useInView();
  const controlsFirst = useAnimation();

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    carouselApi.on("select", () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  return (
    <section className="mx-auto container max-w-5xl px-8 py-10">
      <div className="text-center my-5 sm:my-30">
        {/* <motion.div ref={refFirst} initial={{ opacity: 0, y: -50 }} animate={controlsFirst} exit={{ opacity: 0, y: 50 }}> */}
        <h3 className="text-4xl">
          Embracing Diversity, Celebrating and Unity{" "}
        </h3>
        <div className="relative flex py-5  mx-auto items-center">
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
          <p className="mx-5  text-center">
            <TbTopologyStarRing3 />
          </p>
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
        </div>
        <h4>
          Engage is an initiative dedicated to supporting and uplifting some of
          the most vulnerable populations in Alberta. The program aims to create
          a more inclusive and compassionate community by addressing the needs
          of seniors, children, individuals affected by domestic violence,
          LGBTQIA+ communities, Indigenous and First Nations people, and those
          in protected and drug rehabilitation programs.
        </h4>
        {/* </motion.div>    */}
      </div>
      <h2 className="text-center text-4xl my-10">Engage&apos;s Mission</h2>
      <EngMission />

      <div className="text-center ">
        {/* <motion.div ref={refFirst} initial={{ opacity: 0, y: -50 }} animate={controlsFirst} exit={{ opacity: 0, y: 50 }}> */}
        <h3 className="text-4xl my-10">Check What Have We Been Up To</h3>
        <div className="relative flex py-5  mx-auto items-center">
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
          <p className="mx-5  text-center">
            <TbTopologyStarRing3 />
          </p>
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
        </div>
        <h4>
          Please have a glance at our social media accounts for recent events.
        </h4>
        {/* </motion.div>    */}
        <div className="flex justify-center mb-8 lg:mb-0">
          <div className="flex gap-4 mt-6 text-abcf">
            <a
              href="https://www.facebook.com/ABCFoundationConnect/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-abcf"
            >
              <FaSquareFacebook size={75} />
            </a>
            <a
              href="https://www.linkedin.com/company/advocacy-for-better-communities-foundation-abc-foundation/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-abcf"
            >
              <FaLinkedin size={75} />
            </a>
            <a
              href="https://www.instagram.com/the.abcfoundation/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-abcf"
            >
              <FaInstagramSquare size={75} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
