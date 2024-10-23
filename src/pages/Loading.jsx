import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { motion } from "framer-motion";
const Loading = () => {
  const text = "For all your timing needs".split("");

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-custom-gray">
      <Link to="/timer" className="animate-pulse">
        <img src={logo} alt="Logo" />
      </Link>
      <h1 className="text-sm text-white">
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
      </h1>
    </div>
  );
};

export default Loading;
