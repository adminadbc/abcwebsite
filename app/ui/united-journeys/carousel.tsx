"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion";
import { TbTopologyStarRing3 } from "react-icons/tb";
import { useInView } from "react-intersection-observer";
import Image from "next/image"

const carouselItems = [
  { image: "/united-journeys/united-journeys.png", text: "United Journeys" },
  { image: "/united-journeys/1.jpg", text: "Empower Newcomers and Current Residents" },
  { image: "/united-journeys/2.jpg", text: "Foster Language Proficiency" },
  { image: "/united-journeys/3.jpg", text: "Facilitate Employment Opportunities" },
  { image: "/united-journeys/4.jpg", text: "Support Housing Stability" },
  { image: "/united-journeys/5.jpg", text: "Promote Social Integration" },
  { image: "/united-journeys/6.jpg", text: "Enhance Digital Literacy" },
  { image: "/united-journeys/7.jpg", text: "Provide Family and Youth Support" },
  { image: "/united-journeys/8.jpg", text: "Ensure Access to Healthcare and Mental Health Services" },
]

export default function UnitedJourneys() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [refFirst, inViewFirst] = useInView();
  const controlsFirst = useAnimation();

  useEffect(() => {
    if (!carouselApi) {
      return
    }

    carouselApi.on("select", () => {
      setCurrentIndex(carouselApi.selectedScrollSnap())
    })
  }, [carouselApi])

  return (
    <section className="mx-auto container max-w-5xl px-8 py-10">
    <div className="text-center my-5 sm:my-30">
      {/* <motion.div ref={refFirst} initial={{ opacity: 0, y: -50 }} animate={controlsFirst} exit={{ opacity: 0, y: 50 }}> */}
      <h3 className="text-4xl">Newcomer and Resettlement Services</h3>
        <div className="relative flex py-5  mx-auto items-center">
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
          <p className="mx-5  text-center">
            <TbTopologyStarRing3 />
          </p>
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
        </div>
        <h4>Canadian immigrant resettlement services are essential for helping newcomers integrate into Canadian society. These services are typically offered by a combination of government agencies, non-profit organizations, and community groups, focusing on areas such as language learning, employment support, and social integration. United Journeys also assists individuals who are new to the city but may have previously lived in another city or province in Canada. The goal is to ensure everyone has access to all the services available in the community to support their journey.</h4>
      {/* </motion.div>    */}
    </div>
    <h2 className="text-center text-4xl my-10">United Journey's Mission</h2>

    <div className="flex flex-col lg:flex-row w-full h-3/4 max-w-4xl mx-auto items-center gap-4">
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
    </div>
    <div className="text-center ">
      {/* <motion.div ref={refFirst} initial={{ opacity: 0, y: -50 }} animate={controlsFirst} exit={{ opacity: 0, y: 50 }}> */}
      <h3 className="text-4xl my-10">Events Snapshot</h3>
        <div className="relative flex py-5  mx-auto items-center">
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
          <p className="mx-5  text-center">
            <TbTopologyStarRing3 />
          </p>
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
        </div>
        <h4>Have glance at our recent events snapshot.</h4>
      {/* </motion.div>    */}
    </div>
    </section>
  )
}