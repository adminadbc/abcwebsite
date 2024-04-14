import React from "react";
import NavBar from "../../ui/components/navbar";
import { HeroSection } from "../../ui/legal/privacy/hero";
import { Footer4 } from "../../ui/components/footer";
import { ContentSection16 } from "../../ui/legal/privacy/privacy";

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
