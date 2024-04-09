"use client";

import { IconButton, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

const links = [
  {
    title: "Company",
    items: ["About Us", "Careers", "Premium Tools", "Blog"],
  },
  {
    title: "Pages",
    items: ["Login", "Register", "Add List", "Contact"],
  },
  {
    title: "Legal",
    items: ["Terms", "Privacy", "Team", "About Us"],
  },
  {
    title: "Resourced",
    items: ["Blog", "Services", "Product", "Pricing"],
  },
];

const currentYear = new Date().getFullYear();

export function Footer4() {
  return (
    <footer className="px-8 py-28 bg-abcf">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <div className="mb-8 md:mb-0">
            <Image
              src="/logoabc.png"
              width={250}
              height={80}
              alt="ABC Foundation Logo"
            />
            <div className="flex items-end gap-4">
              <IconButton size="md">
                <i className="fas fa-heart" />
              </IconButton>
              <IconButton size="md">
                <i className="fas fa-heart" />
              </IconButton>
              <IconButton size="md">
                <i className="fas fa-heart" />
              </IconButton>
            </div>
            <div className="flex gap-2">
              <a href="#buttons-with-link">
                <IconButton variant="text" size="sm">
                  <i className="fa-brands fa-twitter text-lg text-white transition-colors hover:text-blue-gray-900" />
                </IconButton>
              </a>
              <a href="#buttons-with-link">
                <IconButton variant="text" size="sm">
                  <i className="fa-brands fa-youtube text-lg text-white transition-colors hover:text-blue-gray-900" />
                </IconButton>
              </a>
              <a href="#buttons-with-link">
                <IconButton variant="text" size="sm">
                  <i className="fa-brands fa-instagram text-lg text-white transition-colors hover:text-blue-gray-900" />
                </IconButton>
              </a>
              <a href="#buttons-with-link">
                <IconButton variant="text" size="sm">
                  <i className="fa-brands fa-github text-lg text-white transition-colors hover:text-blue-gray-900" />
                </IconButton>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-between gap-4 md:grid-cols-4">
            {links.map(({ title, items }) => (
              <ul key={title}>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      className="py-1 font-medium !text-white transition-colors hover:!text-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-wrap justify-center py-6 md:justify-center">
          <Typography variant="small" className="font-normal !text-white">
            All rights reserved.
          </Typography>
          <Typography variant="small" className="font-normal !text-white">
            Copyright &copy; {currentYear} Material Tailwind
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer4;
