import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import alarmIcon from "../assets/alarmIcon.svg";

const Alarm = ({ handleStop }) => {
  const text = "Times up!".split("");

  const bellShake = {
    initial: { rotate: 0 },
    animate: {
      rotate: [0, 20, -20, 20, -20, 0],
    },
  };

  const backgroundAnimation = {
    initial: { backgroundColor: "#222" },
    animate: {
      scale: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      backgroundColor: ["#222", "#333", "#444", "#333", "#222"],
    },
  };

  return (
    <section className="relative mx-auto flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-custom-gray tracking-widest">
      <motion.div
        className="absolute z-10 aspect-square w-[100vw] rounded-full max-[320px]:w-[150vw]"
        variants={backgroundAnimation}
        initial="initial"
        animate="animate"
        transition={{
          repeat: Infinity,
          duration: 1.5,
          delay: 0.5,
        }}
      />

      <motion.div
        className="absolute z-20 aspect-square w-[50vw] rounded-full max-[320px]:w-[100vw]"
        variants={backgroundAnimation}
        initial="initial"
        animate="animate"
        transition={{
          repeat: Infinity,
          duration: 1.5,
          delay: 1,
        }}
      />

      <div className="relative z-30 flex h-1/2 w-4/5 flex-col items-center justify-center">
        <motion.img
          src={alarmIcon}
          alt="Alarm Icon"
          className="mt-20"
          variants={bellShake}
          initial="initial"
          animate="animate"
          transition={{ repeat: Infinity, duration: 2 }}
        />

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
                repeatDelay: 2.5,
              }}
            >
              {char}
            </motion.span>
          ))}
        </p>
      </div>

      <Link to="/timer">
        <motion.button
          className="relative z-30 rounded-[5px] border border-white p-[10px] font-bold text-white hover:border-2 hover:border-red-300 hover:text-red-500 max-[320px]:text-lg"
          whileHover={{ scale: 0.95 }}
          onClick={handleStop}
        >
          SET NEW TIMER
        </motion.button>
      </Link>
    </section>
  );
};

export default Alarm;
