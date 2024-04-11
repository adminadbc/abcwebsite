"use client";
import Link from "next/link";
import Image from "next/image";

export function FounderMessage() {
  return (
    <section className="py-10 lg:my-10 px-8">
      <div className="text-center my-12">
        <h2 className="text-4xl lg:text-5xl ">Founder&#39;s Message</h2>

        <div className="flex-grow border-t-4 border-abcf w-1/2 mx-auto mt-2"></div>
      </div>
      <div className="flex flex-row-reverse flex-wrap-reverse max-w-7xl mx-auto my-auto items-center place-items-center justify-around">
        <div className="lg:max-w-md">
          <h2
            color="blue-gray"
            className="mb-6 lg:text-3xl text-2xl font-semibold lg:max-w-md"
          >
            So what does the new record for the lowest level of winter ice
            actually mean
          </h2>
          <p className="text-xl font-normal mb-12 text-gray-800">
            The Arctic Ocean freezes every winter and much of the sea-ice then
            thaws every summer, and that process will continue whatever happens
            with climate change. Even if the Arctic continues to be one of the
            fastest-warming regions of the world, it will always be plunged into
            bitterly cold polar dark every winter. And year-by-year, for all
            kinds of natural reasons, there&apos;s huge variety of the state of
            the ice.
            <br />
            <br />
            For a start, it does not automatically follow that a record amount
            of ice will melt this summer. More important for determining the
            size of the annual thaw is the state of the weather as the midnight
            sun approaches and temperatures rise. But over the more than 30
            years of satellite records, scientists have observed a clear pattern
            of decline, decade-by-decade.
          </p>
          <p className="text-xl mb-8 font-normal text-gray-800">
            The Arctic Ocean freezes every winter and much of the sea-ice then
            thaws every summer, and that process will continue whatever happens
            with climate change. Even if the Arctic continues to be one of the
            fastest-warming regions of the world, it will always be plunged into
            bitterly cold polar dark every winter. And year-by-year, for all
            kinds of natural reasons, there&apos;s huge variety of the state of
            the ice.
          </p>
          <Link href="" className="mt-9 bg-abcf px-20 text-white text-lg py-3">
            {" "}
            Read More{" "}
          </Link>
        </div>
        <div>
          <Image
            src="/angie-lal.jpg"
            alt="team work"
            className="mb-6 h-full lg:h-[750px] w-full shadow-lg"
            width={370}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}

export default FounderMessage;
