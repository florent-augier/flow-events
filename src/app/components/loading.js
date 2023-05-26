"use client";

import { useLottie } from "lottie-react";

import photoBooth from "./../../../public/Polaroid.json";
import { useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";

const Loading = ({ isPending }) => {
  const [{ width, height }] = useWindowSize();

  const style = {
    height: height,
    width: width,
  };

  const Lottie = () => {
    const options = {
      animationData: photoBooth,
      loop: false,
      autoplay: true,
    };

    const { View } = useLottie(options, style);

    return View;
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie />
    </div>
  );
};

export default Loading;
