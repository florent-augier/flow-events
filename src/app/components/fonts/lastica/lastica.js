import localFont from "next/font/local";

// code

const lasticaFont = localFont({
  src: [
    {
      path: "./lastica.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./lastica.woff",
      weight: "normal",
      style: "normal",
    },
  ],
  fallback: ["Helvetica", "ui-sans-serif"],
});

export default lasticaFont;
