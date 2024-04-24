"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";

import { FaSquareFacebook, FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const links = [
  {
    title: "Pages",
    items: [
      { name: "Home", url: "/" },
      { name: "About Us", url: "/main/about" },
      { name: "Contact Us", url: "/main/contacts" },
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
      {
        name: "Legal Community Connect",
        url: "/main/initiatives/legal-connect",
      },
    ],
  },
];

const currentYear = new Date().getFullYear();

export function Footer4() {
  return (
    <footer className="px-8 py-28 bg-brand2">
      <div className="container mx-auto">
        <div className="flex justify-between gap-4 md:grid-cols-2 lg:px-2">
          <div className="mb-8 md:mb-0">
            <Image
              src="/newlogowhite.png"
              width={250}
              height={80}
              alt="ABC Foundation Logo"
            />

            <div className="flex gap-4 mt-6 text-white ">
              <a
                href="https://www.facebook.com/ABCFoundationConnect/"
                title="social"
                target="_blank"
                rel="noopener"
                className="hover:text-abcf"
              >
                <FaSquareFacebook size={30} />
              </a>
              <a
                href="https://www.linkedin.com/company/advocacy-for-better-communities-foundation-abc-foundation/"
                title="social"
                target="_blank"
                rel="noopener"
                className="hover:text-abcf"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.instagram.com/the.abcfoundation/"
                title="social"
                target="_blank"
                rel="noopener"
                className="hover:text-abcf"
              >
                <FaInstagramSquare size={30} />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-between gap-6 lg:grid-cols-3 text-white">
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
                      className="py-1 font-medium text-white transition-colors hover:text-abcf"
                    >
                      {link.name}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <hr className="w-12/12 mx-auto text-white h-px border-0 bg-abcf my-10" />
        <div className=" flex flex-wrap justify-between sm:mx-0 text-white">
          <Typography variant="small" className="font-normal">
            2024. All rights reserved.
          </Typography>
          <Typography variant="small" className="font-normal">
            Powered by{" "}
            <a
              href="https://www.viteconsulting.com/"
              title="vite consulting"
              className="hover:text-abcf"
            >
              Vite Consulting
            </a>
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer4;
