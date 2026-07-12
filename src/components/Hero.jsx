import ProfilePhoto from "../assets/ProfilePhoto.jpg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Hero() {
  const [showRole, setShowRole] = useState(false);

  return (
    <AnimatedSection className="w-full py-30" id="home">
      <div className="flex justify-center items-center gap-16">
        <div className="flex flex-col">
          <h1 className="text-white font-bold text-6xl">Hi! My Name Is</h1>
          <hr className="border-white/50" />
          <h1 className="text-blue-400 font-bold text-5xl">Aditya Ammar</h1>
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
            className="text-gray-300 text-sm font-semibold"
          >
            Click Here!
          </motion.h1>

          <img
            src={ProfilePhoto}
            alt="Profile Photo"
            onClick={() => setShowRole((prev) => !prev)}
            className="w-70 rounded-full cursor-pointer
                   hover:border-4 border-blue-400/50
                   hover:shadow-white/5 hover:shadow-xl transition-all"
          />

          <div className="h-10 mt-6 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {showRole && (
                <motion.h1
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl text-white font-semibold text-center"
                >
                  Junior Developer
                  <hr className="border-transparent" />
                  <span className="font-medium text-sm text-white/65">
                    Frontend & Backend
                  </span>
                </motion.h1>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
