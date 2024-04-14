"use client";

import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { TbTopologyStarRing3 } from "react-icons/tb";

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

export function FeatureSection3() {
  return (
    <section className="p-8">
      <div className="flex flex-col items-center mb-20">
        <h2 className="mb-4 text-3xl font-normal lg:text-6xl">Who We Are</h2>
        <div className="relative flex py-5 w-1/2  mx-auto items-center">
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
          <p className="mx-5 text-center">
            <TbTopologyStarRing3 />
          </p>
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
        </div>
      </div>
      <div className="container mx-auto mb-20 gap-10 flex items-center flex-wrap lg:flex-nowrap justify-center">
        <Image
          src={`/04-2.png`}
          alt="background image"
          className="lg:min-w-[350px]"
          width={300}
          height={500}
        />
        <div className="my-20 pt-10 flex flex-col justify-evenly">
          <Typography
            variant="h3"
            color="blue-gray"
            className="mb-4 !text-2xl lg:!text-3xl"
          >
            Our Vision and Mission
          </Typography>
          <Typography variant="lead" className=" font-normal !text-gray-500">
            Advocacy for Better Communities Foundation is dedicated to promoting
            access to justice, advocating for marginalized voices, and providing
            education on legal rights. We strive to empower individuals and
            communities to navigate the legal system with confidence and
            advocate for fair and just outcomes for all.
            <br />
            <br />
            Our vision is a Canadian society where justice is accessible to all,
            regardless of socio-economic status or background. We envision
            empowered communities actively engaged in shaping equitable legal
            systems and advocating for systemic change.
            <br />
            <br />
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection3;
