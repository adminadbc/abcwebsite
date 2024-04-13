"use client";

import Image from "next/image";
import Link from "next/link";

export function WorkWithUs() {
  return (
    <div className="rounded-xl bg-gradient-to-r from-abcf to-orange-400 w-screen overflow-hidden p-10 flex flex-wrap-reverse justify-around items-center">
      <div className="mb-9 md:w-4/5 lg:w-2/5">
        <h3 className="text-4xl font-semibold">Work With Us</h3>
        <div className="flex-grow border-t-4 border-white w-80 my-10"></div>
        <h4 className=" font-bold text-2xl mt-3">To Volunteers:</h4>
        <p className="mt-2 mb-6 text-base ">
          Volunteering with the ABC Foundation is an opportunity to actively
          contribute to our mission of promoting justice, advocating for
          marginalized voices, and educating communities on legal rights. As a
          volunteer, you&quot;ll play a vital role in organizing impactful
          seminars and sessions with community stakeholders, fostering dialogue,
          and empowering individuals to navigate the legal system confidently.
          Join us in making a difference and creating a more equitable and
          inclusive society for all.
        </p>
        <Link
          href="mailto:info@abcfoundationconnect.com?subject=We%20are%20interested%20in%20volunteering"
          className="bg-black rounded-md px-16 py-3 text-white"
          target="_blank"
          rel="noreferrer"
        >
          Contact us{" "}
        </Link>
        <br></br>
        <h4 className="mt-10 font-bold text-2xl">To Partners:</h4>
        <p className="mt-2 mb-6 text-base">
          Partnering on matters related to empowering the community in legal
          navigation and advocating for fair outcomes is crucial. It enhances
          legal resource accessibility, addresses unaddressed issues through
          advocacy, and improves legal education and navigation. These
          partnerships promote fairness and inclusivity, ensuring equitable
          access to justice for all. Besides, they contribute to a more
          equitable and inclusive society where everyone has equal access to
          justice. Besides, they contribute to a more equitable and inclusive
          society where everyone has equal access to justice.
        </p>
        <Link
          href="mailto:info@abcfoundationconnect.com?subject=We%20are%20interested%20in%20partnership"
          className="bg-black rounded-md px-16 py-3 text-white"
          target="_blank"
          rel="noreferrer"
        >
          Contact us{" "}
        </Link>
      </div>
      <div className="mb-10">
        <Image
          src="/volunteer.jpg"
          alt="volunteering"
          className="h-full w-full"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
export default WorkWithUs;
