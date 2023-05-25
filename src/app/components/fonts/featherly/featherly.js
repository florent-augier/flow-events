import localFont from "next/font/local";

const featherlyFont = localFont({
  src: [
    {
      path: "./featherly.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./featherly.woff",
      weight: "normal",
      style: "normal",
    },
  ],
  fallback: ["Helvetica", "ui-sans-serif"],
});

export default featherlyFont;
