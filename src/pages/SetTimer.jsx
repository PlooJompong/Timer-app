import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar.jsx";
import Container from "../components/Container.jsx";
import Button from "../components/Button.jsx";

import Timer from "easytimer.js";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const SetTimer = () => {
  const [timer] = useState(new Timer());
  const [useTimer, setUseTimer] = useState(timer.getTimeValues().toString());
  // const [isChecked, setChecked] = useState(false);

  function handleStart() {
    timer.start();
  }

  useEffect(() => {
    timer.addEventListener("secondsUpdated", () => {
      setUseTimer(timer.getTimeValues().toString());
    });

    return () => {
      timer.stop();
      timer.addEventListener("secondsUpdated");
    };
  }, [timer]);

  return (
    <>
      <Container>
        {/* <Navbar onClick={handleClick} /> */}
        <Navbar />

        <section className="bg-red flex h-screen flex-col items-center justify-center">
          {/* Timer */}
          <div className="flex w-full items-center justify-around">
            <FaAngleLeft className="text-4xl" />
            <p className="text-7xl font-bold">{useTimer}</p>
            <FaAngleRight className="text-4xl" />
          </div>
          <p className="mb-20 text-slate-500">minutes</p>

          {/* Checkboxes */}
          <div className="mb-8 flex w-3/4 flex-col items-start justify-center gap-4">
            <div className="flex items-center justify-center">
              <input
                id="intervals"
                type="checkbox"
                className="mr-3 h-5 w-5"
                // checked={isChecked}
                // onChange={(e) => setChecked(e.target.checked)}
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
                // checked={isChecked}
                // onChange={(e) => setChecked(e.target.checked)}
              />

              <label htmlFor="break" className="text-lg max-[320px]:text-base">
                5 min break / inteval
              </label>
            </div>
          </div>

          {/* Start button */}
          <Button
            className="w-3/4 rounded-[5px] border border-gray-900 p-[10px] text-2xl font-bold max-[320px]:text-xl"
            onClick={handleStart}
          >
            START TIMER
          </Button>
        </section>
      </Container>

      <Link to="/">TO LOADING</Link>
    </>
  );
};

export default SetTimer;
