import React from "react";

import NavBar from "@/app/ui/components/navbar";
import { HeroSection } from "@/app/ui/contact/hero";
import { ContactSection1 } from "@/app/ui/contact/contact";
import { NewsLetter1 } from "@/app/ui/contact/newsletter";
import { Footer4 } from "@/app/ui/components/footer";

function ContactPage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ContactSection1 />
      <NewsLetter1 />
      <Footer4 />
    </div>
  );
}

export default ContactPage;
