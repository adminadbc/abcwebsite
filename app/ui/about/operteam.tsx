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
import { MdEmail } from "react-icons/md";
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
  email?: string;
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
                <MdEmail size={60} color={"#B49712"} />
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
    desc: "Raj's varied path, from entrepreneur to stay-at-home mom to community activist, reflects her dynamic life. She's committed to individual responsibility for community improvement and eagerly contributes her skills to projects promoting engagement, education, and advocacy.",
    email: "mailto:pr@abcfoundationconnect.com",
  },
  {
    img: "/ritu.jpg",
    name: "Ritu Ghai",
    title: "Media and Marketing Manager",
    desc: "With over two decades in media, Ritu navigates digital, print, radio, and TV, amplifying unheard voices and championing inclusive representation. She believes in storytelling's power to create impactful global content.",
    email: "mailto:marketing@abcfoundationconnect.com",
    linkedin: "https://www.linkedin.com/in/",
  },
  {
    img: "/ambreen.jpg",
    name: "Ambreen Sheikh",
    title: "Manager Events and Community Outreach",
    desc: "Ambreen Sheikh, a community advocate with an entrepreneurial background, collaborates with ministers as a community outreach and event manager. Committed to fostering inclusivity, Ambreen strives to create a positive impact in the community.",
    email: "mailto:events@abcfoundationconnect.com",
    linkedin: "www.linkedin.com/in/ambreen-sheikh-ba9736114",
  },
  {
    img: "/pat.jpg",
    name: "Pat Jones",
    title: "Data Executive and Administrative Officer",
    desc: "Pat is a passionate and independent woman with diverse professional experience. Committed to empowering others and supporting the less fortunate, she believes in kindness and empathy in every interaction. Outside of work, Pat cares for rescued animals.",
    email: "mailto:info@abcfoundationconnect.com",
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
            Empowering communities starts with the dedication of those behind
            the scenes. Together, as the operations team of Advocacy for Better
            Communities Foundation, we turn passion into action, driving
            positive change one step at a time.
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
