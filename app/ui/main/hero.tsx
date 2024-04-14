"use client";

import React from "react";
import Link from "next/link";
import { Button, Typography } from "@material-tailwind/react";

export function HeroSection12() {
  return (
    <>
      <div className="relative h-[70rem] w-full bg-[url('https://www.material-tailwind.com/image/image-5.jpeg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 h-full w-full bg-black/15" />
        <div className="grid min-h-[70rem] px-12">
          <div className="container relative z-10 my-auto mx-auto">
            <Typography
              variant="h1"
              color="white"
              className="my-4 text-3xl !leading-snug lg:text-5xl"
            >
              Empowering the community to confidently navigate the legal system
              and advocacy for equitable and fair outcomes.
            </Typography>
            <Typography
              variant="lead"
              className="mb-10 w-full text-white/80 md:max-w-full lg:max-w-xl"
            >
              Community Empowerment Initiative
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
