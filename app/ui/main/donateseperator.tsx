import Link from "next/link";
import { Button } from "@material-tailwind/react";

export function DonateSeperator() {
  return (
    <div className="bg-gradient-to-r bg-black/35  py-14 my-16 px-10 md:px-28">
      <h3 color="blue-gray" className="font-bold mb-2">
        We People in Need
      </h3>
      <h3 className="font-bold text-2xl md:text-4xl w-2/3 mb-10">
        Donate for a Cause That Matters
      </h3>
      <h3 className="mt-2 mb-6 !text-base font-normal text-black-500">
        Be a part of the movement to make a difference in the lives of those in
        need.
      </h3>
      <Link href="https://donate.abcfoundationconnect.com/b/8wMaEK1aw8OGdj2144">
        <Button className="bg-abcf text-black">Donate</Button>
      </Link>
    </div>
  );
}
export default DonateSeperator;
