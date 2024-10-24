import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";

const DigitalTimer = ({ seconds, isRunning, handleStop, handleStart }) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formatTime = (time) => {
    return time.toString().padStart(2, "0");
  };

  return (
    <>
      <Navbar />
      <section className="flex h-screen w-4/5 max-w-screen-xl flex-col items-center justify-center">
        <div className="flex h-1/2 w-full items-center justify-center">
          <h1 className="text-[80px] font-bold">
            {minutes > 0
              ? `${minutes}:${formatTime(remainingSeconds)}`
              : `${remainingSeconds}`}
          </h1>
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
          <Link to={"/digital"}>
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

export default DigitalTimer;
