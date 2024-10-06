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
  { image: "/engage/engage.png", text: "Engage Alberta" },
  { image: "/engage/1.jpg", text: "Inclusivity" },
  { image: "/engage/2.jpg", text: "Community and Individual Empowerment" },
  { image: "/engage/3.jpg", text: "Community Collaboration" },
  { image: "/engage/4.jpg", text: "Cultural Sensitivity" },
  { image: "/engage/5.jpg", text: "Awareness and Education" },
  { image: "/engage/6.jpg", text: "Advocacy and Support" },
  { image: "/engage/7.jpg", text: "Accessibility" },
  { image: "/engage/8.jpg", text: "Sustainability" },
  { image: "/engage/9.jpg", text: "Evaluation and Impact" },
  { image: "/engage/10.jpg", text: "Community Engagement" },
]

export default function Engage() {
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
      <h3 className="text-4xl">Embracing Diversity, Celebrating and Unity </h3>
        <div className="relative flex py-5  mx-auto items-center">
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
          <p className="mx-5  text-center">
            <TbTopologyStarRing3 />
          </p>
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
        </div>
        <h4>Engage is an initiative dedicated to supporting and uplifting some of the most vulnerable populations in Alberta. The program aims to create a more inclusive and compassionate community by addressing the needs of seniors, children, individuals affected by domestic violence, LGBTQIA+ communities, Indigenous and First Nations people, and those in protected and drug rehabilitation programs.</h4>
      {/* </motion.div>    */}
    </div>
    <h2 className="text-center text-4xl my-10">Legal Awareness Program's Mission</h2>

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