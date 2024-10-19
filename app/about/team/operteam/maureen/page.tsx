import React from "react";
import NavBar from "@/app/ui/components/navbar";
import { HeroSection } from "@/app/ui/about/hero";
import { Footer4 } from "@/app/ui/components/footer";

import { MaurenBio } from "@/app/ui/about/operteam/maureen";

function MaurenPage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <MaurenBio />
      <Footer4 />
    </div>
  );
}

export default MaurenPage;
