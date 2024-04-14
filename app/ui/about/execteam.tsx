"use client";

import {
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";

import {
  FaSquareInstagram,
  FaSquareFacebook,
  FaSquareTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { TbTopologyStarRing3 } from "react-icons/tb";

import Image from "next/image";

interface TeamCardPropsType {
  img: string;
  name: string;
  title: string;
  desc: string;
  facebook?: string;
  insta?: string;
  linkedin?: string;
  twitter?: string;
  email: string;
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
  email,
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
              <a href={twitter} title="twitter" target="_blank" rel="noopener">
                <FaSquareTwitter size={50} color={"#B49712"} />
              </a>
            </IconButton>
          )}
          {email && (
            <IconButton variant="text">
              <a href={email} title="email" target="_blank" rel="noopener">
                <MdEmail size={70} color={"#B49712"} />
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
    img: "/angie-lal.jpg",
    name: "Angeline Lal",
    title: "Founding Director",
    desc: "Angeline Lal, Founder of ABC Foundation, advocates for social justice and community empowerment. With diverse experience, she spearheads initiatives and empowers individuals through education, aiming for a more equitable society.",
    email: "mailto:angeline.lal@abcfoundationconnect.com",
    linkedin: "https://www.linkedin.com/in/angeline-lal-3411197b/",
  },
  {
    img: "/richa.png",
    name: "Richa Sharma",
    title: "CEO",
    desc: "Richa is a seasoned professional with diverse experience in operational and strategic management across continents. Excelling in leadership roles, she is known for effective communication, team leadership, and relationship building.",
    email: "mailto:richa.sharma@abcfoundationconnect.com",
  },
  {
    img: "/profile.jpeg",
    name: "Rashad Bayram",
    title: "CIO",
    desc: "Artist is a term applied to a person who engages in an activity deemed to be an art.",
    email: "mailto:support@abcfoundationconnect.com",
    twitter: "https://twitter.com/bayrashad",
    linkedin: "https://www.linkedin.com/in/rashadbayram/",
  },
];

export function ExecTeam() {
  return (
    <section className="py-10 px-8 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-20 text-center lg:mb-28">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            The Executive Team
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
            Fueled by purpose, united in vision, our executive teams at Advocacy
            for Better Communities Foundation ignite change, sculpting a
            brighter tomorrow through unwavering dedication and collaborative
            spirit.
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

export default ExecTeam;
