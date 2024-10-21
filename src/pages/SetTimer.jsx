import { useEffect, useState } from "react";

import Navbar from "../components/Navbar.jsx";
import Container from "../components/Container.jsx";
import DigitalTimer from "../components/DigitalTimer.jsx";
import AnalogTimer from "../components/AnalogTimer.jsx";
import TextTimer from "../components/TextTimer.jsx";
import Alarm from "../components/Alarm.jsx";

import { motion } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const SetTimer = () => {
  const isTesting = true;

  const BREAK_DURATION = isTesting ? 3 : 5 * 60;

  const [seconds, setSeconds] = useState(60);
  const [breakTime, setBreakTime] = useState(BREAK_DURATION);
  const [isIntervals, setIsIntervals] = useState(false);
  const [breakIsOn, setBreakIsOn] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [runningTime, setRunningTime] = useState(null);

  const [view, setView] = useState("timer");

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (onBreak) {
          if (breakTime > 0) {
            setBreakTime((prev) => prev - 1);
          } else {
            setOnBreak(false);
            setSeconds(runningTime);
          }
        } else {
          if (seconds > 0) {
            setSeconds((prev) => prev - 1);
          } else if (seconds === 0) {
            if (isIntervals && breakIsOn) {
              setOnBreak(true);
              setBreakTime(BREAK_DURATION);
            } else if (isIntervals) {
              setSeconds(runningTime);
            } else {
              setIsRunning(false);
              setIsDone(true);
            }
          }
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [
    seconds,
    isRunning,
    breakIsOn,
    isIntervals,
    breakTime,
    onBreak,
    BREAK_DURATION,
    runningTime,
  ]);

  const handleStart = () => {
    setIsRunning(true);
    setRunningTime(seconds);

    if (onBreak) {
      setBreakTime(BREAK_DURATION);
    }

    setView("digital");
  };

  const handleStop = () => {
    setIsRunning(false);
    setOnBreak(false);
    setSeconds(runningTime);
    setBreakTime(BREAK_DURATION);
    setIsDone(false);
    setView("timer");
  };

  const handleDecrease = () => {
    if (seconds > 60) {
      setSeconds((prev) => prev - 60);
    }
  };

  const handleIncrease = () => {
    if (seconds < 600) {
      setSeconds((prev) => prev + 60);
    }
  };

  return (
    <Container isDone={isDone}>
      <Navbar isDone={isDone} />

      <section className="flex h-screen flex-col items-center justify-center">
        {/* Timer view */}
        {view === "timer" && (
          <>
            <div className="flex w-full items-center justify-around">
              <motion.button
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleDecrease}
              >
                <FaAngleLeft className="text-4xl" />
              </motion.button>

              <p className="text-6xl font-bold max-[320px]:text-6xl sm:text-[80px]">
                {Math.floor(seconds / 60)}
              </p>

              <motion.button
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleIncrease}
              >
                <FaAngleRight className="text-4xl" />
              </motion.button>
            </div>

            <p className="mb-20 text-gray-500">minutes</p>

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
                  5 minutes break / inteval
                </label>
              </div>
            </div>

            {/* Start button */}
            <motion.button
              className="w-3/4 rounded-[5px] border border-gray-700 p-[10px] text-2xl font-bold hover:border-2 hover:border-green-300 hover:text-green-500 max-[320px]:text-lg"
              whileHover={{ scale: 0.95 }}
              onClick={handleStart}
            >
              START TIMER
            </motion.button>
          </>
        )}

        {/* Digital view */}
        {view === "digital" && !isDone && (
          <DigitalTimer
            timeLeft={seconds}
            breakTime={breakTime}
            onBreak={onBreak}
            isRunning={isRunning}
            idDone={isDone}
          />
        )}

        {/* Analog view */}
        {view === "analog" && !isDone && (
          <AnalogTimer
            timeLeft={seconds}
            breakTime={breakTime}
            onBreak={onBreak}
            isRunning={isRunning}
            idDone={isDone}
          />
        )}

        {/* Text view */}
        {view === "text" && !isDone && (
          <TextTimer
            timeLeft={seconds}
            breakTime={breakTime}
            onBreak={onBreak}
            isRunning={isRunning}
            idDone={isDone}
          />
        )}

        {/* Abort button */}

        {/* {view === "digital" || view === "analog" || view === "text" ? ( */}
        {view !== "timer" && !isDone && (
          <motion.button
            className="border-custom-gray text-custom-gray rounded-[5px] border p-[10px] font-bold hover:border-2 hover:border-red-300 hover:text-red-500 max-[320px]:text-lg"
            whileHover={{ scale: 0.95 }}
            onClick={handleStop}
          >
            ABORT TIMER
          </motion.button>
        )}

        {/* Set new timer button */}
        {isDone && (
          <>
            <Alarm />
            <motion.button
              className="rounded-[5px] border border-white p-[10px] font-bold text-white hover:border-2 hover:border-red-300 hover:text-red-500 max-[320px]:text-lg"
              whileHover={{ scale: 0.95 }}
              onClick={handleStop}
            >
              SET NEW TIMER
            </motion.button>
          </>
        )}
      </section>
    </Container>
  );
};

export default SetTimer;
