import { useEffect, useState } from "react";

import Navbar from "../components/Navbar.jsx";
import Container from "../components/Container.jsx";
import DigitalTimer from "../components/DigitalTimer.jsx";
import AnalogTimer from "../components/AnalogTimer.jsx";
import TextTimer from "../components/TextTimer.jsx";
import Alarm from "../components/Alarm.jsx";
import Pause from "../components/Pause.jsx";

import { motion } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const SetTimer = () => {
  const isTesting = true;

  const BREAK_DURATION = isTesting ? 5 : 5 * 60;

  const [seconds, setSeconds] = useState(6);
  const [breakTime, setBreakTime] = useState(BREAK_DURATION);
  const [isIntervals, setIsIntervals] = useState(false);
  const [breakIsOn, setBreakIsOn] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [runningTime, setRunningTime] = useState(null);

  const [view, setView] = useState("timer");
  const [previousView, setPreviousView] = useState(view);

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
            setView(previousView);
          }
        } else {
          if (seconds > 0) {
            setSeconds((prev) => prev - 1);
          } else if (seconds === 0) {
            if (isIntervals && breakIsOn) {
              setOnBreak(true);
              setBreakTime(BREAK_DURATION);
              setPreviousView(view);
              setView("pause");
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
    previousView,
    view,
  ]);

  const handleStart = () => {
    setIsRunning(true);
    setRunningTime(seconds);

    if (onBreak) {
      setBreakTime(BREAK_DURATION);
    }

    setView("digital");
    setPreviousView(view);
  };

  const handleStop = () => {
    setIsRunning(false);
    setOnBreak(false);
    setSeconds(runningTime);
    setBreakTime(BREAK_DURATION);
    setIsDone(false);
    setView("timer");
  };

  const handleRestart = () => {
    setView(previousView);
    setSeconds(runningTime);
    setOnBreak(false);
    setBreakTime(BREAK_DURATION);
    setIsRunning(true);
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
    <Container isDone={isDone} view={view}>
      {!isDone && view !== "pause" && <Navbar />}

      <section className="flex h-screen flex-col items-center justify-center">
        {/* Timer view */}
        {view === "timer" && !onBreak && (
          <>
            <div className="flex h-1/2 w-full flex-col items-center justify-center">
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

              <p className="">minutes</p>
            </div>

            {/* Checkboxes */}
            <div className="my-8 flex w-3/4 flex-col items-start justify-center gap-4">
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
              className="bottom-1/3 w-3/4 rounded-[5px] border border-gray-700 p-[10px] text-2xl font-bold hover:border-2 hover:border-green-300 hover:text-green-500 max-[320px]:text-lg"
              whileHover={{ scale: 0.95 }}
              onClick={handleStart}
            >
              START TIMER
            </motion.button>
          </>
        )}

        {/* Digital view */}
        {view === "digital" && !isDone && !onBreak && (
          <DigitalTimer
            timeLeft={seconds}
            breakTime={breakTime}
            onBreak={onBreak}
            isRunning={isRunning}
            idDone={isDone}
            onClick={handleStop}
          />
        )}

        {/* Analog view */}
        {view === "analog" && !isDone && !onBreak && (
          <AnalogTimer
            timeLeft={seconds}
            breakTime={breakTime}
            onBreak={onBreak}
            isRunning={isRunning}
            idDone={isDone}
            onClick={handleStop}
          />
        )}

        {/* Text view */}
        {view === "text" && !isDone && !onBreak && (
          <TextTimer
            timeLeft={seconds}
            breakTime={breakTime}
            onBreak={onBreak}
            isRunning={isRunning}
            idDone={isDone}
            onClick={handleStop}
          />
        )}

        {/* Alarm view */}
        {isDone && <Alarm onClick={handleStop} />}

        {/* Pause view */}
        {view === "pause" && onBreak && (
          <Pause breakTime={breakTime} onClick={handleRestart} />
        )}
      </section>
    </Container>
  );
};

export default SetTimer;
