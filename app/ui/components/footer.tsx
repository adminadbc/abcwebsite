"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";
// import { FaApple, FaGooglePlay } from "react-icons/fa";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const links = [
  {
    title: "Pages",
    items: [
      { name: "Home", url: "/" },
      { name: "About", url: "/main/about" },
      { name: "Contacts", url: "/main/contacts" },
    ],
  },
  {
    title: "Legal",
    items: [
      { name: "Terms", url: "/main/terms" },
      { name: "Privacy", url: "/main/policy" },
    ],
  },

  {
    title: "Product",
    items: [
      { name: "Changemakers", url: "/main/initiatives/changemakers" },
      { name: "Legal Connect", url: "/main/initiatives/legal-connect" },
    ],
  },
];

const currentYear = new Date().getFullYear();

export function Footer4() {
  return (
    <footer className="px-8 py-28 bg-gradient-to-r from-abcf to-orange-400">
      <div className="container mx-auto">
        <div className="flex justify-between gap-4 md:grid-cols-2 lg:px-2">
          <div className="mb-8 md:mb-0">
            <Image
              src="/logoabc.png"
              width={250}
              height={80}
              alt="ABC Foundation Logo"
            />

            <div className="flex gap-4 mt-6 ">
              <a
                href="https://www.facebook.com/ABCFoundationConnect/"
                title="social"
                target="_blank"
                rel="noopener"
              >
                <FaSquareFacebook size={30} />
              </a>
              <a
                href="https://www.linkedin.com/company/advocacy-for-better-communities-foundation-abc-foundation/"
                title="social"
                target="_blank"
                rel="noopener"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.instagram.com/the.abcfoundation/"
                title="social"
                target="_blank"
                rel="noopener"
              >
                <FaInstagramSquare size={30} />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-between gap-6 lg:grid-cols-3">
            {links.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="h6"
                  className="mb-2 mr-2 font-bold text-2xl"
                >
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
        <hr className="w-12/12 mx-auto text-black h-px border-0 bg-black my-10" />
        <div className=" flex flex-wrap justify-between sm:mx-0 ">
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
