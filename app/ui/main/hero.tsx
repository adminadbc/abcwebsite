"use client";

import React from "react";
import Link from "next/link";

interface NavItemPropsType {
  children: React.ReactNode;
}

interface SimpleCardPropsType {
  icon: any;
  title: string;
  desc: string;
  active: boolean;
}

export function HeroSection12() {
  return (
    <div className="relative h-[56rem] w-full bg-[url('/background-hero.png')]  bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-black bg-opacity-55" />
      <div className="grid min-h-[50rem] px-12 ">
        <div className="container lg:w-5/6 relative z-10 my-auto mx-auto text-center">
          <h3 className="text-lg !leading-snug lg:text-2xl lg:w-2/3 mx-auto text-white">
            Empowering the community to confidently navigate the legal system
            and advocacy for equitable and fair outcomes.
          </h3>
          <h1 className="my-4 text-2xl !leading-snug lg:text-6xl mb-10 text-white">
            Community empowerment Initiatives.
          </h1>
          <Link
            href=""
            className="bg-[#B49712] mt-6 hover:bg-[#B49712] py-3 text-white rounded-lg px-8"
          >
            Book an appointment
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection12;
