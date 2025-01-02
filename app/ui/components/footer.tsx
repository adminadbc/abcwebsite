"use client";

import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { FaSquareFacebook, FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const links = [
  {
    title: "Pages",
    items: [
      { name: "Home", url: "/" },
      { name: "About Us", url: "/about" },
      { name: "Contact Us", url: "/contacts" },
    ],
  },
  {
    title: "Legal",
    items: [
      { name: "Terms", url: "/terms" },
      { name: "Privacy", url: "/policy" },
    ],
  },
  {
    title: "Projects",
    items: [
      { name: "Engage", url: "/education/changemakers" },
      { name: "Safe Spaces", url: "/education/changemakers" },
      { name: "Changemakers", url: "/education/changemakers" },
      { name: "United Journeys", url: "/education/changemakers" },
      { name: "Legal Awareness Program", url: "/education/legal-awareness-program" },
      { name: "Legal Advocacy and Support", url: "/education/changemakers" },
    ],
  },
];

export function Footer4() {
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="px-8 py-28 bg-brand2">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="mb-8 lg:mb-0">
            <Image
              src="/newlogowhite.png"
              width={250}
              height={80}
              alt="ABC Foundation Logo"
              className="h-auto"
            />
            <div className="flex gap-4 mt-6 text-white">
              <a
                href="https://www.facebook.com/ABCFoundationConnect/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-abcf"
              >
                <FaSquareFacebook size={30} />
              </a>
              <a
                href="https://www.linkedin.com/company/advocacy-for-better-communities-foundation-abc-foundation/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-abcf"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.instagram.com/the.abcfoundation/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-abcf"
              >
                <FaInstagramSquare size={30} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
            {links.map(({ title, items }) => (
              <ul key={title}>
                <Typography variant="h6" className="mb-4 font-bold text-2xl">
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link.name} className="mb-2">
                    <Typography
                      as="a"
                      href={link.url}
                      className="font-medium text-white transition-colors hover:text-abcf"
                    >
                      {link.name}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <hr className="my-10 border-abcf" />

        <div className="flex flex-col md:flex-row justify-between items-center text-white gap-4">
          <Typography variant="small" className="font-normal text-center md:text-left">
            &copy; {currentYear} All rights reserved.
          </Typography>
          <Typography variant="small" className="font-normal text-center md:text-right">
            Powered by{" "}
            <a
              href="https://www.viteconsulting.com/"
              target="_blank"
              rel="noopener noreferrer"
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
