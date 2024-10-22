import { motion } from "framer-motion";
import alarmIcon from "../assets/alarmIcon.svg";

const Alarm = ({ onClick }) => {
  const text = "Times up!".split("");

  const bellShake = {
    initial: { rotate: 0 },
    animate: { rotate: [0, 20, -20, 20, -20, 0] },
  };

  const backgroundAnimation = {
    initial: { backgroundColor: "#222" },
    animate: {
      scale: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      backgroundColor: ["#222", "#333", "#444", "#333", "#222"],
    },
  };

  return (
    <>
      <motion.div
        className="absolute aspect-square w-[90vw] rounded-full"
        variants={backgroundAnimation}
        initial="initial"
        animate="animate"
        transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
      ></motion.div>

      <motion.div
        className="absolute aspect-square w-[45vw] rounded-full"
        variants={backgroundAnimation}
        initial="initial"
        animate="animate"
        transition={{ repeat: Infinity, duration: 2, delay: 1.5 }}
      ></motion.div>

      <div className="my-8 flex flex-col items-center justify-center">
        <motion.img
          src={alarmIcon}
          alt="Alarm Icon"
          className="mt-20"
          variants={bellShake}
          initial="initial"
          animate="animate"
          transition={{ repeat: Infinity, duration: 2 }}
        ></motion.img>

        <p className="mb-20 mt-8 text-4xl font-bold text-white">
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
      </div>

      <motion.button
        className="z-10 rounded-[5px] border border-white p-[10px] font-bold text-white hover:border-2 hover:border-red-300 hover:text-red-500 max-[320px]:text-lg"
        whileHover={{ scale: 0.95 }}
        onClick={onClick}
      >
        SET NEW TIMER
      </motion.button>
    </>
  );
};

export default Alarm;
