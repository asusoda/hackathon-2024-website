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
            Code Challenge XI
          </motion.div>
          <motion.div
            variants={childVariants}
            className="md:text-2xl text-2xl text-white font-content font-bold m-1 mb-2"
          >
            March 1 <br />
            11 AM - 5 PM, 2025
          </motion.div>
        </motion.div>
        <motion.p
          variants={childVariants}
          animate="visible"
          className="text-white max-w-[360px] m-auto md:mt-4 mt-2 text-xs md:text-sm"
          style={{ fontFamily: "Space Grotesk" }}
        >
          <a
            href="https://maps.app.goo.gl/9XUDu4uFKyNEWxvX9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Memorial Union Arizona Ventana <br /> (2nd Floor) 301 E Orange St.,
            Tempe, AZ
          </a>
        </motion.p>
      </div>
      <motion.div className="text-md text-white mb-8">
        {" "}
        {/* Added margin-bottom for spacing */}
        <CountdownTimer />
      </motion.div>
      <div className="!mt-10 flex flex-row grow space-x-8">
        {" "}
        {/* Adjusted margin-top if needed */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSejSLKBFkya1mOxMMCgqMSgEmMHHnMM4r6_bZMjd7HYaUoauQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-[#3566ba] text-white font-bold rounded-lg  transition-colors duration-300"
        >
          Register
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSejSLKBFkya1mOxMMCgqMSgEmMHHnMM4r6_bZMjd7HYaUoauQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-[#ba3554] text-white font-bold rounded-lg  transition-colors duration-300"
        >
          Rules
        </a>
      </div>
    </motion.div>
  );
};

export default Content;
