"use client";

import {
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { TbTopologyStarRing3 } from "react-icons/tb";

interface TeamCardPropsType {
  img: string;
  name: string;
  title: string;
  desc: string;
  facebook?: string;
  insta?: string;
  linkedin?: string;
  twitter?: string;
}

function TeamCard({
  img,
  name,
  title,
  desc,
  facebook,
  insta,
  linkedin,
  twitter,
}: TeamCardPropsType) {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="grid gap-4 md:grid-cols-1 lg:grid-cols-12 lg:place-items-center"
    >
      <CardHeader
        floated={false}
        className="!m-0 h-full max-h-[12rem] w-full max-w-[12rem] lg:col-span-5 lg:max-h-[30rem] lg:max-w-[30rem]"
      >
        <Image
          src={img}
          alt={name}
          className="h-full w-full object-cover object-top"
          width={370}
          height={500}
        />
      </CardHeader>
      <CardBody className="p-0 lg:col-span-7">
        <Typography variant="h5" color="blue-gray">
          {name}
        </Typography>
        <div className="flex-grow border-t-4 border-abcf w-1/2 mt-2"></div>
        <Typography
          variant="small"
          className="mb-3 mt-2 font-bold uppercase !text-gray-500"
        >
          {title}
        </Typography>
        <Typography className="mb-2 w-full font-normal !text-gray-500 xl:w-72">
          {desc}
        </Typography>
        <div className="flex items-center gap-7 mt-5">
          {facebook && (
            <IconButton variant="text">
              <a
                href={facebook}
                title="facebook"
                target="_blank"
                rel="noopener"
              >
                <FaSquareFacebook size={50} color={"#B49712"} />
              </a>
            </IconButton>
          )}
          {insta && (
            <IconButton variant="text">
              <a href={insta} title="instagram" target="_blank" rel="noopener">
                <FaSquareInstagram size={50} color={"#B49712"} />
              </a>
            </IconButton>
          )}
          {linkedin && (
            <IconButton variant="text">
              <a
                href={linkedin}
                title="linkedin"
                target="_blank"
                rel="noopener"
              >
                <FaLinkedin size={50} color={"#B49712"} />
              </a>
            </IconButton>
          )}
          {twitter && (
            <IconButton variant="text">
              <a href={twitter} title="teitter" target="_blank" rel="noopener">
                <FaSquareTwitter size={50} color={"#B49712"} />
              </a>
            </IconButton>
          )}
        </div>
      </CardBody>
    </Card>
  );
}

const members = [
  {
    img: "/raj.jpg",
    name: "Raj Dhillon",
    title: "Advocacy and Public Relations Manager",
    desc: "Today you are you! That is truer than true! There is no one alive who is you-er than you!",
    facebook: "https://www.facebook.com/",
    insta: "https://www.instagram.com/",
  },
  {
    img: "/ritu.jpg",
    name: "Ritu Ghai",
    title: "Media and Marketing Manager",
    desc: "Artist is a term applied to a person who engages in an activity deemed to be an art.",
    facebook: "https://www.facebook.com/",
    insta: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/in/",
  },
  {
    img: "/ambreen.jpg",
    name: "Ambreen Sheikh",
    title: "Manager Events and Community Outreach",
    desc: "Artist is a term applied to a person who engages in an activity deemed to be an art.",
    facebook:
      "https://www.facebook.com/share/4zRTqJMmkKswPPV4/?mibextid=ibOpuV",
    insta:
      "https://www.instagram.com/ambreen_71?igsh=NXd0dXc4eHdpdTZx&utm_source=qr",
    linkedin: "www.linkedin.com/in/ambreen-sheikh-ba9736114",
  },
  {
    img: "/pat.jpg",
    name: "Pat Jones",
    title: "Data Executive and Administrative Officer",
    desc: "Artist is a term applied to a person who engages in an activity deemed to be an art.",
    facebook:
      "https://www.facebook.com/share/C7FwydUZcB7SATdV/?mibextid=WC7FNe",
  },
];

export function OperTeam() {
  return (
    <section className="py-10 px-8 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-20 text-center lg:mb-28">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            The Operations Team
          </Typography>
          <div className="relative flex py-5 w-1/2  mx-auto items-center">
            <div className="flex-grow border-t-4 border-abcf w-96"></div>
            <p className="mx-5  text-center">
              <TbTopologyStarRing3 />
            </p>
            <div className="flex-grow border-t-4 border-abcf w-96"></div>
          </div>
          <Typography
            variant="lead"
            className="mx-auto max-w-4xl !text-gray-500"
          >
            This is the paragraph where you can write more details about your
            team. Keep you user engaged by providing meaningful information.
          </Typography>
        </div>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
          {members.map((props, key) => (
            <TeamCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OperTeam;
