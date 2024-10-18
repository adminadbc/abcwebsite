// @components
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import Image from "next/image";

// @icons
import { 
  HandRaisedIcon,
  UsersIcon,
  UserGroupIcon,
  GlobeAltIcon,
  BookOpenIcon,
  HandThumbUpIcon,
  HeartIcon,
  LightBulbIcon,
  ArrowTrendingUpIcon,
  MegaphoneIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";

interface CategoriesCardPropsType {
  icon: React.ReactNode;
  title: string;
}

function CategoriesCard({ icon, title }: CategoriesCardPropsType) {
  return (
    <div className="group">
      <Card
        shadow={false}
        className="border !rounded-lg border-gray-300 transition-all duration-500 ease-in-out group-hover:!border-abcf h-full"
      >
        <CardBody className="grid place-items-center text-center p-6">
          {icon}
          <Typography color="blue-gray" className="!font-semibold mt-4 line-clamp-2">
            {title}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}

const data = [
  {
    icon: <HandRaisedIcon className="h-16 w-16 text-abcf transition-all duration-500 ease-in-out group-hover:text-[#8a7410]" />,
    title: "Engage Alberta",
  },
  {
    icon: <UsersIcon className="h-16 w-16 text-abcf transition-all duration-500 ease-in-out group-hover:text-[#8a7410]" />,
    title: "Inclusivity",
  },
  {
    icon: <UserGroupIcon className="h-16 w-16 text-abcf transition-all duration-500 ease-in-out group-hover:text-[#8a7410]" />,
    title: "Community and Individual Empowerment",
  },
  {
    icon: <GlobeAltIcon className="h-16 w-16 text-abcf transition-all duration-500 ease-in-out group-hover:text-[#8a7410]" />,
    title: "Community Collaboration",
  },
  {
    icon: <BookOpenIcon className="h-16 w-16 text-abcf transition-all duration-500 ease-in-out group-hover:text-[#8a7410]" />,
    title: "Cultural Sensitivity",
  },
  {
    icon: <LightBulbIcon className="h-16 w-16 text-abcf transition-all duration-500 ease-in-out group-hover:text-[#8a7410]" />,
    title: "Awareness and Education",
  },
  {
    icon: <HandThumbUpIcon className="h-16 w-16 text-abcf transition-all duration-500 ease-in-out group-hover:text-[#8a7410]" />,
    title: "Advocacy and Support",
  },
  {
    icon: <HeartIcon className="h-16 w-16 text-abcf transition-all duration-500 ease-in-out group-hover:text-[#8a7410]" />,
    title: "Accessibility",
  },
  {
    icon: <ArrowTrendingUpIcon className="h-16 w-16 text-abcf transition-all duration-500 ease-in-out group-hover:text-[#8a7410]" />,
    title: "Sustainability",
  },
  {
    icon: <ArrowTrendingUpIcon className="h-16 w-16 text-abcf transition-all duration-500 ease-in-out group-hover:text-[#8a7410]" />,
    title: "Evaluation and Impact",
  },
  {
    icon: <MegaphoneIcon className="h-16 w-16 text-abcf transition-all duration-500 ease-in-out group-hover:text-[#8a7410]" />,
    title: "Community Engagement",
  },
];

export function EngMission() {
  return (
    <section className="px-8 mt-5 mb-10">
      <div className="container mx-auto">
        <div className="flex justify-center my-5">
          <div className="w-full sm:w-1/2 lg:w-1/3 aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/engage/engage.png"
              alt="Engage Logo"
              className="w-full h-full object-cover"
              width={400}
              height={400}
            />
          </div>
        </div>
        
        <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {data.map((props, key) => (
            <CategoriesCard key={key} {...props} />
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default EngMission;
