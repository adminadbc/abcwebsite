import React from "react";
import NavBar from "@/app/ui/components/navbar";
import { TermsPage } from "@/app/ui/legal/terms/terms";
import { TermHeroSection } from "@/app/ui/legal/terms/hero";
import { Footer4 } from "@/app/ui/components/footer";

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
