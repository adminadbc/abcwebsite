import { Card, CardBody, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { TbTopologyStarRing3 } from "react-icons/tb";

export function LogoSection6() {
  return (
    <section className="py-8 px-8 lg:py-20 ">
      <div className="container mx-auto mb-10 text-center lg:mb-20">
        <h2 className="mb-4 text-3xl font-normal lg:text-6xl">
          Our Philosophy of Empowerment
        </h2>
        <div className="relative flex py-5 w-1/2  mx-auto items-center">
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
          <p className="mx-5 text-center">
            <TbTopologyStarRing3 />
          </p>
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
        </div>
        <p className="mx-auto text-2xl max-w-2xl ">
          The Advocacy for Better Communities Foundation incorporates two key
          elements: the concept of &#x2019;six degrees of separation&#x2019; and
          the dharma chakra.
        </p>
      </div>

      <div className="container !mx-auto text-center px-4 place-content-center grid">
        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-6">
            <Card shadow={false} className="bg-[#FAFAFA] px-10">
              <CardBody>
                <p className="font-normal">
                  Six Degrees of Separation: This symbolizes the
                  interconnectedness of individuals and communities,
                  highlighting our belief that every person&#x2019;s actions can
                  create ripples of change that resonate throughout society.
                </p>
              </CardBody>
            </Card>
          </div>
          <Card
            shadow={false}
            className="bg-[#FAFAFA] lg:px-10 justify-center mx-auto w-full max-w-[18rem] lg:max-w-lg"
          >
            <CardBody className="text-center">
              <Image
                src="/04-2.png"
                alt="logo"
                className="w-40 mx-auto"
                width={100}
                height={100}
              />
            </CardBody>
          </Card>
          <div className="flex flex-col justify-center gap-6">
            <Card shadow={false} className="bg-[#FAFAFA] px-10">
              <CardBody>
                <p className="font-normal">
                  Dharma Chakra: The dharma chakra, or wheel of dharma,
                  represents justice, righteousness, and the path to
                  enlightenment. It signifies our commitment to advocating for
                  fair and just outcomes for all members of society.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoSection6;
