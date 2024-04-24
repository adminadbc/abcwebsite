"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { TbTopologyStarRing3 } from "react-icons/tb";

export function BlogSection14() {
  return (
    <section className="flex flex-col items-center lg:py-28 py-10 px-8">
      <h1 className="text-4xl lg:text-5xl mb-5">Ambreen&apos;s Biography</h1>
      <div className="relative flex py-5 w-1/2 mb-5 mx-auto items-center">
        <div className="flex-grow border-t-4 border-abcf w-96"></div>
        <p className="mx-5  text-center">
          <TbTopologyStarRing3 />
        </p>
        <div className="flex-grow border-t-4 border-abcf w-96"></div>
      </div>

      <div className="inline m-20 container  my-auto ">
        <Image
          src="/ambreen.jpg"
          alt="events manager photo"
          className="float-left mr-10 mb-5 rounded-lg shadow-2xl lg:max-w-[26rem] lg:min-h-[26rem]"
          width={500}
          height={500}
        />

        <div className="mb-12">
          <Typography className="mb-8 font-normal">
            Meet Ambreen Sheikh, a dedicated individual with a passion for
            making a positive impact in the community. As a devoted spouse and
            parent to three wonderful children, family values are at the core of
            everything they do.
          </Typography>

          <Typography className="mb-8 font-normal">
            With a background in entrepreneurship, she brings a unique
            perspective to her work. Her journey in business has equipped her
            with invaluable skills in leadership, innovation, and
            problem-solving.
          </Typography>

          <Typography className="mb-6 font-normal">
            Driven by a desire to make a difference, she has dedicated her
            career to working with individuals with special needs. With a
            Bachelor&apos;s degree in education and eight years of experience as
            an instructor, she has played a pivotal role in shaping the lives of
            her students.
          </Typography>
          <Typography className="mb-6 font-normal">
            In addition to her work in education, Ambreen has collaborated with
            ministers as a community outreach and event manager. She has
            spearheaded various initiatives, including organizing town halls,
            community events, and meetings. Through these endeavors, she has
            addressed a wide range of issues and provided guidance and resources
            to empower the community.
          </Typography>
          <Typography className="mb-6 font-normal">
            With a heart for service and a wealth of experience, she continues
            to strive towards creating a more inclusive and supportive
            environment for all.
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default BlogSection14;
