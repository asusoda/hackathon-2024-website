"use client"
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "full";
  height?: number;
}

export default function RevealPrize({ children, height }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  const card: Variants = {
    offscreen: {
      opacity: 0,
      height: 0,
    },
    onscreen: {
      opacity: 1,
      height: height ,// default height
      transition: {
        type: "easeIn",
        bounce: 0.1,
        delay : 0.3 ,
        duration: 1.6,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      style={{ position: "relative" }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div ref={ref} variants={card}>
        {children}
      </motion.div>
    </motion.div>
  );
}
