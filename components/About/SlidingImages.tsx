"use client";
import React, { useState, useEffect } from "react";
import "@/styles/about/slidingImage.css";

const SlidingImage = (props: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { images, interval } = props;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [images, interval]);

  const imageStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  return (
    <div className="overflow-hidden relative">
      <div className="image-wrapper" style={imageStyle}>
        {images.map((image: any, index: any) => (
          <div
            key={index}
            className="rounded-lg my-5 sliding-image"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SlidingImage;
