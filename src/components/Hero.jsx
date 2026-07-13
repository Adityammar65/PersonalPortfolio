import ProfilePhoto from "../assets/ProfilePhoto.jpg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Hero() {
  const [showRole, setShowRole] = useState(false);

  return (
    <AnimatedSection className="w-full px-6 py-16 md:py-24 lg:py-30" id="home">
      <div
        className="
          flex
          flex-col-reverse
          md:flex-col
          lg:flex-row
          items-center
          justify-center
          gap-10
          md:gap-12
          lg:gap-16
        "
      >
        <div className="flex flex-col text-center lg:text-left">
          <h1
            className="
              text-white
              font-bold
              text-4xl
              sm:text-5xl
              md:text-6xl
            "
          >
            Hi! My Name Is
          </h1>

          <hr className="border-white/50 my-2" />

          <h1
            className="
              text-blue-400
              font-bold
              text-3xl
              sm:text-4xl
              md:text-5xl
            "
          >
            Aditya Ammar
          </h1>
        </div>

        <div className="flex flex-col items-center">
          <motion.h1
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-gray-300 text-sm font-semibold mb-2"
          >
            Click Here!
          </motion.h1>

          <img
            src={ProfilePhoto}
            alt="Profile Photo"
            onClick={() => setShowRole((prev) => !prev)}
            className="
              w-48
              sm:w-56
              md:w-64
              lg:w-72
              rounded-full
              cursor-pointer
              hover:border-4
              border-blue-400/50
              hover:shadow-white/5
              hover:shadow-xl
              transition-all
            "
          />

          <div className="h-12 mt-6 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {showRole && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <h1 className="text-xl sm:text-2xl text-white font-semibold">
                    Junior Developer
                  </h1>

                  <span className="text-sm text-white/65 font-medium">
                    Frontend & Backend
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
