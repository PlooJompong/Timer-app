import Navbar from "../components/Navbar.jsx";
import { motion } from "framer-motion";

const AnalogTimer = ({ seconds, isRunning, handleStop }) => {
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
