import { useEffect, useState } from "react";

import Navbar from "../components/Navbar.jsx";
import Container from "../components/Container.jsx";
import DigitalTimer from "../components/DigitalTimer.jsx";
import AnalogTimer from "../components/AnalogTimer.jsx";
import TextTimer from "../components/TextTimer.jsx";

import Timer from "easytimer.js";
import { motion } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const SetTimer = () => {
  const [timer] = useState(new Timer());
  const [breakTimer] = useState(new Timer());
  const [duration, setDuration] = useState(5);
  const [isIntervals, setIsIntervals] = useState(false);
  const [breakIsOn, setBreakIsOn] = useState(false);
  const [userTimer, setUserTimer] = useState(null);
  const [showBreakTimer, setShowBreakTimer] = useState(null);
  const [view, setView] = useState("timer");

  useEffect(() => {
    timer.addEventListener("secondsUpdated", () => {
      setUserTimer(timer.getTimeValues().toString());
    });

    timer.addEventListener("targetAchieved", () => {
      timer.stop();

      if (isIntervals && breakIsOn) {
        breakTimer.addEventListener("secondsUpdated", () => {
          setShowBreakTimer(breakTimer.getTimeValues().toString());
        });

        breakTimer.start({ countdown: true, startValues: { seconds: 3 } });

        breakTimer.addEventListener("targetAchieved", () => {
          breakTimer.stop();

          timer.reset();
        });
      } else if (isIntervals) {
        timer.reset();
      }
    });

    return () => {
      timer.stop();
      timer.removeEventListener("secondsUpdated");
      timer.removeEventListener("targetAchieved");
    };
  }, [timer, duration, isIntervals, breakIsOn, breakTimer]);

  function handleStart() {
    timer.start({ countdown: true, startValues: { seconds: duration } });
    setView("digital");
  }

  function handleStop() {
    timer.stop();
    breakTimer.stop();
    setView("timer");
  }

  function handleIncreaseDuration() {
    setDuration(duration + 1);
  }

  function handleDecreaseDuration() {
    if (duration > 1) {
      setDuration(duration - 1);
    }
  }

  return (
    <Container>
      {/* <Navbar onClick={handleClick} /> */}
      <Navbar />

      <section className="flex h-screen flex-col items-center justify-center">
        {/* Timer view */}
        {view === "timer" && (
          <>
            <div className="flex w-full items-center justify-around">
              <motion.button
                whileHover={{ scale: 1.5 }}
                onClick={handleDecreaseDuration}
              >
                <FaAngleLeft className="text-4xl" />
              </motion.button>

              <p className="text-6xl font-bold max-[320px]:text-5xl sm:text-7xl">
                {duration}
              </p>

              <motion.button
                whileHover={{ scale: 1.5 }}
                onClick={handleIncreaseDuration}
              >
                <FaAngleRight className="text-4xl" />
              </motion.button>
            </div>

            <p className="mb-20 text-slate-500">seconds</p>

            {/* Checkboxes */}
            <div className="mb-8 flex w-3/4 flex-col items-start justify-center gap-4">
              <div className="flex items-center justify-center">
                <input
                  id="intervals"
                  type="checkbox"
                  className="mr-3 h-5 w-5"
                  checked={isIntervals}
                  onChange={() => setIsIntervals((prevState) => !prevState)}
                />

                <label
                  htmlFor="intervals"
                  className="text-lg max-[320px]:text-base"
                >
                  intervals
                </label>
              </div>

              <div className="flex items-center justify-start">
                <input
                  id="break"
                  type="checkbox"
                  className="mr-3 h-5 w-5"
                  checked={breakIsOn}
                  onChange={() => setBreakIsOn((prevState) => !prevState)}
                />

                <label
                  htmlFor="break"
                  className="text-lg max-[320px]:text-base"
                >
                  3 seconds break / inteval
                </label>
              </div>
            </div>
            {/* Start button */}
            <motion.button
              className="w-3/4 rounded-[5px] border border-gray-900 p-[10px] text-2xl font-bold hover:border-2 hover:border-green-300 hover:text-green-500 max-[320px]:text-lg"
              whileHover={{ scale: 0.95 }}
              onClick={handleStart}
            >
              START TIMER
            </motion.button>
          </>
        )}

        {/* Digital view */}
        {view === "digital" && (
          <>
            <DigitalTimer timer={userTimer} breakTimer={showBreakTimer} />
            <AnalogTimer timer={userTimer} breakTimer={showBreakTimer} />
            <TextTimer timer={userTimer} breakTimer={showBreakTimer} />
          </>
        )}

        {/* Analog view */}
        {view === "analog" && (
          <AnalogTimer timer={userTimer} breakTimer={showBreakTimer} />
        )}

        {/* Text view */}
        {view === "text" && (
          <TextTimer timer={userTimer} breakTimer={showBreakTimer} />
        )}

        {/* Abort button */}
        {view !== "timer" && (
          <motion.button
            className="w-3/4 rounded-[5px] border border-gray-900 p-[10px] text-2xl font-bold hover:border-2 hover:border-red-300 hover:text-red-500 max-[320px]:text-lg"
            whileHover={{ scale: 0.95 }}
            onClick={handleStop}
          >
            ABORT TIMER
          </motion.button>
        )}
      </section>
    </Container>
  );
};

export default SetTimer;
