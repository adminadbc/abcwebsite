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
      <div className="rounded-xl bg-[#F8F4E1]  py-20  pl-24 flex flex-wrap  gap-6 items-center">
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
        <div>
          <Image src="/changemakers.jpeg"
          width={100}
          height={100}
          alt="changemakers logo"
          className=""
          />
        </div>
        <div>
          <Image src="/02.png"
          width={100}
          height={100}
          alt="changemakers logo"
          className=""
          />
        </div>
      </div>
    </section>
  );
}
export default ProjectSection;
