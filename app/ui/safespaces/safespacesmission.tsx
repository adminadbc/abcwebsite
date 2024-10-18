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
  ChevronRightIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  AcademicCapIcon,
  UserCircleIcon,
  BriefcaseIcon
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
        className="border !rounded-lg border-gray-300 transition-all duration-500 ease-in-out group-hover:!border-abcf"
      >
        <CardBody className="grid place-items-center text-center">
          {icon}
          <Typography color="blue-gray" className="!font-semibold mt-4">
            {title}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}

const data = [
  {
    icon: <ShieldCheckIcon className="h-16 w-16 text-abcf transition-all duration-500 ease-in-out group-hover:text-[#8a7410]" />,
    title: "Safe Spaces",
  },
  {
    icon: <LockClosedIcon className="h-16 w-16 text-abcf transition-all duration-500 ease-in-out group-hover:text-[#8a7410]" />,
    title: "Provide Confidential Support",
  },
  {
    icon: <AcademicCapIcon className="h-16 w-16 text-abcf transition-all duration-500 ease-in-out group-hover:text-[#8a7410]" />,
    title: "Offer Expert Guidance through Qualified Professionals",
  },
  {
    icon: <UserCircleIcon className="h-16 w-16 text-abcf transition-all duration-500 ease-in-out group-hover:text-[#8a7410]" />,
    title: "Enhance Accessibility",
  },
  {
    icon: <LightBulbIcon className="h-16 w-16 text-abcf transition-all duration-500 ease-in-out group-hover:text-[#8a7410]" />,
    title: "Empower Through Knowledge",
  },
  {
    icon: <HeartIcon className="h-16 w-16 text-abcf transition-all duration-500 ease-in-out group-hover:text-[#8a7410]" />,
    title: "Promote Community Well-being",
  },
  {
    icon: <BriefcaseIcon className="h-16 w-16 text-abcf transition-all duration-500 ease-in-out group-hover:text-[#8a7410]" />,
    title: "Encourage Professional Engagement",
  },
  {
    icon: <HandRaisedIcon className="h-16 w-16 text-abcf transition-all duration-500 ease-in-out group-hover:text-[#8a7410]" />,
    title: "Foster a Welcoming Atmosphere",
  },
  {
    icon: <MegaphoneIcon className="h-16 w-16 text-abcf transition-all duration-500 ease-in-out group-hover:text-[#8a7410]" />,
    title: "Raise Awareness and Outreach",
  },
  {
    icon: <BookOpenIcon className="h-16 w-16 text-abcf transition-all duration-500 ease-in-out group-hover:text-[#8a7410]" />,
    title: "Support Continuous Learning and Improvement",
  },
];

export function SafeSpacesMission() {
  return (
    <section className="px-8 mt-5 mb-10">
      <div className="container mx-auto">
        <div className="flex justify-center my-5">
          <div className="w-full sm:w-1/2 lg:w-1/3 aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/safe-spaces/safe-spaces.png"
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

export default SafeSpacesMission;
