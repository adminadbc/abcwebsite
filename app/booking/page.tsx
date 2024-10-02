import React from "react";

import NavBar from "@/app/ui/components/navbar";
import { HeroSection } from "@/app/ui/booking/hero";
import { ContactSection1 } from "@/app/ui/booking/contact";
import CalendarBooking from "@/app/ui/booking/calendar";
import { Footer4 } from "@/app/ui/components/footer";

function BookingPage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ContactSection1 />
      <CalendarBooking />
      <Footer4 />
    </div>
  );
}

export default BookingPage;
