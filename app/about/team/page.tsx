import React from "react";
import NavBar from "@/app/ui/components/navbar";
import { Footer4 } from "@/app/ui/components/footer";
import { HeroSection } from "@/app/ui/about/hero";
import { ExecTeam } from "@/app/ui/about/execteam";
import { OperTeam } from "@/app/ui/about/operteam";

function TeamPage() {
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

export default TeamPage;
