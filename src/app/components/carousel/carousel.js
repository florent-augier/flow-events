"use client";

import "./carousel.scss";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

import photoBooth1 from "public/carousel/pexels-ana-arantes-2966345.jpg";
import photoBooth2 from "public/carousel/pexels-lisa-fotios-1252983.jpg";
import photoBooth3 from "public/carousel/pexels-lisa-fotios-5653734-2.jpg";
import photoBooth4 from "public/carousel/IMG-4367.jpg";
import photoBooth5 from "public/carousel/0e34766a-935a-4ed2-89b1-13bd22a1ff07.jpg";
import photoBooth6 from "public/carousel/f5e3e4a4-d1ba-4091-92e6-6b360005d55b.jpg";

export const images = [
  photoBooth1.src,
  photoBooth2.src,
  photoBooth3.src,
  photoBooth4.src,
  photoBooth5.src,
  photoBooth6.src,
];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const Carousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

  return (
    <div className="carousel-container">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          className="motion-image"
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div className="next">
        <button onClick={() => paginate(1)}>→</button>
      </div>
      <div className="prev">
        <button onClick={() => paginate(-1)}>←</button>
      </div>
    </div>
  );
};
