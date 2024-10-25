import { motion } from "framer-motion";
import breakIcon from "../assets/breakIcon.svg";

const Pause = ({ breakTime, handleRestart }) => {
  const text = "Pause & breath".split("");

  const minutes = Math.floor(breakTime / 60);
  const seconds = breakTime % 60;

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
    <>
      <section className="relative mx-auto flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-custom-gray tracking-widest">
        <motion.div
          className="absolute z-10 aspect-square w-[100vw] rounded-full max-[320px]:w-[150vw]"
          variants={backgroundAnimation}
          initial="initial"
          animate="animate"
          transition={{
            repeat: Infinity,
            duration: 5,
            delay: 0.5,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute z-20 aspect-square w-[50vw] rounded-full max-[320px]:w-[100vw]"
          variants={backgroundAnimation}
          initial="initial"
          animate="animate"
          transition={{
            repeat: Infinity,
            duration: 5,
            delay: 1,
            ease: "easeInOut",
          }}
        />

        <div className="z-30 mt-28 flex w-4/5 flex-col items-center justify-center">
          <img
            src={breakIcon}
            alt="Alarm Icon"
            className="my-auto animate-pulse"
          />

          <div className="mb-20 mt-8 flex flex-col items-center justify-center">
            <p className="text-4xl font-bold text-white max-[320px]:text-lg">
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

            <p className="z-10 mt-8 text-2xl text-gray-500">
              {minutes > 0 ? `${minutes}:${formatTime(seconds)}` : `${seconds}`}
            </p>
          </div>
        </div>

        <motion.button
          className="z-30 rounded-[5px] border border-gray-500 p-[10px] font-bold text-gray-500 hover:border-2 hover:border-red-300 hover:text-red-500 max-[320px]:text-lg"
          whileHover={{ scale: 0.95 }}
          onClick={handleRestart}
        >
          NO PAUSE, GO NOW
        </motion.button>
      </section>
    </>
  );
};

export default Pause;
