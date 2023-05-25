"use client";

import { useServerInsertedHTML } from "next/navigation";

import featherlyFont from "./featherly/featherly";
import lasticaFont from "./lastica/lastica";

function Fonts() {
  useServerInsertedHTML(() => {
    return (
      <style
        dangerouslySetInnerHTML={{
          __html: `
              :root {
                --font-featherly: ${featherlyFont.style.fontFamily};
                --font-lastica: ${lasticaFont.style.fontFamily};
                --font-family-sans: '-apple-system', 'BlinkMacSystemFont',
                  'system-ui', 'Segoe UI', 'Roboto',
                  'Ubuntu', 'sans-serif';
              }
            `,
        }}
      />
    );
  });

  return null;
}

export default Fonts;
