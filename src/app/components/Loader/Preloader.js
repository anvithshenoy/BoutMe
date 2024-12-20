"use client";
import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = ({ progress }) => {
  const [dimension, setDimension] = useState({ width: 1920, height: 1080 }); // Default dimensions for SSR

  useEffect(() => {
    const updateDimensions = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    updateDimensions(); // Initialize on mount
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      data-click="true"
      className="fixed right-0 top-0 z-[999] flex h-dvh w-dvw items-center justify-center overflow-hidden bg-slate-400"
    >
      <>
        {/* Progress Percentage */}
        <div className="number-flow-container absolute z-10 flex items-center justify-center font-head text-7xl text-background">
          <NumberFlow format={{ style: "percent" }} value={progress} />
        </div>
        {/* <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className="absolute z-10 flex items-center font-head text-7xl text-background"
          >
            {progress}%
          </motion.p> */}

        {/* Animated Path */}
        <svg className="absolute top-0 min-h-[120vh] w-full">
          <motion.path
            variants={curve}
            initial="initial"
            exit="exit"
            className="fill-slate-400"
          />
        </svg>
      </>
    </motion.div>
  );
};

export default Preloader;

export const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100dvh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};
