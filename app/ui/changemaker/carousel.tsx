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
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { FaSquareFacebook, FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { TbTopologyStarRing3 } from "react-icons/tb";
import { useInView } from "react-intersection-observer";
import ChangemakersMission from "./changemakersmission";

const carouselItems = [
  { image: "/changemakers/logo.webp", text: "The Changemakers" },
  { image: "/changemakers/1.jpg", text: "Advance Public Policy Understanding" },
  { image: "/changemakers/2.jpg", text: "Promote Constructive Dialogue" },
  {
    image: "/changemakers/3.jpg",
    text: "Encourage Evidence-Based Decision-Making",
  },
  { image: "/changemakers/4.jpg", text: "Foster Civic Participation" },
  { image: "/changemakers/5.jpg", text: "Influence Policy Reform" },
  { image: "/changemakers/6.jpg", text: "Build Collaborative Networks" },
];

export default function Component() {
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
        <h3 className="text-4xl">Public Policy and Reform Dialogues</h3>
        <div className="relative flex py-5  mx-auto items-center">
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
          <p className="mx-5  text-center">
            <TbTopologyStarRing3 />
          </p>
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
        </div>
        <h4>
          The Changemakers initiative aims to foster critical discussions and
          debates on key public policy issues and potential reforms. This
          program brings together policymakers, experts, community leaders, and
          the public to explore, debate, and develop actionable solutions to
          pressing social and political challenges.
        </h4>
        {/* </motion.div>    */}
      </div>
      <h2 className="text-center text-4xl my-10">Changemakers Mission</h2>

      <ChangemakersMission />
      {/* <div className="flex flex-col lg:flex-row w-full h-3/4 max-w-4xl mx-auto items-center gap-4">
      <div className="w-full h-2/4 lg:w-1/2 aspect-square bg-gray-100 rounded-lg overflow-hidden my-5">
        <Image
          src={carouselItems[currentIndex].image}
          alt={carouselItems[currentIndex].text}
          className="w-full h-full object-cover"
          width={400}
          height={400}
        />
      </div>
      <div className="w-full h-3/4 lg:w-1/2  flex items-center justify-center my-10 sm:my-50">
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full"
          setApi={setCarouselApi}
        >
          <CarouselContent className="-mt-1 h-[250px] lg:h-[350px]">
            {carouselItems.map((item, index) => (
              <CarouselItem key={index} className="pt-1 basis-1/2">
                <Card className="w-full h-[110px] lg:h-[160px] content-center shadow-2xl">
                  <CardContent className="flex items-center  justify-center p-2">
                    <h2 className="text-lg lg:text-xl font-semibold  text-center">{item.text}</h2>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div> */}
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
