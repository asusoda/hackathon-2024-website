"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation  } from "framer-motion";

interface props {
  children: JSX.Element;
  width?: "fit-content" | "full";
  even?: boolean;
}

export default function Reveal({ children }: props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    // if (isInView) {
      controls.start("visible");
    // }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: 500 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.7 , delay: 0 , type: "easeIn" }}
    >
      {children}
    </motion.div>
  );
}
