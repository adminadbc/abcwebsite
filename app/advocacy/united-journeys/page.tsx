import React from "react";

import NavBar from "@/app/ui/components/navbar";
import { HeroSection } from "@/app/ui/education/hero";
import { ContentSection7 } from "@/app/ui/education/body";
import { Footer4 } from "@/app/ui/components/footer";

function page() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ContentSection7 />
      <Footer4 />
    </div>
  );
}

export default page;
