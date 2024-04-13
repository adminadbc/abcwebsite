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
      <div className=" bg-gradient-to-r from-abcf to-yellow-700  py-20 px-10 md:pl-24 flex flex-wrap items-center justify-evenly gap-6">
        <div className="md:w-1/3 space-y-7">
          <h3 className="text-4xl font-semibold">Our current projects</h3>
          <div className="flex-grow border-t-4 border-white w-80"></div>
          <p>Join us at ABC Foundation to make a change</p>
          <p>
            The ABC Foundatoin is gearing up for groundbreaking projects aims at
            empowering communities and promoting equitables outcomes. Stay tuned
            for updates on our upcoming initiatives!
          </p>
        </div>
        <Card className="w-80">
          <CardHeader floated={false} className="h-64">
            <Image
              src="/changemakers.jpeg"
              width={500}
              height={500}
              alt="changemakers logo"
              className=""
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Legal Connect
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              Mobile App
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Link href="/main/initiatives/legal-connect">
              <Button className="bg-abcf text-black">Learn More</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="w-80">
          <CardHeader floated={false} className="h-64">
            <Image
              src="/02.png"
              width={500}
              height={500}
              alt="changemakers logo"
              className=""
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Changemakers
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              Social Impact Project
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Link href="/main/initiatives/changemakers">
              <Button className="bg-abcf text-black">Learn More</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
export default ProjectSection;
