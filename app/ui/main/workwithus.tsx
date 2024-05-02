"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "@material-tailwind/react";

export function WorkWithUs() {
   
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
    <div className="bg-gradient-to-r bg-brand2 w-screen overflow-hidden p-10 flex flex-wrap-reverse justify-around items-center text-white">
      <div className="mb-9 md:w-4/5 lg:w-2/5">
        <h3 className="text-4xl font-semibold">Work With Us</h3>
        <div className="flex-grow border-t-4 border-abcf w-80 my-10"></div>
        <motion.div ref={refFirst} initial={{ opacity: 0, y: -50 }} animate={controlsFirst} exit={{ opacity: 0, y: 50 }}>
        <h4 className=" font-bold text-2xl mt-3">To Volunteers:</h4>
        <p className="mt-2 mb-6 text-base">
          Volunteering with the ABC Foundation is an opportunity to actively
          contribute to our mission of promoting justice, advocating for
          marginalized voices, and educating communities on legal rights. As a
          volunteer, you&#x2019;ll play a vital role in organizing impactful
          seminars and sessions with community stakeholders, fostering dialogue,
          and empowering individuals to navigate the legal system confidently.
          Join us in making a difference and creating a more equitable and
          inclusive society for all.
        </p>
        <Link
          href="mailto:info@abcfoundationconnect.com?subject=We%20are%20interested%20in%20volunteering"
          className="rounded-md py-3 text-black"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="bg-abcf text-black w-42 text-md" size="md">
            Volunteer With Us
          </Button>
        </Link>
      </motion.div>
      
        <br></br>
        <motion.div ref={refSecond} initial={{ opacity: 0, y: -50 }} animate={controlsSecond} exit={{ opacity: 0, y: 50 }}>
        <h4 className="mt-10 font-bold text-2xl">To Partners:</h4>
        <p className="mt-2 mb-6 text-base">
          Partnering on matters related to empowering the community in legal
          navigation and advocating for fair outcomes is crucial. It enhances
          legal resource accessibility, addresses unaddressed issues through
          advocacy, and improves legal education and navigation. These
          partnerships promote fairness and inclusivity, ensuring equitable
          access to justice for all. Besides, they contribute to a more
          equitable and inclusive society where everyone has equal access to
          justice. Besides, they contribute to a more equitable and inclusive
          society where everyone has equal access to justice.
        </p>
        <Link
          href="mailto:info@abcfoundationconnect.com?subject=We%20are%20interested%20in%20partnership"
          className="rounded-md py-3 text-white"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="bg-abcf text-black w-42 text-md" size="md">
            {" "}
            Partner With Us
          </Button>
        </Link>
      </motion.div>
       
      </div>
      <motion.div ref={refThird} initial={{ opacity: 0, y: -50 }} animate={controlsThird} exit={{ opacity: 0, y: 50 }}>
      <div className="mb-10">
        <Image
          src="/volunteer.jpg"
          alt="volunteering"
          className="h-full w-full"
          width={500}
          height={300}
        />
      </div>
      </motion.div>
     
    </div>
  );
}
export default WorkWithUs;
