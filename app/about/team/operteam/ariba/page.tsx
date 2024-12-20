import React from "react";
import NavBar from "@/app/ui/components/navbar";
import { HeroSection } from "@/app/ui/about/hero";
import { Footer4 } from "@/app/ui/components/footer";

import { Ariba } from "@/app/ui/about/operteam/ariba";

function FounderPage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Ariba />
      <Footer4 />
    </div>
  );
}

export default FounderPage;
