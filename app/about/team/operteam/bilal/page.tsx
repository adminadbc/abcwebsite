import React from "react";
import NavBar from "@/app/ui/components/navbar";
import { HeroSection } from "@/app/ui/about/hero";
import { Footer4 } from "@/app/ui/components/footer";

import { Bilal } from "@/app/ui/about/operteam/bilal";

function FounderPage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Bilal />
      <Footer4 />
    </div>
  );
}

export default FounderPage;
