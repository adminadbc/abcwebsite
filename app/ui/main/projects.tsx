"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export function ProjectSection() {

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
    <section className="my-10 flex gap-4">
      <div
        className=" bg-gradient-to-r bg-brand2  py-20 px-10 md:pl-24 lg:pl-10 flex 
      flex-wrap items-center justify-evenly gap-6 w-screen text-white"
      >
             <div className="lg:w-1/3 space-y-7  overflow-hidden">
          <p>Join us at ABC Foundation to make a change</p>
          <h3 className="text-4xl font-semibold">Our Current Projects</h3>
          <div className="flex-grow border-t-4 border-abcf w-96"></div>

          <p>
            The ABC Foundatoin is aimed up for groundbreaking projects aims at
            empowering communities and promoting equitables outcomes. Stay tuned
            for updates on our upcoming initiatives!
          </p>
        </div>
        
        <div className="flex items-stretch flex-wrap justify-evenly gap-6">
         
          <motion.div ref={refFirst} initial={{ opacity: 0, y: -50 }} animate={controlsFirst} exit={{ opacity: 0, y: 50 }}>
          <div className="bg-white rounded-lg p-3 drop-shadow-lg text-center">
            <Image
              src="/law.jpeg"
              width={250}
              height={300}
              alt="the law spot logo"
              className=" pb-2 drop-shadow-2xl"
            />
            <div className="flex flex-col space-y-3 mt-3">
              <span>Mobile App</span>
              <Link
                href="/main/initiatives/legal-connect"
                className="mx-auto  my-4 px-4 py-2 rounded-lg"
              >
                <Button className="bg-abcf text-black" size="lg">
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
      </motion.div>
      <motion.div ref={refFirst} initial={{ opacity: 0, y: -50 }} animate={controlsFirst} exit={{ opacity: 0, y: 50 }}>
      <div className="bg-white rounded-lg p-3 drop-shadow-lg text-center">
            <Image
              src="/lawspot.jpeg"
              width={250}
              height={300}
              alt="changemakers logo"
              className="mx-auto drop-shadow-2xl"
            />
            <div className="flex flex-col space-y-3 mt-3">
              <span> Social Impact Project</span>
              <Link
                href="/main/initiatives/changemakers"
                className=" mx-auto  my-4 px-4 py-2 rounded-lg"
              >
                <Button className="bg-abcf text-black" size="lg">
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
      </motion.div>
        </div>
      </div>
    </section>
  );
}
export default ProjectSection;
