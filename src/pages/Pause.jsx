import { motion } from "framer-motion";

import breakIcon from "../assets/breakIcon.svg";

const Pause = ({ breakTime, handleRestart }) => {
  const text = "Pause & breath".split("");

  const backgroundAnimation = {
    initial: { backgroundColor: "#222" },
    animate: {
      scale: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      backgroundColor: ["#222", "#333", "#444", "#333", "#222"],
    },
  };

  const formatTime = (time) => {
    return time.toString().padStart(2, "0");
  };

  return (
    <section className="relative mx-auto flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-custom-gray tracking-widest">
      <motion.div
        className="absolute z-10 aspect-square w-[100vw] rounded-full max-[320px]:w-[150vw]"
        variants={backgroundAnimation}
        initial="initial"
        animate="animate"
        transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
      ></motion.div>

      <motion.div
        className="absolute z-20 aspect-square w-[50vw] rounded-full max-[320px]:w-[100vw]"
        variants={backgroundAnimation}
        initial="initial"
        animate="animate"
        transition={{ repeat: Infinity, duration: 5, delay: 1 }}
      ></motion.div>

      <div className="z-30 my-8 flex animate-pulse flex-col items-center justify-center">
        <img src={breakIcon} alt="Alarm Icon" className="mb-4 mt-20" />

        <section className="flex h-1/2 flex-col items-center justify-center">
          <p className="my-8 text-4xl font-bold text-white max-[320px]:text-lg">
            {text.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 3,
                }}
              >
                {char}
              </motion.span>
            ))}
          </p>

          <p className="z-10 mb-20 text-2xl text-gray-500">
            {formatTime(Math.floor(breakTime / 60))}:
            {formatTime(breakTime % 60)}
          </p>
        </section>
      </div>

      <motion.button
        className="z-30 rounded-[5px] border border-gray-500 p-[10px] font-bold text-gray-500 hover:border-2 hover:border-red-300 hover:text-red-500 max-[320px]:text-lg"
        whileHover={{ scale: 0.95 }}
        onClick={handleRestart}
      >
        NO PAUSE, GO NOW
      </motion.button>
    </section>
  );
};

export default Pause;
