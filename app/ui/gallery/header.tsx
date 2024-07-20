import React, {useEffect} from 'react'
import { TbTopologyStarRing3 } from "react-icons/tb";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Header() {
    const [refFirst, inViewFirst] = useInView();
    

    const controlsFirst = useAnimation();


    useEffect(() => {
      if (inViewFirst) {
        controlsFirst.start({
          opacity: 1,
          y: 0,
          transition: { delay: 0.5, duration: 0.5 },
        });
      }
    }, [controlsFirst, inViewFirst]);

    
  return (
    <div className="container mx-auto my-15 text-center lg:mb-20">
      <h2 className="my-16 text-3xl font-normal lg:text-6xl">
        Events Snapshots
      </h2>
      <div className="relative flex py-5   mx-auto items-center">
        <div className="flex-grow border-t-4 border-abcf w-96"></div>
        <p className="mx-5 text-center">
          <TbTopologyStarRing3 />
        </p>
        <div className="flex-grow border-t-4 border-abcf w-96"></div>
      </div>
      <motion.div
        ref={refFirst}
        initial={{ opacity: 0, y: -50 }}
        animate={controlsFirst}
        exit={{ opacity: 0, y: 50 }}
      >
        <p className="mx-auto text-2xl max-w-5xl">
          This photo gallery reflecst on ABC Foundation&#8217;s, recent
          engagements in the community events, recent projects and our impact to our individual lifes!
        </p>
      </motion.div>
    </div>
  );
}

export default Header