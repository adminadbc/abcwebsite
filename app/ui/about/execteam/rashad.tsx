"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { TbTopologyStarRing3 } from "react-icons/tb";

export function BlogSection14() {
  return (
    <section className="flex flex-col items-center lg:py-28 py-10 px-8">
      <h1 className="text-4xl lg:text-5xl mb-5">Rashad&apos;s Biography</h1>
      <div className="relative flex py-5 w-1/2 mb-5 mx-auto items-center">
        <div className="flex-grow border-t-4 border-abcf w-96"></div>
        <p className="mx-5  text-center">
          <TbTopologyStarRing3 />
        </p>
        <div className="flex-grow border-t-4 border-abcf w-96"></div>
      </div>

      <div className="inline m-20 container  my-auto ">
        <Image
          src="/profile.jpeg"
          alt="cio photo"
          className="float-left mr-10 mb-5 rounded-lg shadow-2xl lg:max-w-[26rem] lg:min-h-[26rem]"
          width={500}
          height={500}
        />

        <div className="mb-12">
          <Typography className="mb-8 font-normal">
            I am the dynamic force driving innovation and growth. My passion
            lies in transforming complex challenges into transformative
            opportunities, leveraging my expertise in operational efficiency,
            strategic collaboration, and technological innovation.Throughout my
            career, I&apos;ve spearheaded game-changing initiatives.
          </Typography>

          <Typography className="mb-8 font-normal">
            At Emerson, I led the optimization of SalesForce CRM&apos;s mobile
            version, achieving $1.5 million in cost savings and slashing the
            accounts receivable lifecycle in half. During my tenure at Nokia
            Corporation, I managed $250M in B2B sales, showcasing my sales
            prowess and account management finesse in high-stakes environments.
          </Typography>

          <Typography className="mb-6 font-normal">
            My journey is defined by an unwavering commitment to driving
            excellence. With every role I undertake, I leave a lasting impact
            through enhanced performance and strategic innovation.From
            orchestrating seamless business operations to crafting bespoke
            solutions, I thrive on leveraging my diverse skill set to navigate
            the complexities of today&apos;s digital business landscape.
          </Typography>
          <Typography className="mb-6 font-normal">
            With my influential communication style and relentless drive for
            success, I confidently tackle challenges, consistently exceeding
            expectations and delivering results that propel businesses forward.
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default BlogSection14;
