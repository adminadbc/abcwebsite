import Image from "next/image";
import Alberta from "@/public/partnerimages/alberta.png";

import Canva from "@/public/partnerimages/canva.png";
import Google from "@/public/partnerimages/google.png";

import Maverick from "@/public/partnerimages/maverick.png";
import Microsoft from "@/public/partnerimages/microsoft.png";
import Vite from "@/public/partnerimages/vite.png";

export default function LogoCarousel() {
  const logos = [
    { src: Alberta, alt: "Alberta Government" },
    { src: Canva, alt: "Canva" },
    { src: Google, alt: "Google" },
    { src: Microsoft, alt: "Microsoft" },
    { src: Vite, alt: "Vite Consulting" },
    { src: Maverick, alt: "Maverick Foundation" },
  ];

  return (
    <div className="relative flex overflow-x-hidden bg-white shadow-black-900/50">
      <ul className="flex py-12 animate-marquee whitespace-nowrap items-center">
        {logos.map((logo, index) => (
          <li key={index} className="text-4xl mx-4">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={0}
              height={0}
              sizes="100vw 50vh"
              style={{ width: "100%", height: "auto" }}
            />
          </li>
        ))}
      </ul>
      <ul className="flex mx-5 absolute top-0 py-12 animate-marquee2 whitespace-nowrap items-center">
        {logos.map((logo, index) => (
          <li key={index} className="text-4xl mx-4">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
