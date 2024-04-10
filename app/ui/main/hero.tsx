"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Typography,
  Card,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface NavItemPropsType {
  children: React.ReactNode;
}

// function NavItem({ children }: NavItemPropsType) {
//   return (
//     <li>
//       <Typography as="a" href="#" variant="small" className="font-medium">
//         {children}
//       </Typography>
//     </li>
//   );
// }

// nav list component
const navListItems = [
  {
    label: "Account",
  },
  {
    label: "Blocks",
  },
  {
    label: "Docs",
  },
];

interface SimpleCardPropsType {
  icon: any;
  title: string;
  desc: string;
  active: boolean;
}

export function HeroSection12() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <>
      <Navbar
        fullWidth
        shadow={false}
        color="transparent"
        className="absolute z-50 border-0 bg-white text-black"
      >
        <div className="container mx-auto flex items-center justify-between">
          <Image
            src="/logoabc.png"
            width={250}
            height={80}
            alt="ABC Foundation Logo"
          />
          <ul className="ml-10 hidden items-center gap-14 lg:flex text-2xl">
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
      <div className="relative h-[56rem] w-full bg-[url('/background-hero.png')]  bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 h-full w-full bg-black bg-opacity-55" />
        <div className="grid min-h-[50rem] px-12 ">
          <div className="container lg:w-5/6 relative z-10 my-auto mx-auto text-center">
            <h3 className="text-lg !leading-snug lg:text-2xl lg:w-2/3 mx-auto text-white">
         Empowering the community to confidently navigate the legal system and advocacy for equitable and fair outcomes.
            </h3>
            <h1 className="my-4 text-2xl !leading-snug lg:text-6xl mb-10 text-white">
              Community empowerment Initiatives.
            </h1>
            <Link
            href=""
              className="bg-[#B49712] mt-6 hover:bg-[#B49712] py-3 text-white rounded-lg px-8"
            >
              Book an appointment
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection12;
