"use client";
import React, { useEffect, useState } from "react";
import { preLoaderAnim } from "./animations/animate";
import "../styles/preloader.css";
import { motion, useAnimation } from "framer-motion";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container font-logo text-7xl">
        <span>Learn, </span>
        <span>Build, </span>
        <span>Grow, </span>
        <span>Innovate, </span>
        <span>Collaborate, </span>
        <span>Create.</span>
      </div>
    </div>
  );
};

export default PreLoader;
