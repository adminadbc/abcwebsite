"use client";

import { Button, Input, Typography } from "@material-tailwind/react";
import Link from "next/link";

export function NewsLetter1() {
  return (
    <section className="mt-10 p-10">
      <div className="container mx-auto flex !w-full max-w-6xl flex-col !items-center justify-center rounded-2xl bg-white px-6 py-16">
        <Typography
          className="text-center text-2xl font-bold md:text-3xl "
          color="black"
        >
          Be the first who see the news
        </Typography>
        <Typography
          color="black"
          className="my-3 text-center !text-base md:w-7/12"
        >
          Stay informed and empowered. Register now to receive periodic
          newsletters and stay updated on our latest initiatives and advocacy
          efforts!
        </Typography>
        <div className="mt-2 flex w-full flex-col gap-3 md:w-fit md:flex-row">
          {/* <Input label="Email" color="black" crossOrigin={undefined} /> */}
          <Link
            href="mailto:marketing@abcfoundationconnect.com?subject=Keep%20me%20up%20to%20date"
            className=" rounded-md px-16 py-3 text-white"
            target="_blank"
            rel="noreferrer"
          >
            <Button size="md" className="flex-shrink-0 bg-abcf text-white">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default NewsLetter1;
