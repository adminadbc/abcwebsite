"use client";

import React from "react";
import { TagIcon, CloudIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { TbTopologyStarRing3 } from "react-icons/tb";
import { FaPersonCircleCheck } from "react-icons/fa6";
function Option({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="mb-4">
        <Icon className="h-6 w-6 text-gray-900" />
      </div>
      <div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="font-normal  lg:max-w-xs">{children}</Typography>
      </div>
    </div>
  );
}

export function ContentSection11() {
  return (
    <section className="mx-auto container max-w-5xl px-8 py-10">
      <div className="text-center mb-10 lg:mb-24">
        <h3 className="text-5xl">Empowering Change through Changemakers</h3>
        <div className="relative flex py-5 w-1/2  mx-auto items-center">
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
          <p className="mx-5  text-center">
            <TbTopologyStarRing3 />
          </p>
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
        </div>
      </div>
      <div className="lg:space-y-24 space-y-12 mb-20">
        <div className="grid grid-cols-1 items-center place-items-center gap-y-16 lg:grid-cols-2">
          <div className="h-[480px] text-center shadow-lg flex flex-col justify-center lg:max-w-md mx-auto rounded-2xl bg-white p-14">
            <Image
              src="/changemakers.jpeg"
              alt="legal connect app logo"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col gap-8">
            <Option icon={CloudIcon} title="Unity Through Inclusion:">
              ABC Foundation&#x2019;s Changemakers initiative provides a
              fortified and inclusive platform for influential voices and
              transformative entities to collaborate and confront persistent
              crises within Canada&#x2019;s economy.
            </Option>
            <Option icon={TagIcon} title="Empowering Dialogue:">
              Through dynamic real-time dialogues and active engagement,
              Changemakers impassions and mobilizes Canadians, empowering them
              to actively shape the trajectory of their communities.
            </Option>
            <Option icon={Cog6ToothIcon} title="Unified Collaboration:">
              With a commitment to inclusivity, Changemakers harnesses the
              collective prowess and varied perspectives of diverse
              stakeholders, fostering collaboration and driving seismic shifts
              across Canada&#x2019;s economic and social fabric.
            </Option>
            <Option icon={FaPersonCircleCheck} title="Action-Oriented: ">
              Changemakers embraces inclusivity, bringing together diverse
              stakeholders&#x2019; expertise and perspectives to foster
              collaboration and propel substantial changes throughout
              Canada&#x2019;s economic and social structure.
            </Option>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentSection11;
