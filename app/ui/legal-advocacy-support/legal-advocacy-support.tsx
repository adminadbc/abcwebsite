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
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
  HomeIcon,
  ComputerDesktopIcon,
  ScaleIcon,
  LinkIcon
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
    icon: <ScaleIcon className="h-16 w-16 text-abcf transition-all duration-500 ease-in-out group-hover:text-[#8a7410]" />,
    title: "Legal Advocacy & Support",
  },
  {
    icon: <BookOpenIcon className="h-16 w-16 text-abcf transition-all duration-500 ease-in-out group-hover:text-[#8a7410]" />,
    title: "Ensure Access to Legal Resources",
  },
  {
    icon: <MegaphoneIcon className="h-16 w-16 text-abcf transition-all duration-500 ease-in-out group-hover:text-[#8a7410]" />,
    title: "Promote Legal Rights Awareness",
  },
  {
    icon: <HandRaisedIcon className="h-16 w-16 text-abcf transition-all duration-500 ease-in-out group-hover:text-[#8a7410]" />,
    title: "Offer Advocacy and Representation",
  },
  {
    icon: <UserGroupIcon className="h-16 w-16 text-abcf transition-all duration-500 ease-in-out group-hover:text-[#8a7410]" />,
    title: "Foster Inclusive Legal Support",
  },
  {
    icon: <LinkIcon className="h-16 w-16 text-abcf transition-all duration-500 ease-in-out group-hover:text-[#8a7410]" />,
    title: "Strengthen Community Connections",
  },
];

export function LegalAdvocacySupportMission() {
  return (
    <section className="px-8 mt-5 mb-10">
      <div className="container mx-auto">
        <div className="flex justify-center my-5">
          <div className="w-full sm:w-1/2 lg:w-1/3 aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/legal-advocacy-support/las.png"
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

export default LegalAdvocacySupportMission;
