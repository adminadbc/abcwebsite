"use client";

import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { RectangleGroupIcon, FingerPrintIcon } from "@heroicons/react/24/solid";

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
          <p className="mx-5 w-48 text-center">Ultimate Change</p>
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
        </div>
      </div>
      <div className="container mx-auto mb-20 gap-10 grid place-items-start lg:grid-cols-2">
        <Image
          src={`/04-2.png`}
          alt="background image"
          className="h-1/50 lg:min-h-[550px] w-full rounded-xl object-cover"
          width={500}
          height={500}
        />
        <div>
          <Typography
            variant="h3"
            color="blue-gray"
            className="mb-4 !text-2xl lg:!text-3xl"
          >
            Refreshing workspace atmosphere
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 font-normal !text-gray-500"
          >
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
            <br />
            <br />
            If you have the opportunity to play this game of life you need to
            appreciate every moment. A lot of people don&apos;t appreciate the
            moment until it&apos;s passed. We&apos;re not always in the position
            that we want to be at. We&apos;re constantly growing. We&apos;re
            constantly making mistakes. We&apos;re constantly trying to express
            ourselves and actualize our dreams.
            <br />
            <br />
            If you have the opportunity to play this game of life you need to
            appreciate every moment. A lot of people don&apos;t appreciate the
            moment until it&apos;s passed.
            <br />
            <br />
            If you have the opportunity to play this game of life you need to
            appreciate every moment. A lot of people don&apos;t appreciate the
            moment until it&apos;s passed.
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection3;
