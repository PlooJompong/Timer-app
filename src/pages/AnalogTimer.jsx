import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import StartButton from "../components/StartButton";
import AbortButton from "../components/AbortButton";
import analog from "../assets/analog.svg";

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
          <AbortButton onClick={handleStop} />
        ) : (
          <Link to={"/analog"}>
            <StartButton onClick={handleStart} />
          </Link>
        )}
      </section>
    </>
  );
};

export default AnalogTimer;
