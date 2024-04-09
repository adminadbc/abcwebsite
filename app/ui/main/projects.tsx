"use client";

import { Button, Typography } from "@material-tailwind/react";
import { CardDefault } from "../../ui/main/card";

export function ProjectSection() {
  return (
    <section className="m-10">
      <div className="rounded-xl bg-[url('/gradientone.png')] bg-cover bg-center  p-10 flex flex-wrap justify-between items-center">
        <div className="mb-9">
          <Typography variant="small" color="white" className="font-bold mb-2">
            Technologies we run
          </Typography>
          <Typography variant="h3" color="white">
            Our Current Projects
          </Typography>
          <Typography color="white" className="mt-2 mb-6 !text-base">
            Contact us for more information.
          </Typography>
          <Button color="gray" className="flex-shrink-0 ">
            Book a call
          </Button>
        </div>
        <div className="flex flex-wrap">
          <CardDefault />
          <CardDefault />
        </div>
      </div>
    </section>
  );
}
export default ProjectSection;
