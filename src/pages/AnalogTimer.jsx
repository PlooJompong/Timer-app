import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import analog from "../assets/analog.svg";

import { motion } from "framer-motion";

const AnalogTimer = ({ seconds, isRunning, handleStop }) => {
  const [handleAngle, setHandleAngle] = useState({
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Accumulate the rotation based on the total seconds elapsed
    const minuteAngle = (Math.floor(seconds / 60) % 60) * 6; // Keeping minutes within 0-59
    const secondAngle = seconds * 6; // Accumulate without reset

    setHandleAngle({
      minutes: minuteAngle,
      seconds: secondAngle,
    });
  }, [seconds]);

  const formatTime = (time) => {
    return time.toString().padStart(2, "0");
  };

  return (
    <>
      <Navbar />
      <section className="flex h-1/2 flex-col items-center justify-center">
        <h1 className="my-auto text-[80px] font-bold">
          {formatTime(Math.floor(seconds / 60))}:{formatTime(seconds % 60)}
        </h1>

        <div className="relative h-[278px] w-[278px]">
          <img src={analog} alt="Analog Clock" className="absolute inset-0" />

          <div
            className="minute-hand absolute left-[50%] top-[14px] h-[125px] w-[3px] origin-bottom bg-black"
            style={{
              transform: `rotate(${handleAngle.minutes}deg)`,
              transition: "transform 0.5s ease-in-out",
            }}
          />

          <div
            className="second-hand absolute left-[50%] top-[14px] h-[125px] w-[2px] origin-bottom bg-red-500"
            style={{
              transform: `rotate(${handleAngle.seconds}deg)`,
              transition: "transform 0.1s linear",
            }}
          />
        </div>
      </section>

      <motion.button
        className="rounded-[5px] border border-gray-500 p-[10px] font-bold text-gray-500 hover:border-2 hover:border-red-300 hover:text-red-500 max-[320px]:text-lg"
        whileHover={{ scale: 0.95 }}
        onClick={handleStop}
      >
        ABORT TIMER
      </motion.button>
    </>
  );
};

export default AnalogTimer;
