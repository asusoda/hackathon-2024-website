// GlassyIcon.tsx
"use client";
import React from "react";
// import "./GlassyIcon.css";

type GlassyIconProps = {
  Icon: React.ComponentType;
};

function GlassyIcon({ Icon }: GlassyIconProps) {
  return (
    <>
      <div className="glassy-icon my-2">
        <div className="w-14 h-14 text-3xl rounded-xl font-black flex items-center justify-center bg-white bg-opacity-50 backdrop-blur-lg drop-shadow-lg">
          <Icon />
        </div>
      </div>
    </>
  );
}

export default GlassyIcon;
