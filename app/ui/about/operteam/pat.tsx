"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { TbTopologyStarRing3 } from "react-icons/tb";

export function BlogSection14() {
  return (
    <section className="flex flex-col items-center lg:py-28 py-10 px-8">
      <h1 className="text-4xl lg:text-5xl mb-5">Pat&apos;s Biography</h1>
      <div className="relative flex py-5 w-1/2 mb-5 mx-auto items-center">
        <div className="flex-grow border-t-4 border-abcf w-96"></div>
        <p className="mx-5  text-center">
          <TbTopologyStarRing3 />
        </p>
        <div className="flex-grow border-t-4 border-abcf w-96"></div>
      </div>

      <div className="inline m-20 container  my-auto ">
        <Image
          src="/pat.jpg"
          alt="blog"
          className="float-left mr-10 mb-5 rounded-lg shadow-2xl lg:max-w-[26rem] lg:min-h-[26rem]"
          width={350}
          height={300}
        />

        <div className="mb-12">
          <Typography className="mb-8 font-normal">
            My name is Pat Jones, and I proudly hail from Calgary, Alberta.
          </Typography>

          <Typography className="mb-8 font-normal">
            With a decade spent living in the USA, I&apos;ve garnered invaluable
            experiences that enhance both my professional and personal
            interactions. Bringing a wealth of diverse professional experience
            to the table, I am a strong, articulate, passionate and independent
            woman who seeks to empower others.
          </Typography>

          <Typography className="mb-6 font-normal">
            Beyond my professional pursuits, my passion for animals and nature
            runs deep. I have devoted myself to caring for rescued animals and
            the marginalized, embodying kindness and empathy in every
            interaction, whether with handicapped individuals or children and
            seniors.
          </Typography>
          <Typography className="mb-6 font-normal">
            Family holds immense importance to me. I take pride in being a
            parent to two adult children and a grandparent to two beautiful
            granddaughters residing in the US. I am a staunch advocate for
            diversity, inclusion, equality, and respect for all beliefs.
          </Typography>
          <Typography className="mb-6 font-normal">
            Committed to lifelong learning, I am dedicated to supporting those
            less fortunate than myself. I am thrilled at the prospect of
            contributing to the foundation&apos;s mission, aiming to create
            positive change and provide education and support to those in need
            within our community.
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default BlogSection14;
