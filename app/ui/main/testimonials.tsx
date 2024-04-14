import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { TbTopologyStarRing3 } from "react-icons/tb";

export function LogoSection6() {
  return (
    <section className="py-8 px-8 lg:py-20 ">
      <div className="container !mx-auto text-center px-4 place-content-center grid">
        <Typography
          variant="h1"
          color="blue-gray"
          className="my-4 !text-2xl !leading-snug lg:!text-3xl"
        >
          Our Philosophy of Empowerment
        </Typography>
        <div className="relative flex py-5 w-1/2 px-10 mx-auto items-center">
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
          <p className="mx-5  text-center">
            <TbTopologyStarRing3 />
          </p>
          <div className="flex-grow border-t-4 border-abcf w-96"></div>
        </div>

        <Typography className="mx-auto w-1/2 px-5  !text-gray-500 lg:px-8 mb-10">
          The Advocacy for Better Communities Foundation incorporates two key
          elements: the concept of &quot;six degrees of separation&quot; and the
          dharma chakra.
        </Typography>
        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-6 w-80">
            <Card shadow={false} className="bg-[#FAFAFA] px-10">
              <CardBody>
                <Typography
                  variant="small"
                  className="font-normal text-gray-500"
                >
                  **Six Degrees of Separation:** This symbolizes the
                  interconnectedness of individuals and communities,
                  highlighting our belief that every person&quot;s actions can
                  create ripples of change that resonate throughout society.
                </Typography>
              </CardBody>
            </Card>
          </div>
          <Card
            shadow={false}
            className="bg-[#FAFAFA] lg:px-10 justify-center max-w-[18rem] lg:max-w-lg"
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
          <div className="flex flex-col items-center justify-center gap-6 w-80">
            <Card shadow={false} className="bg-[#FAFAFA] px-10">
              <CardBody>
                <Typography
                  variant="small"
                  className="font-normal text-gray-500"
                >
                  **Dharma Chakra:** The dharma chakra, or wheel of dharma,
                  represents justice, righteousness, and the path to
                  enlightenment. It signifies our commitment to advocating for
                  fair and just outcomes for all members of society.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoSection6;
