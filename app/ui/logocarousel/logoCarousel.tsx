import Image from "next/image";
import Alberta from "@/public/partnerimages/alberta.png";
import Canva from "@/public/partnerimages/canva.png";
import Google from "@/public/partnerimages/google.png";
import Maverick from "@/public/partnerimages/maverick.png";
import Microsoft from "@/public/partnerimages/microsoft.png";
import Vite from "@/public/partnerimages/vite.png";
import styles from "./LogoCarousel.module.css";
import { TbTopologyStarRing3 } from "react-icons/tb";

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
    <div className="container mx-auto my-10 text-center lg:mb-20">
      <div>
        <h2 className="mb-4 text-3xl font-normal lg:text-6xl">
          Partners & Patrons
        </h2>
        <div className="relative flex py-5   mx-auto items-center">
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
          <p className="mx-5 text-center">
            <TbTopologyStarRing3 />
          </p>
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
        </div>
      </div>
      <div className="relative flex overflow-x-hidden bg-white shadow-black-900/50">
        <ul className="flex pt-16 animate-marquee whitespace-nowrap items-center">
          {logos.map((logo, index) => (
            <li key={index} className="text-4xl mx-4">
              <div className={styles["logo-container"]}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={150}
                  layout="responsive"
                />
              </div>
            </li>
          ))}
        </ul>
        <ul className="flex mx-5 absolute top-0 pt-16 animate-marquee2 whitespace-nowrap items-center">
          {logos.map((logo, index) => (
            <li key={index} className="text-4xl mx-4">
              <div className={styles["logo-container"]}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={150}
                  layout="responsive"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
