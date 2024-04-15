import React from "react";
import NavBar from "../../ui/components/navbar";
import { TermsPage } from "../../ui/legal/terms/terms";
import { TermHeroSection } from "../../ui/legal/terms/hero";
import { Footer4 } from "../../ui/components/footer";

function privacyPage() {
  return (
    <div>
      <NavBar />
      <TermHeroSection />
      <TermsPage />
      <Footer4 />
    </div>
  );
}

export default privacyPage;
