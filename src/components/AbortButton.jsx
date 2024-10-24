import { motion } from "framer-motion";

const StartButton = ({ onClick }) => {
  return (
    <motion.button
      className="rounded-[5px] border border-gray-500 p-[10px] font-bold text-gray-500 hover:border-2 hover:border-red-300 hover:text-red-500 max-[320px]:text-lg"
      whileHover={{ scale: 0.95 }}
      onClick={onClick}
    >
      ABORT TIMER
    </motion.button>
  );
};

export default StartButton;
