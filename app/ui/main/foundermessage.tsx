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
    <section className="p-8">
      <div className="flex flex-col items-center mb-20">
        <h2 className="mb-4 text-3xl font-normal lg:text-6xl">
          Founder&quot;s Message
        </h2>
        <div className="relative flex py-5 w-1/2  mx-auto items-center">
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
          <p className="mx-5 text-center">
            <TbTopologyStarRing3 />
          </p>
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
        </div>
      </div>
      <div className="container mx-auto mb-20 gap-10 flex items-center flex-wrap lg:flex-nowrap justify-center">
        <Image
          src={`/angie-lal.jpg`}
          alt="background image"
          className="lg:min-w-[500px]"
          width={500}
          height={500}
        />
        <div className="my-20 pt-10 flex flex-col justify-evenly">
          <Typography
            variant="h3"
            color="blue-gray"
            className="mb-4 !text-2xl lg:!text-3xl"
          >
            Our Vision and Mission
          </Typography>
          <Typography variant="lead" className=" font-normal !text-gray-500">
            At ABC Foundation, we are fueled by a passionate commitment to
            justice and equality. Our mission is clear: to promote access to
            justice, amplify marginalized voices, and educate individuals about
            their legal rights. We believe that by empowering communities with
            knowledge and resources, we can pave the way for fair and just
            outcomes for all.
            <br />
            <br />
            In today&quot;s world, the path to justice can often seem daunting
            and inaccessible, particularly for those facing socio-economic
            challenges or systemic barriers. That&quot;s where we come in. Our
            dedicated team is here to provide support, guidance, and advocacy
            every step of the way. Whether it&quot;s navigating the complexities
            of the legal system or standing up for your rights, we are here to
            ensure that no one is left behind.
            <br />
            <br />
            Our vision for a better Canada is one where justice knows no bounds.
            We envision a society where everyone, regardless of their background
            or circumstances, can access the legal support they need. But our
            vision doesn&quot;t stop there. We believe in the power of
            communities to drive real change. That&quot;s why we&quot;re
            committed to fostering active engagement and collaboration,
            empowering individuals to become advocates for systemic reform and
            equity.
            <br />
            <br />
            As we embark on this journey together, we invite you to join us in
            our mission. Together, we can build a future where justice is not
            just a privilege, but a fundamental right for all.
          </Typography>
          <div className="flex flex-col mb-10">
            <Image
              src="/signature.jpeg"
              alt="founder's signature"
              width={300}
              height={100}
            />
            <h4 className="text-4xl mb-3">Angeline Lal</h4>
            <div className="flex-grow border-t-4 border-abcf w-2/12  mb-10"></div>
            <h5 className="text-xl">Founding Director</h5>
            <h5 className="text-xl">
              Advocacy for Better Communities Foundation
            </h5>
          </div>
          <Link href="/main/about/founder">
            <Button className="bg-abcf text-black">
              Read more about the founder
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FounderMessage;
