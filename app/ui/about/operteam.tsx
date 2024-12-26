"use client";

import {
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";

import {
  FaSquareFacebook,
  FaSquareTwitter,
  FaSquareInstagram,
} from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbTopologyStarRing3 } from "react-icons/tb";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

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
  url?: string;
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
  url,
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
        <Typography variant="small" className="mb-3 mt-2 font-bold uppercase">
          {title}
        </Typography>
        <Typography className="mb-2 w-full font-normal xl:w-72 text-left">
          {desc}
        </Typography>

        <div className="flex items-center gap-7 ml-2 mt-5">
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
        <a href={url} target="_blank" rel="noreferrer">
          <Button className="bg-abcf text-black mt-3" size="lg">
            Read more
          </Button>
        </a>
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
    url: "/about/team/operteam/raj",
  },
  {
    img: "/bilal.jpg",
    name: "Bilal Iskander",
    title: "Lorem Ipsum Lorem",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",

    email: "mailto:bilal.sikander@abcfoundationconnect.com",
    url: "/about/team/operteam/bilal",
  },
  {
    img: "/ariba.jpg",
    name: "Ariba Azar",
    title: "Graphic Designer and Social Media Manager",
    desc: "Ariba Raja is the social media manager for ABC Foundation, a non-profit organization dedicated to driving positive change in communities. With a passion for storytelling and a strategic mindset, Ariba is instrumental in amplifying the foundation's mission and connecting with supporters through engaging digital content.",

    email: "mailto:ariba.azhar@abcfoundationconnect.com",
    url: "/about/team/operteam/ariba",
  },
  {
    img: "/ambreen.jpg",
    name: "Ambreen Sheikh",
    title: "Events and Community Outreach Manager",
    desc: "Ambreen Sheikh, a community advocate with an entrepreneurial background, collaborates with ministers as a community outreach and event manager. Committed to fostering inclusivity, Ambreen strives to create a positive impact in the community.",

    email: "mailto:events@abcfoundationconnect.com",
    linkedin: "www.linkedin.com/in/ambreen-sheikh-ba9736114",
    url: "/about/team/operteam/ambreen",
  },
  {
    img: "/maureen.jpg",
    name: "Maureen Wit",
    title: "Projects and Program Development Manager",
    desc: "Maureen has built a career in Human Services, specializing in supporting children and families with complex needs using a trauma-informed approach. She now teaches in post-secondary institutions, sharing her expertise and guiding students. Her work has earned her several awards, recognizing her contributions to the field.",

    email: "mailto:maureen.wit@abcfoundationconnect.com",
    url: "/about/team/operteam/maureen",
  },
];

export function OperTeam() {
  const [refFirst, inViewFirst] = useInView();
  const [refSecond, inViewSecond] = useInView();
  const controlsSecond = useAnimation();
  const controlsFirst = useAnimation();
  useEffect(() => {
    if (inViewFirst) {
      controlsFirst.start({
        opacity: 1,
        y: 0,
        transition: { delay: 0.5, duration: 0.5 },
      });
    }
  }, [controlsFirst, inViewFirst]);

  useEffect(() => {
    if (inViewSecond) {
      controlsSecond.start({
        opacity: 1,
        y: 0,
        transition: { delay: 0.8, duration: 0.5 },
      });
    }
  }, [controlsSecond, inViewSecond]);
  return (
    <section className="py-10 px-8 lg:py-28">
      <div className="container mx-auto">
        <motion.div
          ref={refFirst}
          initial={{ opacity: 0, y: -50 }}
          animate={controlsFirst}
          exit={{ opacity: 0, y: 50 }}
        >
          <div className="mb-20 text-center lg:mb-28">
            <h2 className="text-4xl mb-4">The Operations Team</h2>
            <div className="relative flex py-5 w-1/2  mx-auto items-center">
              <div className="flex-grow border-t-4 border-abcf w-96"></div>
              <p className="mx-5  text-center">
                <TbTopologyStarRing3 />
              </p>
              <div className="flex-grow border-t-4 border-abcf w-96"></div>
            </div>
            <Typography variant="lead" className="mx-auto max-w-4xl">
              Empowering communities starts with the dedication of those behind
              the scenes. Together, as the operations team of Advocacy for
              Better Communities Foundation, we turn passion into action,
              driving positive change one step at a time.
            </Typography>
          </div>
        </motion.div>
        <motion.div
          ref={refSecond}
          initial={{ opacity: 0, y: -50 }}
          animate={controlsSecond}
          exit={{ opacity: 0, y: 50 }}
        >
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
            {members.map((props, key) => (
              <TeamCard key={key} {...props} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OperTeam;
