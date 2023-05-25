import Navigation from "./layout/navigation/navigation";

import Fonts from "./components/fonts/fonts";

import { React } from "react";

import WrapperContext from "./context/WrapperContext";

export const metadata = {
  title: "Flow Events 13",
  description:
    "Location de photobooth dans les Bouches-du-Rhône (13), Marseille, Istres, Miramas, Fos-sur-Mer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <WrapperContext>
        <Fonts />
        <body>
          <Navigation />
          {children}
        </body>
      </WrapperContext>
    </html>
  );
}
