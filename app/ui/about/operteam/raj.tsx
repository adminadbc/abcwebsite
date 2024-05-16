"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { TbTopologyStarRing3 } from "react-icons/tb";

export function BlogSection14() {
  return (
    <section className="flex flex-col items-center lg:py-28 py-10 px-8">
      <h1 className="text-4xl lg:text-5xl mb-5">Raj&apos;s Biography</h1>
      <div className="relative flex py-5 w-1/2 mb-5 mx-auto items-center">
        <div className="flex-grow border-t-4 border-abcf w-96"></div>
        <p className="mx-5  text-center">
          <TbTopologyStarRing3 />
        </p>
        <div className="flex-grow border-t-4 border-abcf w-96"></div>
      </div>

      <div className="inline m-20 container  my-auto ">
        <Image
          src="/raj.jpg"
          alt="blog"
          className="float-left mr-10 mb-5 rounded-lg shadow-2xl lg:max-w-[26rem] lg:min-h-[26rem]"
          width={350}
          height={300}
        />

        <div className="mb-12">
          <Typography className="mb-8 font-normal">
            I am Raj Dhillon. I was born in the UK and moved to Calgary in 2010
            when I met my husband and started a family. I joined our family
            business, Mango Shiva, in the heart of Calgary&apos;s downtown on
            Stephen Avenue. After becoming parents to our daughter and son, life
            soon got hectic, and we decided in 2017 to pursue a change.
          </Typography>

          <Typography className="mb-8 font-normal">
            I became a stay-at-home mom, and it was an enriching time spent with
            my children. Once they started school full-time, I felt a strong
            desire to contribute to my community. I actively participated in our
            last civic election, campaigning on behalf of Councillor Dhaliwal.
          </Typography>

          <Typography className="mb-6 font-normal">
            This experience led me to join his team at the Ward 5 office. This
            job taught me so much, introduced me to so many passionate people,
            and was rewarding because we were able to make a difference in our
            communities while helping everyday people.
          </Typography>
          <Typography className="mb-6 font-normal">
            I am genuinely excited about the prospect of joining the dynamic
            team at ABC Foundation. As a group of women who understand the
            importance of community engagement, education, and advocacy, we can
            make a significant positive impact. I am eager to contribute my
            skills and passion to this mission.
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default BlogSection14;
