import React from "react";

import NavBar from "../../ui/components/navbar";
import { HeroSection } from "../../ui/contact/hero";
import { ContactSection1 } from "../../ui/contact/contact";
import { NewsLetter1 } from "../../ui/contact/newsletter";
import { Footer4 } from "../../ui/components/footer";

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
