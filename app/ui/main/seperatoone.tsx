import Link from "next/link";
import { Button, Typography } from "@material-tailwind/react";

export function WidgetsExample6() {
  return (
    // CHANGED THE ALIGNMENT OF THE WIDGET TO CENTER BASE OF THE VIEW
    <div className="rounded-xl bg-gradient-to-r from-abcf to-orange-400  py-14 my-16 px-10 md:px-28 text-center">
      <h3 className="font-bold text-2xl md:text-4xl w-2/3 mx-auto mb-10">
        Schedule your appointment with us for personalized guidance and
        solutions.
      </h3>

      <Link href="/main/booking">
        <Button className="bg-black text-white">Book an appointment</Button>
      </Link>
    </div>
  );
}
export default WidgetsExample6;
