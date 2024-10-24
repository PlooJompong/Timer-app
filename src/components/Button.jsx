import { motion } from "framer-motion";

const Button = ({ handleStart, handleStop, handleRestart, children }) => {
  return <motion.button>{children}</motion.button>;
};

export default Button;
