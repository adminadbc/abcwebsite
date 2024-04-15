"use client";

import React from "react";
import {
  Card,
  CardBody,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

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
        <Typography className="mb-4 font-normal !text-gray-500">
          {description}
        </Typography>
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
    contact: "12124 First Street, nr 54",
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
    contact: "+1 (424) 535-3523",
  },
];

export function ContactSection1() {
  return (
    <section className="px-8 py-10 lg:py-28">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-4 font-bold">
          Contact Us
        </Typography>
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
