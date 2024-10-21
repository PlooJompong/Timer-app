import { motion } from "framer-motion";
import alarmIcon from "../assets/alarmIcon.svg";

const Alarm = () => {
  return (
    <motion.div className="flex flex-col items-center justify-center">
      <motion.img src={alarmIcon} alt="Alarm Icon"></motion.img>
      <motion.span className="mb-40 text-4xl text-white">Times up!</motion.span>
    </motion.div>
  );
};

export default Alarm;
