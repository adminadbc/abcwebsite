"use client";

import { Button, Input, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { TbTopologyStarRing3 } from "react-icons/tb";

export function NewsLetter1() {
  return (
    <section className="mt-10 p-10">
      <div className="container mx-auto flex !w-full max-w-6xl flex-col !items-center justify-center rounded-2xl bg-white px-6 py-16">
        <Typography
          className="text-center text-2xl font-bold md:text-3xl "
          color="black"
        >
          Stay Informed and Empowered
        </Typography>
        <div className="relative flex py-5 w-1/2  mx-auto items-center">
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
          <p className="mx-5  text-center">
            <TbTopologyStarRing3 />
          </p>
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
        </div>
        <Typography
          color="black"
          className="my-3 text-center !text-base md:w-7/12"
        >
          Register now to receive periodic newsletters and stay updated on our
          latest initiatives and advocacy efforts!
        </Typography>
        <div className="mt-2 flex w-full flex-col gap-3 md:w-fit md:flex-row">
          {/* <Input label="Email" color="white" crossOrigin={undefined} /> */}
          <Link
            href="mailto:marketing@abcfoundationconnect.com?subject=Keep%20me%20up%20to%20date"
            className="flex justify-center rounded-md px-16 py-3 text-white"
            target="_blank"
            rel="noreferrer"
          >
            <Button size="lg" className="flex-shrink-0 bg-abcf">
              Register Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default NewsLetter1;
