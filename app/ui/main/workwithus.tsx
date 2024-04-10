"use client";

import Image from "next/image";
import Link from "next/link";

export function WorkWithUs() {
  return (
      <div className="rounded-xl bg-[#F8F4E1]  p-10 flex flex-wrap justify-around items-center">
        <div className="mb-9 md:w-4/5 lg:w-2/5">
          <h3 className="text-4xl mb-5">Work With US</h3>
          <h4 className=" font-bold text-2xl">Volunteering:</h4>
          <p className="mt-2 mb-6 text-base ">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Ciceros De Finibus Bonorum et
            Malorum for use in a type specimen book. It usually begins with
          </p>
          <br></br>
          <h4 className=" font-bold text-2xl">Partners:</h4>
          <p className="mt-2 mb-6 text-base">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Ciceros De Finibus Bonorum et
            Malorum for use in a type specimen book. It usually begins with
          </p>
            <Link href="" className="bg-[#B49712] rounded-md px-16 py-3 text-white" >Contact us </Link>
        </div>
        <div className="flex flex-wrap">
          <Image
            src="/volunteer.jpg"
            alt="volunteering"
            width={300}
            height={300}
          />
        </div>
      </div>
  );
}
export default WorkWithUs;
