"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";
// import { FaApple, FaGooglePlay } from "react-icons/fa";

import {
  RiFacebookBoxLine,
  RiLinkedinBoxLine,
  RiTiktokLine,
  RiTwitterXLine,
} from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";

const links = [
  {
    title: "Product",
    items: [{name :"Changemakers", url : "/Changemakers"},
     {  name : "Legal Connect", url : "/legalConnect"}, 
    { name : "Donations" , url : "/Donnation"}],
  },
  {
    title: "Resources",
    items: [{ name :"Articles", url: "https://abc-blog-kit.vercel.app/"}, { name :"Education", url : "/education"}],
  },
  {
    title: "Legal",
    items: [{ name :"Terms", url : "/terms"},{ name : "Privacy", url: "/privacy"},{name :"Confidentiality", url : "/confidentiality"}],
  },
  {
    title: "Pages",
    items: [{ name :"Home", url : "/"}, {name :"About", url : "/about"}, { name :"Contact Us", url : "/ContactUs"}],
  },
];

const currentYear = new Date().getFullYear();

export function Footer4() {
  return (
    <footer className="px-8 py-28 bg-abcf">
      <div className="container mx-auto">
        <div className="grid grid-cols-1  justify-between gap-4 md:grid-cols-2 lg:px-16">
          <div className="mb-8 md:mb-0">
            <Image
              src="/logoabc.png"
              width={250}
              height={80}
              alt="ABC Foundation Logo"
            />

            <div className="flex gap-4 mt-6 ">
              <a href="#buttons-with-link" title="social">
                <RiTwitterXLine size={26} />
              </a>
              <a href="#buttons-with-link" title="social">
                <FaSquareInstagram size={26} />
              </a>
              <a href="#buttons-with-link" title="social">
                <RiTiktokLine size={26} />
              </a>
              <a href="#buttons-with-link" title="social">
                <RiFacebookBoxLine size={26} />
              </a>
              <a href="#buttons-with-link" title="social">
                <RiLinkedinBoxLine size={26} />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-between gap-4 lg:grid-cols-4">
            {links.map(({ title, items }) => (
              <ul key={title}>
                <Typography variant="h6" className="mb-2 font-bold text-2xl">
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link.name}>
                    <Typography
                      as="a"
                      href={link.url}
                      className="py-1 font-medium text-black transition-colors hover:!text-gray-900"
                    >
                      {link.name}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <hr className="w-11/12 mx-auto text-black h-px border-0 bg-black my-10" />
        <div className=" flex flex-wrap justify-between mx-12">
          <Typography variant="small" className="font-normal">
            2024. All rights reserved.
          </Typography>
          <Typography variant="small" className="font-normal">
            Powered by{" "}
            <a href="https://www.viteconsulting.com/" title="vite consulting">
              Vite Consulting
            </a>
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer4;
