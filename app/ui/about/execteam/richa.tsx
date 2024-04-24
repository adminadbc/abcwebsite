"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { TbTopologyStarRing3 } from "react-icons/tb";

export function BlogSection14() {
  return (
    <section className="flex flex-col items-center lg:py-28 py-10 px-8">
      <h1 className="text-4xl lg:text-5xl mb-5">Richa&apos;s Biography</h1>
      <div className="relative flex py-5 w-1/2 mb-5 mx-auto items-center">
        <div className="flex-grow border-t-4 border-abcf w-96"></div>
        <p className="mx-5  text-center">
          <TbTopologyStarRing3 />
        </p>
        <div className="flex-grow border-t-4 border-abcf w-96"></div>
      </div>

      <div className="inline m-20 container  my-auto ">
        <Image
          src="/richa.png"
          alt="ceo photo"
          className="float-left mr-10 mb-5 rounded-lg shadow-2xl lg:max-w-[26rem] lg:min-h-[26rem]"
          width={500}
          height={500}
        />

        <div className="mb-12">
          <Typography className="mb-8 font-normal">
            I am a seasoned professional with a diverse background in
            operational management, strategic business management, and project
            leadership across continents. Throughout my career, I have held
            management positions in various industries, including automobile,
            hospitality, education, and media, showcasing my versatility and
            expertise in different domains.
          </Typography>

          <Typography className="mb-8 font-normal">
            My core strength lies in being a people person, with a proven track
            record of effective communication, team leadership, and relationship
            building. My experience includes serving with the Legislative Of
            Alberta, where I honed my skills in community engagement and
            strategic decision-making, particularly in serving the Calgary
            region.
          </Typography>

          <Typography className="mb-6 font-normal">
            My contributions have been recognized through multiple awards,
            ranging from storytelling sessions to motivational speeches, where I
            have shared my wisdom, management strategies, and life lessons with
            a wide audience. My mass communication skills have allowed me to
            reach and inspire many individuals, making a positive impact on
            their personal and professional development.
          </Typography>
          <Typography className="mb-6 font-normal">
            In 2019, I embarked on a journey to serve the Canadian community by
            launching the first-ever South Asian radio channel in British
            Columbia. This initiative demonstrated my innovative approach and
            commitment to diversity and inclusion in media representation.
          </Typography>
          <Typography className="mb-6 font-normal">
            Throughout my career, I have excelled in community engagement, case
            work, and community outreach, showcasing an empathetic approach to
            working with people and addressing their needs. This aligns
            seamlessly with the core values and mission of the ABC Foundation,
            where my expertise and passion for empowering communities make me a
            valuable asset to any organization or initiative focused on positive
            social change.
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default BlogSection14;
