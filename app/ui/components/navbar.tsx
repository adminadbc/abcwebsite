"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Navbar, Collapse, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const links = [
  { name: "Home", href: "/main" },
  {
    name: "About",
    href: "/main/about",
    submenu: true,
    submenuItems: [{ name: "Founder", href: "/main/founder" }],
  },
  { name: "Resources", href: "/main/resources" },
  { name: "Initiatives", href: "/main/initiatives" },
  { name: "Contacts", href: "/main/contacts" },
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
      className="absolute z-50 border-0 bg-white text-black w-screen"
    >
      <div className="container ml-6 md:sml-14 flex items-center justify-between">
        <Image
          src="/logoabc.png"
          width={250}
          height={80}
          alt="ABC Foundation Logo"
        />
        <div className="ml-auto hidden items-center gap-14 lg:flex text-2xl">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx({
                "bg-sky-100 text-abcf": pathname === link.href,
              })}
            >
              <p className="hidden md:block">{link.name}</p>
            </Link>
          ))}
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
            <XMarkIcon strokeWidth={2} className="h-6 w-6 text-black" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6 text-black" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-gray-900 text-lg">
            <li>
              <Link as="a" href="#">
                Home
              </Link>
            </li>
            <li>
              <Link as="a" href="#">
                About
              </Link>
            </li>
            <li>
              <Link as="a" href="#">
                Resources
              </Link>
            </li>
            <li>
              <Link as="a" href="#">
                Initiatives
              </Link>
            </li>
            <li>
              <Link as="a" href="#">
                Contacts
              </Link>
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
