"use client";

import React from "react";
import Link from "next/link";
import { Button, Typography } from "@material-tailwind/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function HeroSection12() {
  const [refFirst, inViewFirst] = useInView();
  const [refSecond, inViewSecond] = useInView();
  const [refThird, inViewThird] = useInView();
  const controlsSecond = useAnimation();
  const controlsThird = useAnimation();
  const controlsFirst = useAnimation();
  useEffect(() => {
    if (inViewFirst) {
      controlsFirst.start({
        opacity: 1,
        x: 0,
        transition: { delay: 0.5, duration: 0.5 },
      });
    }
  }, [controlsFirst, inViewFirst]);

  useEffect(() => {
    if (inViewSecond) {
      controlsSecond.start({
        opacity: 1,
        x: 0,
        transition: { delay: 0.8, duration: 0.5 },
      });
    }
  }, [controlsSecond, inViewSecond]);

  useEffect(() => {
    if (inViewThird) {
      controlsThird.start({
        opacity: 1,
        x: 0,
        transition: { delay: 1.2, duration: 0.5 },
      });
    }
  }, [controlsThird, inViewThird]);
  return (
    <div
      className="relative md:h-[50rem] lg:h-[60rem] w-full bg-[url('https://www.material-tailwind.com/image/image-5.jpeg')] 
      bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 h-full w-full bg-black/15" />
      <div className="grid min-h-[47rem] px-12">
        <div className="container relative  my-auto mx-auto">
          <motion.div
            ref={refFirst}
            initial={{ opacity: 0, x: -50 }}
            animate={controlsFirst}
            exit={{ opacity: 0, y: 50 }}
          >
            <h1
              color="white"
              className="mb-4 text-white text-3xl !leading-snug lg:text-5xl"
            >
              Empowering the community to confidently navigate the legal system
              and advocacy for equitable and fair outcomes.
            </h1>
          </motion.div>
          <motion.div
            ref={refSecond}
            initial={{ opacity: 0, x: -50 }}
            animate={controlsSecond}
            exit={{ opacity: 0, y: 50 }}
          >
            <Typography
              variant="lead"
              className="mb-10 w-full text-white/80 md:max-w-full lg:max-w-xl"
            >
              Community Empowerment Initiative
            </Typography>
          </motion.div>
          <motion.div
            ref={refThird}
            initial={{ opacity: 0, x: -50 }}
            animate={controlsThird}
            exit={{ opacity: 0, y: 50 }}
          >
            <Link href="/booking" target="_blank" rel="noreferrer">
              <Button
                className="bg-abcf text-black w-42 text-lg mr-3"
                size="lg"
              >
                Book an appointment
              </Button>
            </Link>
            <Link href="/calendar" target="_blank" rel="noreferrer">
              <Button className="bg-abcf text-black w-42 text-lg" size="lg">
                Upcoming Events
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection12;
