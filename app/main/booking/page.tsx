import React from "react";

import NavBar from "../../ui/components/navbar";
import { HeroSection } from "../../ui/booking/hero";
import { ContactSection1 } from "../../ui/booking/contact";
import CalendarBooking from "../../ui/booking/calendar";
import { Footer4 } from "../../ui/components/footer";

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
