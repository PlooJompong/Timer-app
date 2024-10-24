import { motion } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const TimeSelector = ({ seconds, setSeconds, isTesting }) => {
  const minutes = Math.floor(seconds / 60);

  const handleDecrease = () => {
    if (isTesting) {
      if (seconds > 5) {
        setSeconds((prev) => prev - 5);
      }
    } else {
      if (seconds > 300) {
        setSeconds((prev) => prev - 300);
      }
    }
  };

  const handleIncrease = () => {
    if (isTesting) {
      if (seconds < 70) {
        setSeconds((prev) => prev + 5);
      }
    } else {
      if (seconds < 3600) {
        setSeconds((prev) => prev + 300);
      }
    }
  };

  return (
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
  );
};

export default TimeSelector;
