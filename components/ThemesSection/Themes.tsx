"use client";
import React, { useState } from "react";
import "../../styles/themes.css";
import "../../styles/themes/background.css";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
const themes = [
  {
    title: "Education",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Pencil.png",
  },
  {
    title: "Health",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Stethoscope.png",
  },
  {
    title: "AI/ML",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Robot.png",
  },
  {
    title: "Web3",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Globe%20with%20Meridians.png",
  },
  {
    title: "VLSI",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Electric%20Plug.png",
  },
  {
    title: "Open Innovation",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Light%20Bulb.png",
  },
];

export default function Themes() {
  const [isAnimationPaused, setAnimationPaused] = useState(false);

  const handleSlideHover = () => {
    setAnimationPaused(true);
  };

  const handleSlideLeave = () => {
    setAnimationPaused(false);
  };

  return (
    <>
      <h1 className="mt-36 sm:mt-56 text-center text-white text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-logo">
        Themes
      </h1>
      {/* <div className="slider">
        <div className="slide-track-10 hover:pause mt-6 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 justify-around items-center">
          {[...themes, ...themes].map(({ title, image }) => (
            <div className="w-[12rem] relative opacity-100 transition duration-200">
              <Card
                key={title}
                title={title}
                icon={
                  <img
                    src={image}
                    alt={title}
                    className="w-25 h-25 object-contain"
                  />
                }
              />
            </div>
          ))}
        </div>
      </div> */}
      <div className="flex justify-center mt-28 ">
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 md:gap-x-8 md:gap-y-8 gap-3    themeContainer1">
          {[...themes].map(({ title, image }) => (
            <div className="max-w-md mx-auto  md:w-64 md:h-full sm:w-44 w-40 h-full  overflow-hidden ">
              <Card
                key={title}
                title={title}
                icon={
                  <Image
                    src={image}
                    alt={title}
                    width={80}
            height={80}
            objectFit="cover"
                    className="md:w-[10rem] md:h-[10rem] w-[15rem] h-[rem] "
                  />
                }
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function Card(props: any) {
  const { title, icon } = props;
  return (
    <Tilt
      tiltMaxAngleX={2.5}
      tiltMaxAngleY={5}
      glareEnable
      tiltAngleYInitial={0}
      glareMaxOpacity={0.1}
      className="fix-safari-tilt relative overflow-hidden rounded-2xl glassy-effect p-px "
    >
      <div className="relative flex md:h-64 h-48 flex-col gap-3 rounded-2xl  p-7 ">
        <div className="flex items-center justify-center">{icon}</div>

        <div>
          <h4 className="md:text-xl  text-md text-center font-semibold text-white dark:text-white">
            {title}
          </h4>
        </div>
      </div>
    </Tilt>
  );
}
