import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar.jsx";
import Container from "../components/Container.jsx";
import Button from "../components/Button.jsx";
import DigitalTimer from "../components/DigitalTimer.jsx";
import AnalogTimer from "../components/AnalogTimer.jsx";
import TextTimer from "../components/TextTimer.jsx";

import Timer from "easytimer.js";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const SetTimer = () => {
  const [timer] = useState(new Timer());
  const [useTimer, setUseTimer] = useState(null);
  const [duration, setDuration] = useState(5);
  const [isIntervals, setIsIntervals] = useState(false);
  // const [break, setBreak] = useState(false);

  useEffect(() => {
    timer.addEventListener("secondsUpdated", () => {
      setUseTimer(timer.getTimeValues().toString());
    });

    timer.addEventListener("targetAchieved", () => {
      if (isIntervals) {
        timer.reset();
        timer.start({ countdown: true, startValues: { seconds: duration } });
      }
    });

    return () => {
      timer.stop();
      timer.removeEventListener("secondsUpdated");
      timer.removeEventListener("targetAchieved");
    };
  }, [timer, duration, isIntervals]);

  function handleStart() {
    timer.start({ countdown: true, startValues: { seconds: duration } });
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
    <>
      <Container>
        {/* <Navbar onClick={handleClick} /> */}
        <Navbar />

        <section className="bg-red flex h-screen flex-col items-center justify-center">
          {/* Timer */}
          <div className="flex w-full items-center justify-around">
            <Button onClick={handleDecreaseDuration}>
              <FaAngleLeft className="text-4xl" />
            </Button>
            <p className="text-6xl font-bold max-[320px]:text-5xl sm:text-7xl">
              {duration}
            </p>
            <Button onClick={handleIncreaseDuration}>
              <FaAngleRight className="text-4xl" />
            </Button>
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
                onChange={(e) => setIsIntervals(e.target.checked)}
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
                // checked={isBreak}
                // onChange={(e) => setIsBreak(e.target.checked)}
              />

              <label htmlFor="break" className="text-lg max-[320px]:text-base">
                5 min break / inteval
              </label>
            </div>
          </div>

          {/* Start button */}
          <Button
            className="w-3/4 rounded-[5px] border border-gray-900 p-[10px] text-2xl font-bold max-[320px]:text-lg"
            onClick={handleStart}
          >
            START TIMER
          </Button>

          <DigitalTimer timer={useTimer} />
          <AnalogTimer timer={useTimer} />
          <TextTimer timer={useTimer} />
        </section>
      </Container>

      <Link to="/">TO LOADING</Link>
      {/* <Link to="/digital">TO LOADING</Link> */}
    </>
  );
};

export default SetTimer;
