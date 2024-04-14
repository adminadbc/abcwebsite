"use client";

import Image from "next/image";
import {
  Card,
  CardBody,
  Typography,
  Avatar,
  CardHeader,
  IconButton,
  Carousel,
} from "@material-tailwind/react";

interface TestimonialCardPropsType {
  img: string;
  feedback: string;
  client: string;
  title: string;
}

function TestimonialCard({
  img,
  feedback,
  client,
  title,
}: TestimonialCardPropsType) {
  return (
    <Card shadow={false} className="items-center text-center">
      <CardHeader shadow={false} floated={false}>
        <Avatar src={img} alt={client} size="lg" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="font-medium">
          {client}
        </Typography>
        <Typography
          variant="small"
          className="mb-4 mt-1 font-medium !text-gray-500"
        >
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          className="mb-5 font-normal !text-gray-500"
        >
          &quot;{feedback}&quot;
        </Typography>
      </CardBody>
    </Card>
  );
}

export function TestimonialSection15() {
  return (
    <section className="px-8 py-10 lg:py-28">
      <div className="container mx-auto !rounded-xl !bg-[url('https://www.material-tailwind.com/img/Background.png')] bg-center px-8 py-10 lg:px-16">
        <Carousel
          transition={{ duration: 1 }}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute left-10 bottom-0 z-50 flex h-5 w-20 -translate-x-2/4 gap-2 md:left-2/4">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 w-10 cursor-pointer transition-all content-[''] ${
                    activeIndex === i ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <div className="!relative flex grid-cols-1 flex-col-reverse gap-6 rounded-2xl md:grid md:grid-cols-5 md:gap-14 md:py-20">
            <div className="col-span-3 flex flex-col items-start justify-center">
              <Typography
                variant="lead"
                color="white"
                className="mb-5 text-2xl font-normal"
              >
                The logo of Advocacy for Better Communities Foundation
                incorporates two key elements: the concept of &quot;six degrees
                of separation&quot; and the dharma chakra.
              </Typography>
              <Typography
                variant="h6"
                color="white"
                className="mb-5 text-2xl font-normal"
              >
                **Six Degrees of Separation:** This symbolizes the
                interconnectedness of individuals and communities, highlighting
                our belief that every person&quot;s actions can create ripples
                of change that resonate throughout society.
              </Typography>
            </div>
            <div className="col-span-2 flex w-full shrink-0 md:!justify-end">
              <Image
                src={`/amazon.jpg`}
                alt="amazon"
                className="h-full w-2/4 rounded-lg object-contain md:!w-2/3"
                width={700}
                height={300}
              />
            </div>
          </div>
          <div className="!relative flex grid-cols-1 flex-col-reverse gap-6 py-14 md:grid md:grid-cols-5  md:gap-14 md:py-20 ">
            <div className="col-span-3 flex flex-col items-start justify-center">
              <Typography
                variant="lead"
                color="white"
                className="mb-5 text-2xl font-normal "
              >
                **Dharma Chakra**: The dharma chakra, or wheel of dharma,
                represents justice, righteousness, and the path to
                enlightenment. It signifies our commitment to advocating for
                fair and just outcomes for all members of society.
              </Typography>
            </div>
            <div className="col-span-2 flex w-full shrink-0 md:!justify-end">
              {/* <Image
                src={`/microsoft.png`}
                alt="amazon"
                className="h-full w-2/4 rounded-lg object-contain md:!w-2/3"
                width={700}
                height={200}
              /> */}
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default TestimonialSection15;
