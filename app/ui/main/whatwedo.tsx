"use client";

import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

import { GiSpellBook } from "react-icons/gi";
import { GoLaw } from "react-icons/go";
import { TbTopologyStarRing3 } from "react-icons/tb";

import { PlayCircleIcon, ChartBarSquareIcon } from "@heroicons/react/24/solid";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function FeatureCard({ icon, title, children }: FeatureCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="flex flex-col items-center">
        {icon}
        <Typography variant="h5" color="blue-gray" className="mb-2 mt-4">
          {title}
        </Typography>
        <Typography className="text-center text-base font-normal leading-7 !text-gray-500">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

const features = [
  {
    icon: <ChartBarSquareIcon className="h-7 w-7 text-gray-900" />,
    title: "Advocacy",
    description:
      "We get insulted by others, lose trust for those We get back.We get insulted by others, lose trust for those We get back.",
  },
  {
    icon: <PlayCircleIcon className="h-7 w-7 text-gray-900" />,
    title: "Education",
    description:
      "We get insulted by others, lose trust for those We get back. We get insulted by others, lose trust for those We get back.",
  },
];
export function FeatureSection14() {
  return (
    <section className="py-10 px-8">
      <div className="container mx-auto mb-10 text-center lg:mb-20">
        <h2 className="mb-4 text-3xl font-normal lg:text-6xl">What We Do</h2>
        <div className="relative flex py-5   mx-auto items-center">
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
          <p className="mx-5 text-center">
            <TbTopologyStarRing3 />
          </p>
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
        </div>
        <p className="mx-auto text-2xl max-w-5xl">
          At ABC Foundation, we champion justice, amplify marginalized voices,
          and educate communities on legal rights, paving the way for fair and
          inclusive societies. You can also join us in creating this positive
          change!
        </p>
      </div>
      <div className="container mx-auto mt-4 gap-9 md:gap-0 flex flex-wrap justify-around w-full md:w-2/3">
        <Card className="mt-6 w-96">
          <CardBody className="flex flex-col items-center">
            <GoLaw size={50} className="text-abcf" />
            <Typography variant="h5" color="blue-gray" className="my-5">
              Advocacy
            </Typography>
            <p className="text-xl text-justify">
              The ABC Foundation champions overlooked community issues,
              amplifies marginalized voices, and advocates for equitable
              policies, elevating unheard voices in the process.
            </p>
          </CardBody>
        </Card>
        <Card className="mt-6 w-96">
          <CardBody className="flex flex-col items-center justify-center">
            <GiSpellBook size={50} className="text-abcf" />

            <Typography variant="h5" color="blue-gray" className="my-5">
              Education
            </Typography>
            <p className="text-xl text-justify">
              The ABC Foundation empowers through education by conducting
              workshops, seminars, and resources to enhance legal awareness and
              enable individuals in navigating the legal system with confidence.
            </p>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
export default FeatureSection14;
