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
        styles: { branding: { brandColor: "#B49712" } },
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#B49712",
            "cal-text": "#B49712",
            "cal-text-emphasis": "#B49712",
            "cal-border-emphasis": "#B49712",
            "cal-text-error": "pink",
            "cal-border": "#B49712",
            "cal-border-default": "#B49712",
            "cal-border-subtle": "#B49712",
            "cal-border-booker": "#B49712",
            "cal-text-muted": "#a28810",
            "cal-bg-emphasis": "#efd55d",
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
