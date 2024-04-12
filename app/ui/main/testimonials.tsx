"use client";

import Image from "next/image";
import { Carousel, Typography } from "@material-tailwind/react";

export function TestimonialSection15() {
  return (
    <section className="px-8 py-10 lg:py-28">
      <div className="container mx-auto !rounded-xl !bg-[url('https://www.material-tailwind.com/img/Background.png')] bg-center px-8 py-10 lg:px-16">
        <Carousel
          transition={{ duration: 1 }}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute left-10 bottom-0 z-50 flex h-5 w-20 -translate-x-2/4 gap-2 md:left-2/4">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 w-10 cursor-pointer transition-all content-[''] ${
                    activeIndex === i ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <div className="!relative flex grid-cols-1 flex-col-reverse gap-6 rounded-2xl md:grid md:grid-cols-5 md:gap-14 md:py-20">
            <div className="col-span-3 flex flex-col items-start justify-center">
              <Typography
                variant="lead"
                color="white"
                className="mb-5 text-xl font-normal"
              >
                &quot; Knowledge is either from direct experience or from
                verifiable, falsifiable science. There is knowledge that is
                transmitted but not verifiable / falsifiable. They&apos;re
                slowed down by their perception of themselves. &quot;
              </Typography>
              <Typography variant="h6" color="white" className="">
                Louis Miriam,{" "}
                <span className="text-xs font-normal">COO @ AMAZON INC.</span>{" "}
              </Typography>
            </div>
            <div className="col-span-2 flex w-full shrink-0 md:!justify-end">
              <Image
                src={`/amazon.jpg`}
                alt="amazon"
                className="h-full w-2/4 rounded-lg object-contain md:!w-2/3"
                width={900}
                height={300}
              />
            </div>
          </div>
          <div className="!relative flex grid-cols-1 flex-col-reverse gap-6 py-14 md:grid md:grid-cols-5  md:gap-14 md:py-20 ">
            <div className="col-span-3 flex flex-col items-start justify-center">
              <Typography
                variant="lead"
                color="white"
                className="mb-5 text-xl font-normal "
              >
                &quot; Knowledge is either from direct experience or from
                verifiable, falsifiable science. There is knowledge that is
                transmitted but not verifiable / falsifiable. They&apos;re
                slowed down by their perception of themselves. &quot;
              </Typography>
              <Typography variant="h6" color="white" className="">
                Louis Miriam,{" "}
                <span className="text-xs font-normal">COO @ AMAZON INC.</span>{" "}
              </Typography>
            </div>
            <div className="col-span-2 flex w-full shrink-0 md:!justify-end">
              <Image
                src={`/microsoft.png`}
                alt="amazon"
                className="h-full w-2/4 rounded-lg object-contain md:!w-2/3"
                width={900}
                height={300}
              />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default TestimonialSection15;
