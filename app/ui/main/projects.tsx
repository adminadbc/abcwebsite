"use client";

import Image from "next/image";
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
      controlsFirst.start({ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } });
    }
  }, [controlsFirst, inViewFirst]);

  useEffect(() => {
    if (inViewSecond) {
      controlsSecond.start({ opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.5 } });
    }
  }, [controlsSecond, inViewSecond]);

  const handleLearnMore = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open('https://thelawspot.app/', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="my-10 flex gap-4">
      <div className="bg-gradient-to-r bg-brand2 py-20 px-10 md:pl-24 lg:pl-10 flex 
        flex-wrap items-center justify-evenly gap-6 w-screen text-white">
        <div className="lg:w-1/3 space-y-7 overflow-hidden">
          <p>Join us at ABC Foundation to make a change</p>
          <h3 className="text-4xl font-semibold">Partnering with The Law Spot: Expanding Access to Justice</h3>
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
          <p>
            Advocacy for Better Communities Foundation is excited to partner with The Law Spot Technologies Inc. to launch The Law Spot, an innovative platform that connects Canadians with qualified legal professionals. The Law Spot provides clients with a free, easy-to-use tool to find and engage with lawyers across various practice areas. For lawyers, it offers a valuable opportunity to grow their client base through subscription access. The profits from The Law Spot will be shared with ABC Foundation, helping to support our efforts to promote access to justice and empower communities. We are proud to collaborate with The Law Spot Technologies in advancing these shared goals, and we invite you to explore The Law Spot today!
          </p>
        </div>
        
        <div className="flex items-stretch flex-wrap justify-evenly gap-6">
          <motion.div ref={refFirst} initial={{ opacity: 0, y: -50 }} animate={controlsFirst} exit={{ opacity: 0, y: 50 }}>
            <div className="bg-white rounded-lg p-3 drop-shadow-lg text-center">
              <Image
                src="/law.jpeg"
                width={350}
                height={300}
                alt="the law spot logo"
                className="pb-2 drop-shadow-2xl"
              />
              <div className="flex flex-col space-y-3 mt-3">
                <span>Mobile App</span>
                <div className="mx-auto my-4">
                  <button
                    onClick={handleLearnMore}
                    className="bg-abcf text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
