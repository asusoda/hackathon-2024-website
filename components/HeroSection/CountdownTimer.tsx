import React, { useState, useEffect } from "react";
import "../../styles/colors.css";

const CountdownTimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const setTime = (time: any) => {
    setDays(time.days);
    setHours(time.hours);
    setMinutes(time.minutes);
    setSeconds(time.seconds);
  };

  const calculateTimeRemaining = (endDate: Date) => {
    const difference = endDate.getTime() - Date.now();

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });
    } else {
      // Timer expired
      setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  useEffect(() => {
    const endDate = new Date("2025-03-01T10:00:00-07:00"); // March 1st, 11 AM MST
    const intervalId = setInterval(() => {
      calculateTimeRemaining(endDate);
    }, 1000);

    calculateTimeRemaining(endDate);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="flex justify-center space-x-4 mt-5">
        <div className="p-2 rounded-md  shadow-md transform hover:scale-105 transition-transform duration-300  bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30  w-full">
          <div className="text-4xl font-bold blue-logo">{days}</div>
          <div className="text-sm text-gray-400 px-3">Days</div>
        </div>
        <div className="p-2 rounded-md  shadow-md transform hover:scale-105 transition-transform duration-300 bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 w-full">
          <div className="text-4xl font-bold text-rose-500">{hours}</div>
          <div className="text-sm text-gray-400 px-2">Hours</div>
        </div>
        <div className="p-2 rounded-md  shadow-md transform hover:scale-105 transition-transform duration-300 bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 w-full">
          <div className="text-4xl font-bold text-purple-500">{minutes}</div>
          <div className="text-sm text-gray-400 px-1">Minutes</div>
        </div>
        <div className="p-2 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300 bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 w-full">
          <div className="text-4xl font-bold orange-logo">{seconds}</div>
          <div className="text-sm text-gray-400 px-1">Seconds</div>
        </div>
      </div>
    </>
  );
};

export default CountdownTimer;
