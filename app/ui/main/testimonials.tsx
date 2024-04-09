"use client";

import { UserIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardBody,
  Typography,
  Avatar,
  CardHeader,
  IconButton,
} from "@material-tailwind/react";

interface TestimonialCardPropsType {
  img: string;
  feedback: string;
  client: string;
  title: string;
}

function TestimonialCard({
  img,
  feedback,
  client,
  title,
}: TestimonialCardPropsType) {
  return (
    <Card shadow={false} className="items-center text-center">
      <CardHeader shadow={false} floated={false}>
        <Avatar src={img} alt={client} size="lg" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="font-medium">
          {client}
        </Typography>
        <Typography
          variant="small"
          className="mb-4 mt-1 font-medium !text-gray-500"
        >
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          className="mb-5 font-normal !text-gray-500"
        >
          &quot;{feedback}&quot;
        </Typography>
      </CardBody>
    </Card>
  );
}

const testimonials = [
  {
    feedback:
      "Don't walk behind me; I may not lead. Don't walk in front of me; I may not follow. Just walk beside me and be my friend.",
    client: "Jessica Devis",
    title: "CEO @ MARKETING DIGITAL LTD.",
    img: "https://www.material-tailwind.com/img/avatar1.jpg",
  },
  {
    feedback:
      "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.",
    client: "Mary Joshiash",
    title: "MARKETING @ APPLE INC.",
    img: "https://www.material-tailwind.com/image/avatar4.jpg",
  },
  {
    feedback:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    client: "Marcell Glock",
    title: "CFO @ APPLE INC..",
    img: "https://www.material-tailwind.com/image/avatar8.svg",
  },
];

export function TestimonialSection6() {
  return (
    <section className="px-8 py-10 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-20 text-center">
          <IconButton size="lg">
            <UserIcon className="h-6 w-6" />
          </IconButton>
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-4 mt-10 text-3xl lg:text-5xl"
          >
            What Clients Say
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto max-w-3xl !text-gray-500"
          >
            We&apos;re constantly trying to express ourselves and actualize our
            dreams. If you have the opportunity to play.
          </Typography>
        </div>
        <div className="grid gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection6;
