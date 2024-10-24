import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import analog from "../assets/analog.svg";
import Navbar from "../components/Navbar.jsx";

const AnalogTimer = ({ seconds, isRunning, handleStart, handleStop }) => {
  const [handleAngle, setHandleAngle] = useState({
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const minuteAngle = (Math.floor(seconds / 60) % 60) * 6;
    const secondAngle = seconds * 6;

    setHandleAngle({
      minutes: minuteAngle,
      seconds: secondAngle,
    });
  }, [seconds]);

  return (
    <>
      <Navbar />

      <section className="flex h-screen w-4/5 max-w-screen-xl flex-col items-center justify-center">
        <div className="mb-7 flex h-1/2 max-w-screen-xl flex-col items-center justify-center">
          <div className="relative aspect-square w-[278px]">
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
        </div>

        {isRunning ? (
          <motion.button
            className="rounded-[5px] border border-gray-500 p-[10px] font-bold text-gray-500 hover:border-2 hover:border-red-300 hover:text-red-500 max-[320px]:text-lg"
            whileHover={{ scale: 0.95 }}
            onClick={handleStop}
          >
            ABORT TIMER
          </motion.button>
        ) : (
          <Link to={"/analog"}>
            <motion.button
              className="rounded-[5px] border border-gray-500 p-[10px] font-bold text-gray-500 hover:border-2 hover:border-green-300 hover:text-green-500 max-[320px]:text-lg"
              whileHover={{ scale: 0.95 }}
              onClick={handleStart}
            >
              START TIMER
            </motion.button>
          </Link>
        )}
      </section>
    </>
  );
};

export default AnalogTimer;
