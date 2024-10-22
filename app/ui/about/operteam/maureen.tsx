"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { TbTopologyStarRing3 } from "react-icons/tb";

export function MaurenBio() {
  return (
    <section className="flex flex-col items-center lg:py-28 py-10 px-8">
      <h1 className="text-4xl lg:text-5xl mb-5">Maureen&apos;s Biography</h1>
      <div className="relative flex py-5 w-1/2 mb-5 mx-auto items-center">
        <div className="flex-grow border-t-4 border-abcf w-96"></div>
        <p className="mx-5  text-center">
          <TbTopologyStarRing3 />
        </p>
        <div className="flex-grow border-t-4 border-abcf w-96"></div>
      </div>

      <div className="inline m-20 container  my-auto ">
        <Image
          src="/maureen.jpg"
          alt="marketing manager image"
          className="float-left mr-10 mb-5 rounded-lg shadow-2xl lg:max-w-[26rem] lg:min-h-[26rem]"
          width={350}
          height={300}
        />

        <div className="mb-12">
          <Typography className="mb-8 font-normal">
            Maureen comes from a family of seven, her parents immigrated from Scotland arriving by ship to Montreal with their three children. They expanded their family when settled in Montreal with a son and Maureen, who are now the first-generation Canadians in their large clan. In 1974 they moved across Canada to the western province of Alberta.
          </Typography>

          <Typography className="mb-8 font-normal">
            Maureen and her husband are the proud parents of their only son. Maureen has many family members who she cherishes her time with on family vacations or visit with a cup of tea.
          </Typography>

          <Typography className="mb-6 font-normal">
            Maureen has dedicated her career in the field of Human Services working with Complex Needs of children, youth, families, using person centered approach through a trauma informed care lens.
          </Typography>
          <Typography className="mb-6 font-normal">
            The Strong knowledge Maureen supports other with having to navigate the systems as she has worked in several different setting, Therapeutic campus based, community and educational. This led Maureen to be in many roles with frontline, Program Managers and School Family Liaison.
          </Typography>
          <Typography className="mb-6 font-normal">
            Maureen has transitioned in to sharing her knowledge and practical approaches in the Post Secondary Career colleges, as an instructor, education manager and student services manager to support students with their educational journey and life management.
          </Typography>
          <Typography className="mb-6 font-normal">
            Maureen was awarded the Excellence Educator Award from Alberta Career Colleges Association. Has received the Child and Youth care Worker of the year three times and certified as a Non-Violent Crisis Intervention as an Instructor with the Crisis Prevention Institute.
          </Typography>
          <Typography className="mb-6 font-normal">
            Work life balance and self care is a priority for Maureen, she loves to play soccer, member of the Calgary Women’s Soccer Association and had travelled to countries to play. Playing golf with her family is another past time.
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default MaurenBio;
