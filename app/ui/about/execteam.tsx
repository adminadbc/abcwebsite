"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";


import {
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Typography,
  Button,
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
import Link from "next/link";
import "../../ui/about/style.css";

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

        <Typography variant="small" className="mb-3 mt-2 font-bold uppercase ">
          {title}
        </Typography>
        <Typography className="mb-2 w-full font-normal  xl:w-72 text-left">
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
    img: "/angielal2.jpg",
    name: "Angeline Lal",
    title: "Founding Director",
    desc: "Angeline Lal, Founder of ABC Foundation, advocates for social justice and community empowerment. With diverse experience, she spearheads initiatives and empowers individuals through education, aiming for a more equitable society.",
    email: "mailto:angeline.lal@abcfoundationconnect.com",
    linkedin: "https://www.linkedin.com/in/angeline-lal-3411197b/",
    url: "/main/about/team/founder",
  },
  {
    img: "/richa.jpg",
    name: "Richa Sharma",
    title: "CEO",
    desc: "Richa is a seasoned professional with diverse experience in operational and strategic management across continents. Excelling in leadership roles, she is known for effective communication, team leadership, and relationship building.",
    bio: "I am a seasoned professional with a diverse background in operational management, strategic business management, and project leadership across continents. Throughout my career, I have held management positions in various industries, including automobile, hospitality, education, and media, showcasing my versatility and expertise in different domains.My core strength lies in being a people person, with a proven track record of effective communication, team leadership, and relationship building. My experience includes serving with the Legislative Of Alberta, where I honed my skills in community engagement and strategic decision-making, particularly in serving the Calgary region.My contributions have been recognized through multiple awards, ranging from storytelling sessions to motivational speeches, where I have shared my wisdom, management strategies, and life lessons with a wide audience. My mass communication skills have allowed me to reach and inspire many individuals, making a positive impact on their personal and professional development.In 2019, I embarked on a journey to serve the Canadian community by launching the first-ever South Asian radio channel in British Columbia. This initiative demonstrated my innovative approach and commitment to diversity and inclusion in media representation.Throughout my career, I have excelled in community engagement, case work, and community outreach, showcasing an empathetic approach to working with people and addressing their needs. This aligns seamlessly with the core values and mission of the ABC Foundation, where my expertise and passion for empowering communities make me a valuable asset to any organization or initiative focused on positive social change.",
    email: "mailto:richa.sharma@abcfoundationconnect.com",
    url: "/about/team/execteam/richa",
  },
  {
    img: "/rashad.jpg",
    name: "Rashad Bayram",
    title: "CIO",
    desc: "Rashad's experience spans accross various roles and industries, each time leaving a mark of enhanced performance and strategic innovation.",
    bio: "I am the dynamic force driving innovation and growth. My passion lies in transforming complex challenges into transformative opportunities, leveraging my expertise in operational efficiency, strategic collaboration, and technological innovation.Throughout my career, I've spearheaded game-changing initiatives. At Emerson, I led the optimization of SalesForce CRM's mobile version, achieving $1.5 million in cost savings and slashing the accounts receivable lifecycle in half. During my tenure at Nokia Corporation, I managed $250M in B2B sales, showcasing my sales prowess and account management finesse in high-stakes environments.My journey is defined by an unwavering commitment to driving excellence. With every role I undertake, I leave a lasting impact through enhanced performance and strategic innovation.From orchestrating seamless business operations to crafting bespoke solutions, I thrive on leveraging my diverse skill set to navigate the complexities of today's digital business landscape. With my influential communication style and relentless drive for success, I confidently tackle challenges, consistently exceeding expectations and delivering results that propel businesses forward.",
    email: "mailto:rashad.bayram@abcfoundationconnect.com",
    twitter: "https://twitter.com/bayrashad",
    linkedin: "https://www.linkedin.com/in/rashadbayram/",
    url: "/main/about/team/execteam/rashad",
  },
];

export function ExecTeam() {
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
    <section className="py-10 px-8 lg:py-28">
      <div className="container mx-auto">
     
        <motion.div ref={refFirst} initial={{ opacity: 0, y: -50 }} animate={controlsFirst} exit={{ opacity: 0, y: 50 }}>
        <div className="mb-20 text-center lg:mb-28">
          <h2 className="text-4xl mb-4">The Executive Team</h2>
          <div className="relative flex py-5 w-1/2  mx-auto items-center">
            <div className="flex-grow border-t-4 border-abcf w-96"></div>
            <p className="mx-5  text-center">
              <TbTopologyStarRing3 />
            </p>
            <div className="flex-grow border-t-4 border-abcf w-96"></div>
          </div>
          <p className="mx-auto max-w-4xl text-lg ">
            Fueled by purpose, united in vision, our executive teams at Advocacy
            for Better Communities Foundation ignite change, sculpting a
            brighter tomorrow through unwavering dedication and collaborative
            spirit.
          </p>
        </div>
      </motion.div>
        <motion.div ref={refSecond} initial={{ opacity: 0, y: -50 }} animate={controlsSecond} exit={{ opacity: 0, y: 50 }}>
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

export default ExecTeam;
