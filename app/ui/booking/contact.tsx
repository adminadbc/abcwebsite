"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

export function ContactSection1() {
  return (
    <section className="px-15 py-10">
      <div className="container mx-auto mb-20 text-center">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 text-4xl lg:text-5xl"
        >
          We Are Here To Help
        </Typography>
        <div className="flex-grow border-t-4 border-abcf w-2/5 mx-auto mt-2 mb-7"></div>
        <Typography variant="lead" className="mx-auto ">
          We&apos;d like to talk more about what you need
        </Typography>
      </div>
    </section>
  );
}

export default ContactSection1;
