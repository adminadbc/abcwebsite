"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Navbar, Collapse, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Custom from "./dropDown";

const links = [
  { name: "Home", href: "/main" },
  {
    name: "About Us",
    href: "/main/about",
    submenu: true,
    submenuItems: [{ name: "Founder", href: "/main/founder" }],
  },
  {
    name: "Resources",
    href: "/main/resources",
    submenu: true,
    submenuItems: [{ name: "Articles", href: "/articles" }],
  },
  { name: "Contact Us", href: "/main/contacts" },
];

export function NavBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const pathname = usePathname();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <Navbar
      fullWidth
      shadow={false}
      color="transparent"
      className="absolute z-50 border-0 bg-white text-black w-screen overflow-hidden"
    >
      <div className="container ml-6 md:sml-14 flex items-center justify-between">
        <Link href="/main">
          <Image
            src="/logoabc.png"
            width={250}
            height={80}
            alt="ABC Foundation Logo"
          />
        </Link>
        <div className="ml-auto hidden items-center gap-14 lg:flex text-2xl">
          {links.map((link, idx) =>
            link.name == "Resources" ? (
              <Custom key={8} />
            ) : (
              <Link
                key={idx}
                href={link.href}
                className={clsx({
                  "bg-sky-100 text-abcf": pathname === link.href,
                })}
              >
                <p className="hidden md:block">{link.name}</p>
              </Link>
            )
          )}
        </div>
        <div className="hidden gap-2 lg:flex">
          <IconButton variant="text" color="white" size="sm">
            <i className="fa-brands fa-facebook text-base" />
          </IconButton>
          <IconButton variant="text" color="white" size="sm">
            <i className="fa-brands fa-instagram text-base" />
          </IconButton>
          <IconButton variant="text" color="white" size="sm">
            <i className="fa-brands fa-github text-base" />
          </IconButton>
        </div>
        <IconButton
          variant="text"
          color="white"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6 text-black mr-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6 text-black mr-8" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-gray-900 text-lg">
            <li>
              <Link href="/main">Home</Link>
            </li>
            <li>
              <Link href="/main/about">About</Link>
            </li>
            <Custom />
            <li>
              <Link href="/main/contacts">Contacts</Link>
            </li>
          </ul>
          <div className="mt-4 flex gap-2">
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-github text-base" />
            </IconButton>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;
