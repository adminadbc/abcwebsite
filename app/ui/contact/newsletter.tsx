"use client";

import { Button, Input, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { TbTopologyStarRing3 } from "react-icons/tb";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export function NewsLetter1() {
  const [refFirst, inViewFirst] = useInView();
  const [refSecond, inViewSecond] = useInView();
    const controlsSecond = useAnimation();
  const controlsFirst = useAnimation();
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
  return (
    <section className="mt-10 p-10">
      <div className="container mx-auto flex !w-full max-w-6xl flex-col !items-center justify-center rounded-2xl bg-white px-6 py-16">
       
      <motion.div ref={refFirst} initial={{ opacity: 0, y: -50 }} animate={controlsFirst} exit={{ opacity: 0, y: 50 }}>
      <Typography
          className="text-center text-2xl font-bold md:text-3xl "
          color="black"
        >
          Stay Informed and Empowered
        </Typography>
</motion.div>

        <div className="relative flex py-5 w-1/2  mx-auto items-center">
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
          <p className="mx-5  text-center">
            <TbTopologyStarRing3 />
          </p>
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
        </div>
        <motion.div ref={refSecond} initial={{ opacity: 0, y: -50 }} animate={controlsSecond} exit={{ opacity: 0, y: 50 }}>
        <Typography
          color="black"
          className="my-3 text-center mx-auto !text-base md:w-7/12"
        >
          Register now to receive periodic newsletters and stay updated on our
          latest initiatives and advocacy efforts!
        </Typography>
</motion.div>
 
        <div className="mt-2 flex w-full flex-col gap-3 md:w-fit md:flex-row">
          {/* <Input label="Email" color="white" crossOrigin={undefined} /> */}
          <Link
            href="mailto:marketing@abcfoundationconnect.com?subject=Keep%20me%20up%20to%20date"
            className="flex justify-center rounded-md px-16 py-3 text-white"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              size="lg"
              className="flex-shrink-0 bg-abcf text-black w-42 text-lg"
            >
              Register Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default NewsLetter1;
