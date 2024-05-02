import { Card, CardBody, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { TbTopologyStarRing3 } from "react-icons/tb";
import "./mainstyles.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function LogoSection6() {
  
  const [refFirst, inViewFirst] = useInView();
const [refSecond, inViewSecond] = useInView();
const [refThird, inViewThird] = useInView();
  const controlsSecond = useAnimation();
const controlsThird = useAnimation();
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

  useEffect(() => {
    if (inViewThird) {
      controlsThird.start({ opacity: 1, y: 0 ,   transition: { delay: 1.2, duration : 0.5 } });
    }
  }, [controlsThird, inViewThird]);
  return (
    <section className="py-8 px-8 lg:py-20 ">
      <div className="container mx-auto mb-10 text-center lg:mb-20">
        <h2 className="mb-4 text-3xl font-normal lg:text-6xl">
          Our Philosophy of Empowerment
        </h2>
        <div className="relative flex py-5 w-1/2  mx-auto items-center">
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
          <p className="mx-5 text-center">
            <TbTopologyStarRing3 />
          </p>
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
        </div>
        <p className="mx-auto text-2xl max-w-2xl">
          The Advocacy for Better Communities Foundation incorporates two key
          elements: the concept of &quot;Six Degrees of Separation&quot; and the
          &quot;Dharma Chakra&quot;.
        </p>
      </div>

      <div className="container !mx-auto text-center px-4 place-content-center grid">
        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
     
          <motion.div ref={refFirst} initial={{ opacity: 0, y: -50 }} animate={controlsFirst} exit={{ opacity: 0, y: 50 }}>
          <div className="flex flex-col items-center justify-center gap-6">
            <Card shadow={false} className="bg-[#FAFAFA]">
              <CardBody>
                <h4 className="text-xl font-bold">
                  &quot;Six Degrees of Separation&quot;:
                </h4>
                <p className="font-normal text-xl">
                  This symbolizes the interconnectedness of individuals and
                  communities, highlighting our belief that every
                  person&#x2019;s actions can create ripples of change that
                  resonate throughout society.
                </p>
              </CardBody>
            </Card>
          </div>
      </motion.div>
         <Card
            shadow={false}
            className="bg-[#FAFAFA] lg:px-10 justify-center mx-auto w-full max-w-[18rem] lg:max-w-lg"
          >
            <CardBody>
              <Image
                src="/04-2.png"
                alt="logo"
                className="w-40 mx-auto"
                width={100}
                height={100}
              />
            </CardBody>
          </Card>
      <motion.div ref={refThird} initial={{ opacity: 0, y: -50 }} animate={controlsThird} exit={{ opacity: 0, y: 50 }}>
      <div className="flex flex-col gap-6">
            <Card shadow={false} className="bg-[#FAFAFA] ">
              <CardBody>
                <h4 className="text-xl font-bold">
                  &quot;Dharma Chakra&quot;:
                </h4>{" "}
                <p className="font-normal text-xl">
                  The &quot;Dharma Chakra&quot;, or wheel of dharma, represents
                  justice, righteousness, and the path to enlightenment. It
                  signifies our commitment to advocating for fair and just
                  outcomes for all members of society.
                </p>
              </CardBody>
            </Card>
          </div>
      </motion.div>
        
        </div>
      </div>
    </section>
  );
}

export default LogoSection6;
