/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react

"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function MyApp() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#021D2C" } },
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#021D2C",
            "cal-text": "#021D2C",
            "cal-text-emphasis": "#021D2C",
            "cal-border-emphasis": "#021D2C",
            "cal-text-error": "red",
            "cal-border": "#021D2C",
            "cal-border-default": "#021D2C",
            "cal-border-subtle": "#021D2C",
            "cal-border-booker": "#021D2C",
            "cal-text-muted": "#a28810",
            "cal-bg-emphasis": "#B49712",
            // More CSS variables are defined here
            // https://github.com/calcom/cal.com/blob/b0ca7dae1a17f897e34b83c990f30ab65f615ee0/packages/config/tailwind-preset.js#L69
          },
          dark: {
            // Set the similar variables as in light theme but for dark mode.
          },
        },
      });
    })();
  }, []);
  return (
    <Cal
      calLink="abcfoundation/30min"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view" }}
      className="mb-20"
    />
  );
}
