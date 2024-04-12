"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";
// import { FaApple, FaGooglePlay } from "react-icons/fa";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const links = [
  {
    title: "Product",
    items: ["Changemakers", "Legal Connect", "Donations"],
  },
  {
    title: "Resources",
    items: ["Articles", "Education"],
  },
  {
    title: "Legal",
    items: ["Terms", "Privacy", "Coonfidentiality"],
  },
  {
    title: "Pages",
    items: ["Home", "About", "Contact Us"],
  },
];

const currentYear = new Date().getFullYear();

export function Footer4() {
  return (
    <footer className="px-8 py-28 bg-gradient-to-r from-abcf to-orange-400">
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
                <FaSquareFacebook size={30} />
              </a>
              <a href="#buttons-with-link" title="social">
                <FaLinkedin size={30} />
              </a>
              <a href="#buttons-with-link" title="social">
                <FaInstagramSquare size={30} />
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
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      className="py-1 font-medium text-black transition-colors hover:!text-gray-900"
                    >
                      {link}
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
