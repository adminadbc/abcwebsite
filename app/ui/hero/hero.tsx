"use client";

import React from "react";
import {
  Button,
  IconButton,
  Typography,
  Navbar,
  Collapse,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  IdentificationIcon,
  NewspaperIcon,
} from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItemPropsType {
  children: React.ReactNode;
}

function NavItem({ children }: NavItemPropsType) {
  return (
    <li>
      <Typography
        as="a"
        href="#"
        variant="paragraph"
        className="flex items-center gap-2 font-medium"
        placeholder="Home"
      >
        {children}
      </Typography>
    </li>
  );
}
export function HeroSection17() {
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
        shadow={false}
        color="transparent"
        fullWidth
        className="absolute z-50 border-0"
      >
        <div className="container mx-auto flex items-center justify-between">
          <Typography variant="h6">Material Tailwind</Typography>
          <ul className="ml-10 hidden items-center gap-6 lg:flex">
            <NavItem>
              <RectangleStackIcon className="h-5 w-5" />
              Home
            </NavItem>
            <NavItem>
              <UserCircleIcon className="h-5 w-5" />
              About
            </NavItem>
            <NavItem>
              <Squares2X2Icon className="h-5 w-5" />
              Resources
            </NavItem>
            <NavItem>
              <NewspaperIcon className="h-5 w-5" />
              Initiatives
            </NavItem>
            <NavItem>
              <IdentificationIcon className="h-5 w-5" />
              Contact
            </NavItem>
          </ul>

          {/* <div className="hidden items-center gap-4 lg:flex">
            <Button variant="text" color="white">
              Log in
            </Button>
            <Button color="white">sign in</Button>
          </div>
          <IconButton
            variant="text"
            onClick={handleOpen}
            className="ml-auto inline-block lg:hidden"
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6 text-white" />
            )}
          </IconButton> */}
        </div>
        <Collapse open={open}>
          <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
            <ul className="flex flex-col gap-4 text-gray-900">
              <NavItem>
                <RectangleStackIcon className="h-5 w-5" />
                Pages
              </NavItem>
              <NavItem>
                <UserCircleIcon className="h-5 w-5" />
                Account
              </NavItem>
              <NavItem>
                <Squares2X2Icon className="h-5 w-5" />
                Blocks
              </NavItem>
              <NavItem>
                <CommandLineIcon className="h-5 w-5" />
                Docs
              </NavItem>
            </ul>
            <div className="mt-6 mb-4 flex items-center gap-4">
              <Button variant="text">Log in</Button>
              <Button>sign in</Button>
            </div>
          </div>
        </Collapse>
      </Navbar>
      <div className="relative min-h-screen w-full bg-black">
        <div className="bg-[url('/image/bg-hero-17.png')] min-h-screen bg-contain bg-center bg-no-repeat">
          <div className="px-12 container min-h-screen mx-auto grid place-items-center text-center">
            <div className="grid place-items-center">
              <div className="lg:-translate-y-28 -translate-y-14">
                <Typography
                  color="white"
                  className="text-base font-bold !leading-snug"
                >
                  Latest Innovation
                </Typography>
                <Typography
                  variant="h1"
                  color="white"
                  className="!text-2xl my-4 !leading-snug lg:!text-5xl relative"
                >
                  Together, we can make a difference
                </Typography>
                <Typography
                  color="white"
                  className="relative lg:mb-10 mb-20 lg:text-lg text-sm"
                >
                  The time is now for it to be okay to be great. For being a
                  bright color. For standing out.
                </Typography>
              </div>
              <div className="lg:translate-y-44 md:translate-y-24 translate-y-2">
                <Typography color="white" className="text-lg mb-4">
                  <span className="font-bold">100+</span>{" "}
                  <span className="font-normal">Free Tickets</span>
                </Typography>
                <Button variant="outlined" color="white" fullWidth>
                  get started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection17;
