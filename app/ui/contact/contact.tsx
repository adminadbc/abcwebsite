"use client";

import React from "react";
import Link from "next/link";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

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

interface Contact {
  name: string;
  url: string;
}

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  contact: Contact;
}

function ContactCard({ icon, title, description, contact }: ContactCardProps) {
  const renderContact = () => {
    if (contact.url) {
      return (
        <a href={contact.url} className="text-black hover:text-abcf">
          {contact.name}
        </a>
      );
    } else {
      return <Typography color="blue-gray">{contact.name}</Typography>;
    }
  };

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
        {renderContact()}
      </CardBody>
    </Card>
  );
}

const options = [
  {
    icon: <MapPinIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Address",
    description: "Find us at the office",
    contact: {
      name: "305, 1822 10 Ave SW, Calgary, Alberta T3C 0J8",
      url: "https://maps.app.goo.gl/jGQnQqH9RCJPzZby6",
    },
  },
  {
    icon: <EnvelopeIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Email",
    description: "Send us your feedback",
    contact: {
      name: "info@abcfoundationconnect.com",
      url: "mailto:info@abcfoundationconnect.com",
    },
  },
  {
    icon: <PhoneIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Phone",
    description: "Give us a ring",
    contact: { name: "+1 587-893-5222", url: "tel:+1587893522" },
  },
];

export function ContactSection1() {
  const [refFirst, inViewFirst] = useInView();
  const [refSecond, inViewSecond] = useInView();
    const controlsSecond = useAnimation();
  const controlsFirst = useAnimation();
    useEffect(() => {
      if (inViewFirst) {
        controlsFirst.start({ opacity: 1, y: 0 , transition: { delay: 0.5, duration : 0.5} });
      }
    }, [controlsFirst, inViewFirst]);
  
      useEffect(() => {
      if (inViewSecond) {
        controlsSecond.start({ opacity: 1, y: 0 , transition: { delay: 0.8, duration : 0.5 }});
      }
    }, [controlsSecond, inViewSecond]);
  return (
    <section className="px-8 py-10 lg:py-28">
      
      <motion.div ref={refFirst} initial={{ opacity: 0, y: -50 }} animate={controlsFirst} exit={{ opacity: 0, y: 50 }}>
      <div className="container mx-auto grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 text-black">
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
      </motion.div>
      <motion.div ref={refSecond} initial={{ opacity: 0, y: -50 }} animate={controlsSecond} exit={{ opacity: 0, y: 50 }}>
      <div className="container mx-auto mt-20 flex flex-col items-center">
        <h2 className="mb-20 text-2xl">OR</h2>
        <Button
          className="bg-abcf w-42 text-black text-lg"
          size="lg"
          onClick={() => {
            window.location.href = "/main/booking";
          }}
        >
          Book an Appointment
        </Button>
      </div>
      </motion.div>
   
    </section>
  );
}

export default ContactSection1;
