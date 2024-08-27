import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import CountdownTimer from "./CountdownTimer";

const Content: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://thesoda.io";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const h1Variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,

      transition: {
        type: "easeIn",
        duration: 1.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  const controls = useAnimation();
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    controls.start("visible");
  }, [controls, isInView]);
  return (
    <motion.div
      ref={ref}
      className="content md:mt-24 mt-4 max-w-[400px] m-auto text-center flex flex-col justify-center items-center space-y-4 md:p-4 p-5"
      initial="hidden"
      animate="visible"
      variants={h1Variants}
    >
      <div>
        <motion.div className="" variants={childVariants} animate="visible">
          <motion.div
            variants={childVariants}
            className="md:text-4xl text-3xl text-white tracking-wider font-logo font-extrabold m-1 mb-2"
          >
            HackSoDA 24
          </motion.div>
          <motion.div
            variants={childVariants}
            className="md:text-2xl text-2xl text-white font-content font-bold m-1 mb-2"
          >
            October 26 - 27, 2024
          </motion.div>
          {/* <br /> */}
        </motion.div>
        <motion.p
          variants={childVariants}
          animate="visible"
          className=" text-white max-w-[360px] m-auto md:mt-4 mt-2 md:text-xl"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          Hack For A Change!
        </motion.p>
      </div>
      <motion.div className="text-md text-white">
        <CountdownTimer />
      </motion.div>
      <div className="">
        <div
          className="apply-button"
          data-hackathon-slug="duhacks3"
          data-button-theme="dark-inverted"
        />
      </div>
    </motion.div>
  );
};

export default Content;
