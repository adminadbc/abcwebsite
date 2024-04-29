"use client";

import { Typography, Chip } from "@material-tailwind/react";

export function ContentSection7() {
  return (
    <section className="mx-auto container px-8 lg:py-28 py-10">
      <div className="text-center lg:mb-20 mb-10">
        <Chip
          color="gray"
          value="education"
          size="lg"
          className="mb-6 max-w-fit mx-auto"
        />
        <Typography variant="h2" color="blue-gray">
          Stay tuned for our Education portal
        </Typography>
        <Typography
          variant="lead"
          className="mt-4 max-w-4xl mx-auto !text-gray-500"
        >
          Our education initiative aims to empower individuals by providing
          accessible seminars that illuminate various aspects of the law,
          enabling better understanding and protection of legal rights in
          everyday life.
        </Typography>
      </div>
    </section>
  );
}

export default ContentSection7;
