import { motion } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Navbar from "../components/Navbar";

const SetTimer = ({
  seconds,
  handleStart,
  isIntervals,
  setIsIntervals,
  breakIsOn,
  setBreakIsOn,
  handleDecrease,
  handleIncrease,
  isTesting,
}) => {
  const minutes = Math.floor(seconds / 60);

  return (
    <>
      <Navbar />
      <section className="flex h-screen w-4/5 max-w-screen-xl flex-col items-center justify-center">
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
              {isTesting ? seconds : minutes}
            </p>

            <motion.button
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleIncrease}
            >
              <FaAngleRight className="text-4xl" />
            </motion.button>
          </div>

          <p>{isTesting ? "seconds" : "minutes"}</p>
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

            <label htmlFor="break" className="text-lg max-[320px]:text-base">
              {isTesting
                ? "5 seconds break / interval"
                : "5 minutes break / inteval"}
            </label>
          </div>
        </div>

        <motion.button
          className="w-3/4 rounded-[5px] border border-gray-500 p-[10px] text-2xl font-bold hover:border-2 hover:border-green-300 hover:text-green-500 max-[320px]:text-lg"
          whileHover={{ scale: 0.95 }}
          onClick={handleStart}
        >
          START TIMER
        </motion.button>
      </section>
    </>
  );
};

export default SetTimer;
