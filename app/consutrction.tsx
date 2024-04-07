"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

export function MaintenanceSection4() {
  return (
    <div className="h-screen px-8 mx-auto grid place-items-center text-center">
      <div className="flex flex-col items-center">
        <Image
          src="/construction.png"
          width={100}
          height={100}
          alt="Picture of the author"
        />

        <div className="mt-7 !text-2xl md:text-3xl max-w-xl mx-auto !leading-snug">
          We&apos;re currently working hard buidling our website. In the
          meantime connect with us via our social media accounts.
        </div>
        <div className="mt-4 md:max-w-2xl text-[18px] font-normal text-gray-500">
          Please bear with us while we make these enhancements. Thank you for
          your patience!
        </div>
        <div className="flex mt-5 gap-3">
          <a
            href="https://www.linkedin.com/company/advocacy-for-better-communities-foundation-abc-foundation/"
            target={"_blank"}
            rel={"noreferrer"}
            title="linkedin"
          >
            <Image
              src="/linkedin.png"
              width={50}
              height={50}
              alt="LinkedIn Icon"
            />
          </a>
          <a
            href="https://www.facebook.com/queueunderstop/"
            target={"_blank"}
            rel={"noreferrer"}
            title="facebook"
          >
            <Image
              src="/facebookp.png"
              width={50}
              height={50}
              alt="Facebook Icon"
            />
          </a>
          <a
            href="https://www.instagram.com/the.abcfoundation/"
            target={"_blank"}
            rel={"noreferrer"}
            title="instagram"
          >
            <Image
              src="/instagram.png"
              width={50}
              height={50}
              alt="Instagram Icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MaintenanceSection4;
