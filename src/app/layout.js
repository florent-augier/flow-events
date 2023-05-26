import "./globals.css";

import Fonts from "./components/fonts/fonts";

import { React } from "react";

import WrapperContext from "./context/WrapperContext";

import Root from "./components/root";

export const metadata = {
  title: "Flow Events 13",
  description:
    "Location de photobooth dans les Bouches-du-Rhône (13), Marseille, Istres, Miramas, Fos-sur-Mer",
};

export default function RootLayout({ children }) {
  return (
    <WrapperContext>
      <html lang="fr">
        <Fonts />
        <body>
          <Root>{children}</Root>
        </body>
      </html>
    </WrapperContext>
  );
}
