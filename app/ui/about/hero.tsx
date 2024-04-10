"use client";

import React from "react";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Typography,
  Card,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  CloudIcon,
  CreditCardIcon,
  ShareIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export function HeroSection() {
  return (
    <>
      <div className="relative h-[42rem] w-full  bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 h-full w-full bg-black/50" />
        <div className="grid min-h-[50rem] px-12">
          <div className="container relative z-10 my-auto mx-auto text-center">
            <h1 className="my-4 text-3xl text-white !leading-snug lg:text-5xl">
              About
            </h1>
            <div className="flex-grow border-t-4 border-abcf w-1/2 mx-auto mt-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
