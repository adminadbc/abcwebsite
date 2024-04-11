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
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { GrNext, GrPrevious } from "react-icons/gr";



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
    <section className="px-8 py-10 text-center lg:py-28 relative">
      <h3 className="text-3xl font-semibold">What clients has to say</h3>
      <div className="bg-black mx-auto rounded-md relative p-20 mt-20  md:w-1/2 lg:w-2/3">
        <div className="rounded-full h-24 w-24
        border-8 border-white mx-auto bg-cover bg-center 
        bg-[url('https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
        -mt-32">
        </div>
    
        <div className="text-white mt-10 space-y-2">
            <h4 className="text-2xl font-semibold">John Nelson</h4>
            <span className="">CE0, Mavis</span>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus labore animi voluptas fugit commodi quae exercitationem quod a eligendi maiores odit,
               temporibus quos placeat! Consequuntur fugit vel ducimus expedita? Ratione.
            </p>
          </div>
          <FaQuoteLeft className="absolute -top-4 -left-6 bg-white rounded-full border-8 border-white" size={60} color="#B49712" />
          <FaQuoteRight className="absolute -bottom-4 -right-6 bg-white rounded-full border-8 border-white" size={60} color="#B49712" />
       </div>

       <GrPrevious size={40} color="black" className="top-[55%] left-10 md:left-28 absolute"/>
       <GrNext size={40} color="black" className="top-[55%] right-10 md:right-28 absolute"/>
    </section>
  );
}

export default TestimonialSection6;
