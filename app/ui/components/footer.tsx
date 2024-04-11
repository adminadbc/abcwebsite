"use client";

import { IconButton, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { RiFacebookBoxLine, RiLinkedinBoxLine, RiTiktokLine, RiTwitterXLine } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";

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
    items: ["Home", "About", "Changemakers", "Contact Us"],
  },
];

const currentYear = new Date().getFullYear();

export function Footer4() {
  return (
    <footer className="px-8 py-28 bg-abcf" >
      <div className="container mx-auto">
        <div className="grid grid-cols-1  justify-between gap-4 md:grid-cols-2 lg:px-20">
          <div className="mb-8 md:mb-0">
            <Image
              src="/logoabc.png"
              width={250}
              height={80}
              alt="ABC Foundation Logo"
            />

            <div className="flex gap-4 mt-6 ">
              <a href="#buttons-with-link" title="social">
              <RiTwitterXLine size={26}/>
              </a>
              <a href="#buttons-with-link" title="social">
              <FaSquareInstagram  size={26} />
              </a>
              <a href="#buttons-with-link" title="social">
                <RiTiktokLine  size={26}/>
              </a>
              <a href="#buttons-with-link" title="social">
                <RiFacebookBoxLine  size={26}/>
              </a>
              <a href="#buttons-with-link" title="social">
                <RiLinkedinBoxLine  size={26}/>
              </a>
            </div>
            <div className="flex flex-col md:flex-row  font-sans mt-6 gap-4">
           
    <div className="flex gap-1 w-fit bg-black text-white rounded-md px-3 py-1">
              <FaApple color="white" size={28} className="mt-1"/>
              <div>
                <div className="text-[10px]">Download on the</div>
                <div className="text-lg -mt-2 tracking-wider">App Store</div>
              </div>
    </div>
    <div className="flex gap-2  bg-black w-fit text-white rounded-md px-3 py-1">
              <FaGooglePlay color="white" size={28} className="mt-1"/>
              <div>
                <div className="text-[10px]">GET IT ON</div>
                <div className="text-lg -mt-2 tracking-wider">Google Play</div>
              </div>
    </div>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-between gap-4 lg:grid-cols-4">
            {links.map(({ title, items }) => (
              <ul key={title}>
                <Typography variant="h6"  className="mb-2 font-bold text-2xl">
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
        <hr  className="w-2/3 mx-auto text-black h-px border-0 bg-black my-10"/>
        <div className=" flex flex-wrap justify-center md:justify-center">
          <Typography variant="small" className="font-normal">
            All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer4;
