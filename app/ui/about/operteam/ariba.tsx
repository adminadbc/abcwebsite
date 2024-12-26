"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { TbTopologyStarRing3 } from "react-icons/tb";

export function Ariba() {
  return (
    <section className="flex flex-col items-center lg:py-28 py-10 px-8">
      <h1 className="text-4xl lg:text-5xl mb-5">Ariba&apos;s Biography</h1>
      <div className="relative flex py-5 w-1/2 mb-5 mx-auto items-center">
        <div className="flex-grow border-t-4 border-abcf w-96"></div>
        <p className="mx-5  text-center">
          <TbTopologyStarRing3 />
        </p>
        <div className="flex-grow border-t-4 border-abcf w-96"></div>
      </div>

      <div className="inline m-20 container  my-auto ">
        <Image
          src="/ariba.jpg"
          alt="ariba's profile photo"
          className="float-left mr-10 mb-5 rounded-lg shadow-2xl lg:max-w-[26rem] lg:min-h-[26rem]"
          width={350}
          height={300}
        />

        <div className="mb-12">
          <Typography className="mb-8 font-normal">
            At ABC Foundation, Ariba has transformed the organization&apos;s
            online presence by creating impactful campaigns on platforms like
            Instagram, Facebook, Twitter, and LinkedIn. She combines her
            expertise in content creation and analytics to craft strategies that
            resonate with diverse audiences, boosting awareness and fostering
            community engagement. Her efforts have played a pivotal role in
            increasing the foundation&apos;s reach and inspiring action among
            donors and volunteers.
          </Typography>

          <Typography className="mb-8 font-normal">
            Ariba is not just a manager but also a digital innovator who thrives
            on exploring new tools and trends to enhance her work. She
            collaborates closely with her team to ensure that every post,
            campaign, and interaction aligns with the foundation&apos;s core
            values and objectives. Her dedication to social media as a force for
            good underscores her belief that impactful communication can spark
            lasting change.
          </Typography>

          <Typography className="mb-6 font-normal">
            Outside of her professional endeavors, Ariba enjoys immersing
            herself in creative pursuits such as graphic design and
            storytelling. She is deeply committed to using her skills to support
            causes that matter, reflecting her unwavering commitment to making a
            difference through her work at ABC Foundation.
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default Ariba;
