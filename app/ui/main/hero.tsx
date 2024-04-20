"use client";

import React from "react";
import Link from "next/link";
import { Button, Typography } from "@material-tailwind/react";

export function HeroSection12() {
  return (
    <div
      className="relative h-[60rem] w-full bg-[url('https://www.material-tailwind.com/image/image-5.jpeg')] 
      bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 h-full w-full bg-black/15" />
      <div className="grid min-h-[50rem] px-12">
        <div className="container relative  my-auto mx-auto">
          <h1
            color="white"
            className="mb-4 text-white text-3xl !leading-snug lg:text-5xl"
          >
            Empowering the community to confidently navigate the legal system
            and advocacy for equitable and fair outcomes.
          </h1>
          <Typography
            variant="lead"
            className="mb-10 w-full text-white/80 md:max-w-full lg:max-w-xl"
          >
            Community Empowerment Initiative
          </Typography>
          <Link href="/main/booking">
            <Button className="bg-abcf text-black w-42 text-lg" size="lg">
              Book an appointment
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection12;
