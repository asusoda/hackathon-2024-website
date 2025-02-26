"use client";
import React, { useEffect } from "react";
import "@/styles/about/about.css";
import CountUp from "react-countup";
import "../../styles/about/background.css";
import { motion, useAnimation, useInView } from "framer-motion";
import "../../styles/colors.css";

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className="w-screen flex-col sm:px-14 md:px-40 lg:px-40 xl:px-80 mt-36 sm:mt-56">
      <h1 className="text-center text-white text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-logo">
        What is Code Challenge XI?
      </h1>
      
      <div className="mt-24 flex flex-col sm:flex-row w-full items-center justify-center gap-5 px-5">
        <div className="basis-1/3 border-2 rounded-2xl w-full p-5 glassy-effect aboutContainer1">
          <h1 className="text-4xl my-2 font-semibold blue-logo">
            <CountUp
              start={0}
              end={6}
              duration={4}
              className="font-bold blue-logo"
              enableScrollSpy={true}
            />
            +
          </h1>
          <p className="text-slate-200">Prize categories</p>
        </div>
        <div className="basis-1/3 border-2 rounded-2xl w-full p-5 glassy-effect">
          <h1 className="text-4xl my-2 font-semibold text-rose-500">
            <CountUp
              start={0}
              end={3}
              duration={4}
              className="font-bold text-rose-500"
              enableScrollSpy={true}
            />
            +
          </h1>
          <p className="text-slate-200">Hours of Hacking</p>
        </div>
        <div className="basis-1/3 border-2 rounded-2xl w-full p-5 glassy-effect">
          <h1 className="text-4xl my-2 font-semibold orange-logo">
            <CountUp
              start={100}
              end={300}
              duration={4}
              enableScrollSpy={true}
              className="font-bold orange-logo"
            />
            +
          </h1>
          <p className="text-slate-200">Participants</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full items-center justify-center gap-5 px-5 mt-5 container1 container2">
        <div className="basis-1/2 border-2 rounded-2xl sm:h-96 w-full p-5 overflow-y-scroll lg:overflow-auto glassy-effect">
          <p className="text-slate-200 text-lg sm:text-xl sm:mt-3">
            Get ready for SoDA's 11th Annual Code Challenge this Spring!
            <br />
            <br />
            Put your problem solving and coding skills to the test in this
            3-hour in-person competition on Sunday, March 1 (11:00 AM - 4:00
            PM). Open to all ASU students with separate prize pools for
            undergrads and grads.
            <br />
            <br />
            Compete individually using any HackerRank-supported language under
            proctored conditions. Internet access allowed for reference only -
            no AI assistance or collaboration permitted.
            <br />
            <br />
            Win prizes like Nintendo Switches, VR headsets, and headphones while
            demonstrating your coding prowess in algorithm design, memory
            efficiency, and optimal execution!
          </p>
        </div>

        <div className="basis-1/2 border-2 h-96 rounded-2xl w-full p-4 sm:h-96 glassy-effect">
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, scale: 1 },
              visible: { opacity: 1, scale: 1 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ type: "easeIn", duration: 1.2, delay: 0 }}
            className="my-5 h-52 w-full sm:h-80 rounded-2xl"
            style={{
              backgroundImage: "url('/team_members/soda-mem1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
