"use client";

import { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center items-center container mx-auto flex-col md:px-24 px-10">
      <h1 className="font-bold text-2xl sm:text-5xl text-[#29AB87] drop-shadow-md mb-5">
        Upcoming Events
      </h1>

      <div className="flex space-x-4 text-center text-white text-2xl justify-center items-center font-bold">
        <div className="bg-gray-800 px-4 py-2 rounded-lg">
          <p>{timeLeft.days}</p>
          <span className="text-sm">Days</span>
        </div>
        <div className="bg-gray-800 px-4 py-2 rounded-lg">
          <p>{timeLeft.hours}</p>
          <span className="text-sm">Hours</span>
        </div>
        <div className="bg-gray-800 px-4 py-2 rounded-lg">
          <p>{timeLeft.minutes}</p>
          <span className="text-sm">Minutes</span>
        </div>
        <div className="bg-gray-800 px-4 py-2 rounded-lg">
          <p>{timeLeft.seconds}</p>
          <span className="text-sm">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
