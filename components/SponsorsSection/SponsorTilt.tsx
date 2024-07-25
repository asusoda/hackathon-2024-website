"use client";

import Tilt from "react-parallax-tilt";
import "./sponsorTilt.css";
import Image from "next/image";
function SponsorCard({ imageUrl, imageSize, hoverEffect, imageAlt }: any) {
  return (
    <Tilt
      tiltMaxAngleX={2.5}
      tiltMaxAngleY={5}
      glareEnable
      tiltAngleYInitial={0}
      glareMaxOpacity={0.1}
      className="fix-safari-tilt relative overflow-hidden rounded-2xl md:mx-4 my-4 mx-2 "
    >
      <div
        className={`relative flex h-full flex-col gap-6 rounded-2xl md:p-4 p-2 glassy-div ${hoverEffect}`}
      >
        <div className="flex items-center justify-center md:p-1 p-px">
          {" "}
          <Image
            className={`${imageSize} rounded-2xl`}
            src={imageUrl as string}
            width={100}
            height={100}
            objectFit="cover"
            alt={imageAlt}
          />
        </div>
      </div>
    </Tilt>
  );
}

export default SponsorCard;
