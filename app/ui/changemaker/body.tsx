"use client";

import { Typography, Chip } from "@material-tailwind/react";

export function ContentSection7() {
  return (
    <section className="mx-auto container px-8 lg:py-28 py-10">
      <div className="text-center lg:mb-20 mb-10">
        <Chip
          color="gray"
          value="changemaker"
          size="lg"
          className="mb-6 max-w-fit mx-auto"
        />
        <Typography variant="h2" color="blue-gray">
          Stay tuned for our Changemakers portal
        </Typography>
        <Typography
          variant="lead"
          className="mt-4 max-w-4xl mx-auto !text-gray-500"
        >
          If you can’t decide, the answer is no. If two equally difficult paths,
          choose the one more painful in the short term (pain avoidance is
          creating an illusion of equality).
        </Typography>
      </div>
    </section>
  );
}

export default ContentSection7;
