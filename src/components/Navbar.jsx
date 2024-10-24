import { useState } from "react";
import { Link } from "react-router-dom";

import navIconBlack from "../assets/navIconBlack.svg";
import navIconWhite from "../assets/navIconWhite.svg";

import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const backgroundAnimation = {
    initial: { opacity: 0, scale: 1 },
    animate: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 1,
    },
  };

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="relative z-30 mx-auto flex w-[90vw] max-w-screen-xl items-center justify-between pt-4">
        <button onClick={toggleOpen}>
          <img src={isOpen ? navIconWhite : navIconBlack} alt="Icon" />
        </button>
        {!isOpen && <p className="text-custom-gray">interval</p>}
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="bg"
            variants={backgroundAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-custom-gray"
            transition={{ duration: 0.1 }}
          />
        )}
      </AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-20 flex flex-col items-center justify-center gap-8 text-4xl font-bold text-white max-[320px]:text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            to="/analog"
            className="cursor-pointer transition-all hover:scale-110"
            onClick={toggleOpen}
          >
            ANALOG TIMER
          </Link>

          <Link
            to="/digital"
            className="cursor-pointer transition-all hover:scale-110"
            onClick={toggleOpen}
          >
            DIGITAL TIMER
          </Link>

          <Link
            to="/text"
            className="cursor-pointer transition-all hover:scale-110"
            onClick={toggleOpen}
          >
            TEXT TIMER
          </Link>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
