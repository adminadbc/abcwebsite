"use client";

import React from "react";
import { TagIcon, CloudIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { TbTopologyStarRing3 } from "react-icons/tb";
import { FaPersonCircleCheck } from "react-icons/fa6";
function Option({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="mb-4">
        <Icon className="h-6 w-6 text-gray-900" />
      </div>
      <div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="font-normal  lg:max-w-xs">{children}</Typography>
      </div>
    </div>
  );
}

export function ContentSection11() {
  return (
    <section className="mx-auto container max-w-5xl px-8 py-10">
      <div className="text-center mb-10 lg:mb-24">
        <h3 className="text-4xl">Stay Tuned for Our Upcoming Project</h3>
        <div className="relative flex py-5 w-1/2  mx-auto items-center">
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
          <p className="mx-5  text-center">
            <TbTopologyStarRing3 />
          </p>
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
        </div>
        <Typography variant="lead" className="mt-4 max-w-4xl mx-auto ">
          The Law Spot is a transformative initiative focused on enhancing
          access to legal services through a comprehensive network of qualified
          lawyers. Our core mission is to bridge the gap between individuals in
          need of legal assistance and skilled legal professionals who can
          address their specific legal concerns.
        </Typography>
      </div>
      <div className="lg:space-y-24 space-y-12 mb-20">
        <div className="grid grid-cols-1 items-center place-items-center gap-y-16 lg:grid-cols-2">
          <div className="h-[480px] text-center shadow-lg flex flex-col justify-center lg:max-w-md mx-auto rounded-2xl bg-white p-14">
            <Image
              src="/law.jpeg"
              alt="the law spot app logo"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col gap-8">
            <Option icon={CloudIcon} title="Transformative Legal Access:">
              The Law Spot revolutionizes access to legal services by connecting
              individuals with qualified lawyers through a comprehensive
              network.
            </Option>
            <Option icon={TagIcon} title="Robust Lawyer Engagement:">
              We rigorously vet and onboard experienced lawyers across diverse
              practice areas, ensuring a wide range of legal expertise to
              address various legal needs.
            </Option>
            <Option icon={Cog6ToothIcon} title="Comprehensive Support:">
              Legal Connect offers internal resources and support services to
              guide individuals through their legal journey, including emotional
              and financial assistance from a dedicated support team.
            </Option>
            <Option
              icon={FaPersonCircleCheck}
              title="Accessible and Empowering: "
            >
              We break barriers by providing support, options, and educational
              initiatives to increase legal literacy and empower individuals
              with knowledge about their legal rights.
            </Option>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentSection11;
