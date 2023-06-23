"use client";

import { useState, useLayoutEffect } from "react";

export default function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    function updateSize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", updateSize);
    updateSize();
  }, []);
  return size;
}
