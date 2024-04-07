"use client";

import React from "react";
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
import {
  Bars3Icon,
  CloudIcon,
  CreditCardIcon,
  ShareIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface NavItemPropsType {
  children: React.ReactNode;
}

function NavItem({ children }: NavItemPropsType) {
  return (
    <li>
      <Typography as="a" href="#" variant="small" className="font-medium">
        {children}
      </Typography>
    </li>
  );
}

interface SimpleCardPropsType {
  icon: any;
  title: string;
  desc: string;
  active: boolean;
}

function SimpleCard({ icon: Icon, title, desc, active }: SimpleCardPropsType) {
  return (
    <Card shadow={active} color={active ? "gray" : "transparent"}>
      <CardBody className="flex items-start gap-4">
        <Icon
          className={`"h-7 w-7 shrink-0 ${
            active ? "text-white" : "text-primary"
          }`}
        />
        <div className="grid">
          <Typography
            variant="h5"
            color={active ? "white" : "blue-gray"}
            className="mb-2"
          >
            {title}
          </Typography>
          <Typography className="font-normal" color={active ? "white" : "gray"}>
            {desc}
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="-mt-4 pt-0 pl-[72px]">
        <Button
          size="sm"
          variant="text"
          ripple={false}
          color={active ? "white" : "gray"}
          className="flex items-center gap-2 px-0 hover:bg-transparent active:bg-transparent"
        >
          more about us
          <ArrowRightIcon className="h-3 w-3" strokeWidth={3} />
        </Button>
      </CardFooter>
    </Card>
  );
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

  const cards = [
    {
      active: true,
      icon: CreditCardIcon,
      title: "Netflix's 'Shuffle Play' feature",
      desc: "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process.",
    },
    {
      active: false,
      icon: CloudIcon,
      title: "Landbot closes $8M Series",
      desc: "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process.",
    },
    {
      active: false,
      icon: ShareIcon,
      title: "Brave web browser",
      desc: "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process.",
    },
  ];

  return (
    <>
      <Navbar
        fullWidth
        shadow={false}
        color="transparent"
        className="absolute z-50 border-0"
      >
        <div className="container mx-auto flex items-center justify-between">
          <Typography variant="h6">Material Design</Typography>
          <ul className="ml-10 hidden items-center gap-6 lg:flex">
            <NavItem>Home</NavItem>
            <NavItem>About Us</NavItem>
            <NavItem>Contact Us</NavItem>
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
              <XMarkIcon strokeWidth={2} className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6 text-white" />
            )}
          </IconButton>
        </div>
        <Collapse open={open}>
          <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
            <ul className="flex flex-col gap-4 text-gray-900">
              <NavItem>Home</NavItem>
              <NavItem>About Us</NavItem>
              <NavItem>Contact Us</NavItem>
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
      <div className="relative h-[42rem] w-full bg-[url('https://www.material-tailwind.com/image/image-5.jpeg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 h-full w-full bg-black/50" />
        <div className="grid min-h-[50rem] px-12">
          <div className="container relative z-10 my-auto mx-auto">
            <Typography
              variant="h3"
              color="white"
              className="text-lg !leading-snug lg:text-2xl"
            >
              Pricing Plans
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="my-4 text-3xl !leading-snug lg:text-5xl"
            >
              Work with the rockets
            </Typography>
            <Typography
              variant="lead"
              className="mb-10 w-full text-white/80 md:max-w-full lg:max-w-xl"
            >
              Wealth creation is an evolutionarily recent positive-sum game.
              Status is an old zero-sum game. Those attacking wealth creation
              are often just seeking status.
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative mx-8 -mt-14 rounded-xl bg-white p-6 shadow-md lg:mx-16">
        <div className="grid grid-cols-1 justify-between gap-8 md:col-span-1 lg:grid-cols-3">
          {cards.map(({ icon, title, desc, active }) => (
            <SimpleCard
              key={title}
              icon={icon}
              title={title}
              desc={desc}
              active={active}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default HeroSection12;
