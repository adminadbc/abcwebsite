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

  return (
    <>
      <div className="relative h-[42rem] w-full bg-[url('https://www.material-tailwind.com/image/image-5.jpeg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 h-full w-full bg-black/50" />
        <div className="grid min-h-[50rem] px-12">
          <div className="container relative z-10 my-auto mx-auto">
            <Typography
              variant="h3"
              color="white"
              className="text-lg !leading-snug lg:text-2xl"
            >
              Accesible law
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="my-4 text-3xl !leading-snug lg:text-5xl"
            >
              Work are changemakers
            </Typography>
            <Typography
              variant="lead"
              className="mb-10 w-full text-white/80 md:max-w-full lg:max-w-xl"
            >
              Wealth creation is an evolutionarily recent positive-sum game.
              Status is an old zero-sum game. Those attacking wealth creation
              are often just seeking status.
            </Typography>

            <Button className="bg-abcf text-black">Book a call</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection12;
