import React from "react";
import { Footer4 } from "@/app/ui/components/footer";
import { CalendarHero } from "@/app/ui/calendar/hero";

function Page() {
  return (
    <div>
      <CalendarHero />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <iframe
          src="https://calendar.google.com/calendar/embed?src=c_d82befa4d0ec6579976f6f8cdc00e0a3a5c9d4db6c3c0e945fc114ab3351701b%40group.calendar.google.com&ctz=America%2FEdmonton"
          style={{ border: "0" }}
          width="1200"
          height="800"
          frameBorder="0"
          scrolling="no"
          title="Google Calendar"
        ></iframe>
      </div>
      <Footer4 />
    </div>
  );
}

export default Page;
