import Link from "next/link";
import { Button } from "@material-tailwind/react";

export function DonateSeperator() {
  return (
    <div className="bg-gradient-to-r bg-brand2  py-14 px-10 md:px-28 text-white">
      <h3 color="blue-gray" className="font-bold mb-2">
        Join us in making a difference today
      </h3>
      <h3 className="font-bold text-2xl md:text-4xl w-2/3 mb-5">
        Empower change. Donate to ABC Foundation now!
      </h3>
      <div className="flex-grow border-t-4 border-abcf w-1/3"></div>
      <h3 className="my-5 !text-base font-normal ">
        Your support can empower communities, promote access to justice, and
        create positive change
      </h3>

      <Link
        href="https://donate.abcfoundationconnect.com/b/8wMaEK1aw8OGdj2144"
        target="_blank"
        rel="noreferrer"
      >
        <Button className="bg-abcf text-black w-36 text-lg" size="lg">
          Donate
        </Button>
      </Link>
    </div>
  );
}
export default DonateSeperator;
