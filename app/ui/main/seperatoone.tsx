import Link from "next/link";
import { Button } from "@material-tailwind/react";

export function WidgetsExample6() {
  return (
    // CHANGED THE ALIGNMENT OF THE WIDGET TO CENTER BASE OF THE VIEW
    <div className="bg-gradient-to-r bg-brand2  py-14 my-16 px-10 md:px-28 text-white">
      <h3 color="blue-gray" className="font-bold mb-2">
        Your path to justice starts here
      </h3>
      <h3 className="font-bold text-2xl md:text-4xl w-2/3 mb-5">
        Ready to take the first step towards resolving your legal matters?
      </h3>
      <div className="flex-grow border-t-4 border-abcf w-2/3"></div>
      <h3 className="my-5 !text-base font-normal">
        Book an appointment with ABC Foundation today and let us guide you
        towards the solutions you deserve
      </h3>

      <Link href="/main/booking">
        <Button className="bg-abcf text-black w-42 text-lg" size="lg">
          Book an appointment
        </Button>
      </Link>
    </div>
  );
}
export default WidgetsExample6;
