import React from "react";

import NavBar from "@/app/ui/components/navbar";
import { HeroSection } from "@/app/ui/changemaker/hero";
import { ContentSection11 } from "@/app/ui/changemaker/body";
import { Footer4 } from "@/app/ui/components/footer";

function page() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ContentSection11 />
      <Footer4 />
    </div>
  );
}

export default page;
