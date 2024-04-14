"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Button,
} from "@material-tailwind/react";

export function ProjectSection() {
  return (
    <section className="my-10 flex gap-4">
      <div
        className=" bg-gradient-to-r from-abcf to-yellow-700  py-20 px-10 md:pl-24 flex 
      flex-wrap items-center justify-evenly gap-6"
      >
        <div className="lg:w-1/3 space-y-7  overflow-hidden">
          <h3 className="text-4xl font-semibold">Our current projects</h3>
          <div className="flex-grow border-t-4 border-white w-80"></div>
          <p>Join us at ABC Foundation to make a change</p>
          <p>
            The ABC Foundatoin is gearing up for groundbreaking projects aims at
            empowering communities and promoting equitables outcomes. Stay tuned
            for updates on our upcoming initiatives!
          </p>
        </div>
      
        <div className="bg-white rounded-lg p-3 drop-shadow-lg text-center">
        <Image
              src="/02.png"
              width={250}
              height={300}
              alt="changemakers logo"
              className=""
            />
            <div className="flex flex-col space-y-3">
              <div className="mt-4 mx-auto font-semibold">Legal Connect</div> 
              <span>Mobile App</span>
              <Link href="/" className="bg-abcf mx-auto text-black my-4 px-4 py-2 rounded-lg">Learn more</Link>
            </div>
        </div>
          <div className="bg-white rounded-lg p-3 drop-shadow-lg text-center">
        <Image
            src="/changemakers.jpeg"
              width={250}
              height={300}
              alt="changemakers logo"
              className="mx-auto"
            />
            <div className="flex flex-col space-y-3">
              <div className="mt-4 mx-auto font-semibold">Changemakers</div> 
              <span> Social Impact Project</span>
              <Link href="/" className="bg-abcf mx-auto text-black my-4 px-4 py-2 rounded-lg">Learn more</Link>
            </div>
        </div>
      </div>
    </section>
  );
}
export default ProjectSection;
