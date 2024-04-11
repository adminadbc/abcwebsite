"use client";

import Image from "next/image"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function ProjectSection() {
  return (
    <section className="my-10 flex gap-4">
      <div className=" bg-[#f1e9c2fb]  py-20 pl-10 md:pl-24 flex flex-wrap  gap-6 items-center">
        <div className="md:w-1/2 space-y-3">
        <h3 className="text-3xl font-semibold">
          Our current projects
        </h3>
        <p>Join us at ABC Foundation to make a change</p>
        <p>
          The ABC Foundatoin is gearing up for groundbreaking projects
          aims at empowering communities and promoting equitables outcomes. Stay tuned for updates on our 
          upcoming initiatives!

        </p>
        </div>
        <div className="flex flex-col  rounded-lg font-sans space-y-2 border-3 shadow-lg p-4 bg-white">
          <Image src="/changemakers.jpeg"
          width={100}
          height={100}
          alt="changemakers logo"
          className=""
          />
          <h4 className="font-semibold text-xl">Changemakers</h4>
          <span>A very brief description.</span>
        </div>
        <div className="flex rounded-lg flex-col font-sans space-y-2 border-3 shadow-lg p-4 bg-white">
        <Image src="/02.png"
          width={100}
          height={100}
          alt="changemakers logo"
          className=""
          />
          <h4 className="font-semibold text-xl">Coming soon...</h4>
          <span></span>
        </div>
      </div>
    </section>
  );
}
export default ProjectSection;
