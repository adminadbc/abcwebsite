"use client";

import React from "react";
import {
  TagIcon,
  CloudArrowDownIcon,
  CloudIcon,
  Cog6ToothIcon,
  KeyIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

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
        <Typography className="font-normal !text-gray-500 lg:max-w-xs">
          {children}
        </Typography>
      </div>
    </div>
  );
}

export function ContentSection11() {
  return (
    <section className="mx-auto container max-w-5xl px-8 py-10">
      <div className="text-center mb-10 lg:mb-24">
        <Typography variant="h3" color="blue-gray">
          Stay tuned for our upcoming project
        </Typography>
        <div className="flex-grow border-t-4 border-abcf w-3/5 mx-auto mt-2"></div>
        <Typography
          variant="lead"
          className="mt-4 max-w-4xl mx-auto !text-gray-500"
        >
          This is the paragraph where you can write more details about your
          projects. Keep you user engaged by providing meaningful information.
        </Typography>
      </div>
      <div className="lg:space-y-24 space-y-12 mb-20">
        <div className="grid grid-cols-1 items-center place-items-center gap-y-16 lg:grid-cols-2">
          <div className="h-[480px] text-center shadow-lg flex flex-col justify-center lg:max-w-md mx-auto rounded-2xl bg-white p-14">
            <Image
              src="/02.png"
              alt="legal connect app logo"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col gap-8">
            <Option icon={CloudIcon} title="Listen to Social Conversations">
              Gain access to the demographics, psychographics, and location of
              unique people who talk about your brand.
            </Option>
            <Option icon={TagIcon} title="Performance Analyzes">
              Unify data from Facebook, Instagram, Twitter, LinkedIn, and
              Youtube to gain rich insights from easy-to-use reports.
            </Option>
            <Option icon={Cog6ToothIcon} title="Social Conversions">
              Track actions taken on your website that originated from social,
              and understand the impact on your bottom line.
            </Option>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentSection11;
