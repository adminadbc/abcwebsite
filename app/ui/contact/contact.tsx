"use client";

import React from "react";
import Link from "next/link";
import {
  Card,
  CardBody,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { TbTopologyStarRing3 } from "react-icons/tb";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  contact: string;
}

function ContactCard({ icon, title, description, contact }: ContactCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        <IconButton
          size="lg"
          className="mx-auto place-items-center rounded-full bg-abcf"
        >
          {icon}
        </IconButton>
        <Typography
          variant="h5"
          color="blue-gray"
          className="my-4 font-semibold"
        >
          {title}
        </Typography>
        <Typography className="mb-4 font-normal ">{description}</Typography>
        <Typography color="blue-gray" className="font-medium">
          {contact}
        </Typography>
      </CardBody>
    </Card>
  );
}

const options = [
  {
    icon: <MapPinIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Address",
    description: "Find us at the office",
    contact: "305, 1822 10 Ave SW, Calgary, Alberta T3C 0J8",
  },
  {
    icon: <EnvelopeIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Email",
    description: "Send us your feedback",
    contact: "info@abcfoundationconnect.com",
  },
  {
    icon: <PhoneIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Phone",
    description: "Give us a ring",
    contact: "+1 (825) 735-4343",
  },
];

export function ContactSection1() {
  return (
    <section className="px-8 py-10 lg:py-28">
      <div className="container mx-auto mb-20 text-center">
        <h1 className="mb-4 text-4xl lg:text-5xl">Got a Question?</h1>
        <div className="relative flex py-5 w-1/2  mx-auto items-center">
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
          <p className="mx-5  text-center">
            <TbTopologyStarRing3 />
          </p>
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
        </div>
        <Typography variant="lead" className="mx-auto ">
          We&apos;d like to talk more about what you need
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {options.map(({ icon, title, description, contact }) => (
          <ContactCard
            key={title}
            icon={icon}
            title={title}
            contact={contact}
            description={description}
          />
        ))}
      </div>
      <div className="container mx-auto mt-20 flex flex-col  items-center">
        <h2 className="mb-20 text-2xl">OR</h2>
        <Link href="/main/booking">
          <Button className="bg-abcf w-64">Book an Appointment</Button>
        </Link>
      </div>
    </section>
  );
}

export default ContactSection1;
