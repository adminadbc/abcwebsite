"use client";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

export function FounderMessage() {
  return (
    <section className="py-10 lg:my-10 px-8">
      <div className="text-center my-12">
        <h2 className="text-4xl lg:text-5xl ">Founder&#39;s Message</h2>

        <div className="relative flex py-5 w-1/2  mx-auto items-center">
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
          <p className="mx-5 w-48 text-center">Ultimate Change</p>
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
        </div>
      </div>
      <div className="flex flex-row-reverse flex-wrap-reverse max-w-7xl mx-auto my-auto items-center place-items-center justify-around">
        <div className="inline m-5 container  my-auto text-center">
          <Image
            src="/angie-lal.jpg"
            alt="blog"
            className="float-left mr-10 mb-5 rounded-lg shadow-2xl lg:max-w-[26rem] lg:min-h-[26rem]"
            width={500}
            height={500}
          />

          <div className="mb-12 text-justify">
            <Typography className="mb-8 font-normal !text-gray-600">
              At ABC Foundation, we are fueled by a passionate commitment to
              justice and equality. Our mission is clear: to promote access to
              justice, amplify marginalized voices, and educate individuals
              about their legal rights. We believe that by empowering
              communities with knowledge and resources, we can pave the way for
              fair and just outcomes for all.
            </Typography>

            <Typography className="mb-8 font-normal !text-gray-600">
              In today&quot;s world, the path to justice can often seem daunting
              and inaccessible, particularly for those facing socio-economic
              challenges or systemic barriers. That&quot;s where we come in. Our
              dedicated team is here to provide support, guidance, and advocacy
              every step of the way. Whether it&quot;s navigating the
              complexities of the legal system or standing up for your rights,
              we are here to ensure that no one is left behind.
            </Typography>

            <Typography className="mb-6 font-normal !text-gray-600">
              Our vision for a better Canada is one where justice knows no
              bounds. We envision a society where everyone, regardless of their
              background or circumstances, can access the legal support they
              need. But our vision doesn&quot;t stop there. We believe in the
              power of communities to drive real change. That&quot;s why
              we&quot;re committed to fostering active engagement and
              collaboration, empowering individuals to become advocates for
              systemic reform and equity.
            </Typography>
            <Typography className="mb-6 font-normal !text-gray-600">
              As we embark on this journey together, we invite you to join us in
              our mission. Together, we can build a future where justice is not
              just a privilege, but a fundamental right for all.
            </Typography>
            <Typography className="mb-6 font-normal !text-gray-600">
              Prior to founding ABC Foundation, I held various roles in real
              estate, oil & gas, finance, automotive, and construction sectors,
              honing my skills in project management, client relations, and
              organizational efficiency. My diverse background has equipped me
              with a keen understanding of community needs and a holistic
              approach to problem-solving.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FounderMessage;
