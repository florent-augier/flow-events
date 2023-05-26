"use client";

import { useState, useEffect } from "react";

import Navigation from "./../layout/navigation/navigation";

import Loading from "./../components/loading";
import useEffectOnce from "../hooks/useEffectOnce";

const Root = ({ children }) => {
  const [isPending, setIsPending] = useState(true);
  const [isFired, setIsFired] = useState(false);

  useEffectOnce(() => {
    setTimeout(() => {
      setIsPending(false);
      setIsFired(true);
    }, 4000);
  });

  if (isPending && !isFired) {
    return <Loading isPending={isPending} />;
  }

  if (isFired) {
    return (
      <div>
        <Navigation />
        {children}
      </div>
    );
  }
};

export default Root;
