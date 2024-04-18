"use client";

import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { TbTopologyStarRing3 } from "react-icons/tb";
import Link from "next/link";

import Image from "next/image";
interface IconPropsType {
  children: React.ReactNode;
}

function Icon({ children }: IconPropsType) {
  return (
    <div className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow-md">
      {children}
    </div>
  );
}

export function FounderMessage() {
  return (
    <section className="w-screen ">
      <div className="flex flex-col items-center">
        <h2 className="mb-4 text-3xl font-normal lg:text-6xl">
          Founder&#x2019;s Message
        </h2>
        <div className="relative flex w-1/2  mx-auto items-center">
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
          <p className="mx-5 text-center">
            <TbTopologyStarRing3 />
          </p>
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
        </div>
      </div>
      <div
        className="container mx-auto px-4 md:px-14 mb-15 mt-10 lg:mt-20 gap-10 flex items-center flex-wrap 
       lg:flex-nowrap "
      >
        <Image
          src={`/angie.jpeg`}
          alt="background image"
          className="lg:min-w-[500px] -mt-4 sm:mt-15 lg:mt-0 md:mx-auto rounded-lg shadow-xl"
          width={500}
          height={900}
        />
        <div className="flex flex-col justify-evenly">
          <p className="text-md font-normal text-justify">
            At ABC Foundation, we are fueled by a passionate commitment to
            justice and equality. Our mission is clear: to promote access to
            justice, amplify marginalized voices, and educate individuals about
            their legal rights. We believe that by empowering communities with
            knowledge and resources, we can pave the way for fair and just
            outcomes for all.
            <br />
            <br />
            In today&#x2019;s world, the path to justice can often seem daunting
            and inaccessible, particularly for those facing socio-economic
            challenges or systemic barriers. That&#x2019;s where we come in. Our
            dedicated team is here to provide support, guidance, and advocacy
            every step of the way. Whether it&#x2019;s navigating the
            complexities of the legal system or standing up for your rights, we
            are here to ensure that no one is left behind.
            <br />
            <br />
            Our vision for a better Canada is one where justice knows no bounds.
            We envision a society where everyone, regardless of their background
            or circumstances, can access the legal support they need. But our
            vision doesn&#x2019;t stop there. We believe in the power of
            communities to drive real change. That&#x2019;s why we&#x2019;re
            committed to fostering active engagement and collaboration,
            empowering individuals to become advocates for systemic reform and
            equity.
            <br />
            <br />
            As we embark on this journey together, we invite you to join us in
            our mission. Together, we can build a future where justice is not
            just a privilege, but a fundamental right for all.
          </p>
          <div className="flex flex-col mb-10 mt-1">
            <Image
              src="/signature.jpeg"
              alt="founder's signature"
              width={200}
              height={100}
            />
            <h4 className="text-xl mb-3">Angeline Lal</h4>
            <div className="flex-grow border-t-4 border-abcf w-2/12  mb-10"></div>
            <h5 className="text-xl">Founding Director</h5>
            <h5 className="text-xl">
              Advocacy for Better Communities Foundation
            </h5>
          </div>
          <Link href="/main/about/founder">
            <Button className="bg-abcf text-black" size="lg">
              Read more about the founder
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FounderMessage;
