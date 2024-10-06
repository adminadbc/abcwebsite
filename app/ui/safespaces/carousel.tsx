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
  { image: "/safe-spaces/safe-spaces.png", text: "Safe Spaces" },
  { image: "/safe-spaces/1.jpg", text: "Provide Confidential Support" },
  { image: "/safe-spaces/2.jpg", text: "Offer Expert Guidance through Qualified Professionals" },
  { image: "/safe-spaces/3.jpg", text: "Enhance Accessibility" },
  { image: "/safe-spaces/4.jpg", text: "Empower Through Knowledge" },
  { image: "/safe-spaces/5.jpg", text: "Promote Community Well-being" },
  { image: "/safe-spaces/6.jpg", text: "Encourage Professional Engagement" },
  { image: "/safe-spaces/7.jpg", text: "Foster a Welcoming Atmosphere" },
  { image: "/safe-spaces/8.jpg", text: "Raise Awareness and Outreach" },
  { image: "/safe-spaces/9.jpg", text: "Support Continuous Learning and Improvement" },

]

export default function SafeSpaces() {
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
      <h3 className="text-4xl">A Confidential & Professional Support Program</h3>
        <div className="relative flex py-5  mx-auto items-center">
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
          <p className="mx-5  text-center">
            <TbTopologyStarRing3 />
          </p>
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
        </div>
        <h4>The Safe Spaces Program is an ABC Foundation initiative designed to provide individuals with direct access to professional experts in a confidential and supportive environment. The program aims to offer tailored advice and guidance on a range of issues, empowering participants with the knowledge and resources they need to address their personal or professional concerns.</h4>
      {/* </motion.div>    */}
    </div>
    <h2 className="text-center text-4xl my-10">Safe Space's Mission</h2>

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