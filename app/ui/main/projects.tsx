"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";

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
          <Card className="mt-6 mr-5 mb-9 md:mb-10 md:w-80 lg:w-96">
            <CardHeader color="blue-gray" className="">
              <Image src="/02.png" alt="card-image" width={300} height={100} />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Legal Connect
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card>
          <Card className="mt-6 mr-5 mb-9 md:mb-10 md:w-80 lg:w-96">
            <CardHeader color="blue-gray" className="">
              <Image
                src="/changemakers.jpeg"
                alt="card-image"
                width={300}
                height={100}
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                The Changemakers
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
export default ProjectSection;
