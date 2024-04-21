"use client";

import {
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Typography,
  Tooltip,
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
  bio?: string;
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
  bio,
}: TeamCardPropsType) {
  // Inside your TeamCard component
  // Ensure the splitting logic is correct
  const paragraphs = bio ? bio.split(/\n\n/g) : [];

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
        {bio ? (
          <Tooltip
            className="bg-abcf text-black w-2/6"
            content={
              <div>
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className="paragraph-style">
                    {paragraph}
                  </p>
                ))}
              </div>
            }
            position="bottom"
          >
            <Typography
              variant="h5"
              color="blue-gray"
              className="cursor-pointer"
            >
              {name}
            </Typography>
          </Tooltip>
        ) : (
          <Typography variant="h5" color="blue-gray">
            {name}
          </Typography>
        )}
        <div className="flex-grow border-t-4 border-abcf w-1/2 mt-2"></div>
        <Typography variant="small" className="mb-3 mt-2 font-bold uppercase">
          {title}
        </Typography>
        <Typography className="mb-2 w-full font-normal xl:w-72 text-left">
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
    img: "/raj.jpeg",
    name: "Raj Dhillon",
    title: "Advocacy and Public Relations Manager",
    desc: "Raj's varied path, from entrepreneur to stay-at-home mom to community activist, reflects her dynamic life. She's committed to individual responsibility for community improvement and eagerly contributes her skills to projects promoting engagement, education, and advocacy.",
    bio: "I am Raj Dhillon. I was born in the UK and moved to Calgary in 2010 when I met my husband and started a family.I joined our family business, Mango Shiva, in the heart of Calgary's downtown on Stephen Avenue. After becoming parents to our daughter and son, life soon got hectic, and we decided in 2017 to pursue a change.I became a stay-at-home mom, and it was an enriching time spent with my children. Once they started school full-time, I felt a strong desire to contribute to my community. I actively participated in our last civic election, campaigning on behalf of Councillor Dhaliwal.This experience led me to join his team at the Ward 5 office. This job taught me so much, introduced me to so many passionate people, and was rewarding because we were able to make a difference in our communities while helping everyday people.I am genuinely excited about the prospect of joining the dynamic team at ABC Foundation. As a group of women who understand the importance of community engagement, education, and advocacy, we can make a significant positive impact. I am eager to contribute my skills and passion to this mission.",
    email: "mailto:pr@abcfoundationconnect.com",
  },
  {
    img: "/ritu.png",
    name: "Ritu Ghai",
    title: "Media and Marketing Manager",
    desc: "With over two decades in media, Ritu navigates digital, print, radio, and TV, amplifying unheard voices and championing inclusive representation. She believes in storytelling's power to create impactful global content.",
    bio: "Stepping into the vibrant world of media over two decades ago, I've become a seasoned navigator of digital realms, print, radio waves, and television screens. Fluent in three languages - English, Hindi, and Punjabi - I effortlessly bridge cultural gaps and resonate with diverse audiences worldwide.As an unwavering advocate of equality and equity, my mission is clear: to amplify the often unheard voices and champion inclusive representation across media platforms. I believe in the power of storytelling, fueled by ethical journalism, to create impactful and engaging content that resonates globally.Beyond the professional realm, motherhood to my 11-year-old daughter has infused me with patience and added depth to my personality. My journey from India to Ontario in 2019 and subsequent settlement in Calgary in 2022 reflects my adaptability and embrace of new experiences.Embracing Calgary's open and friendly ambiance, I've woven myself into the fabric of community participation and digital media management, contributing to meaningful change and connectivity.As a media maverick, I'm committed to driving narratives that inspire, inform, and empower, leaving a lasting impact on audiences and society alike.",
    email: "mailto:marketing@abcfoundationconnect.com",
  },
  {
    img: "/ambreen.jpg",
    name: "Ambreen Sheikh",
    title: "Manager Events and Community Outreach",
    desc: "Ambreen Sheikh, a community advocate with an entrepreneurial background, collaborates with ministers as a community outreach and event manager. Committed to fostering inclusivity, Ambreen strives to create a positive impact in the community.",
    bio: "Meet Ambreen Sheikh, a dedicated individual with a passion for making a positive impact in the community. As a devoted spouse and parent to three wonderful children, family values are at the core of everything they do.With a background in entrepreneurship, she brings a unique perspective to her work. Her journey in business has equipped her with invaluable skills in leadership, innovation, and problem-solving.Driven by a desire to make a difference, she has dedicated her career to working with individuals with special needs. With a Bachelor's degree in education and eight years of experience as an instructor, she has played a pivotal role in shaping the lives of her students.In addition to her work in education, Ambreen has collaborated with ministers as a community outreach and event manager. She has spearheaded various initiatives, including organizing town halls, community events, and meetings. Through these endeavors, she has addressed a wide range of issues and provided guidance and resources to empower the community.With a heart for service and a wealth of experience, she continues to strive towards creating a more inclusive and supportive environment for all.",
    email: "mailto:events@abcfoundationconnect.com",
    linkedin: "www.linkedin.com/in/ambreen-sheikh-ba9736114",
  },
  {
    img: "/pat.jpg",
    name: "Pat Jones",
    title: "Data Executive and Administrative Officer",
    desc: "Pat is a passionate and independent woman with diverse professional experience. Committed to empowering others and supporting the less fortunate, she believes in kindness and empathy in every interaction. Outside of work, Pat cares for rescued animals.",
    bio: "My name is Pat Jones, and I proudly hail from Calgary, Alberta.With a decade spent living in the USA, I've garnered invaluable experiences that enhance both my professional and personal interactions. Bringing a wealth of diverse professional experience to the table, I am a strong, articulate, passionate and independent woman who seeks to empower others.Beyond my professional pursuits, my passion for animals and nature runs deep. I have devoted myself to caring for rescued animals and the marginalized, embodying kindness and empathy in every interaction, whether with handicapped individuals or children and seniors.Family holds immense importance to me. I take pride in being a parent to two adult children and a grandparent to two beautiful granddaughters residing in the US. I am a staunch advocate for diversity, inclusion, equality, and respect for all beliefs.Committed to lifelong learning, I am dedicated to supporting those less fortunate than myself. I am thrilled at the prospect of contributing to the foundation's mission, aiming to create positive change and provide education and support to those in need within our community.",
    email: "mailto:info@abcfoundationconnect.com",
  },
];

export function OperTeam() {
  return (
    <section className="py-10 px-8 lg:py-28">
      <div className="container mx-auto">
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
