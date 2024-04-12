"use client";

import React from "react";
import Link from "next/link";
import { Button, Typography } from "@material-tailwind/react";

export function HeroSection12() {
  return (
    <>
      <div className="relative h-[42rem] w-full bg-[url('https://www.material-tailwind.com/image/image-5.jpeg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 h-full w-full bg-black/50" />
        <div className="grid min-h-[50rem] px-12">
          <div className="container relative z-10 my-auto mx-auto">
            <Typography
              variant="h3"
              color="white"
              className="text-lg !leading-snug lg:text-2xl"
            >
              Accesible law
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="my-4 text-3xl !leading-snug lg:text-5xl"
            >
              Work are changemakers
            </Typography>
            <Typography
              variant="lead"
              className="mb-10 w-full text-white/80 md:max-w-full lg:max-w-xl"
            >
              Wealth creation is an evolutionarily recent positive-sum game.
              Status is an old zero-sum game. Those attacking wealth creation
              are often just seeking status.
            </Typography>
            <Link href="/main/booking">
              <Button className="bg-abcf text-black">Book a call</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection12;
