import Navbar from "../components/Navbar.jsx";
import { motion } from "framer-motion";

const TextTimer = ({ seconds, isRunning, handleStop }) => {
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

  return (
    <>
      <Navbar />
      <section className="flex h-1/2 flex-col items-center justify-center text-balance">
        <h1 className="my-auto text-center text-3xl font-bold">
          {minutes === 0
            ? `${timeToText(remainingSeconds).toUpperCase()} SEKUNDER KVAR`
            : `${timeToText(minutes).toUpperCase()} MINUTER OCH ${timeToText(remainingSeconds).toUpperCase()} SEKUNDER KVAR`}
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

export default TextTimer;
