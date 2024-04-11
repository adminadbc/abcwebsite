import React from "react";
import NavBar from "../../ui/components/navbar";
import { Footer4 } from "../../ui/components/footer";
import { HeroSection } from "../../ui/about/hero";
import { ExecTeam } from "../../ui/about/execteam";
import { OperTeam } from "../../ui/about/operteam";

function AboutPage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ExecTeam />
      <OperTeam />
      <Footer4 />
    </div>
  );
}

export default AboutPage;
