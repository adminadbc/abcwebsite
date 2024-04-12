import Link from "next/link";

export function WidgetsExample6() {
  return (
    // CHANGED THE ALIGNMENT OF THE WIDGET TO CENTER BASE OF THE VIEW
    <div className="rounded-xl bg-gradient-to-r from-abcf to-yellow-700  py-14 my-16 px-10 md:px-28 text-center">
      <h3 className="font-bold text-2xl md:text-4xl w-2/3 mx-auto mb-10">
        Lorem ipsum dolor, sit amet consectetur adipisimos illatis vel
        aspernatur.
      </h3>
      <Link
        href=""
        className="text-white bg-black px-14 py-3 text-lg rounded-lg"
      >
        Book a call
      </Link>
    </div>
  );
}
export default WidgetsExample6;
