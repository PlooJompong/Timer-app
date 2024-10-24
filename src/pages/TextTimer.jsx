import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const TextTimer = ({ seconds, isRunning, handleStart, handleStop }) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const timeToText = (time) => {
    const numberToText = {
      0: "Noll",
      1: "En",
      2: "Två",
      3: "Tre",
      4: "Fyra",
      5: "Fem",
      6: "Sex",
      7: "Sju",
      8: "Åtta",
      9: "Nio",
      10: "Tio",
      11: "Elva",
      12: "Tolv",
      13: "Tretton",
      14: "Fjorton",
      15: "Femton",
      16: "Sexton",
      17: "Sjutton",
      18: "Arton",
      19: "Nitton",
      20: "Tjugo",
      21: "Tjugoett",
      22: "Tjugotvå",
      23: "Tjugotre",
      24: "Tjugofyra",
      25: "Tjugofem",
      26: "Tjugosex",
      27: "Tjugosju",
      28: "Tjugoåtta",
      29: "Tjugonio",
      30: "Trettio",
      31: "Trettioett",
      32: "Trettiotvå",
      33: "Trettiotre",
      34: "Trettiofyra",
      35: "Trettiofem",
      36: "Trettiosex",
      37: "Trettiosju",
      38: "Trettioåtta",
      39: "Trettionio",
      40: "Fyrtio",
      41: "Fyrtioett",
      42: "Fyrtiotvå",
      43: "Fyrtiotre",
      44: "Fyrtiofyra",
      45: "Fyrtiofem",
      46: "Fyrtiosex",
      47: "Fyrtiosju",
      48: "Fyrtioåtta",
      49: "Fyrtionio",
      50: "Femtio",
      51: "Femtioett",
      52: "Femtiotvå",
      53: "Femtiotre",
      54: "Femtiofyra",
      55: "Femtiofem",
      56: "Femtiosex",
      57: "Femiosju",
      58: "Femioåtta",
      59: "Femtionio",
    };
    return numberToText[time];
  };

  const displayTime = () => {
    if (minutes === 1 && remainingSeconds === 0) {
      return "EN MINUT KVAR";
    } else if (minutes === 1 && remainingSeconds === 1) {
      return "EN MINUT OCH EN SEKUND KVAR";
    } else if (minutes === 1) {
      return `EN MINUT OCH ${timeToText(remainingSeconds).toUpperCase()} SEKUNDER KVAR`;
    } else if (minutes > 1 && remainingSeconds === 0) {
      return `${timeToText(minutes).toUpperCase()} MINUTER KVAR`;
    } else if (minutes > 1 && remainingSeconds === 1) {
      return `${timeToText(minutes).toUpperCase()} MINUTER OCH EN SEKUND KVAR`;
    } else if (minutes > 1) {
      return `${timeToText(minutes).toUpperCase()} MINUTER OCH ${timeToText(remainingSeconds).toUpperCase()} SEKUNDER KVAR`;
    } else if (remainingSeconds === 1) {
      return "EN SEKUND KVAR";
    } else if (minutes === 0 && remainingSeconds === 0) {
      return "TIDEN ÄR SLUT!";
    } else {
      return `${timeToText(remainingSeconds).toUpperCase()} SEKUNDER KVAR`;
    }
  };

  return (
    <>
      <Navbar />
      <section className="flex h-screen w-4/5 max-w-screen-xl flex-col items-center justify-center text-pretty">
        <div className="flex h-1/2 w-full flex-col items-center justify-center">
          <h1 className="my-auto text-center text-3xl font-bold">
            {displayTime()}
            {/* {minutes === 0
              ? `${timeToText(remainingSeconds).toUpperCase()} SEKUNDER KVAR`
              : `${timeToText(minutes).toUpperCase()} MINUTER OCH ${timeToText(remainingSeconds).toUpperCase()} SEKUNDER KVAR`} */}
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
          <Link to={"/text"}>
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

export default TextTimer;
