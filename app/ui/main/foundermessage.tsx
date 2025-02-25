"use client";

import React,{ useEffect } from "react";
import {  Button } from "@material-tailwind/react";
import { TbTopologyStarRing3 } from "react-icons/tb";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
interface IconPropsType {
  children: React.ReactNode;
}

function Icon({ children }: IconPropsType) {
  return (
    <div className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow-md">
      {children}
    </div>
  );
}

export function FounderMessage() {

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
    <section className="w-screen">
      <div className="flex flex-col items-center">
        <h2 className="mb-4 text-3xl font-normal lg:text-6xl">
          Founder&#x2019;s Message
        </h2>
        <div className="relative flex w-1/2 mx-auto items-center">
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
          <p className="mx-5 text-center">
            <TbTopologyStarRing3 />
          </p>
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
        </div>
      </div>
      <div className="container mx-auto px-10 md:pl-24 lg:pl-10 mb-15 lg:mt-10 gap-10 flex items-start flex-wrap lg:flex-nowrap">
        <motion.div ref={refFirst} initial={{ opacity: 0, x: -50 }} animate={controlsFirst} exit={{ opacity: 0, y: 50 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center lg:items-start mt-10 lg:mt-0">
          <Image
            src={`/angielal2.jpg`}
            alt="founder image"
            width={500}
            height={900}
            className="lg:min-w-[500px] rounded-lg shadow-xl w-auto h-auto object-contain"
          />
        </motion.div>
        <motion.div ref={refSecond} initial={{ opacity: 0, x: 50 }} animate={controlsSecond} exit={{ opacity: 0, y: 50 }}
          className="w-full lg:w-1/2">
          <div className="flex flex-col justify-evenly">
            <p className="text-xl font-normal">
              At ABC Foundation, we are fueled by a passionate commitment to
              justice and equality. Our mission is clear: to promote access to
              justice, amplify marginalized voices, and educate individuals about
              their legal rights. By empowering communities with knowledge and
              resources, we can pave the way for fair and just outcomes for all.
              <br />
              <br />
              The path to justice can often seem daunting and inaccessible today,
              particularly for those facing socio-economic challenges or systemic
              barriers. That&#x2019;s where we come in. Our dedicated team is here
              to provide support, guidance, and advocacy every step of the way.
              Whether navigating the complexities of the legal system or standing
              up for your rights, we are here to ensure that no one is left
              behind.
              <br />
              <br />
              Our vision for a better Canada is one where justice knows no bounds.
              We envision a society where everyone can access the legal support
              they need regardless of their background or circumstances. But our
              vision doesn&#x2019;t stop there. We believe in the power of
              communities to drive real change. That&#x2019;s why we&#x2019;re
              committed to fostering active engagement and collaboration,
              empowering individuals to become advocates for systemic reform and
              equity.
              <br />
              <br />
              As we embark on this journey, we invite you to join us in our
              mission. Together, we can build a future where justice is not just a
              privilege but a fundamental right for all.
            </p>
            <div className="flex flex-col mb-10 mt-1">
              <div className="flex justify-start">
                <Image
                  src="/signature.jpeg"
                  alt="signature"
                  width={132}
                  height={67}
                  className="w-auto h-auto object-contain"
                />
              </div>
              <h4 className="text-xl mb-3">Angeline Lal</h4>
              <div className="flex-grow border-t-4 border-abcf w-2/12 mb-10"></div>
              <h5 className="text-xl">Founding Director</h5>
              <h5 className="text-xl">
                Advocacy for Better Communities Foundation
              </h5>
            </div>
            <Link href="/about/team/founder" target="_blank" rel="noreferrer">
              <Button className="bg-abcf text-black" size="lg">
                Read more about our founder
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FounderMessage;
