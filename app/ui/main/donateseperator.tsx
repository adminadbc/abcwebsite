import Link from "next/link";
import { Button } from "@material-tailwind/react";

export function DonateSeperator() {
  return (
    <div className="bg-gradient-to-r bg-brand1  py-14 my-16 px-10 md:px-28 text-white">
      <h3 color="blue-gray" className="font-bold mb-2">
        We People in Need
      </h3>
      <h3 className="font-bold text-2xl md:text-4xl w-2/3 mb-5">
        Donate for a Cause That Matters
      </h3>
      <div className="flex-grow border-t-4 border-abcf w-1/3"></div>
      <h3 className="my-5 !text-base font-normal ">
        Be a part of the movement to make a difference in the lives of those in
        need.
      </h3>

      <Link href="https://donate.abcfoundationconnect.com/b/8wMaEK1aw8OGdj2144">
        <Button className="bg-abcf text-black" size="lg">
          Donate
        </Button>
      </Link>
    </div>
  );
}
export default DonateSeperator;
