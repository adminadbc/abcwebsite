"use client";

import React from "react";

export function CalendarHero() {
  return (
    <div className="relative h-[32rem] w-full  bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-brand2" />
      <div className="grid min-h-[35rem] px-12">
        <div className="container relative z-10 my-auto mx-auto text-center">
          <h1 className="my-4 text-3xl text-white !leading-snug lg:text-5xl">
            Event&apos;s Calendar
          </h1>
          <div className="flex-grow border-t-4 border-abcf w-1/5 mx-auto mt-2"></div>
        </div>
      </div>
    </div>
  );
}

export default CalendarHero;
