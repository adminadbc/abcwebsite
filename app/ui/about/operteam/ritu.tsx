"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { TbTopologyStarRing3 } from "react-icons/tb";

export function BlogSection14() {
  return (
    <section className="flex flex-col items-center lg:py-28 py-10 px-8">
      <h1 className="text-4xl lg:text-5xl mb-5">Ritu&apos;s Biography</h1>
      <div className="relative flex py-5 w-1/2 mb-5 mx-auto items-center">
        <div className="flex-grow border-t-4 border-abcf w-96"></div>
        <p className="mx-5  text-center">
          <TbTopologyStarRing3 />
        </p>
        <div className="flex-grow border-t-4 border-abcf w-96"></div>
      </div>

      <div className="inline m-20 container  my-auto ">
        <Image
          src="/ritu.png"
          alt="marketing manager image"
          className="float-left mr-10 mb-5 rounded-lg shadow-2xl lg:max-w-[26rem] lg:min-h-[26rem]"
          width={350}
          height={300}
        />

        <div className="mb-12">
          <Typography className="mb-8 font-normal">
            Stepping into the vibrant world of media over two decades ago,
            I&apos;ve become a seasoned navigator of digital realms, print,
            radio waves, and television screens. Fluent in three languages -
            English, Hindi, and Punjabi - I effortlessly bridge cultural gaps
            and resonate with diverse audiences worldwide.
          </Typography>

          <Typography className="mb-8 font-normal">
            As an unwavering advocate of equality and equity, my mission is
            clear: to amplify the often unheard voices and champion inclusive
            representation across media platforms. I believe in the power of
            storytelling, fueled by ethical journalism, to create impactful and
            engaging content that resonates globally.
          </Typography>

          <Typography className="mb-6 font-normal">
            Beyond the professional realm, motherhood to my 11-year-old daughter
            has infused me with patience and added depth to my personality. My
            journey from India to Ontario in 2019 and subsequent settlement in
            Calgary in 2022 reflects my adaptability and embrace of new
            experiences.
          </Typography>
          <Typography className="mb-6 font-normal">
            Embracing Calgary&apos;s open and friendly ambiance, I&apos;ve woven
            myself into the fabric of community participation and digital media
            management, contributing to meaningful change and connectivity.
          </Typography>
          <Typography className="mb-6 font-normal">
            As a media maverick, I&apos;m committed to driving narratives that
            inspire, inform, and empower, leaving a lasting impact on audiences
            and society alike.
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default BlogSection14;
