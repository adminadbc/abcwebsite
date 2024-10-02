import React from "react";
import NavBar from "@/app/ui/components/navbar";
import { HeroSection } from "@/app/ui/legal/privacy/hero";
import { Footer4 } from "@/app/ui/components/footer";
import { ContentSection16 } from "@/app/ui/legal/privacy/privacy";

function privacyPage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ContentSection16 />
      <Footer4 />
    </div>
  );
}

export default privacyPage;
